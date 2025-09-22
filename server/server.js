
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/mongoDB.js";
import {  userRouter } from "./routes/auth.route.js";
import { blogRouter } from "./routes/blog.route.js";
import fileUpload from "express-fileupload";
import cloudinary from "cloudinary";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 4001;

// console.log(port)

// Database connection
connectDB();

// Middleware
app.use(express.json());
app.use(cookieParser());

// CORS configuration
 
app.use(cors({
  origin: (origin, callback) => {
    callback(null, origin || '*'); 
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

 
// File upload middleware
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: '/tmp/'
}));

// Define routes
app.use("/api/users", userRouter);
app.use("/api/blog", blogRouter);

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
