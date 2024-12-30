import { TeacherPerformance} from "../model/TeacherPerformanceSchema.js";
import{ StudentPerformance} from "../model/StudentPerformanceSchema.js";


// Your existing Student model
const PerformanceController ={
// Fetch all teacher performance data
 getTeacherPerformance : async (req, res) => {
  try {
    const teachers = await TeacherPerformance.find({},'name subject rating remarks');
     // Adjust fields as per your schema
    res.status(200).json(teachers);
  } catch (error) 
  {
    res.status(500).json({ error: 'Failed to fetch teacher performance data.' });
  }
},

// Add or update teacher performance
 addTeacherPerformance : async (req, res) => {
  try {
    const { name, subject, rating, remarks } = req.body;

    // Update if teacher already exists, otherwise add new
    const teacher = await TeacherPerformance.findOneAndUpdate(
      { name, subject },
      { $set: { rating, remarks } },
      { upsert: true, new: true }
    );

    res.status(201).json(teacher);
  } catch (error) {
    console.log(error);
    
    res.status(400).json({ error: 'Failed to add teacher performance.' });
  }
},

// Fetch all student performance data
 getStudentPerformance : async (req, res) => {
  try {
    const students = await StudentPerformance.find({}, 'name grade attendance'); // Adjust fields as per your schema
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch student performance data.' });
  }
},

// Add or update student performance
 addStudentPerformance : async (req, res) => {
  try {
    const { name, grade, attendance } = req.body;

    // Update if student already exists, otherwise add new
    const student = await StudentPerformance.findOneAndUpdate(
   
      { name },
      { $set: { grade, attendance } },
      { upsert: true, new: true }
    );

    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ error: 'Failed to add student performance.' });
  }
},
};
export default PerformanceController;


