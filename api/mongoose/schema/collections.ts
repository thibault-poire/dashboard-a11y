import mongoose from "mongoose";

import { urls_schema } from "./urls";

export const collections_schema = new mongoose.Schema(
  {
    name: {
      required: true,
      type: String,
    },

    urls: {
      type: [urls_schema],
      default: undefined,
    },
  },
  {
    strict: "throw",
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);
