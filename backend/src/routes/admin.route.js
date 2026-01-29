import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { authorizeRoles } from "../middleware/role.middleware.js";
import { addBook, updateBook, deleteBook, createSemester, deleteSubject, updateSubject, addSubject, updateLab, deleteLab, addLab, } from "../controllers/admin.controller.js";

const router = express.Router();

// Admin-only routes
router.post("/book", protectRoute, authorizeRoles("admin"), addBook);
router.put("/book/:bookId", protectRoute, authorizeRoles("admin"), updateBook);
router.delete("/book/:bookId", protectRoute, authorizeRoles("admin"), deleteBook);

router.post("/admin/semester", protectRoute,authorizeRoles("admin"), createSemester); // Admin

router.post("/admin/semester/:id/subject", protectRoute,authorizeRoles("admin"), addSubject);
router.put("/admin/subject/:id", protectRoute,authorizeRoles("admin"), updateSubject);
router.delete("/admin/subject/:id", protectRoute,authorizeRoles("admin"), deleteSubject);
router.post("/admin/subject/:id/lab", protectRoute,authorizeRoles("admin"), addLab);
router.put("/admin/lab/:id", protectRoute,authorizeRoles("admin"), updateLab);
router.delete("/admin/lab/:id", protectRoute,authorizeRoles("admin"), deleteLab);



export default router;
