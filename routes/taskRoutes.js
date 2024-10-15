import express from "express";
import {requireSignIn} from '../middleware/authMiddleware.js';
import { createTaskController, allTasksController, getSingleTaskController, updateTaskController, deleteTaskController } from "../controllers/taskController.js";
const router = express.Router();

// ROUTES

// ROUTES FOR CREATING TASK
router.post('/create-task', requireSignIn, createTaskController);

// ROUTES FOR GETTING ALL THE TASKS
router.get('/all-tasks', allTasksController);

// ROUTES FOR GETTING SINGLE TASK
router.get('/single-task/:slug', getSingleTaskController);

// ROUTES FOR UPDATING THE TASK 
router.put('/update-task/:id', requireSignIn, updateTaskController);

// ROUTES FOR DELETING THE TASK
router.delete('/delete-task/:id', requireSignIn, deleteTaskController);

export default router;