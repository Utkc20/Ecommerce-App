import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        requires:true,
        trim:true,//trims the whitespaces 
    },

    email:{
        type:String,
        required:true,
        unique:true,
    },

    password:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    },
    address:{
        type:{},
        require:true,
    },

    answer:{
        type:String,
        required:true,
    },

    role:{
        type:Number,
        default:0,
        
    }
    


},
{timestamps:true}
);

export default mongoose.model("users",userSchema);