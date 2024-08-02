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

  .get((_, response) => {
    get_collections(response);
  })

  .post(({ body }, response) => {
    create_collection(response, body);
  });

collections_routes
  .route("/collections/:collection_id")

  .get(({ params: { collection_id } }, response) => {
    get_collection(response, collection_id);
  })

  .patch(({ body, params: { collection_id } }, response) => {
    patch_collection(response, collection_id, body);
  })

  .delete(({ params: { collection_id } }, response) => {
    delete_collection(response, collection_id);
  });

collections_routes
  .route("/collections/:collection_id/urls")

  .get(({ params: { collection_id } }, response) => {
    get_collection_urls(response, collection_id);
  })

  .post(({ body, params: { collection_id } }, response) => {
    create_collection_urls(response, collection_id, body);
  });

collections_routes
  .route("/collections/:collection_id/urls/:url_id")

  .get(({ params: { collection_id, url_id } }, response) => {
    get_collection_url(response, collection_id, url_id);
  })

  .patch(({ params: { collection_id, url_id }, body }, response) => {
    patch_collection_url(response, collection_id, url_id, body);
  })

  .delete(({ params: { collection_id, url_id } }, response) => {
    delete_collection_url(response, collection_id, url_id);
  });

export default collections_routes;
