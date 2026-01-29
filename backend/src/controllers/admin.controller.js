import Book from "../models/book.model.js";
import Semester from "../models/semester.model.js";
import Subject from "../models/subject.model.js";
import LabManual from "../models/lab.model.js";
import Question from "../models/question.model.js";
import Project from "../models/project.model.js";
import Contact from "../models/contact.model.js";
import Exam from "../models/exam.model.js";
import Announcement from "../models/announcement.model.js";
import Assignment from "../models/assignment.model.js";
import SubjectOutline from "../models/subjectOutline.model.js";
import Resource from "../models/resource.model.js";






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

// Optional: Get all contact messages (Admin-only)
export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};


// Add a new exam (admin)
export const addExam = async (req, res) => {
  try {
    const { subjectName, day, date, time, venue } = req.body;
    const exam = await Exam.create({ subjectName, day, date, time, venue });
    res.status(201).json(exam);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Update an exam
export const updateExam = async (req, res) => {
  try {
    const updated = await Exam.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Exam not found" });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Delete an exam
export const deleteExam = async (req, res) => {
  try {
    const deleted = await Exam.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Exam not found" });
    res.json({ message: "Exam deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};


// Add announcement
export const addAnnouncement = async (req, res) => {
  try {
    const { name, description, date } = req.body;
    const announcement = await Announcement.create({ name, description, date });
    res.status(201).json(announcement);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Update announcement
export const updateAnnouncement = async (req, res) => {
  try {
    const updated = await Announcement.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Announcement not found" });
    res.json(updated);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Delete announcement
export const deleteAnnouncement = async (req, res) => {
  try {
    const deleted = await Announcement.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Announcement not found" });
    res.json({ message: "Announcement deleted successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const addAssignment = async (req, res) => {
  try {
    const {
      subjectName, instructorName, semester,
      title, description, givenOn, deadline,
      submission, marks, pdfLink
    } = req.body;

    const assignment = await Assignment.create({
      subjectName, instructorName, semester,
      title, description, givenOn, deadline,
      submission, marks, pdfLink
    });

    res.status(201).json(assignment);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Update assignment
export const updateAssignment = async (req, res) => {
  try {
    const updated = await Assignment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Assignment not found" });
    res.json(updated);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Delete assignment
export const deleteAssignment = async (req, res) => {
  try {
    const deleted = await Assignment.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Assignment not found" });
    res.json({ message: "Assignment deleted successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


// Add a subject outline
export const addSubjectOutline = async (req, res) => {
  try {
    const { subjectName, topics, semester, pdfLink } = req.body;

    const outline = await SubjectOutline.create({ subjectName, topics, semester, pdfLink });
    res.status(201).json(outline);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Update a subject outline
export const updateSubjectOutline = async (req, res) => {
  try {
    const updated = await SubjectOutline.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Outline not found" });
    res.json(updated);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Delete a subject outline
export const deleteSubjectOutline = async (req, res) => {
  try {
    const deleted = await SubjectOutline.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Outline not found" });
    res.json({ message: "Outline deleted successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


// Add resource
export const addResource = async (req, res) => {
  try {
    const { name, description, image, link } = req.body;

    const resource = await Resource.create({ name, description, image, link });
    res.status(201).json(resource);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Update resource
export const updateResource = async (req, res) => {
  try {
    const updated = await Resource.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Resource not found" });
    res.json(updated);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Delete resource
export const deleteResource = async (req, res) => {
  try {
    const deleted = await Resource.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Resource not found" });
    res.json({ message: "Resource deleted successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
