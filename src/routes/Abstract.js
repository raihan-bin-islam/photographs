import React from "react";
import ImageSlider from "../components/ImageSlider";
import { abstract } from "../assets/array/imageArray";

const Abstract = () => {
  return <ImageSlider imageData={abstract} heading={"Abstract"} id={"abstract"} />;
};

export default Abstract;
