import mongoDb from "./dbConnect.js";
import express from "express";
import cors from "cors";
import signInRoute from "./routes/userAuth.js";
import postRoute from "./routes/userPost.js";
import savedBlog from "./routes/userSaveBlog.js";
import likedBlog from "./routes/userLikedBlog.js";


import dotenv from 'dotenv';
dotenv.config();

const mongo_uri = process.env.MONGO_URI;


mongoDb(mongo_uri);

const port = 5000;
const app = express();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
app.use("/auth", signInRoute);
app.use("/post", postRoute);
app.use("/save", savedBlog);
app.use("/like", likedBlog);