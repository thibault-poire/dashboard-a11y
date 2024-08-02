import { Response } from "express";
import { MongooseError } from "mongoose";

import Collections from "../../../models/collections";

export default function create_collection(
  response: Response,
  document: object
) {
  Collections.create(document)
    .then((collection) => {
      response.status(201);
      response.json(collection);
    })

    .catch((error: MongooseError) => {
      console.log(error.message);

      response.sendStatus(400);
    });
}
