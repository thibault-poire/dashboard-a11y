import { Response } from "express";
import { MongooseError } from "mongoose";

import Collections from "../../../../mongoose/models/collections";

export default async function get_collection_urls(
  response: Response,
  collection_id: string
) {
  try {
    const collection = await Collections.findById({ _id: collection_id });

    if (collection?.urls?.length) {
      response.status(200);
      response.json(collection.urls);
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
