import mongoose, { Schema } from "mongoose";



const userSchema = new Schema({

    name:{
        type:String,
        minLength:3,
        maxLength:25,
        required:true
    },
    email:{
        type:String,
        maxLength:30,
        rquired:true
    },
    mobile:{
        type:String,
        required:true,
        maxLength:15
    },
    password:{
        type:String,
        required:true,
        minLength:8

    },
    image:{
        type:String

    }

},
{timestamps:true})


const User = mongoose.model('User',userSchema)

export default User