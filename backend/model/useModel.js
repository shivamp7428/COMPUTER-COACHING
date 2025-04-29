import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({

    Name:{
        type:String,
        required:true,
    },
    Email:{
        type:String,
        required:true,
        unique: true,
    },
    Password:{
        type:String,
        required:true,
    },
    Mobile:{
        type:Number,
        required:true,
    },
    role:{
        type: Number,
        enum:[0,1],
        default:0,
        type:String
    }
} , {
    timestamps:true,
})

export default mongoose.model("User"  , UserSchema)