import mongoose from "mongoose";

import { collections_schema } from "../schema/collections";

const Collections = mongoose.model("collections", collections_schema);

export default Collections;
