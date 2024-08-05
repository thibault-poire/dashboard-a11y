import mongoose from "mongoose";

export const reports_schema = new mongoose.Schema(
  {
    inapplicable: {
      type: [Array],
    },

    incomplete: {
      type: [Array],
    },

    passes: {
      type: [Array],
    },

    status: {
      required: true,
      type: Number,
    },

    url: {
      required: true,
      type: String,
    },

    violations: {
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
