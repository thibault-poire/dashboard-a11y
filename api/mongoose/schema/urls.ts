import mongoose from "mongoose";

export const urls_schema = new mongoose.Schema(
  {
    reports: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "reports",
    },

    url: {
      required: true,
      type: String,
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
