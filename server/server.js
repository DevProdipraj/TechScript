import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./config/mongoDB.js"
import {router} from "./routes/auth.route.js"


dotenv.config()
const app = express()
const port = process.env.PORT || 4001;


// database connection 
connectDB()

// middileware 
app.use(express.json())



// define routes
app.use("/api/users", router )

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
