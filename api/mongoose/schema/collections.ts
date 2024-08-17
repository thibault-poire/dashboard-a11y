import mongoose from "mongoose";

import { urls_schema } from "./urls";
import { last_report_schema } from "./last_report";

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

    last_report: {
      type: last_report_schema,
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
