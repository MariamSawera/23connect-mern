import express from "express";
import { getAllBooks, getLabsBySubject, getSemesters, getSubjectsBySemester } from "../controllers/user.controller.js";


const router = express.Router();


// Public route for students to view books
router.get("/books", getAllBooks);
router.get("/semesters", getSemesters);                 // Student
router.get("/semester/:id/subjects", getSubjectsBySemester);
router.get("/subject/:id/labs", getLabsBySubject);




export default router;