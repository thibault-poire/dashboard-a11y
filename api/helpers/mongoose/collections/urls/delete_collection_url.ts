import { Response } from "express";
import { MongooseError } from "mongoose";

import Collections from "../../../../mongoose/models/collections";

export default async function delete_collection_url(
  response: Response,
  collection_id: string,
  url_id: string
) {
  try {
    const collection = await Collections.findOneAndUpdate(
      { _id: collection_id },
      { $pull: { urls: { _id: url_id } } }
    );

    if (collection) {
      response.sendStatus(204);
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
