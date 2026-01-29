import Book from "../models/book.model.js";
import Semester from "../models/semester.model.js";
import Subject from "../models/subject.model.js";
import LabManual from "../models/lab.model.js";





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
