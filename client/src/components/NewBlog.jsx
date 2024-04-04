import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const NewBlog = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) navigate("/");
  }, []);
  const [blog, setBlog] = useState({
    userName: localStorage.getItem("username"),
    title: "",
    description: "",
    content: "",
    img: "",
  });

  const handleChange = (e) => {
    setBlog({
      ...blog,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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

      // Clear the form after successful submission
      setBlog({
        ...blog,
        title: "",
        description: "",
        content: "",
        img: "",
      });

      console.log("Blog submitted successfully");
    } catch (error) {
      console.error("Error submitting blog:", error);
    }
  };

  return (
    <>
      <Form className="container text-xl font-semibold" onSubmit={handleSubmit}>
        <h1 className="text-4xl font-bold my-4">New Blog Here....!!🔥✌️</h1>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            onChange={handleChange}
            value={blog.title}
            name="title"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
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
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
          <Form.Label>Blog Content</Form.Label>
          <Form.Control
            as="textarea"
            rows={15}
            style={{ resize: "none" }}
            onChange={handleChange}
            value={blog.content}
            name="content"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Thumbnail image URL</Form.Label>
          <Form.Control
            onChange={handleChange}
            value={blog.img}
            name="img"
            type="text"
          />
        </Form.Group>
        <button
          type="submit"
          className="py-2 px-4 inline-flex justify-center items-center gap-x-2 text-lg font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        >
          Post
        </button>
      </Form>
    </>
  );
};

export default NewBlog;
