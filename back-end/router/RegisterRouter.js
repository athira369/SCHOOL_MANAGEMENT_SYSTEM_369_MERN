import express from "express";
import RegisterController from "../controllers/RegisterController.js";
const router = express.Router();
router.post("/register",RegisterController.registerUser);
router.get("/getUserDetails",RegisterController.getUserDetails);
export default router;


