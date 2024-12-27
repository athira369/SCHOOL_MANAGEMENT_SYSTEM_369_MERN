import mongoose from "mongoose";
const AttendanceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ['Present', 'Absent'],
    required: true,
  },
  role: {
    type: String,
    enum: ['Teacher', 'Student'],
    required: true, // Helps differentiate between teacher and student attendance
  },
}, {
  timestamps: true, // Adds createdAt and updatedAt fields automatically
});

export const Attendance = mongoose.model('Attendance', AttendanceSchema);


