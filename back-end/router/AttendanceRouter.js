
import express from "express";
import AttendanceController from "../controllers/AttendanceController.js";
const router = express.Router();
router.post("/",AttendanceController.addAttendance);
router.get("/getAllAttendance",AttendanceController.getAllAttendance);
router.get("/getattendance/:role",AttendanceController.getAttendanceByRole);
export default router;