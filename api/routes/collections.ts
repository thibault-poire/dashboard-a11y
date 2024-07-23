import express from "express";

import { Collections } from "../models/collections";

const router = express.Router();

router
  .route("/collections")

  .get((_, response) => {
    Collections.find({}).then((collections) => {
      response.status(200);
      response.json(collections);
    });
  })

  .post((request, response) => {
    Collections.create(request.body)
      .then(() => {
        response.status(201);
        response.json({ message: "collection created" });
      })
      .catch((error) => {
        console.log(error);

        response.status(400);
        response.json({
          message: error?._message,
        });
      });
  });

router
  .route("/collections/:id")

  .get((request, response) => {
    response.json({ message: `get ${request.params.id} collection` });
  })

  .delete((request, response) => {
    response.status(204);
    response.json({ message: `delete ${request.params.id} collection` });
  });

export default router;
