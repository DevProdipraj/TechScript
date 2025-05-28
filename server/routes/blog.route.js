import express from "express"
import {createBlog} from "../controllers/blog.controller.js"
import { isAdmin, isAuthenticated } from "../middleware/userAuth.js"


export const blogRouter = express.Router()

blogRouter.post("/create", isAuthenticated, isAdmin("admin") , createBlog)