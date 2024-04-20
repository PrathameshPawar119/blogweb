import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context/DataContext.jsx";

const Tags = () => {
  const { data, taggedBlog } = useContext(DataContext);
  return (
    <div className="border-2 border-black container flex items-start justify-start flex-col gap-4 py-4">
      <div className="w-full  border-2 border-green-600 text-center space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl ">
          Categories
        </h2>
      </div>
      <h1 className="sm:text-4xl text-2xl font-bold"></h1>
      <div className="flex items-start justify-start flex-wrap gap-6">
        {taggedBlog.map((item, itemIndex) => (
          <Link
            to={`/tags/${item.tag}`}
            key={itemIndex}
            className="sm:flex-grow-0 flex-grow"
          >
            <div className="flex items-center sm:min-w-[250px] min-w-32 w-full gap-4 bg-gradient-to-l from-zinc-400 to-gray-800 rounded-lg">
              <div className="w-full bg-center bg-cover p-2 duration-500 z-10 text-white h-16 ">
                <h1 className="text-lg font-bold">{item.tag}</h1>
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
