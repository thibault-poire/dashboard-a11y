import { AxePuppeteer } from "@axe-core/puppeteer";
import minimist from "minimist";
import puppeteer from "puppeteer";

import database_connection from "./mongoose/database_connection";

import mongoose from "mongoose";

import Collections from "../mongoose/models/collections";
import Reports from "../mongoose/models/reports";

const { collection_id } = minimist(process.argv);

(async () => {
  try {
    await database_connection();

    const collection = await Collections.findById(collection_id);

    if (collection?.urls?.length) {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();

      let errors = 0;

      for (let index = 0; index < collection.urls.length; index++) {
        const { url, _id: url_id } = collection.urls[index];

        try {
          await page.goto(url);

          try {
            const { inapplicable, incomplete, passes, violations } =
              await new AxePuppeteer(page).analyze();

            const { _id: report_id } = await Reports.create({
              collection_id,
              inapplicable,
              incomplete,
              passes,
              status: 1,
              url_id,
              violations,
            });

            errors += violations.length;

            await Collections.findOneAndUpdate(
              { _id: collection_id, "urls._id": url_id },
              {
                $push: {
                  "urls.$.reports": report_id,
                },
              }
            );
          } catch (error) {
            console.log(error);
          }
        } catch (error) {
          console.log(error);
        }
      }

      try {
        await Collections.findByIdAndUpdate(collection_id, {
          "last_report.total_errors": errors,
        });
      } catch (error) {
        console.log(error);
      }

      await browser.close();
    }
  } catch (error) {
    console.log(error);
  } finally {
    await mongoose.disconnect();

    console.log("terminated");
  }
})();
