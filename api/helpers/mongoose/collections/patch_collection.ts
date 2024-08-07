import { Response } from "express";
import { MongooseError } from "mongoose";

import Collections from "../../../mongoose/models/collections";

export default async function patch_collection(
  response: Response,
  collection_id: string,
  updates: object
) {
  try {
    const collection = await Collections.findByIdAndUpdate(
      collection_id,
      updates,
      { new: true }
    );

    if (collection) {
      response.status(200);
      response.json(collection);
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
