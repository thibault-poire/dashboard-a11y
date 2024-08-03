import mongoose from "mongoose";

export const reports_schema = new mongoose.Schema(
  {
    inapplicable: {
      required: true,
      type: [Array],
    },

    incomplete: {
      required: true,
      type: [Array],
    },

    passes: {
      required: true,
      type: [Array],
    },

    url: {
      required: true,
      type: String,
    },

    violations: {
      required: true,
      type: [Array],
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
