import mongoose from "mongoose";

// CREATING THE TASK SCHEMA
const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    }, 

    slug:{
        type:String,
        lowercase:true
    }
},{timestamps:true});

export default mongoose.model('tasks', taskSchema);