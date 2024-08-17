import mongoose from "mongoose";

export const last_report_schema = new mongoose.Schema(
  {
    total_errors: {
      type: Number,
    },
  },
  {
    _id: false,
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);
