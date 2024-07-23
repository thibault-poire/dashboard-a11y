import mongoose from "mongoose";
import { collections_schema } from "../schema/collections";

export const Collections = mongoose.model("collections", collections_schema);
