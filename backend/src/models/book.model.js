import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  name: { type: String, required: true },
  author: { type: String, required: true },
  semester: { type: String, required: true }, // e.g., "5th Semester"
  pictureUrl: { type: String },               // image URL or file storage link
  driveLink: { type: String, required: true } // Google Drive link
}, { timestamps: true });

const Book = mongoose.model("Book", bookSchema);
export default Book;
