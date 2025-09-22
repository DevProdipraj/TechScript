import express from "express"
import {  getAdmins, getMyProfile, login, logout, register } from "../controllers/auth.controller.js";
import { isAuthenticated } from "../middleware/userAuth.js";


export const userRouter = express.Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.get("/logout", isAuthenticated, logout);
userRouter.get("/my-profile", isAuthenticated, getMyProfile);
userRouter.get("/admins", getAdmins);

