import mongoose from "mongoose";

const labSchema = new mongoose.Schema({
  name: { type: String, required: true },
  docLink: { type: String },
  subject: { type: mongoose.Schema.Types.ObjectId, ref: "Subject", required: true },
});

const LabManual = mongoose.model("LabManual", labSchema);
export default LabManual;
