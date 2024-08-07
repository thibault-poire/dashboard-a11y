import mongoose from "mongoose";

export const reports_schema = new mongoose.Schema(
  {
    collection_id: {
      type: mongoose.Types.ObjectId,
    },

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

    url_id: {
      required: true,
      type: mongoose.Types.ObjectId,
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
