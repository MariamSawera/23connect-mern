import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { authorizeRoles } from "../middleware/role.middleware.js";
import { 
    addBook, 
    updateBook, 
    deleteBook, 
    createSemester, 
    deleteSubject, 
    updateSubject, 
    addSubject, 
    updateLab, 
    deleteLab, 
    addLab, 
    deleteQuestion, 
    addProject, 
    updateProject,
    deleteProject,
    getContacts,
    addExam,
    updateExam,
    deleteExam,
    addAnnouncement,
    updateAnnouncement,
    deleteAnnouncement,
    deleteAssignment,
    updateAssignment,
    addAssignment,
    addSubjectOutline,
    updateSubjectOutline,
    deleteSubjectOutline,
    addResource,
    updateResource,
    deleteResource, } 
    from "../controllers/admin.controller.js";

const router = express.Router();

// Admin-only routes
//Books Routes
router.post("/book", protectRoute, authorizeRoles("admin"), addBook);
router.put("/book/:bookId", protectRoute, authorizeRoles("admin"), updateBook);
router.delete("/book/:bookId", protectRoute, authorizeRoles("admin"), deleteBook);
//Semester Routes
router.post("/admin/semester", protectRoute,authorizeRoles("admin"), createSemester); // Admin
router.post("/admin/semester/:id/subject", protectRoute,authorizeRoles("admin"), addSubject);
//subject Routes
router.put("/admin/subject/:id", protectRoute,authorizeRoles("admin"), updateSubject);
router.delete("/admin/subject/:id", protectRoute,authorizeRoles("admin"), deleteSubject);
router.post("/admin/subject/:id/lab", protectRoute,authorizeRoles("admin"), addLab);
//Lab Routes
router.put("/admin/lab/:id", protectRoute,authorizeRoles("admin"), updateLab);
router.delete("/admin/lab/:id", protectRoute,authorizeRoles("admin"), deleteLab);
//Community Routes
router.delete("/admin/QA/:id", protectRoute,authorizeRoles("admin"), deleteQuestion);
//Project Routes
router.post("/admin/project", protectRoute, authorizeRoles("admin"), addProject);
router.put("/admin/project/:id", protectRoute, authorizeRoles("admin"), updateProject);
router.delete("/admin/project/:id", protectRoute, authorizeRoles("admin"), deleteProject);
//Contact Route
router.get("/admin/contacts", protectRoute, authorizeRoles("admin"), getContacts);
//Exam Routes
router.post("/admin/exam", protectRoute, authorizeRoles("admin"), addExam);
router.put("/admin/exam/:id", protectRoute, authorizeRoles("admin"), updateExam);
router.delete("/admin/exam/:id", protectRoute, authorizeRoles("admin"), deleteExam);
//Announcement Routes
router.post("/admin/announcement", protectRoute, authorizeRoles("admin"), addAnnouncement);
router.put("/admin/announcement/:id", protectRoute, authorizeRoles("admin"), updateAnnouncement);
router.delete("/admin/announcement/:id", protectRoute, authorizeRoles("admin"), deleteAnnouncement);
// Admin assignment routes
router.post("/admin/assignment", protectRoute, authorizeRoles("admin"), addAssignment);
router.put("/admin/assignment/:id", protectRoute, authorizeRoles("admin"), updateAssignment);
router.delete("/admin/assignment/:id", protectRoute, authorizeRoles("admin"), deleteAssignment);
//Outline Routes
router.post("/admin/subject-outline", protectRoute, authorizeRoles("admin"), addSubjectOutline);
router.put("/admin/subject-outline/:id", protectRoute, authorizeRoles("admin"), updateSubjectOutline);
router.delete("/admin/subject-outline/:id", protectRoute, authorizeRoles("admin"), deleteSubjectOutline);
//Resources Routes
router.post("/admin/resource", protectRoute, authorizeRoles("admin"), addResource);
router.put("/admin/resource/:id", protectRoute, authorizeRoles("admin"), updateResource);
router.delete("/admin/resource/:id", protectRoute, authorizeRoles("admin"), deleteResource);

export default router;
