import mongoose from "mongoose";

const resourceSchema = new mongoose.Schema({
  name: { type: String, required: true },         // Resource title
  description: { type: String },                  // Optional description
  image: { type: String },                        // Image URL
  link: { type: String, required: true },         // Link to the resource
  createdAt: { type: Date, default: Date.now },
});

const Resource = mongoose.model("Resource", resourceSchema);
export default Resource;
