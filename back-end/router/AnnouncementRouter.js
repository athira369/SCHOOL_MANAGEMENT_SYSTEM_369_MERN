import express from "express";
import AnnouncementController from "../controllers/AnnouncementController.js";
const router = express.Router();
router.post("/createannouncement",AnnouncementController.createAnnouncement);
router.get("/getannouncement",AnnouncementController.getAllAnnouncements);
export default router;