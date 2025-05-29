import express from "express"
import {createBlog, deleteBlog, getAllBlogs, getMyBlogs, getSingleBlogs, updateBlog} from "../controllers/blog.controller.js"
import { isAdmin, isAuthenticated } from "../middleware/userAuth.js"


export const blogRouter = express.Router()
blogRouter.post("/create", isAuthenticated, isAdmin("admin") , createBlog)
blogRouter.delete("/delete/:id", isAuthenticated, isAdmin("admin") , deleteBlog)
blogRouter.get("/all-blogs", getAllBlogs);
blogRouter.get("/single-blog/:id", isAuthenticated, getSingleBlogs);
blogRouter.get("/my-blog", isAuthenticated, isAdmin("admin"), getMyBlogs);
blogRouter.put("/update/:id", isAuthenticated, isAdmin("admin"), updateBlog);