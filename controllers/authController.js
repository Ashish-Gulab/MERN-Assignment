import {comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../model/userModel.js";
import JWT from "jsonwebtoken";

// REGISTER THE USER AND SAVING DATA INTO THE DATABASE
export const registerController = async(req, res) => {
    try {
        const {name, email, password, phone, address} = req.body;
        // Validations
        if(!name){
            return res.send({message:'Name is required'});
        }if(!email){
            return res.send({message:'Email is required'});
        }if(!password){
            return res.send({message:'Password is required'});
        }if(!phone){
            return res.send({message:'Phone is required'});
        }if(!address){
            return res.send({message:'Address is required'});
        }
        //checking user
        const existingUser = await userModel.findOne({email});

        // existing user
        if(existingUser)
        {
            return res.status(200).send({
                success:false,
                message:'Already Registered Please Login'
            });
        }

        // register user
        const hashedPassword= await hashPassword(password);
        
        //save 
        const user = await new userModel({name, email, phone, address, password:hashedPassword}).save();

        res.status(201).send({
            success:true,
            message:'User Register Successfully',
            user
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:'Error in Registration',
            error
        });
    }
};

//POST || LOGIN THE USER 

export const loginController =async(req,res)=>{
    try {
        const {email, password} = req.body;

        //Validation
        if(!email || !password){
            return res.status(404).send({
                success:false,
                message:'Invalid Email or Password'
            });
        }

        // Check User
        const user= await userModel.findOne({email});

        if(!user)
        {
            return res.status(404).send({
                success:false,
                message:'Email is not registered'
            });
        }

        // COMPARING THE PASSWORD
        const match = await comparePassword(password, user.password);

        if(!match)
        {
            return res.status(200).send({
                success:false,
                message:'Invalid Password'
            });
        }

        //token 
        const token = await JWT.sign({_id:user._id}, process.env.JWT_SECRET, {expiresIn:'7d'});

        res.status(200).send({
            success:true,
            message:"Login Successfully",
            user:{
                _id: user._id,
                name:user.name,
                email:user.email,
                phone:user.phone,
                address:user.address,
                question:user.question,
                role:user.role,
            },
            token
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:'Error in Login',
            error
        });
    }
};