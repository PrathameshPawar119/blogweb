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
      className="w-full border-2 border-red-500 flex items-center justify-center gap-1"
    >
      <div className="w-4/5 border-2 border-black space-y-2 px-2">
        <h4 className="font-bold sm:text-2xl text-lg">{props.blog.title}</h4>
        <p className="sm:line-clamp-2 hidden text-base break-words  text-slate-400 font-semibold">
          {props.blog.description +
            props.blog.description +
            props.blog.description +
            props.blog.description +
            props.blog.description +
            props.blog.description +
            props.blog.description +
            props.blog.description +
            props.blog.description +
            props.blog.description +
            props.blog.description +
            props.blog.description +
            props.blog.description +
            props.blog.description +
            props.blog.description +
            props.blog.description +
            props.blog.description +
            props.blog.description +
            props.blog.description +
            props.blog.description +
            props.blog.description +
            props.blog.description +
            props.blog.description +
            props.blog.description}
        </p>
        <p className="text-sm text-slate-500 font-semibold">
          <span className="mr-3">
            {Math.floor(Math.random() * 10 + 5)} min read
          </span>
          {formattedDate}
        </p>
      </div>
      <div className="border-2 border-black">
        <img src={props.blog.image} alt="image" className="h-32" />
      </div>
    </Link>
  );
};

export default Blog;
