import { Response } from "express";
import { MongooseError } from "mongoose";

import Collections from "../../../../models/collections";

export default async function get_collection_url(
  response: Response,
  collection_id: string,
  url_id: string
) {
  try {
    const collection = await Collections.findOne(
      { _id: collection_id, "urls._id": url_id },
      { "urls.$": 1 }
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
