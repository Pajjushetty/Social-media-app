//These routes handle incoming requests for authentication operations, such as user registration, login, logout, and other related functionalities

import express from "express";
import { login } from "../controllers/auth.js";

const router = express.Router();



// Route for user login
router.post("/login", login);

// Route for user logout


export default router;
