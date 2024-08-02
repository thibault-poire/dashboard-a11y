import { Response } from "express";
import { MongooseError } from "mongoose";

import Collections from "../../../models/collections";

export default function delete_collection(
  response: Response,
  collection_id: string
) {
  Collections.findByIdAndDelete(collection_id)
    .then((collection) => {
      if (collection) {
        response.sendStatus(204);

        return;
      }

      response.sendStatus(404);
    })

    .catch((error: MongooseError) => {
      console.log(error.message);

      response.sendStatus(400);
    });
}
