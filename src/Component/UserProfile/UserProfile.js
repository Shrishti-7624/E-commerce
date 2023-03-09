import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { getAuth } from "firebase/auth";
import "./UserProfile.css";

const UserProfile = () => {
  const auth = getAuth();
  const [loggedUser, setLoggedUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((_auth) => {
      if (_auth) {
        fetch(
          "https://react-firebase-91120-default-rtdb.firebaseio.com/usersdata/" +
            _auth.uid +
            ".json",
          {
            method: "GET",
          }
        )
          .then((response) => response.json())
          .then((data) => {
            setLoggedUser(data);
          });
      }
    });
  }, [auth]);

  return (
    <div>
      <Navbar />
      <div className="userprofile-outerconatiner">
        {loggedUser ? (
          <div className="userprofile">
            <p className="p">Your Account Details</p>
            <div className="data-row">
              <span>Your Name</span>
              <span>{loggedUser.name}</span>
            </div>
            <div className="data-row">
              <span>Your Email</span>
              <span>{loggedUser.email}</span>
            </div>
            <div className="data-row">
              <span>Your Mobile Number</span>
              <span>{loggedUser.number}</span>
            </div>
          </div>
        ) : (
          <div>You are Not Logged In.</div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
