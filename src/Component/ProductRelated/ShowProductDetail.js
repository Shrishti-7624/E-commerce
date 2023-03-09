import React, { useState } from "react";
import { Link } from "react-router-dom";
import { addItem } from "../../redux/action/index";
import { delItem } from "../../redux/action/index";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const ShowProductDetail = (props) => {
  const product = props.product;
  const [cartBtn, setCartBtn] = useState("Add To Cart");
  const disptach = useDispatch();

  const addProductToCart = (product) => {
    if (cartBtn === "Add To Cart") {
      disptach(addItem(product));
      showToastMessage();
      setCartBtn("Remove From Cart");
    } else {
      disptach(delItem(product));
      setCartBtn("Add To Cart");
    }
  };
  const showToastMessage = () => {
    toast.success("Added to Cart Successfully!", {
      position: toast.POSITION.TOP_RIGHT,
    });
    console.log("toast");
  };

  return (
    <>
      <div className="col-md">
        <img
          src={product.image}
          alt={product.title}
          height="400px"
          width="400px"
        />
      </div>
      <div className="col-md-6">
        <h4 className="text-uppercase text black-50">{product.category}</h4>
        <h1 className="dispaly-5">{product.title}</h1>
        <p className="lead">Rating {product.rating && product.rate}*</p>
        <h3 className="display-6 fw-bold my-4">{product.price}</h3>
        <p className="lead">{product.description}</p>
        <button
          className="btn btn-outline-warning px-4 py-2"
          onClick={() => addProductToCart(product)}
        >
          {cartBtn}
        </button>
        <Link to="">
          <button className="btn btn-outline-warning ms-2 px-3 py-2 ">
            Go to Cart
          </button>
        </Link>
      </div>
    </>
  );
};

export default ShowProductDetail;
