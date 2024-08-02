import mongoose from "mongoose";

export const reports_schema = new mongoose.Schema(
  { any: {} },
  {
    strict: "throw",
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);
