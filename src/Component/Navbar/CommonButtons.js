import React from "react";
import { Link } from "react-router-dom";
import Cart from "../Images/Cart.png";
import { useSelector } from "react-redux";

const SimilarButtons = () => {
  const state = useSelector((state) => state.addItem);
  console.log(state);
  return (
    <>
      <nav>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/product">
          <button>Product</button>
        </Link>
        <Link to="/cart">
          <div className="cart-btn">
            <img src={Cart} alt="no img " />
            <span className="cart-icon-css">{state.length}</span>
          </div>
        </Link>
      </nav>
    </>
  );
};

export default SimilarButtons;
