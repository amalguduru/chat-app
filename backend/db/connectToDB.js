import mongoose from "mongoose";

const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("Connected to Database");
  } catch (error) {
    console.log("Error connecting:", error.message);
  }
};

export default connection;
