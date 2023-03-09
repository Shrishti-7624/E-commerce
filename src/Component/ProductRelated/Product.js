import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Navbar/Navbar";
import "./Product.css";
import ShowProducts from "./ShowProducts";

const Product = () => {
  const [productData, setProductData] = useState([]);
  const [filter, setFilter] = useState(productData);

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      if (true) {
        setProductData(await res.clone().json());
        setFilter(await res.json());
        console.log(filter);
      }
    };
    getProducts();
  }, []);
  return (
    <>
      <Navbar />
      <div className="my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-warning text-center">
              Latest Products
            </h1>
            <hr />
          </div>
          <div className="row-justify-content-center">
            <ShowProducts productData={productData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
