import Book from "../models/book.model.js";
import Semester from "../models/semester.model.js";
import Subject from "../models/subject.model.js";
import LabManual from "../models/lab.model.js";




// Add a book
export const addBook = async (req, res) => {
  try {
    const { name, author, semester, pictureUrl, driveLink } = req.body;
    const newBook = await Book.create({ name, author, semester, pictureUrl, driveLink });
    res.status(201).json(newBook);
  } catch (err) {
    console.error("Error in addBook:", err.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Update a book
export const updateBook = async (req, res) => {
  try {
    const { bookId } = req.params;
    const updatedBook = await Book.findByIdAndUpdate(bookId, req.body, { new: true });
    if (!updatedBook) return res.status(404).json({ message: "Book not found" });
    res.status(200).json(updatedBook);
  } catch (err) {
    console.error("Error in updateBook:", err.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Delete a book
export const deleteBook = async (req, res) => {
  try {
    const { bookId } = req.params;
    const deletedBook = await Book.findByIdAndDelete(bookId);
    if (!deletedBook) return res.status(404).json({ message: "Book not found" });
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (err) {
    console.error("Error in deleteBook:", err.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


//semester

export const createSemester = async (req, res) => {
  try {
    const semester = new Semester({ name: req.body.name });
    const saved = await semester.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


//subjects
export const addSubject = async (req, res) => {
  try {
    const { name, professorName, professorEmail, notesLink, youtubeLink } = req.body;
    const subject = new Subject({
      name,
      professorName,
      professorEmail,
      notesLink,
      youtubeLink,
      semester: req.params.id,
    });
    const saved = await subject.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const updateSubject = async (req, res) => {
  try {
    const updated = await Subject.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteSubject = async (req, res) => {
  try {
    await Subject.findByIdAndDelete(req.params.id);
    res.json({ message: "Subject deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


//labs
export const addLab = async (req, res) => {
  try {
    const { name, docLink } = req.body;
    const lab = new LabManual({ name, docLink, subject: req.params.id });
    const saved = await lab.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const updateLab = async (req, res) => {
  try {
    const updated = await LabManual.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteLab = async (req, res) => {
  try {
    await LabManual.findByIdAndDelete(req.params.id);
    res.json({ message: "Lab deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
