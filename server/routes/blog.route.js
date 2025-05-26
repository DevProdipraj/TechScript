import express from "express"
import { createBlog } from "../controllers/blog.controller.js"
// import { isAuthenticated } from "../middleware/userAuth.js"

export const blogRouter = express.Router()

blogRouter.post("/createBlog",  createBlog)