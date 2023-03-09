import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Config/FirebaseConfig";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);
  const [successMsg, setSuccessMsg] = useState("");

  const navigate = useNavigate();

  const loginform = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("successful");
        setSuccessMsg(
          "Logged in succesfully , You will be redirected to Home page"
        );
        setTimeout(() => {
          setSuccessMsg("");
          navigate("/home");
        }, 1000);
      })
      .catch((error) => {
        console.error(error);
        setErrorMsg(error.code);
        console.log(errorMsg);
      });
  };

  return (
    <>
      <div>
        <Navbar />
        <div className="signup-container">
          <form className="signup-form">
            <p>LogIn</p>
            {successMsg && (
              <>
                <div className="success-msg">{successMsg} </div>
              </>
            )}

            {errorMsg && (
              <>
                <div className="error-msg">{errorMsg}</div>
              </>
            )}

            <label>Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter  your Email"
            />
            <label>password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter Your  Password"
            />
            <button onClick={loginform} type="submit">
              Sign In
            </button>
            <div>
              <span>Don't have Account?</span>
              <Link to="/signup">Signup</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
