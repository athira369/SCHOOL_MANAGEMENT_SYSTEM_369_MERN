// Import necessary modules and schema
import {Teacher} from '../model/TeacherSchema.js';
// import Teacher from '../model'

// Controller for fetching all teachers
const TeacherController ={
    //CONTROLLER FOR FETCHING ALL TEACHERS
 getAllTeachers : async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.status(200).json(teachers);
  } 
  catch (error) 
  {
    res.status(500).json({ message: 'Error fetching teachers', error: error.message });
  }
},

// Controller for creating a new teacher
 createTeacher : async (req, res) => {
    console.log("ddddddddddddddddddddddddddd");
  try {
    const { name, subject, email, phone, address, role } = req.body;
    const newTeacher = new Teacher({ name, subject, email, phone, address, role });
    const savedTeacher = await newTeacher.save();
    res.status(201).json(savedTeacher);
  } 
  catch (error) 
  {
    res.status(400).json({ message: 'Error creating teacher', error: error.message });
  }
},

// Controller for fetching a single teacher by ID
 getTeacherById : async (req, res) => {
  try {
    const { id } = req.params;
    const teacher = await Teacher.findById(id);
    if (!teacher) {
      return res.status(404).json({ message: 'Teacher not found' });
    }
    res.status(200).json(teacher);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching teacher', error: error.message });
  }
},

// Controller for updating a teacher
 updateTeacher : async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const updatedTeacher = await Teacher.findByIdAndUpdate(id, updates, { new: true });
    if (!updatedTeacher) {
      return res.status(404).json({ message: 'Teacher not found' });
    }
    res.status(200).json(updatedTeacher);
  } catch (error) {
    res.status(400).json({ message: 'Error updating teacher', error: error.message });
  }
},

// Controller for deleting a teacher
 deleteTeacher : async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTeacher = await Teacher.findByIdAndDelete(id);
    if (!deletedTeacher) {
      return res.status(404).json({ message: 'Teacher not found' });
    }
    res.status(200).json({ message: 'Teacher deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting teacher', error: error.message });
  }
},
};
export default TeacherController;
