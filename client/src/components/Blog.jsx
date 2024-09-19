import React from "react";
import { Link } from "react-router-dom";

const Blog = (props) => {
  const formattedDate = new Date(props.blog.date).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <Link
      to={`/blogpost/${props.blog.title}`}
      className="w-full bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
    >
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3">
          <img
            src={props.blog.image}
            alt={props.blog.title}
            className="w-full h-48 object-cover"
          />
        </div>
        <div className="md:w-2/3 p-4 flex flex-col justify-between">
          <h4 className="font-bold sm:text-2xl text-xl">{props.blog.title}</h4>
          <p className="text-gray-600 line-clamp-3 mb-4">
            {props.blog.description}
          </p>
          <p className="text-sm text-gray-500">
            <span className="mr-3">
              {Math.floor(Math.random() * 10 + 5)} min read
            </span>
            {formattedDate}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Blog;
