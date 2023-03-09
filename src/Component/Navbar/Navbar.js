import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import Profile from "../Images/profile.png";
import Logo from "../Images/logo.png";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Config/FirebaseConfig";
import { useSelector } from "react-redux";
import CommonButtons from "./CommonButtons";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const state = useSelector((state) => state.addItem);
  console.log(state);

  const navigate = useNavigate();
  const loggedUser = user?.email;
  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3>Your cart is Empty</h3>
          </div>
        </div>
      </div>
    );
  };
  const HandleLogout = () => {
    state.length === 0 && emptyCart();
    state.length = 0;
    auth.signOut().then(() => {
      navigate("/login");
    });
  };
  return (
    <>
      <div className="navbar">
        <div className="LeftContainer">
          <img src={Logo} alt="logo" />
          <h5>Let's Shop</h5>
        </div>
        <div className="RightContainer">
          {!loggedUser && (
            <nav>
              <CommonButtons />
              <Link to="/signup">
                <button>Signup</button>
              </Link>
              <Link to="/login">
                <button>Login</button>
              </Link>
            </nav>
          )}
          {loggedUser && (
            <nav>
              <CommonButtons />
              <Link to="/userprofile">
                <img src={Profile} alt=" no img" className="profile-icon" />
              </Link>
              <button className="logout-btn" onClick={HandleLogout}>
                Log Out
              </button>
            </nav>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
