import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const params = useParams();
  const [blogPosts, setBlogPosts] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/post/getblogpost/${params.title}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setBlogPosts(data.post);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="border-4 border-black flex items-start justify-center relative md:container m-auto p-0">
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
          <div className="border-2 border-black w-full h-full max-h-96 overflow-hidden flex items-center justify-center">
            <img src={`${blogPosts.img}`} alt="images" className="w-full" />
          </div>
          <div className="border-2 border-black w-full h-2/3 px-2">
            {blogPosts.content}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
