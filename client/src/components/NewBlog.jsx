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
    image: "",
    author: localStorage.getItem("userName"),
    tags: [],
  });
  const handleChange = (e) => {
    setBlog({
      ...blog,
      [e.target.name]: e.target.value,
      tags: value1,
    });
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
      if (!response.ok) {
        throw new Error("Failed to submit blog");
      }
      setBlog({
        ...blog,
        title: "",
        description: "",
        content: "",
        image: "",
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
        className="lg:container w-[95%] m-auto font-semibold md:h-screen selection:bg-green-500 selection:text-white"
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
            <div className="col-span-full mb-3 w-full">
              <label
                htmlFor="cover-photo"
                className="block text-base font-medium leading-6 text-gray-900"
              >
                Thumbnail
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <div className="mt-4 flex flex-col text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-green-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-green-600 focus-within:ring-offset-2 hover:text-green-500"
                    >
                      <span>Upload a file </span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="text-xs leading-5 text-gray-600">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
              className="py-2 px-4 my-3 inline-flex justify-center items-center gap-x-2 text-lg font-semibold rounded-lg border border-transparent bg-green-800 text-white hover:bg-green-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
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
