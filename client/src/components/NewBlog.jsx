import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { Select } from "./Select";

const NewBlog = () => {
  const navigate = useNavigate();
  const [value1, setValue1] = useState([]);
  useEffect(() => {
    if (!localStorage.getItem("token")) navigate("/");
  }, []);
  const [blog, setBlog] = useState({
    title: "",
    description: "",
    content: "",
    imgUrl: "",
    tags: [],
  });

  const handleChange = (e) => {
    setBlog({
      ...blog,
      [e.target.name]: e.target.value,
      tags: value1,
    });
    console.log(blog);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (value1.length === 0) value1.push("General");
    try {
      const response = await fetch("http://localhost:5000/post/blogpost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blog),
      });
      console.log(JSON.stringify(blog));
      if (!response.ok) {
        throw new Error("Failed to submit blog");
      }
      setBlog({
        ...blog,
        title: "",
        description: "",
        content: "",
        imgUrl: "",
        tags: [],
      });
      setValue1([]);

      console.log("Blog submitted successfully");
    } catch (error) {
      console.error("Error submitting blog:", error);
    }
  };

  const options = ["First", "Second", "Third", "Fourth", "Fifth"];

  return (
    <>
      <Form
        className="lg:container w-[95%] m-auto text-xl font-semibold md:h-screen selection:text-green-700"
        onSubmit={handleSubmit}
      >
        <h1 className="text-4xl font-bold my-4">New Blog Here....!!🔥✌️</h1>

        <div className="flex items-stretch justify-center md:flex-row flex-col w-full border-2 border-black h-[90%] gap-4">
          <div className="flex items-start justify-start p-2 flex-col md:w-1/3 w-full">
            <Form.Group
              className="mb-3 w-full"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                onChange={handleChange}
                value={blog.title}
                name="title"
              />
            </Form.Group>
            <Form.Group
              className="mb-3 w-full"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Blogs Short Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={1}
                style={{ resize: "none" }}
                value={blog.description}
                onChange={handleChange}
                name="description"
              />
            </Form.Group>
            <Form.Group
              className="mb-3 w-full"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Thumbnail image URL</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={blog.imgUrl}
                name="imgUrl"
                type="text"
              />
            </Form.Group>
            <Form.Group
              className="mb-3 w-full"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Tags</Form.Label>
              <Select
                options={options}
                value={value1}
                onChange={(o) => setValue1(o)}
              />
            </Form.Group>
            <button
              type="submit"
              className="py-2 px-4 my-3 inline-flex justify-center items-center gap-x-2 text-lg font-semibold rounded-lg border border-transparent bg-green-800 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              Post
            </button>
          </div>
          <div className="p-2 md:w-2/3 w-full flex flex-col">
            <Form.Group className="mb-3 flex-grow">
              <Form.Label>Blog Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={15}
                className="h-[95%]"
                style={{ resize: "none" }}
                onChange={handleChange}
                value={blog.content}
                name="content"
              />
            </Form.Group>
          </div>
        </div>
      </Form>
    </>
  );
};

export default NewBlog;
