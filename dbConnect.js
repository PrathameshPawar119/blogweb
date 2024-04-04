import mongoose from "mongoose";
function mongoDb() {
  mongoose.connect("mongodb://127.0.0.1:27017/myBlogDB", {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  });
  console.log("connected to mongo");
}

export default mongoDb;