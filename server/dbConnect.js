import mongoose from "mongoose";

function mongoDb(mongo_uri) {
  mongoose.connect(mongo_uri);
  console.log("connected to mongo");
}

export default mongoDb;
