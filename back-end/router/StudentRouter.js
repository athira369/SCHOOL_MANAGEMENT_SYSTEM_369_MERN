import express from "express";
import StudentController from "../controllers/StudentController.js"; // Correct import for StudentController

const router = express.Router();

// Route to create a new student
router.post("/create", StudentController.createStudent);

// Route to get all students
router.get("/getstudent", StudentController.getAllStudents);

// Route to get a specific student by ID
router.get("/:id", StudentController.getStudentById);

// Route to update a specific student by ID
router.put("/:id", StudentController.updateStudent);

// Route to delete a specific student by ID
router.delete("/:id", StudentController.deleteStudent);

export default router;
