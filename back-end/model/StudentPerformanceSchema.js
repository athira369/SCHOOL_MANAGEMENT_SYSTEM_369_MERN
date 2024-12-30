import mongoose from "mongoose";
const StudentPerformanceSchema = new mongoose.Schema({
  
        name:{type:String,required:true},
       grade: { 
           type: String, 
           enum: ['A', 'B', 'C', 'D', 'E', 'F'], 
           required: true 
         }, // Grade field (e.g., A, B, C, etc.)
         attendance: {
          type: Number, // Percentage of attendance
          min: 0,       // Minimum value is 0%
          max: 100,     // Maximum value is 100%
          required: true // Attendance is mandatory
      },
      
     
});
export const StudentPerformance = mongoose.model('StudentPerformane',StudentPerformanceSchema);