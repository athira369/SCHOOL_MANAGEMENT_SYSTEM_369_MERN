import mongoose from "mongoose";
const RegisterSchema = new mongoose.Schema({
   Id:{type:String,required: true, unique: true},
   firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, default: "Teacher" },
  contactNumber: { type: String, required: true },
  address: { type: String },
  joiningDate: { type: Date, default: Date.now },
  password: { type: String, required: true }
    

})
 export const  User = mongoose.model('Register',RegisterSchema);