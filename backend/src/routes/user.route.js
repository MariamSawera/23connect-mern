import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import {
     getAllBooks,
     getLabsBySubject,
     getProjects, 
     getQuestions, 
     getSemesters, 
     getSubjectsBySemester, 
     postAnswer, postQuestion } 
     from "../controllers/user.controller.js";


const router = express.Router();


// Public route for students to view books
router.get("/books", getAllBooks);
router.get("/semesters", getSemesters);                 // Student
router.get("/semester/:id/subjects", getSubjectsBySemester);
router.get("/subject/:id/labs", getLabsBySubject);

router.get("/QA", getQuestions);

// Post a question (logged-in users)
router.post("/QA/:id", protectRoute, postQuestion);

// Post an answer (logged-in users)
router.post("/QA/:id/answer", protectRoute, postAnswer);

router.get("/projects", getProjects);


export default router;