import { Response } from "express";
import { MongooseError } from "mongoose";

import Collections from "../../../mongoose/models/collections";

export default async function get_collections(response: Response) {
  try {
    const collections = await Collections.find({});

    if (collections?.length) {
      response.status(200);
      response.json(collections);
      return;
    }

    response.sendStatus(404);
  } catch (error) {
    if (error instanceof MongooseError) {
      console.error(error.message);
      response.sendStatus(400);
    }
  }
}
