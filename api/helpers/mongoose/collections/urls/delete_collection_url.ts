import { Response } from "express";
import { MongooseError } from "mongoose";

import Collections from "../../../../models/collections";

export default function delete_collection_url(
  response: Response,
  collection_id: string,
  url_id: string
) {
  Collections.findOneAndDelete({ _id: collection_id, "urls._id": url_id })
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
