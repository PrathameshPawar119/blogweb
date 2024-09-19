import React, { useContext } from "react";
import Carousel from "react-bootstrap/Carousel";
import { DataContext } from "../context/DataContext.jsx";
import { Link } from "react-router-dom";

const Carousels = () => {
  const { data } = useContext(DataContext);
  const getRandomBlogs = (num) => {
    if (!data || data.length === 0) return [];
    const shuffled = [...data].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };
  const slides = getRandomBlogs(4);

  return (
    <div className="h-96 overflow-hidden container mx-auto my-4 relative group flex items-center justify-center">
      <Carousel className="flex items-center justify-center overflow-hidden w-full rounded-3xl">
        {slides.map((blog, index) => (
          <Carousel.Item
            className="w-full h-[80vh] rounded-3xl bg-center bg-cover duration-500"
            style={{ backgroundImage: `url(${blog.image})` }}
            key={index}
          >
            <Link to={`/blogpost/${blog.title}`}>
              <Carousel.Caption className="space-y-3 absolute top-1/3 z-40">
                <h3 className="font-bold text-5xl">{blog.title}</h3>
                <p className="text-lg sm:line-clamp-3 line-clamp-2">
                  {blog.description}
                </p>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Carousels;
