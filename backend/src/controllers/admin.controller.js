import Book from "../models/book.model.js";
import Semester from "../models/semester.model.js";
import Subject from "../models/subject.model.js";
import LabManual from "../models/lab.model.js";
import Question from "../models/question.model.js";
import Project from "../models/project.model.js";





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

//QA
export const deleteQuestion = async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
    if (!question) return res.status(404).json({ message: "Question not found" });

    // Only author or admin can delete
    if (req.user.role !== "admin" && question.author.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not authorized" });
    }

    await question.remove();
    res.json({ message: "Question deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// project
export const addProject = async (req, res) => {
  try {
    const { name, image, description, link, ownerName } = req.body;
    const project = await Project.create({ name, image, description, link, ownerName });
    res.status(201).json(project);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Update a project
export const updateProject = async (req, res) => {
  try {
    const updated = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Project not found" });
    res.json(updated);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Delete a project
export const deleteProject = async (req, res) => {
  try {
    const deleted = await Project.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Project not found" });
    res.json({ message: "Project deleted successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
