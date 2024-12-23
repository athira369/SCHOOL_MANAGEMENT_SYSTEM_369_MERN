import express from "express";
import ExamController from "../controllers/ExamController.js";
const router = express.Router();
router.get("/getexam",ExamController.getAllExams);
router.post("/createexam",ExamController.createExam);
export default router;