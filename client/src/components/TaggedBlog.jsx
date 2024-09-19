import React, { useContext, useEffect } from "react";
import Blog from "./Blog";
import { useParams } from "react-router-dom";
import { DataContext } from "../context/DataContext.jsx";
import { useNavigate } from "react-router-dom";

const TaggedBlog = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { data } = useContext(DataContext);
  const blogPosts = data;
  const blogs = blogPosts.filter((blog) => blog.tags.includes(params.tag));

  useEffect(() => {
    if (blogs.length === 0) {
      navigate("/error404");
    }
  }, [blogs, navigate]);

  return (
    <div className="container mx-auto p-6 rounded-lg m-2">
      {blogs.length > 0 ? (
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6">
          {blogs.map((blog, index) => (
            <Blog blog={blog} key={index} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">
          No blogs found for this tag.
        </p>
      )}
    </div>
  );
};

export default TaggedBlog;
