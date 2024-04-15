import React from "react";

const Tags = () => {
  const tags = [
    {
      tag: "Programming",
      blogs: 125,
      image: "https://source.unsplash.com/random/?code",
    },
    {
      tag: "Programming",
      blogs: 125,
      image: "https://source.unsplash.com/random/?code",
    },
    {
      tag: "WebDev",
      blogs: 125,
      image: "https://source.unsplash.com/random/?code",
    },
    {
      tag: "AI&ML",
      blogs: 125,
      image: "https://source.unsplash.com/random/?code",
    },
    {
      tag: "Testing",
      blogs: 125,
      image: "https://source.unsplash.com/random/?code",
    },
    {
      tag: "Android",
      blogs: 125,
      image: "https://source.unsplash.com/random/?code",
    },
    {
      tag: "General",
      blogs: 125,
      image: "https://source.unsplash.com/random/?code",
    },
    {
      tag: "Quantum Computing",
      blogs: 125,
      image: "https://source.unsplash.com/random/?code",
    },
  ];
  return (
    <div className="border-2 border-black container flex items-start justify-start flex-col gap-4 py-4">
      <h1 className="sm:text-4xl text-2xl font-bold">categories</h1>
      <div className="flex items-start justify-start flex-wrap gap-6">
        {tags.map((item, itemIndex) => (
          <div
            className="flex items-center sm:min-w-[250px] min-w-32 flex-1 gap-4 bg-gradient-to-l from-zinc-400 to-gray-800 rounded-lg"
            key={itemIndex}
          >
            <div className="w-full bg-center bg-cover p-2 duration-500 z-10 text-white h-16 ">
              <h1 className="text-lg font-bold">{item.tag}</h1>
              <p className="text-sm">{item.blogs} blogs</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tags;
