import express from "express";

import { start_audit } from "../helpers/audits";

const router = express.Router();

router.route("/audits").post((request, response) => {
  const { url } = request.body;

  if (!url) {
    response.status(400);
    response.json({ message: "invalid or missing parameter(s)" });
  }

  start_audit(url, {
    on_stdout: (data) => {
      console.log(`==========`);
      console.log(`on_stdout: ${data}`);
      console.log(`==========`);
    },

    on_close(code, stdout, stderr) {
      console.log(code);
      console.log(stdout);
      console.log(stderr);
    },
  });

  response.json({ message: "audit started" });
});

export default router;
