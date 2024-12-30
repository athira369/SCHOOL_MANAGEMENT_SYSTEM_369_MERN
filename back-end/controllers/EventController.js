// eventController.js
import {Event}  from '../model/EventSchema.js'; // Import the Event model
const EventController = {
// Fetch all events
 getAllEvents : async (req, res) => {
  try {
    const events = await Event.find(); // Fetch all events from the database
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching events', error });
  }
},

// Fetch a single event by ID
 getEventById : async (req, res) => {
  try {
    const event = await Event.findById(req.params.id); // Find event by ID
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching the event', error });
  }
},

// Create a new event
 createEvent : async (req, res) => {
  const { title, description, date, time, location } = req.body;

  // Validate request body
  if (!title || !description || !date || !time || !location) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newEvent = new Event({ title, description, date, time, location });
    const savedEvent = await newEvent.save(); // Save the event to the database
    res.status(201).json(savedEvent);
  } catch (error) {
    res.status(500).json({ message: 'Error creating the event', error });
  }
},
};
export default EventController;
