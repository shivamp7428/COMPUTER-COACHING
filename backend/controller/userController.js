import useModel from "../model/useModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export const Register = async(req , res)=>{
    try {
        const {Name , Email , Password , Mobile} = req.body;
        const role = 0;

        if(!Name || !Email || !Password || !Mobile){
            return res.send({success:false , message:"Feild All Required"})
        }
        // check old uder
        const OldUser = await useModel.findOne({Email})
        if(OldUser){
            return res.status(400).send({success:false , message:"You are already exist"})
        }
      // hashpassword
        const salt = await bcrypt.genSalt(0)
        const hashPassword = await bcrypt.hash(Password , salt)
 
        // create new user
        const user = await useModel.create({ Name , Email , Password:hashPassword , Mobile })
        return res.status(201).send({user})
    } catch (error) {
        console.log(error)
        return res.status(500).send({success:false , message:error.message})
    }
}

export const login = async(req,res)=>{
    try {
         
        const {Email , Password} = req.body;
        if(!Email || !Password){
            return res.status(401).send({success:false , message:"Feild all required"})
        }

        const user = await useModel.findOne({Email})
        if(!user){
            return res.status(401).send({success:false , message:"User Not found"})
        }

        // compare password

        const isMatch = await bcrypt.compare(Password , user.Password)
        if(!isMatch){
            return res.status(401).send({success:false, message:"Invalid information"})
        }
           
        const accesstoken = jwt.sign(
            {id:user._id , role:user.role },
            process.env.JWT_SECRET,
            {expiresIn:"1d"}
        )

        return res.status(200).send({user , accesstoken})

    } catch (error) {
        console.log(error)
        return res.status(500).send({success:false , message:error.message})
    }
}