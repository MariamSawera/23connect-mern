import mongoose from "mongoose";

const subjectOutlineSchema = new mongoose.Schema({
  subjectName: { type: String, required: true },
  topics: [{ type: String, required: true }],  // e.g., ["Ch 1-4", "Limits & Derivatives"]
  semester: { type: String },                  // optional
  pdfLink: { type: String },                   // optional PDF
  createdAt: { type: Date, default: Date.now },
});

const SubjectOutline = mongoose.model("SubjectOutline", subjectOutlineSchema);
export default SubjectOutline;
