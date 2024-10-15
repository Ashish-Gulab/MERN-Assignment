import express from "express";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoute.js';
import taskRoutes from './routes/taskRoutes.js';
import dotenv from "dotenv";
import cors from 'cors';

dotenv.config();

//database configuration
connectDB();

// CRETING EXPRESS APP
const app=express();

//Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/task', taskRoutes);

app.get("/",(req,res)=>{
    res.send("<h1>Hello, This is MERN Application</h1>");
});

const PORT=process.env.PORT || 8000;
// const PORT=8000;

// Run Server
app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
});