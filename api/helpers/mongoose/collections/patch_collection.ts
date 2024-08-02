import { Response } from "express";
import { MongooseError } from "mongoose";

import Collections from "../../../models/collections";

export default function patch_collection(
  response: Response,
  collection_id: string,
  updates: object
) {
  Collections.findByIdAndUpdate(collection_id, updates, { new: true })
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
