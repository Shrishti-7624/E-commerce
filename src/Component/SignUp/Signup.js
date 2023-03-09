import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Config/FirebaseConfig";
import "./Signup.css";
import { useFormik } from "formik";
import { signUpSchema } from "./Schema";

const initialValues = {
  name: "",
  number: "",
  email: "",
  password: "",
};
const Signup = () => {
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
        submitForm();
      },
    });
  const navigate = useNavigate();
  const submitForm = async () => {
    console.log(values);
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((user) => {
        console.table(user._tokenResponse.localId);
        navigate("./home");
        storeUserData(user._tokenResponse.localId);
      })
      .catch((error) => {
        console.log(error);
        setErrorMsg(error.code);
      });
    async function storeUserData(id) {
      const initialcartvalue = 0;
      if (values.name && values.email && values.number) {
        const res = await fetch(
          "https://react-firebase-91120-default-rtdb.firebaseio.com/usersdata/" +
            id +
            ".json",
          {
            method: "PATCH",
            body: JSON.stringify({
              name: values.name,
              number: values.number,
              email: values.email,
              initialcartvalue: initialcartvalue,
            }),
          }
        );

        if (res) {
          setSuccessMsg(
            "New User added Successfully , You will be redirected to Login page"
          );
          setTimeout(() => {
            setSuccessMsg("");
            navigate("/home");
          }, 2000);
        }
      }
    }
  };

  return (
    <div>
      <Navbar />
      <div className="signup-container">
        <form className="signup-form" method="PATCH" onSubmit={handleSubmit}>
          <p>Create Account</p>
          {successMsg && <div className="success-msg">{successMsg} </div>}
          {errorMsg && (
            <>
              <div className="error-msg">{errorMsg}</div>
            </>
          )}
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter first and last name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && touched.name ? (
            <p style={{ fontSize: "19px" }} className="form-error">
              {errors.name}
            </p>
          ) : null}
          <label>Mobile Number</label>
          <input
            type="number"
            name="number"
            placeholder="Mobile number"
            value={values.number}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.number && touched.number ? (
            <p style={{ fontSize: "19px" }} className="form-error">
              {errors.number}
            </p>
          ) : null}
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter  your Email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email ? (
            <p style={{ fontSize: "19px" }} className="form-error">
              {errors.email}
            </p>
          ) : null}
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Your  Password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password ? (
            <p style={{ fontSize: "19px" }} className="form-error">
              {errors.password}
            </p>
          ) : null}
          <button type="submit">Sign Up</button>
          <div>
            <span>Already have Account?</span>
            <Link to="/login">LogIn</Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Signup;
