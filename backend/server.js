import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'
import connectDB from './confige/db.js'
import UserRouter from './route/userRoute.js'

dotenv.config();
connectDB();

const app = express()
app.use(cors())
app.use(express.json())
app.use(morgan("combined"))
app.use("/api/v1/User" , UserRouter)

const port = process.env.port || 5000

app.listen(port ,()=>{
    console.log(`server is running on port ${port}`)
})