import { Response } from "express";
import { MongooseError } from "mongoose";

import Collections from "../../../models/collections";

export default function get_collections(response: Response) {
  Collections.find({})
    .then((collections) => {
      if (collections?.length) {
        response.status(200);
        response.json(collections);

        return;
      }

      response.sendStatus(404);
    })

    .catch((error: MongooseError) => {
      console.log(error.message);

      response.sendStatus(400);
    });
}
