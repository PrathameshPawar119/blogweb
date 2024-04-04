import express from "express";
const router = express.Router();
import Post from "../models/blog.js";

router.post("/blogpost", async (req, res) => {
  const newPost = await Post.create({
    userName: req.body.userName,
    title: req.body.title,
    description: req.body.description,
    content: req.body.content,
    img: req.body.img,
  });
  res.status(200).json({ result: "Post Successfull" });
});

router.get("/getblogpost", async (req, res) => {
  const allPosts = await Post.find();
  res.status(200).json({ allPosts });
});

router.get("/getblogpost/:title", async (req, res) => {
  try {
    const post = await Post.findOne({ title: req.params.title });

    if (!post) {
      return res.status(404).json({ message: "Blog post not found" });
    }

    res.status(200).json({ post });
  } catch (error) {
    console.error("Error fetching blog post:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
