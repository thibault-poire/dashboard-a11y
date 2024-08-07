import { Response } from "express";
import { MongooseError } from "mongoose";

import Collections from "../../../mongoose/models/collections";

export default async function create_collection(
  response: Response,
  document: object
) {
  try {
    const collection = await Collections.create(document);

    response.status(201);
    response.json(collection);
  } catch (error) {
    if (error instanceof MongooseError) {
      console.log(error.message);
      response.sendStatus(400);
    }
  }
}
