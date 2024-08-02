import { Response } from "express";
import { MongooseError } from "mongoose";

import Collections from "../../../../models/collections";

export default function get_collection_url(
  response: Response,
  collection_id: string,
  url_id: string
) {
  Collections.findOne(
    { _id: collection_id, "urls._id": url_id },
    { "urls.$": 1 }
  )
    .then((collection) => {
      if (collection?.urls?.length) {
        response.status(200);
        response.json(collection.urls[0]);

        return;
      }

      response.sendStatus(404);
    })

    .catch((error: MongooseError) => {
      console.log(error.message);

      response.sendStatus(400);
    });
}
