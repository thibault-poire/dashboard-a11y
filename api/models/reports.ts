import mongoose from "mongoose";

import { reports_schema } from "../schema/reports";

const Reports = mongoose.model("reports", reports_schema);

export default Reports;
