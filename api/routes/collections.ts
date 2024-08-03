import express from "express";

import create_collection from "../helpers/mongoose/collections/create_collection";
import create_collection_urls from "../helpers/mongoose/collections/urls/create_collection_url";
import delete_collection from "../helpers/mongoose/collections/delete_collection";
import delete_collection_url from "../helpers/mongoose/collections/urls/delete_collection_url";
import get_collection from "../helpers/mongoose/collections/get_collection";
import get_collection_url from "../helpers/mongoose/collections/urls/get_collection_url";
import get_collection_urls from "../helpers/mongoose/collections/urls/get_collection_urls";
import get_collections from "../helpers/mongoose/collections/get_collections";
import patch_collection from "../helpers/mongoose/collections/patch_collection";
import patch_collection_url from "../helpers/mongoose/collections/urls/patch_collection_url";

const collections_routes = express.Router();

collections_routes
  .route("/collections")

  .get(async (_, response) => {
    await get_collections(response);
  })

  .post(async ({ body }, response) => {
    await create_collection(response, body);
  });

collections_routes
  .route("/collections/:collection_id")

  .get(async ({ params: { collection_id } }, response) => {
    await get_collection(response, collection_id);
  })

  .patch(async ({ body, params: { collection_id } }, response) => {
    await patch_collection(response, collection_id, body);
  })

  .delete(async ({ params: { collection_id } }, response) => {
    await delete_collection(response, collection_id);
  });

collections_routes
  .route("/collections/:collection_id/urls")

  .get(async ({ params: { collection_id } }, response) => {
    await get_collection_urls(response, collection_id);
  })

  .post(async ({ body, params: { collection_id } }, response) => {
    await create_collection_urls(response, collection_id, body);
  });

collections_routes
  .route("/collections/:collection_id/urls/:url_id")

  .get(async ({ params: { collection_id, url_id } }, response) => {
    await get_collection_url(response, collection_id, url_id);
  })

  .patch(async ({ params: { collection_id, url_id }, body }, response) => {
    await patch_collection_url(response, collection_id, url_id, body);
  })

  .delete(async ({ params: { collection_id, url_id } }, response) => {
    await delete_collection_url(response, collection_id, url_id);
  });

export default collections_routes;
