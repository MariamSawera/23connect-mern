import mongoose from "mongoose";

const answerSchema = new mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const questionSchema = new mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  description: { type: String },
  answers: [answerSchema], // embedded answers
  createdAt: { type: Date, default: Date.now },
});

const Question = mongoose.model("Question", questionSchema);
export default Question;
