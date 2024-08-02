import mongoose from "mongoose";

const mongoose_connection = (callbacks?: () => void) => {
  mongoose
    .connect("mongodb://user:123456@127.0.0.1:27017/dashboard")

    .then(() => {
      callbacks?.();
    })

    .catch((error) => {
      throw error;
    });
};

export default mongoose_connection;
