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

  // Get a single student by ID
  getStudentById: async (req, res) => {
    try {
      const { id } = req.params;
      const student = await Student.findById(id);

      if (!student) {
        return res.status(404).json({ message: "Student not found" });
      }

      res.status(200).json(student);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error fetching student", error });
    }
  },

  // Update a student by ID
  updateStudent: async (req, res) => {
    try {
      const { id } = req.params;
      const { name, age, grade } = req.body;

      const updatedStudent = await Student.findByIdAndUpdate(
        id,
        { name, age, grade },
        { new: true, runValidators: true }
      );

      if (!updatedStudent) {
        return res.status(404).json({ message: "Student not found" });
      }

      res.status(200).json({ message: "Student updated successfully", student: updatedStudent });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error updating student", error });
    }
  },

  // Delete a student by ID
  deleteStudent: async (req, res) => {
    try {
      const { id } = req.params;
      const deletedStudent = await Student.findByIdAndDelete(id);

      if (!deletedStudent) {
        return res.status(404).json({ message: "Student not found" });
      }

      res.status(200).json({ message: "Student deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error deleting student", error });
    }
  },
};

export default StudentController;
