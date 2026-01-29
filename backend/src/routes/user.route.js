import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import {
     getAllBooks,
     getAnnouncements,
     getAssignments,
     getExams,
     getLabsBySubject,
     getNextExam,
     getProjects, 
     getQuestions, 
     getResources, 
     getSemesters, 
     getSubjectOutlines, 
     getSubjectsBySemester, 
     postAnswer, postQuestion, 
     submitContact} 
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

router.post("/contact", submitContact);

router.get("/exams", getExams);

router.get("/announcements", getAnnouncements);

router.get("/assignments", getAssignments);
// Students can view subject outlines
router.get("/subject-outlines", getSubjectOutlines);

router.get("/exam/next", getNextExam);

router.get("/resources", getResources);



export default router;