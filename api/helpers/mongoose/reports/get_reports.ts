import { Response } from "express";
import { MongooseError } from "mongoose";

import Reports from "../../../mongoose/models/reports";

export default async function get_reports(response: Response) {
  try {
    const reports = await Reports.find({});

    if (reports?.length) {
      response.status(200);
      response.json(reports);
      return;
    }

    response.sendStatus(404);
  } catch (error) {
    if (error instanceof MongooseError) {
      console.log(error.message);
      response.sendStatus(400);
    }
  }
}
