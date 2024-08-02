import { Response } from "express";
import { MongooseError } from "mongoose";

import Reports from "../../../models/reports";

export default function get_reports(response: Response) {
  Reports.find({})
    .then((reports) => {
      if (reports?.length) {
        response.status(200);
        response.json(reports);

        return;
      }

      response.sendStatus(404);
    })

    .catch((error: MongooseError) => {
      console.log(error.message);

      response.sendStatus(400);
    });
}
