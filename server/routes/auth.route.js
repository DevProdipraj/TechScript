import express from "express"
import {  getAdmins, getMyProfile, login, logout, register } from "../controllers/auth.controller.js";
import { isAuthenticated } from "../middleware/userAuth.js";


export const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", isAuthenticated, logout);
router.get("/my-profile", isAuthenticated, getMyProfile);
router.get("/admins", getAdmins);

