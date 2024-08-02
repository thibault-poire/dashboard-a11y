import { AxePuppeteer } from "@axe-core/puppeteer";
import minimist from "minimist";
import mongoose, { MongooseError } from "mongoose";
import puppeteer, { Page } from "puppeteer";

import Collections from "../models/collections";

import mongoose_connection from "./mongoose/mongoose_connection";
import { error } from "console";

const { collection_id } = minimist(process.argv);

mongoose_connection(() => {
  get_collection(collection_id)
    .then((urls) => {
      get_reports(urls as { url: string }[])
        .then((response) => {
          console.log(response);
        })

        .catch((error) => {
          console.log(error);
        });
    })

    .catch((error: MongooseError) => {
      console.log(error);
    })

    .finally(() => {
      mongoose.disconnect();
    });
});

function get_collection(collection_id: string) {
  return new Promise((resolve, rejects) => {
    Collections.findById(collection_id)
      .then((collection) => {
        if (collection?.urls?.length) {
          resolve(collection.urls);
        }

        rejects(`No collection with ${collection_id} "_id"`);
      })
      .catch((error: MongooseError) => {
        rejects(error.message);
      });
  });
}

function get_reports(urls: { url: string }[]) {
  return Promise.allSettled(
    urls.map(({ url }) => {
      return start_puppeteer(url);
    })
  );
}

function start_puppeteer(url) {
  return new Promise((resolve, rejects) => {
    puppeteer
      .launch()

      .then((browser) => {
        browser
          .newPage()

          .then((page) => {
            page.goto(url).then(() => {
              get_axe_report(page)
                .then((report) => {
                  browser
                    .close()

                    .then(() => {
                      resolve(report);
                    })

                    .catch((error) => {
                      rejects(error);
                    });
                })

                .catch((error) => {
                  rejects(error);
                });
            });
          })

          .catch((error) => {
            rejects(error);
          });
      })

      .catch((error) => {
        rejects(error);
      });
  });
}

function get_axe_report(page: Page) {
  return new Promise((resolve, rejects) => {
    new AxePuppeteer(page)
      .analyze()

      .then((report) => {
        resolve(report);
      })

      .catch((error) => {
        rejects(error);
      });
  });
}
