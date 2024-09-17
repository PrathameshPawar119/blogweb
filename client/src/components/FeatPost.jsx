import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context/DataContext.jsx";

const FeatPost = () => {
  const { data,  taggedBlog } = useContext(DataContext);
  const blogPosts = data;
  return (
    <>
      <div className="container border-2 border-black px-0 py-16">
        <div className="w-full  border-2 border-green-600 text-center space-y-2">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl ">
            Featured blogs
          </h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="mt-6 grid lg:grid-cols-3 grid-cols-1 gap-4">
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
                <div className="border-2 border-red-600 sm:min-w-[32%] min-w-full p-3 gap-2 flex-1 h-[55vh] overflow-hidden flex items-start justify-center flex-col">
                  <div className="h-3/5 w-full hover:scale-105 transition-all">
                    <img
                      src={post.image}
                      alt="image"
                      className="w-full rounded-xl h-full object-cover "
                    />
                  </div>
                  <div className="flex items-start border-2 border-black justify-start flex-col p-1 gap-1 h-2/5  w-full">
                    <h4 className="font-bold text-xl  w-full">{post.title}</h4>
                    <p className="break-words line-clamp-2 w-full">
                      {post.description}
                    </p>
                    <p className="text-slate-600 font-semibold w-full">
                      {formattedDate}
                    </p>
                    <div className="w-full flex items-start justify-start gap-1">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <Link
                          to={`/tags/${tag}`}
                          key={index}
                          className="relative z-10 rounded-full bg-gray-100 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-200"
                        >
                          {tag}
                        </Link>
                      ))}
                    </div>
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
