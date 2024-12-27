import express from "express";
import LibraryController from "../controllers/LibraryController.js";
const router = express.Router();
router.post("/addbook",LibraryController.addBook);
router.get("/getbooks",LibraryController.getAllBooks);
export default router;
