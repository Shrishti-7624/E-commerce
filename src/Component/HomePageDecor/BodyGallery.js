import React from "react";
import { Link } from "react-router-dom";

const BodyGallery = () => {
  return (
    <>
      <div className="container px-4 py-5" id="custom-cards">
        <h2 className="pb-2 border-bottom">Products in the List</h2>

        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
       
          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{
                backgroundImage:
                  "url(" +
                  "https://cdn.pixabay.com/photo/2016/04/19/13/39/store-1338629_960_720.jpg" +
                  ")",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <Link to="/product">
                <h3 
                className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  Clothings
                </h3>
                </Link>
              </div>
            </div>
          </div>
        

          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{
                backgroundImage:
                  "url(" +
                  "https://cdn.pixabay.com/photo/2019/12/27/01/49/samsung-4721550_960_720.jpg" +
                  ")",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  Electronics
                </h3>
              </div>
            </div>
          </div>

          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{
                backgroundImage:
                  "url(" +
                  "https://cdn.pixabay.com/photo/2016/01/24/21/54/jewelry-1159685__340.jpg" +
                  ")",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  Jewellery
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BodyGallery;
