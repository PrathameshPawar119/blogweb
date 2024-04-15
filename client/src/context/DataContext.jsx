import React, { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [allTags, setAllTags] = useState([]);

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
        const postData = await response.json();
        setData(postData.allPosts);
        const tagsArray = postData.allPosts.flatMap((post) => post.tags);
        const uniqueTags = Array.from(new Set(tagsArray));
        setAllTags(uniqueTags);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ data, allTags }}>
      {children}
    </DataContext.Provider>
  );
};
