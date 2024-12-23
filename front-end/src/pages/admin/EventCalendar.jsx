import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Calendar from 'react-calendar'; // Install react-calendar using npm
import 'react-calendar/dist/Calendar.css';
import Sidebar from './Sidebar';

const EventCalendar = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ title: '', description: '', date: '', time: '', location: '' });
  const [editingEvent, setEditingEvent] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [eventDetails, setEventDetails] = useState(null);

  // Fetch all events from the server
  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:5000/events');
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const handleAddEvent = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/events', newEvent);
      setEvents([...events, response.data]);
      setNewEvent({ title: '', description: '', date: '', time: '', location: '' });
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };

  const handleDeleteEvent = async (eventId) => {
    try {
      await axios.delete(`http://localhost:5000/events/${eventId}`);
      setEvents(events.filter(event => event.id !== eventId));
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  const handleEditEvent = (event) => {
    setEditingEvent(event);
    setNewEvent({ ...event });
  };

  const handleUpdateEvent = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:5000/events/${editingEvent.id}`, newEvent);
      setEvents(events.map(event => (event.id === editingEvent.id ? response.data : event)));
      setEditingEvent(null);
      setNewEvent({ title: '', description: '', date: '', time: '', location: '' });
    } catch (error) {
      console.error('Error updating event:', error);
    }
  };

  // Handle calendar date change and filter events based on the selected date
  const handleDateChange = (date) => {
    setSelectedDate(date);
    const eventsOnSelectedDate = events.filter(
      (event) => new Date(event.date).toDateString() === date.toDateString()
    );
    setEventDetails(eventsOnSelectedDate);
  };

  return (
    <div style={{ display: 'flex', padding: '20px' }}>
      <div style={{ flex: 1, paddingRight: '20px' }}>
        <Sidebar/>
        <h2>Event Management</h2>
        <form onSubmit={editingEvent ? handleUpdateEvent : handleAddEvent}>
          <input
            type="text"
            placeholder="Event Title"
            value={newEvent.title}
            onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
            required
          />
          <textarea
            placeholder="Event Description"
            value={newEvent.description}
            onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
            required
          />
          <input
            type="date"
            value={newEvent.date}
            onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
            required
          />
          <input
            type="time"
            value={newEvent.time}
            onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Location"
            value={newEvent.location}
            onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
            required
          />
          <button type="submit">{editingEvent ? 'Update Event' : 'Add Event'}</button>
        </form>

        <h3>All Events</h3>
        <ul>
          {events.map((event) => (
            <li key={event.id}>
              <h4>{event.title}</h4>
              <p>{event.description}</p>
              <p>{event.date} at {event.time}</p>
              <p>Location: {event.location}</p>
              <button onClick={() => handleEditEvent(event)}>Edit</button>
              <button onClick={() => handleDeleteEvent(event.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>

      <div style={{ flex: 1 }}>
        <h2>Calendar</h2>
        <Calendar onChange={handleDateChange} value={selectedDate} />
        {eventDetails && eventDetails.length > 0 ? (
          <div>
            <h3>Events on {selectedDate.toDateString()}:</h3>
            <ul>
              {eventDetails.map((event) => (
                <li key={event.id}>
                  <h4>{event.title}</h4>
                  <p>{event.description}</p>
                  <p>{event.time}</p>
                  <p>Location: {event.location}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>No events on this date</p>
        )}
      </div>
    </div>
  );
};

export default EventCalendar;
