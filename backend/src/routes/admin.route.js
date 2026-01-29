import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { authorizeRoles } from "../middleware/role.middleware.js";
import { addBook, updateBook, deleteBook, getAllBooks } from "../controllers/admin.controller.js";

const router = express.Router();

// Admin-only routes
router.post("/book", protectRoute, authorizeRoles("admin"), addBook);
router.put("/book/:bookId", protectRoute, authorizeRoles("admin"), updateBook);
router.delete("/book/:bookId", protectRoute, authorizeRoles("admin"), deleteBook);

// Public route for students to view books
router.get("/books", getAllBooks);

export default router;
