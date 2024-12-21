import mongoose from "mongoose";
const ClassSchema = new mongoose.Schema({
     name: {
    type: String,
    required: true,
    trim: true, // Removes extra whitespace
  },
  grade: {
    type: String,
    required: true,
    trim: true,
  },

})
export const  Class = mongoose.model('Class',ClassSchema);