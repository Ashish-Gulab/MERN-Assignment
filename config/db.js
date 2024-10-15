import mongoose from "mongoose";

// CONNECTING THE DATABASE WITH THE APPLICATION
const connectDB= async()=>{
    try{
        const connectDatabase=await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to the database");
    }catch(error){
        console.log(`Error in MongoDB ${error}`);
    }
}

export default connectDB;