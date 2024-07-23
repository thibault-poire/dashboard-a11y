import mongoose from "mongoose";

export const init_db = async (callbacks?: () => void) => {
  await mongoose
    .connect("mongodb://user:123456@127.0.0.1:27017/dashboard")
    .catch((error) => console.error(error));

  callbacks?.();
};
