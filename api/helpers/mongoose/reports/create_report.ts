import { Response } from "express";
import { start_collection_audit } from "../../audit";

export const create_collection_report = (
  response: Response,
  collection_id: string
) => {
  start_collection_audit(collection_id);

  response.sendStatus(204);
};
