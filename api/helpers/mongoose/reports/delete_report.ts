import { Response } from "express";
import { MongooseError } from "mongoose";

import Reports from "../../../models/reports";

export default async function delete_report(
  response: Response,
  report_id: string
) {
  try {
    const report = await Reports.findByIdAndDelete(report_id);

    if (report) {
      response.sendStatus(204);
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
