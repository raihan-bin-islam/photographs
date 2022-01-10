import React from "react";
import { Nav } from "../components/Nav";
import Banner from "../components/Banner";
import { bannerImg } from "../assets/array/imageArray.js";
const Home = () => {
  return (
    <div id="home">
      <Nav />
      <Banner imgData={bannerImg} />
    </div>
  );
};

export default Home;
