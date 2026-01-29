import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema({
  subjectName: { type: String, required: true },
  instructorName: { type: String, required: true },
  semester: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String },
  givenOn: { type: Date, required: true },
  deadline: { type: Date, required: true },
  submission: { type: String },  // e.g., "Hardcopy + softcopy"
  marks: { type: String },       // e.g., "10%"
  pdfLink: { type: String },     // optional PDF URL
  createdAt: { type: Date, default: Date.now },
});

const Assignment = mongoose.model("Assignment", assignmentSchema);
export default Assignment;
