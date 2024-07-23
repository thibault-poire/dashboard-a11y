import express from "express";
import body_parser from "body-parser";

import audits from "./routes/audits";
import collections from "./routes/collections";
import reports from "./routes/reports";

import { init_db } from "./helpers/mongoose";

const server = express();

server.get("/", (_, response) => {
  response.json({ message: "Hello stranger" });
});

server.use(body_parser.json());
server.use(body_parser.urlencoded({ extended: true }));

server.use("/api", audits, collections, reports);

server.all("*", (_, response) => {
  response.status(404);
  response.json({ message: "Not found" });
});

init_db(() => {
  server.listen(1337, () => {
    console.log("server listening on port 1337");
  });
});
