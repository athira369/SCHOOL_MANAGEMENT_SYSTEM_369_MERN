import { Student } from "../model/StudentSchema.js";

const StudentController = {
  // Create a new student
  createStudent: async (req, res) => {
    try {
      const { name, age, grade } = req.body;

      if (!name || !age || !grade) {
        return res.status(400).json({ message: "All fields are required" });
      }

      const newStudent = new Student({ name, age, grade });
      await newStudent.save();

      res.status(201).json({ message: "Student created successfully", student: newStudent });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error creating student", error });
    }
  },

  // Get all students
  getAllStudents: async (req, res) => {
    try {
      const students = await Student.find();
      res.status(200).json(students);
    } 
    catch (error) 
    {
      console.error(error);
      res.status(500).json({ message: "Error fetching students", error });
    }
  },
};

export default StudentController;
