// eventRoutes.js
import express from "express";
const router = express.Router();
import  EventController from "../controllers/EventController.js";

// Routes
router.get('/', EventController.getAllEvents); // Fetch all events
router.get('/:id',EventController. getEventById); // Fetch a single event by ID
router.post('/createEvent',EventController. createEvent); // Create a new event

export default router;
