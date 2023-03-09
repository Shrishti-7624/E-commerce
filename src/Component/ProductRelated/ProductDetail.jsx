import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ShowProductDetail from "./ShowProductDetail";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await res.json());
    };
    getProduct();
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <div className="container py-4">
          <div className="row py-5">
            {product && <ShowProductDetail product={product} />}
            <ToastContainer />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
