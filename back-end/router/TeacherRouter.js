import express from 'express';
import TeacherController from "../controllers/TeacherController.js";

const                     router = express.Router();

// Define routes
router.get('/getteacher', TeacherController.getAllTeachers);
router.post('/createteacher', TeacherController.createTeacher);
router.get('/:id',TeacherController.getTeacherById);
router.put('/:id',TeacherController.updateTeacher);
router.delete('/:id',TeacherController.deleteTeacher);

export default router;
