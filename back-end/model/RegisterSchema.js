import mongoose from "mongoose";
const RegisterSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})
 export const  User = mongoose.model('Register',RegisterSchema)