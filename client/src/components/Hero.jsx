import React from "react";
import Carousels from "./Carousels.jsx";
import FeatPost from "./FeatPost.jsx";
import Tags from "./Tags.jsx";
import HomePosts from "./HomePosts.jsx";

const Hero = () => {
  return (
    <div className="border-1 bg-[#f5f5f5]">
      <Carousels />
      <HomePosts />
      <FeatPost />
      <Tags />
    </div>
  );
};

export default Hero;
