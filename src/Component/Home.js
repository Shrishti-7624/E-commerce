import React from "react";
import Navbar from "./Navbar/Navbar";
import BodyGallery from "./HomePageDecor/BodyGallery";
import Banner from "./HomePageDecor/Banner";

import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <BodyGallery />
      <Footer />
    </div>
  );
};

export default Home;
