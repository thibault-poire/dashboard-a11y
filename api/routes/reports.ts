import express from "express";

const router = express.Router();

router
  .route("/reports")
  .get((_, response) => {
    response.json({ message: "get all reports" });
  })
  .post((_, response) => {
    response.status(201);
    response.json({ message: "report created" });
  });

router.route("/reports/:id").get((request, response) => {
  response.json({ message: `get ${request.params.id} report` });
});

export default router;
