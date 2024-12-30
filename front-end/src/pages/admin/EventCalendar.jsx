import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Sidebar from './Sidebar';

// Styled components
const Container = styled.div`
  display: flex;
  padding: 20px;
  left: 260px; /* Align to the left */
  position: absolute;
  top: 40px; /* Align to the top */
   width: 80%;
`;

const SidebarContainer = styled.div`
  flex: 1;
  padding-right: 20px;
`;

const ContentContainer = styled.div`
  flex: 1;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
`;

const EventForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const TextArea = styled.textarea`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none;
  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 10px;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  background-color: ${(props) => (props.danger ? '#ff4d4f' : '#007bff')};
  color: white;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.danger ? '#e43e3f' : '#0056b3')};
  }
`;

const EventList = styled.ul`
  list-style: none;
  padding: 0;
`;

const EventListItem = styled.li`
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const EventDetails = styled.div`
  margin-top: 20px;
  background: #f9f9f9;
  padding: 10px;
  border-radius: 4px;
`;

const NoEventMessage = styled.p`
  font-size: 1rem;
  color: #666;
`;

// Main Component
const EventCalendar = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ title: '', description: '', date: '', time: '', location: '' });
  const [editingEvent, setEditingEvent] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [eventDetails, setEventDetails] = useState(null);

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
      const response = await axios.post('http://localhost:5000/events/createEvent', newEvent);
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

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const eventsOnSelectedDate = events.filter(
      (event) => new Date(event.date).toDateString() === date.toDateString()
    );
    setEventDetails(eventsOnSelectedDate);
  };

  return (
    <Container>
      <SidebarContainer>
        <Sidebar />
        <SectionTitle>Event Management</SectionTitle>
        <EventForm onSubmit={editingEvent ? handleUpdateEvent : handleAddEvent}>
          <Input
            type="text"
            placeholder="Event Title"
            value={newEvent.title}
            onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
            required
          />
          <TextArea
            placeholder="Event Description"
            value={newEvent.description}
            onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
            required
          />
          <Input
            type="date"
            value={newEvent.date}
            onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
            required
          />
          <Input
            type="time"
            value={newEvent.time}
            onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
            required
          />
          <Input
            type="text"
            placeholder="Location"
            value={newEvent.location}
            onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
            required
          />
          <Button type="submit">{editingEvent ? 'Update Event' : 'Add Event'}</Button>
          {editingEvent && <Button type="button" danger onClick={() => setEditingEvent(null)}>Cancel</Button>}
        </EventForm>

        <SectionTitle>All Events</SectionTitle>
        <EventList>
          {events.map((event) => (
            <EventListItem key={event.id}>
              <h4>{event.title}</h4>
              <p>{event.description}</p>
              <p>{event.date} at {event.time}</p>
              <p>Location: {event.location}</p>
              <Button onClick={() => handleEditEvent(event)}>Edit</Button>
              <Button danger onClick={() => handleDeleteEvent(event.id)}>Delete</Button>
            </EventListItem>
          ))}
        </EventList>
      </SidebarContainer>

      <ContentContainer>
        <SectionTitle>Calendar</SectionTitle>
        <Calendar onChange={handleDateChange} value={selectedDate} />
        {eventDetails && eventDetails.length > 0 ? (
          <EventDetails>
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
          </EventDetails>
        ) : (
          <NoEventMessage>No events on this date</NoEventMessage>
        )}
      </ContentContainer>
    </Container>
  );
};

export default EventCalendar;
