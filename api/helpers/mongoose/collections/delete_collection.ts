import { Response } from "express";
import { MongooseError } from "mongoose";

import Collections from "../../../models/collections";

export default async function delete_collection(
  response: Response,
  collection_id: string
) {
  try {
    const collection = await Collections.findByIdAndDelete(collection_id);

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
