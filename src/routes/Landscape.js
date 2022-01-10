import React from "react";
import ImageSlider from "../components/ImageSlider";
import { landscape } from "../assets/array/imageArray";
const Landscape = () => {
  return <ImageSlider imageData={landscape} heading={"Landscape"} id={"landscape"} />;
};

export default Landscape;
