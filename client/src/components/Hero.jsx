import React from "react";
import Carousels from "./Carousels.jsx";
import FeatPost from "./FeatPost.jsx";
import Tags from "./Tags.jsx";

const Hero = () => {
  return (
    <div className="border-1">
      <Carousels />
      <FeatPost />
      <Tags />
    </div>
  );
};

export default Hero;
