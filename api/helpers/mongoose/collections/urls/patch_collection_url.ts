import { Response } from "express";
import { MongooseError } from "mongoose";

import Collections from "../../../../models/collections";

export default async function patch_collection_url(
  response: Response,
  collection_id: string,
  url_id: string,
  updates: object
) {
  const formatted_updates = Object.keys(updates).reduce(
    (previous_value, key) => {
      return { ...previous_value, [`urls.$.${key}`]: updates[key] };
    },
    {}
  );

  try {
    const collection = await Collections.findOneAndUpdate(
      { _id: collection_id, "urls._id": url_id },
      { $set: formatted_updates },
      { new: true, projection: { urls: { $elemMatch: { _id: url_id } } } }
    );

    if (collection?.urls?.length) {
      response.status(200);
      response.json(collection.urls[0]);
      return;
    }

    response.sendStatus(404);
  } catch (error) {
    if (error instanceof MongooseError) {
      console.log(error.message);
      response.sendStatus(400);
    }
  }
}
