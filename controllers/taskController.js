import taskModel from "../model/taskModel.js";
import slugify from "slugify";

// CREATING THE TASK
export const createTaskController = async(req,res) =>{
    try {

        const {title, description} = req.body;

        // PERFORMING THE VALIDATION
        if(!title)
        {
            return res.status(401).send({message:'Title is Required'});
        }
        if(!description)
        {
            return res.status(401).send({message:'Description is Required'});
        }
        
        const existingTitle = await taskModel.findOne({title});
        if(existingTitle)
        {
            return res.status(200).send({
                success:false,
                message:'Task with similar title already exist. Select different task name.'
            });
        }

        // SAVE THE TASK AND CONVERT THE TITLE INTO SLUG
        const task = await new taskModel({title, description, slug:slugify(title)}).save();
        return res.status(201).send({
            success:true,
            message:'New Task is created',
            task
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            message:'Error in Task'
        });
    }
};

// GETTING ALL THE TASKS
export const allTasksController = async(req,res) =>{
    try {
        // FINDING ALL THE TASKS IN THE DATABASE
        const tasks = await taskModel.find({});
        res.status(200).send({
            success:true,
            message:"All Tasks List",
            tasks
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            message:'Error while getting all tasks'
        });
    }
}

// GETTING THE SINGLE TASK
export const getSingleTaskController = async(req,res) =>{
    try {
        const {slug} = req.params;
        const task = await taskModel.findOne({slug});

        // If task not found, return a 404 error
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).send({
            success:true,
            message: 'Task accessed properly',
            task
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            message:'Error while getting the task'
        });
    }
}

// UPDATING THE TASK
export const updateTaskController = async(req, res) =>{
    try {
        const {title,slug, description} = req.body;
        const {id}=req.params;

        //Validation
        if(!title)
        {
            return res.status(401).send({message:"Task Title is Required"});
        }if(!description)
        {
            return res.status(401).send({message:"Task Description is Required"});
        }

        const task = await taskModel.findByIdAndUpdate(id, {...req.body, slug:slugify(title)}, {new:true});

        await task.save();
        return res.status(201).send({
            success:true,
            message:"Task is updated successfully",
            task
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:'Error while updating the task',
            error
        });
    }
}

// DELETING THE TASK
export const deleteTaskController = async(req,res) =>{
    try {
        const {id} = req.params;
        await taskModel.findByIdAndDelete(id);
        res.status(200).send({
            success:true,
            message:'Task Deleted Successfully'
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            message:'Error while deleting the category'
        });
    }
}