import express from "express";

import { create_collection_report } from "../helpers/mongoose/reports/create_report";
import get_reports from "../helpers/mongoose/reports/get_reports";

const reports_routes = express.Router();

reports_routes
  .route("/reports")

  .get(async (_, response) => {
    get_reports(response);
  })

  .post(({ query: { collection_id, url_ids } }, response) => {
    create_collection_report(response, collection_id as string);
  });

export default reports_routes;
