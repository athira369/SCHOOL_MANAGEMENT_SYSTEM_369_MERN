import mongoose from "mongoose";
const AssignmentSchema = new mongoose.Schema({
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
      dueDate: {
        type: Date,
        required: true,
      },
});
export const Assignment = mongoose.model('Assignment',AssignmentSchema);