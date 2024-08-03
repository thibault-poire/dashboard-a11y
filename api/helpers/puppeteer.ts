import { AxePuppeteer } from "@axe-core/puppeteer";
import minimist from "minimist";
import puppeteer from "puppeteer";

import database_connection from "./mongoose/database_connection";

import Collections from "../models/collections";
import mongoose from "mongoose";

const { collection_id } = minimist(process.argv);

(async () => {
  try {
    await database_connection();

    const collection = await Collections.findById(collection_id);

    if (collection?.urls?.length) {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();

      for (let index = 0; index < collection.urls.length; index++) {
        await page.goto(collection.urls[index].url);

        try {
          const results = await new AxePuppeteer(page).analyze();
          console.log(results);
        } catch (error) {
          console.log(error);
        }
      }

      await browser.close();
    }
  } catch (error) {
    console.log(error);
  } finally {
    await mongoose.disconnect();
  }
})();
