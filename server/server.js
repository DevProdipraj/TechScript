import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./config/mongoDB.js"
import {router} from "./routes/auth.route.js"
import fileUpload from "express-fileupload"
import cloudinary from "cloudinary"


dotenv.config()
const app = express()
const port = process.env.PORT || 4001;


// database connection 
connectDB()

// middileware 
app.use(express.json())

app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));

// define routes
app.use("/api/users", router )

// cloudinary configure 
cloudinary.config({ 
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.API_KEY, 
        api_secret: process.env.API_SECRET,
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
