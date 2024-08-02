import { Response } from "express";
import { MongooseError } from "mongoose";

import Collections from "../../../../models/collections";

export default function patch_collection_url(
  response: Response,
  collection_id: string,
  url_id: string,
  updates: object
) {
  const formatted_updates = Object.keys(updates).reduce(
    (previous_value, key) => {
      return { ...previous_value, [`urls.$.${key}`]: updates[key] };
    },
    {}
  );

  Collections.findOneAndUpdate(
    { _id: collection_id, "urls._id": url_id },
    { $set: formatted_updates },
    { new: true, projection: { urls: { $elemMatch: { _id: url_id } } } }
  )
    .then((collection) => {
      if (collection?.urls?.length) {
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
