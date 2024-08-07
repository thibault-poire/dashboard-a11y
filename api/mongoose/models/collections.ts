import mongoose from "mongoose";

import { collections_schema_with_middlewares } from "../middlewares/collections";

const Collections = mongoose.model(
  "collections",
  collections_schema_with_middlewares
);

export default Collections;
