import express from "express"
import {  login, logout, register } from "../controllers/auth.controller.js";
// import { isAuthenticated } from "../middleware/userAuth.js";

export const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout",  logout);

