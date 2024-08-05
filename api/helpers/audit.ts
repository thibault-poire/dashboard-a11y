import { exec } from "node:child_process";

export const start_collection_audit = (collection_id: string) => {
  exec(
    `ts-node ./helpers/puppeteer.ts --collection_id=${collection_id}`,
    { timeout: 30000 },
    (error, stdout, stderr) => {
      if (error) {
        console.log(error);
      }

      console.log(stdout);
      console.log(stderr);
    }
  );
};
