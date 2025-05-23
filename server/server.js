import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./config/mongoDB.js"


// config dotenv for import evn  
dotenv.config()

// database connection 
connectDB()


const app = express()
const port = process.env.PORT || 4001;

// root path create 
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
