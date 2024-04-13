import React, { useEffect, useState } from "react";
import Blog from "./Blog";
import { Link } from "react-router-dom";

const FeatPost = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/post/getblogpost", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setBlogPosts(data.allPosts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  console.log(blogPosts);
  return (
    <>
      <div className="container ">
        <h2 className="text-4xl font-bold">Recent Posts</h2>
        <div className="mt-6 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
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
              <Link to={`/blogpost/${post.title}`} key={index}>
                <div className="sm:min-w-[32%] min-w-full gap-2 flex-1 h-[55vh] overflow-hidden flex items-start justify-center flex-col">
                  <div className="h-2/3 w-full p-3 border-2 border-black">
                    <img
                      src={post.imageUrl}
                      alt="image"
                      className="w-full rounded-xl h-full object-cover hover:scale-105 transition-all"
                    />
                  </div>
                  <div className="flex items-start justify-start flex-col p-2 gap-1 h-1/3 border-2 border-black w-full">
                    <h4 className="font-bold text-xl border-2 border-black w-full">
                      {post.title}
                    </h4>
                    <p className="line-clamp-2 border-2 border-black w-full">
                      {post.description}
                    </p>
                    <p className="text-slate-600 font-semibold  border-2 border-black w-full">
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
