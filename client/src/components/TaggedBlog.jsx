import React, { useContext, useEffect } from "react";
import Blog from "./Blog";
import { useParams } from "react-router-dom";
import { DataContext } from "../context/DataContext.jsx";
import { useNavigate } from "react-router-dom";

const TaggedBlog = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { data, taggedBlog } = useContext(DataContext);
  const blogPosts = data;
  const blogs = blogPosts.filter((blog) => blog.tags.includes(params.tag));
  useEffect(() => {
    if (blogs.length === 0) {
      navigate("/*");
    }
  }, [blogs, navigate]);
  return (
    <>
      <div className="lg:w-[900px] m-auto border-2 border-black flex items-center justify-center gap-3 flex-col">
        {blogs.map((blog, index) => (
          <Blog blog={blog} key={index} />
        ))}
      </div>
    </>
  );
};

export default TaggedBlog;
