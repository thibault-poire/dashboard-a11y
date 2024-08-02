import express from "express";
import body_parser from "body-parser";

import collections_routes from "./routes/collections";
import reports_routes from "./routes/reports";

import mongoose_connection from "./helpers/mongoose/mongoose_connection";

const server = express();

server.get("/", (_, response) => {
  response.json({ message: "Hello stranger" });
});

server.use(body_parser.json());
server.use(body_parser.urlencoded({ extended: true }));

server.use("/api", collections_routes, reports_routes);

server.all("*", (_, response) => {
  response.status(404);
  response.json({ message: "Not found" });
});

mongoose_connection(() => {
  server.listen(1337, () => {
    console.log("server listening on port 1337");
  });
});
