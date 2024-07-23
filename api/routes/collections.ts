import express from "express";

const router = express.Router();

router
  .route("/collections")
  .get((_, response) => {
    response.json({ message: "get all collections" });
  })
  .post((_, response) => {
    response.status(201);
    response.json({ message: "collection created" });
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
