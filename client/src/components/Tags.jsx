import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context/DataContext.jsx";

const Tags = () => {
  const { data, taggedBlog } = useContext(DataContext);
  return (
    <div className="py-4 border-2 border-[#f5f5f5] container flex items-start justify-start flex-col gap-4">
      <div className="w-full text-center space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl ">
          Categories
        </h2>
        <p className="text-lg text-gray-600">
          Discover our diverse range of topics and find what inspires you!
        </p>
      </div>
      <h1 className="sm:text-4xl text-2xl font-bold"></h1>
      <div className="flex items-start justify-start flex-wrap gap-6">
        {taggedBlog.map((item, itemIndex) => (
          <Link
            to={`/tags/${item.tag}`}
            key={itemIndex}
            className="sm:flex-grow-0 flex-grow"
          >
            <div className="flex items-center sm:min-w-[250px] min-w-32 w-full gap-4 border-2 bg-white rounded-lg">
              <div className="w-full bg-center bg-cover p-2 duration-500 z-10 h-16 ">
                <h1 className="text-lg font-bold">#{item.tag}</h1>
                <p className="text-sm">{item.count} blogs</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Tags;
