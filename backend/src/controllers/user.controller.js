import Book from "../models/book.model.js";
import Semester from "../models/semester.model.js";
import Subject from "../models/subject.model.js";
import LabManual from "../models/lab.model.js";
import Question from "../models/question.model.js";
import Project from "../models/project.model.js";




// Get all books (can be public for students)
export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (err) {
    console.error("Error in getAllBooks:", err.message);
    res.status(500).json({ message: "Internal Server Error" });
  }

}

// Get all smester (can be public for students)

export const getSemesters = async (req, res) => {
  try {
    const semesters = await Semester.find();
    res.json(semesters);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//subjects
export const getSubjectsBySemester = async (req, res) => {
  try {
    const subjects = await Subject.find({ semester: req.params.id });
    res.json(subjects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


//labs
export const getLabsBySubject = async (req, res) => {
  try {
    const labs = await LabManual.find({ subject: req.params.id });
    res.json(labs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


//QA
export const postQuestion = async (req, res) => {
  try {
    const { title, description } = req.body;
    const question = new Question({ title, description, author: req.user._id });
    const saved = await question.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Get all questions
export const getQuestions = async (req, res) => {
  try {
    const questions = await Question.find()
      .populate("author", "name email") // populate author info
      .sort({ createdAt: -1 });
    res.json(questions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Post an answer to a question
export const postAnswer = async (req, res) => {
  try {
    const { text } = req.body;
    const question = await Question.findById(req.params.id);
    if (!question) return res.status(404).json({ message: "Question not found" });

    question.answers.push({ text, author: req.user._id });
    await question.save();

    // populate answers with author info
    await question.populate("answers.author", "name email");
    res.status(201).json(question);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


//project
export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
