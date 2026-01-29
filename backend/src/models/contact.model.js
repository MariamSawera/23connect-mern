import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },           // Student name
  email: { type: String, required: true },          // Student email
  subject: { type: String, required: true },        // Message subject
  message: { type: String, required: true },        // Message content
  createdAt: { type: Date, default: Date.now },
});

const Contact = mongoose.model("Contact", contactSchema);
export default Contact;
