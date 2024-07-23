import mongoose from "mongoose";

export const collections_schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    urls: {
      type: [{ name: String }],
      required: true,
    },
  },
  { strict: "throw" }
);
