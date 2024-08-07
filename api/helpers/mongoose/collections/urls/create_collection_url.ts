import { Response } from "express";
import { MongooseError } from "mongoose";

import Collections from "../../../../mongoose/models/collections";

export default async function create_collection_urls(
  response: Response,
  collection_id: string,
  url: object
) {
  try {
    const collection = await Collections.findByIdAndUpdate(
      collection_id,
      { $push: { urls: url } },
      {
        new: true,
        projection: {
          urls: { $slice: ["$urls", -1] },
        },
      }
    );

    if (collection?.urls?.length) {
      response.status(201);
      response.json(collection["urls"][0]);
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
