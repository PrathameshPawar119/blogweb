import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context/DataContext.jsx";

const FeatPost = () => {
  const { data, tags } = useContext(DataContext);
  const blogPosts = data;
  return (
    <>
      <div className="container ">
        <h2 className="sm:text-4xl text-2xl font-bold">Featured Blogs</h2>
        <div className="mt-6 grid md:grid-cols-3 grid-cols-1 gap-4">
          {blogPosts.slice(0, 3).map((post, index) => {
            const formattedDate = new Date(post.date).toLocaleDateString(
              "en-US",
              {
                day: "2-digit",
                month: "short",
                year: "numeric",
              }
            );

            return (
              <Link to={`/blogpost/${post.title}`} key={index} className="p-2">
                <div className="sm:min-w-[32%] min-w-full p-3 gap-2 flex-1 h-[55vh] overflow-hidden flex items-start justify-center flex-col">
                  <div className="h-2/3 w-full hover:scale-105 transition-all">
                    <img
                      src={post.image}
                      alt="image"
                      className="w-full rounded-xl h-full object-cover "
                    />
                  </div>
                  <div className="flex items-start justify-start flex-col p-1 gap-1 h-1/3  w-full">
                    <h4 className="font-bold text-xl  w-full">{post.title}</h4>
                    <p className="line-clamp-2  w-full">{post.description}</p>
                    <p className="text-slate-600 font-semibold   w-full">
                      {formattedDate}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FeatPost;
