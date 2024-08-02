import mongoose from "mongoose";
import { reports_schema } from "./reports";

export const urls_schema = new mongoose.Schema(
  {
    url: {
      required: true,
      type: String,
    },

    reports: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "reports",
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
