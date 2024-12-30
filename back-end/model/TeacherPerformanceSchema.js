import  mongoose from  "mongoose";
const TeacherPerformanceSchema = new mongoose.Schema(
    {
  
        name: { type: String, required: true }, // Name of the student (can be duplicated here for each performance)
        subject: { type: String, required: true }, // Subject (can be duplicated here for each performance)
        rating: { type: Number, required: true },
        remarks: { type: String, required: true },
        
      
});
export const TeacherPerformance = mongoose.model('TeacherPerformance',TeacherPerformanceSchema);