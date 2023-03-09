import React, { useState } from "react";
import { Link } from "react-router-dom";
const ShowProducts = (props) => {
  const productData = props.productData;
  const [filter, setFilter] = useState(productData);
  const filterProduct = (e) => {
    const updatedList = productData.filter((x) => x.category === e);
    setFilter(updatedList);
  };
  return (
    <>
      <div className="row m-2 mb-4">
        <h3 style={{ color: "teal", fontFamily: "cursive" }}>
          Filter By Category
        </h3>
        <div className="col-3">
          <div className="button">
            <button
              className="btn btn-outline-warning mb-3"
              onClick={() => setFilter(productData)}
            >
              all
            </button>
            <br />
            <button
              className="btn btn-outline-warning mb-3"
              onClick={() => filterProduct("men's clothing")}
            >
              Men's Clothing
            </button>
            <br />
            <button
              className="btn btn-outline-warning mb-3"
              onClick={() => filterProduct("women's clothing")}
            >
              Women's Clothing
            </button>
            <br />
            <button
              className="btn btn-outline-warning mb-3"
              onClick={() => filterProduct("jewelery")}
            >
              Jewelery
            </button>
            <br />
            <button
              className="btn btn-outline-warning mb-3"
              onClick={() => filterProduct("electronics")}
            >
              Electronics
            </button>
            <br />
            <br />
          </div>
        </div>
        <div className="col-9">
          <div className="row ">
            {filter.map((product) => {
              return (
                <>
                  <div
                    className="card h-70 text-center m-3 p-4"
                    key={product.id}
                    style={{ width: "18rem" }}
                  >
                    <img
                      src={product.image}
                      className="card-img-top"
                      alt={product.title}
                      height="250px"
                    />
                    <div className="card-body">
                      <h5 className="card-title mb-0">
                        {product.title.substring(0, 12)}
                      </h5>
                      <p className="card-text fw-bold">${product.price}</p>
                      <Link
                        to={`/productdetail/${product.id}`}
                        className="btn btn-outline-dark"
                      >
                        View Product
                      </Link>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default ShowProducts;
