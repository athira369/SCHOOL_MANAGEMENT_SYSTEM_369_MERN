import express from "express";
import StudentController from "../controllers/StudentController.js"; // Correct import for StudentController

const router = express.Router();

// Route to create a new student
router.post("/create", StudentController.createStudent);

// Route to get all students
router.get("/getstudent", StudentController.getAllStudents);



export default router;
