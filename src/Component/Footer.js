import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top bg-dark p-5">
        <p className="col-md-4 mb-0 text-muted">© 2022 Let's Shop, Inc</p>

        <ul className="nav col-md-4 justify-content-end ">
          <li className="nav-item m-2 ">
            <Link to="/">Home </Link>
          </li>
          <li className="nav-item m-2">
            <Link to="/product">Product</Link>
          </li>
          <li className="nav-item m-2">
            <Link to="/signup">Signup</Link>
          </li>
          <li className="nav-item m-2">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
