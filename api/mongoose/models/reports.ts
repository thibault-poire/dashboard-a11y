import mongoose from "mongoose";

import { reports_schema_with_middlewares } from "../middlewares/reports";

const Reports = mongoose.model("reports", reports_schema_with_middlewares);

export default Reports;
