import React from "react";
import Navbar from "../Navbar/Navbar";
import { useSelector } from "react-redux";
import CheckoutForm from "./CheckoutForm";

const Checkout = () => {
  const state = useSelector((state) => state.addItem);
  var total = 0;
  const finalItemForCheckout = (item) => {
    total = total + item.price;
    return (
      <li className="list-group-item d-flex justify-content-between 1h-sm">
        <div>
          <h6 className="my-0">{item.title}</h6>
        </div>
        <span className="text-muted">{item.price}</span>
      </li>
    );
  };

  return (
    <>
      <Navbar />
      <div className="container my-5 ">
        <div className="row g-5">
          <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-primary">Your cart</span>
              <span className="badge bg-primary rounded-pill">
                {state.length}
              </span>
            </h4>
            <ul className="list-group mb-3">
              {state.map(finalItemForCheckout)}
              <li className="list-group-item d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong>{total}</strong>
              </li>
            </ul>

            <form className="card p-2">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Promo code"
                />
                <button type="submit" className="btn btn-secondary">
                  Redeem
                </button>
              </div>
            </form>
          </div>
          <CheckoutForm />
        </div>
      </div>
    </>
  );
};

export default Checkout;
