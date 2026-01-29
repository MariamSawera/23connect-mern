import mongoose from "mongoose";

const announcementSchema = new mongoose.Schema({
  name: { type: String, required: true },        // Announcement title
  description: { type: String, required: true }, // Announcement content
  date: { type: Date, required: true },          // Date of announcement
  createdAt: { type: Date, default: Date.now },
});

const Announcement = mongoose.model("Announcement", announcementSchema);
export default Announcement;
