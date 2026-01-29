import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  professorName: { type: String, required: true },
  professorEmail: { type: String, required: true },
  notesLink: { type: String },
  youtubeLink: { type: String },
  semester: { type: mongoose.Schema.Types.ObjectId, ref: "Semester", required: true },
});

const Subject = mongoose.model("Subject", subjectSchema);
export default Subject;
