import { MongooseError } from "mongoose";

import Reports from "../models/reports";

import { collections_schema } from "../schema/collections";

collections_schema.post("findOneAndDelete", async function (document) {
  const reports =
    document?.urls.reduce((previous, current) => {
      return [...previous, ...(current?.reports ?? [])];
    }, []) ?? [];

  try {
    await Reports.deleteMany({ _id: { $in: reports } });
  } catch (error) {
    if (error instanceof MongooseError) {
      console.log(error);
    }
  }
});

collections_schema.post("findOneAndUpdate", async function (document) {
  const updates = this.getUpdate() ?? {};
  const is_delete_update = "$pull" in updates;

  if (is_delete_update) {
    const { _id } = updates?.$pull?.urls;

    const reports: string[] | undefined =
      document?.urls?.find((url) => {
        return url._id.toString() === _id.toString();
      })?.reports ?? [];

    try {
      await Reports.deleteMany({ _id: { $in: reports } });
    } catch (error) {
      if (error instanceof MongooseError) {
        console.log(error);
      }
    }
  }
});

export const collections_schema_with_middlewares = collections_schema;
