import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String },          // URL or path to image
  description: { type: String },
  link: { type: String },           // GitHub link or live project
  ownerName: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Project = mongoose.model("Project", projectSchema);
export default Project;
