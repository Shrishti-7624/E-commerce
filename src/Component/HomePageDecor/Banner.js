import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import shop1 from "../Images/Banners/shop1.jpg";
import shop7 from "../Images/Banners/shop7.jpg";
import shop8 from "../Images/Banners/shop8.jpg";
import shop9 from "../Images/Banners/shop9.jpg";
import shop10 from "../Images/Banners/shop10.jpg";
import shop11 from "../Images/Banners/shop11.gif";
const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={shop11} alt="Second slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={shop1} alt="Second slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={shop10} alt="Second slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={shop9} alt="Second slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={shop8} alt="Second slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={shop7} alt="Second slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
