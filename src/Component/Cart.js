import React from "react";
import Navbar from "./Navbar/Navbar";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { delItem } from "../redux/action";
import { Link } from "react-router-dom";
import "../Component/Cart.css";

const Cart = () => {
  const state = useSelector((state) => state.addItem);
  const dispatch = useDispatch();

  const removeItemFromCart = (item) => {
    dispatch(delItem(item));
  };
  const cartItems = (cartItem) => {
    return (
      <>
        <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
          <div className="container py-4">
            <button
              onClick={() => removeItemFromCart(cartItem)}
              className="btn-close float-end"
              aria-label="close"
            ></button>
            <div className="row justify-content-center">
              <div className="col-md-4">
                <img
                  src={cartItem.image}
                  alt={cartItem.title}
                  width="180px"
                  height="200px"
                />
              </div>
              <div className="col-md-4">
                <h3>{cartItem.title}</h3>

                <p className="lead fw-bold ">${cartItem.price}</p>
                <span>
                  <button className="btn btn-success">+</button>
                </span>
                <button className="btn btn-info mx-auto w-15"></button>
                <span>
                  <button className="btn btn-success w-20">-</button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  const emptyCart = () => {
    return (
      <>
        <div className="px-4 my-5 bg-light rounded-3 py-5">
          <div className="empty_cart_container">
            <div className="center">
              <img
                className="emptyCart"
                src="https://runrun.ae/front-assets/images/empty_cart.png"
                alt="img"
              />
            </div>
            <div className="your_cart">
              <h3>Your cart is Empty</h3>
            </div>
          </div>
        </div>
        <div className="col-md-12 text-center">
          <Link to="/product" className="btn btn-outline-success mb-5 w-19 ">
            Shop Now
          </Link>
        </div>
      </>
    );
  };
  const checkoutButton = () => {
    return (
      <div className="container">
        <div className="row">
          <Link
            to="/checkout"
            className="btn btn-outline-danger mb-5 w-25 mx-auto"
          >
            Proceed To Checkout
          </Link>
          <Link
            to="/product"
            className="btn btn-outline-danger mb-5 w-25 mx-auto"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <h5 className="shopping_cart_heading">Shopping Cart</h5>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && checkoutButton()}
    </>
  );
};

export default Cart;
