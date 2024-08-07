import { MongooseError } from "mongoose";

import Collections from "../models/collections";

import { reports_schema } from "../schema/reports";

reports_schema.post("findOneAndDelete", async function (document) {
  try {
    await Collections.findOneAndUpdate(
      {
        "urls.reports": document._id,
      },
      { $pull: { "urls.$.reports": document.id } }
    );
  } catch (error) {
    if (error instanceof MongooseError) {
      console.log(error);
    }
  }
});

export const reports_schema_with_middlewares = reports_schema;
