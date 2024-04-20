import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import { useNavigate } from "react-router-dom";

const BlogPost = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [blogPosts, setBlogPosts] = useState({});
  const { data, taggedBlog } = useContext(DataContext);
  useEffect(() => {
    if (data && data.length > 0) {
      const filteredPost = data.find((post) => post.title === params.title);
      setBlogPosts(filteredPost);
    } else {
      navigate("/*");
    }
  }, [data, params.title]);
  return (
    <>
      <div
        className="border-2 border-black h-80 overflow-hidden flex items-center justify-center "
        style={{
          backgroundImage: `url(${blogPosts.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="sm:text-4xl text-xl text-white font-bold text-center px-2">
          {blogPosts.title} Mindfulness And Meditation Techniques For
          Developers: Improving Focus And Clarity
        </h2>
      </div>
      <div className="border-4 border-black flex items-start justify-center relative ">
        <div className="border-2 border-black w-1/3 sticky top-0 sm:block hidden p-2">
          <h1>Table Of Content</h1>
          <ul className="list-decimal list-inside space-y-2">
            <ul className="list-none list-inside pl-4">
              <li>Child 0</li>
              <ul className="list-none list-inside pl-8 space-y-2">
                <li>Child of Child</li>
                <li>Child of Child</li>
                <li>Child of Child</li>
              </ul>
            </ul>
            <ul className="list-none list-inside pl-4">
              <li>Child 0</li>
              <ul className="list-none list-inside pl-8 space-y-2">
                <li>Child of Child</li>
                <li>Child of Child</li>
                <li>Child of Child</li>
              </ul>
            </ul>
            <ul className="list-none list-inside pl-4">
              <li>Child 0</li>
              <ul className="list-none list-inside pl-8 space-y-2">
                <li>Child of Child</li>
                <li>Child of Child</li>
                <li>Child of Child</li>
              </ul>
            </ul>
          </ul>
        </div>
        <div className="sm:w-2/3 w-full border-2 border-black flex items-center justify-center flex-col">
          <div className="border-2 border-black w-full h-2/3 px-2">
            {blogPosts.content}{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
