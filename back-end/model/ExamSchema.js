import mongoose from "mongoose";
const ExamSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
  },
  duration: {
    type: String,
    required: true,
    trim: true,
  },
});
export const Exam = new mongoose.model("Exam", ExamSchema);
