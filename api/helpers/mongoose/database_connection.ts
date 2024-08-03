import mongoose from "mongoose";

const database_connection = async () => {
  try {
    await mongoose.connect("mongodb://user:123456@127.0.0.1:27017/dashboard");
  } catch (error) {
    throw error;
  }
};

export default database_connection;
