import React from "react";

const Blog = ({ lang, desc, img, dateTime }) => {
  return (
    <div className="w-full border-2 border-red-500 flex items-center justify-center flex-col text-left">
      <img src={img} alt="image" className="w-full"/>
      <h4>{lang}</h4>
      <p>{desc}</p>
      <p>{dateTime}</p>
    </div>
  );
};

export default Blog;
