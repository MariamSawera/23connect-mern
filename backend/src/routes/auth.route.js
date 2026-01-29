import express from "express";
import { checkAuth, login, logout, signup} from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { authorizeRoles } from "../middleware/role.middleware.js";


const router = express.Router();

router.post("/signup", signup );

router.post("/login", login);

router.post("/logout", logout);

router.get("/check", protectRoute ,checkAuth); //if user auth or not





export default router;