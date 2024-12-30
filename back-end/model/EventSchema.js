// eventModel.js
import  mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Event title is required'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Event description is required'],
    trim: true,
  },
  date: {
    type: Date,
    required: [true, 'Event date is required'],
  },
  time: {
    type: String,
    required: [true, 'Event time is required'],
  },
  location: {
    type: String,
    required: [true, 'Event location is required'],
    trim: true,
  },
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt fields
});

export const Event = mongoose.model('Event', EventSchema);
