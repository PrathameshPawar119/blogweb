import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context/DataContext.jsx";

const FeatPost = () => {
  const { data } = useContext(DataContext);
  const blogPosts = data;

  return (
    <div className="container px-4 py-16 mx-auto">
      <div className="text-center space-y-4 mb-10">
        <h2 className="text-4xl font-bold text-gray-900">Featured Blogs</h2>
        <p className="text-gray-600">
          Discover our top picks for insightful and engaging reads.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
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
            <Link
              to={`/blogpost/${post.title}`}
              key={index}
              className="block transition-transform transform hover:scale-105"
            >
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-xl mb-2">{post.title}</h4>
                  <p className="text-gray-700 mb-2 line-clamp-2">
                    {post.description}
                  </p>
                  <p className="text-sm text-gray-500 mb-4">{formattedDate}</p>
                  <div className="flex space-x-2">
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <Link
                        to={`/tags/${tag}`}
                        key={index}
                        className="bg-gray-100 px-3 py-1 rounded-full text-gray-600 hover:bg-gray-200 transition"
                      >
                        #{tag}
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
  );
};

export default FeatPost;
