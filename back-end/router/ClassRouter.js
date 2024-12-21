import express from "express";
import ClassController from "../controllers/ClassController.js";
const router = express.Router();
router.post("/class",ClassController.addClass);
router.get("/getall",ClassController.getAllClasses);
export default router;