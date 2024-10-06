import mongoose from "mongoose";
function mongoDb() {
  mongoose.connect(
    // "mongodb://localhost:27017/myBlogDB",
    "mongodb+srv://bhushanharvard50:MongoDB'24@clusterzero.3yk3x.mongodb.net/myBlogDB",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  console.log("connected to mongo");
}

export default mongoDb;
