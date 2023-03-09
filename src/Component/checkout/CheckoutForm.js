import React from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Config/FirebaseConfig";
import { useFormik } from "formik";
import { checkOutSchema } from "./Schema";
import { useSelector } from "react-redux";

const initialValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  address: "",
  country: "",
  state: "",
  zip: "",
};
const CheckoutForm = () => {
  const [user] = useAuthState(auth);
  const state = useSelector((state) => state.addItem);
  console.log(state);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: checkOutSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });

  const successAlert = (item) => {
    Swal.fire({
      title: "Yayyy!",
      text: "Order Placed Successfully.",
      icon: "success",
    });
    state.length = 0;

    console.log("after checkout cart empty");
  };
  const loggedUser = user?.email;
  return (
    <>
      <div className="col-md-7 col-lg-8">
        <h4 className="mb-3">Billing address</h4>
        <form
          className="needs-validation"
          novalidate=""
          method="PATCH"
          onSubmit={handleSubmit}
        >
          <div className="row g-3">
            <div className="col-sm-6">
              <label for="firstName" className="form-label">
                First name
              </label>
              <input
                type="text"
                className="form-control"
                id="firstname"
                name="firstname"
                placeholder=""
                value={values.firstname}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {errors.firstname && touched.firstname ? (
                <p style={{ fontSize: "19px" }} className="form-error">
                  {errors.firstname}
                </p>
              ) : null}
              <div className="invalid-feedback">
                Valid first name is required.
              </div>
            </div>

            <div className="col-sm-6">
              <label for="lastName" className="form-label">
                Last name
              </label>
              <input
                type="text"
                className="form-control"
                id="lastname"
                name="lastname"
                placeholder=""
                value={values.lastname}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {errors.lastname && touched.lastname ? (
                <p style={{ fontSize: "19px" }} className="form-error">
                  {errors.lastname}
                </p>
              ) : null}
              <div className="invalid-feedback">
                Valid last name is required.
              </div>
            </div>

            <div className="col-12">
              <label for="username" className="form-label">
                Username
              </label>
              <div className="input-group has-validation">
                <span className="input-group-text">@</span>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Username"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                />
                {errors.username && touched.username ? (
                  <p style={{ fontSize: "19px" }} className="form-error">
                    {errors.username}
                  </p>
                ) : null}
                <div className="invalid-feedback">
                  Your username is required.
                </div>
              </div>
            </div>

            <div className="col-12">
              <label for="email" className="form-label">
                Email <span className="text-muted">(Optional)</span>
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="you@example.com"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {errors.email && touched.email ? (
                <p style={{ fontSize: "19px" }} className="form-error">
                  {errors.email}
                </p>
              ) : null}
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div className="col-12">
              <label for="address" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="1234 Main St"
                name="address"
                value={values.address}
                onChange={handleChange}
                onBlur={handleBlur}
                required=""
              />
              {errors.address && touched.address ? (
                <p style={{ fontSize: "19px" }} className="form-error">
                  {errors.address}
                </p>
              ) : null}
            </div>
            <div className="col-md-5">
              <label for="country" className="form-label">
                Country
              </label>
              <input
                className="form-select"
                type="text"
                id="country"
                required=""
                name="country"
                value={values.country}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.country && touched.country ? (
                <p style={{ fontSize: "19px" }} className="form-error">
                  {errors.country}
                </p>
              ) : null}

              <div className="invalid-feedback">
                Please select a valid country.
              </div>
            </div>

            <div className="col-md-4">
              <label for="state" className="form-label">
                State
              </label>
              <input
                className="form-select"
                type="text"
                id="state"
                required=""
                name="state"
                value={values.state}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.state && touched.state ? (
                <p style={{ fontSize: "19px" }} className="form-error">
                  {errors.state}
                </p>
              ) : null}
              <div className="invalid-feedback">
                Please provide a valid state.
              </div>
            </div>

            <div className="col-md-3">
              <label for="zip" className="form-label">
                Zip
              </label>
              <input
                type="text"
                className="form-control"
                id="zip"
                placeholder=""
                name="zip"
                value={values.zip}
                onChange={handleChange}
                onBlur={handleBlur}
                required=""
              />
              {errors.zip && touched.zip ? (
                <p style={{ fontSize: "19px" }} className="form-error">
                  {errors.zip}
                </p>
              ) : null}
              <div className="invalid-feedback">Zip code required.</div>
            </div>
          </div>
          <hr className="my-4" />
          <Link to="/home">
            {loggedUser ? (
              <button
                onClick={successAlert}
                className="w-100 btn btn-warning btn-lg"
                type="submit"
                disabled={!initialValues}
              >
                Continue to checkout
              </button>
            ) : (
              <button className="w-100 btn btn-warning btn-lg" disabled>
                Continue to Checkout
              </button>
            )}
          </Link>
        </form>
      </div>
    </>
  );
};

export default CheckoutForm;
