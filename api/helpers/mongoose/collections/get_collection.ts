import { Response } from "express";
import { MongooseError } from "mongoose";

import Collections from "../../../models/collections";

export default function get_collection(
  response: Response,
  collection_id: string
) {
  Collections.findById(collection_id)
    .then((collection) => {
      if (collection) {
        response.status(200);
        response.json(collection);

        return;
      }

      response.sendStatus(404);
    })

    .catch((error: MongooseError) => {
      console.log(error.message);

      response.sendStatus(400);
    });
}
