import express from "express";
import body_parser from "body-parser";
import cors from "cors";

import collections_routes from "./routes/collections";
import reports_routes from "./routes/reports";

import database_connection from "./helpers/mongoose/database_connection";

(async () => {
  const server = express();

  server.get("/", (_, response) => {
    response.json({ message: "Hello stranger" });
  });

  server.use(body_parser.json());
  server.use(body_parser.urlencoded({ extended: true }));

  server.use(
    "/api",
    cors({
      origin: "http://localhost:4200",
      methods: "GET,POST,PATCH,DELETE,HEAD",
    }),
    collections_routes,
    reports_routes
  );

  server.all("*", (_, response) => {
    response.status(404);
    response.json({ message: "Not found" });
  });

  await database_connection();

  server.listen(1337, () => {
    console.log("server listening on port 1337");
  });
})();
