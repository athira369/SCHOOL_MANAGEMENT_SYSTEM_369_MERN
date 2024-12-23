import mongoose from "mongoose";
const StudentSchema = new mongoose.Schema({
    name:{type:String,required:true},
    age:{type:Number,required:true},
    grade:{type:String,required:true},
})
export const Student = mongoose.model('Student',StudentSchema);