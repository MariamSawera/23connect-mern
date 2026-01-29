import mongoose from "mongoose";

const examSchema = new mongoose.Schema({
  subjectName: { type: String, required: true },
  day: { type: String, required: true },       // e.g., Monday
  date: { type: Date, required: true },       // Actual date
  time: { type: String, required: true },     // e.g., "10:00 AM - 12:00 PM"
  venue: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Exam = mongoose.model("Exam", examSchema);
export default Exam;
