import mongoose from "mongoose";
const tagsSchema = new mongoose.Schema({
  tag: {
    type: String,
    required: true,
  },
});

const postSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  tags: [tagsSchema],
});

const Post = mongoose.model("Post", postSchema);

export default Post;
