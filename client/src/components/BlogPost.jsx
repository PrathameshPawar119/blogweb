import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import ReactQuill from "react-quill";
import "quill/dist/quill.snow.css";

const BlogPost = () => {
  const navigate = useNavigate();
  const { title } = useParams();
  const [blogPost, setBlogPost] = useState(null);
  const { data } = useContext(DataContext);

  useEffect(() => {
    if (data && data.length > 0) {
      const filteredPost = data.find((post) => post.title === title);
      if (filteredPost) {
        setBlogPost(filteredPost);
      } else {
        navigate("/");
      }
    } else {
      navigate("/");
    }
  }, [data, title, navigate]);

  if (!blogPost) {
    return <p>Loading...</p>;
  }
  const modules = {
    toolbar: false,
  };
  return (
    <div className="max-w-5xl mx-auto">
      <div
        className="border-2 border-black h-80 overflow-hidden flex items-center justify-center"
        style={{
          backgroundImage: `url(${blogPost.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="sm:text-4xl text-xl text-white font-bold text-center px-2">
          {blogPost.title}
        </h2>
      </div>
      <div className="border-4 border-black flex items-start justify-center relative">
        <div className="border-2 border-black w-1/3 sticky top-0 sm:block hidden p-2">
          <h1>Table Of Content</h1>
          <ul className="list-decimal list-inside space-y-2">
            {/* Dynamically generate table of contents if required */}
          </ul>
        </div>
        <div className="sm:w-2/3 w-full border-2 border-black flex items-center justify-center flex-col">
          <div className="border-2 border-black w-full h-2/3 px-2 text-justify">
            <ReactQuill
              value={blogPost.content}
              readOnly
              theme="snow"
              modules={modules}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
