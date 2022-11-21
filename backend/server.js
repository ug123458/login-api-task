import express from "express"
import userRoute from "./Routes/userRoute.js"
import dotenv from "dotenv"
import connectDB from "../backend/Config/db.js"
const app = express()

const PORT = process.env.PORT || 5000

app.use(express.json())

dotenv.config()
connectDB()

app.listen(
  PORT,
  console.log(`server running on ${process.env.NODE_ENV} on port ${PORT}`)
)

app.use("/api/users", userRoute)
