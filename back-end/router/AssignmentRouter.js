import express from "express";
import AssignmentController from "../controllers/AssignmentController.js";
const router = express.Router();
router.get("/getassignment",AssignmentController.getAssignments);
router.post("/createassignment",AssignmentController.createAssignment);
router.put("/:id",AssignmentController.updateAssignment);
router.delete("/:id",AssignmentController.deleteAssignment);
export default router;