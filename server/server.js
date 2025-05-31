// import express from "express"
// import dotenv from "dotenv"
// import { connectDB } from "./config/mongoDB.js"
// import {router} from "./routes/auth.route.js"
// import {blogRouter} from "./routes/blog.route.js"
// import fileUpload from "express-fileupload"
// import cloudinary from "cloudinary"
// import cookieParser from "cookie-parser"
// import cors from "cors"
 


// dotenv.config()
// const app = express()
// const port = process.env.PORT || 4001;


// // database connection 
// connectDB()

// // middileware 
// app.use(express.json())
// app.use(cookieParser())
// app.use(cors({
//   origin : process.env.FRONTEND_URL,
//   credentials: true,
//   methods : ["GET", "POST", "PUT", "DELETE" ]

// }))

// app.use(fileUpload({
//     useTempFiles : true,
//     tempFileDir : '/tmp/'
// }));

// // define routes
// app.use("/api/users", router )
// app.use("/api/blog", blogRouter)

// // cloudinary configure 
// cloudinary.config({ 
//         cloud_name: process.env.CLOUD_NAME,
//         api_key: process.env.API_KEY, 
//         api_secret: process.env.API_SECRET,
// });


// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })


import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/mongoDB.js";
import { router } from "./routes/auth.route.js";
import { blogRouter } from "./routes/blog.route.js";
import fileUpload from "express-fileupload";
import cloudinary from "cloudinary";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 4001;

console.log(port)

// Database connection
connectDB();

// Middleware
app.use(express.json());
app.use(cookieParser());

// CORS configuration
app.use(cors({
  origin: process.env.FRONTEND_URL,   
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"]
}));
console.log(process.env.FRONTEND_URL)
// File upload middleware
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: '/tmp/'
}));

// Define routes
app.use("/api/users", router);
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
