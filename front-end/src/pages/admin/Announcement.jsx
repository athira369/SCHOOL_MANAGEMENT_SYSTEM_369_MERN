import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Ensure you have axios installed
import {
  AnnouncementContainer,
  Content,
  AnnouncementHeader,
  AnnouncementTitle,
  AnnouncementForm,
  FormGroup,
  TextArea,
  Button,
  AnnouncementList,
  AnnouncementItem,
  AnnouncementContent,
} from '../../styles/AnnouncementStyles.jsx';
import Sidebar from './Sidebar.jsx';

const Announcement = () => {
  const [announcement, setAnnouncement] = useState('');
  const [announcements, setAnnouncements] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  // Fetch all announcements
  const fetchAnnouncements = async () => {
    try {
      const response = await axios.get('http://localhost:5000/announcements/getannouncement');
      setAnnouncements(response.data); // Assuming the API returns an array of announcements
    } catch (error) {
      console.error('Error fetching announcements:', error);
    }
  };

  // Create a new announcement
  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:5000/announcements/createannouncement', { content: announcement });
      setSubmitted(true);
      setAnnouncements((prev) => [response.data.announcement, ...prev]); // Add the new announcement to the list
      setAnnouncement(''); // Clear the input field
      setTimeout(() => setSubmitted(false), 3000); // Reset the success message after 3 seconds
    } catch (error) {
      console.error('Error creating announcement:', error);
    }
  };

  // Fetch announcements on component mount
  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const handleAnnouncementChange = (e) => {
    setAnnouncement(e.target.value);
  };

  return (
    <AnnouncementContainer>
      <Sidebar />
      <Content>
        <AnnouncementHeader>Important Announcement</AnnouncementHeader>
        <AnnouncementForm>
          <FormGroup>
            <AnnouncementTitle>Make a New Announcement</AnnouncementTitle>
            <TextArea
              value={announcement}
              onChange={handleAnnouncementChange}
              placeholder="Type the announcement here..."
              rows="4"
            />
          </FormGroup>
          <Button onClick={handleSubmit} disabled={!announcement.trim()}>
            Make Announcement
          </Button>
          {submitted && <p className="success-msg">Announcement successfully posted!</p>}
        </AnnouncementForm>

        <AnnouncementList>
          {announcements.length > 0 ? (
            announcements.map((item) => (
              <AnnouncementItem key={item._id}>
                <AnnouncementContent>{item.content}</AnnouncementContent>
                <p className="timestamp">{new Date(item.createdAt).toLocaleString()}</p>
              </AnnouncementItem>
            ))
          ) : (
            <p>No announcements yet.</p>
          )}
        </AnnouncementList>
      </Content>
    </AnnouncementContainer>
  );
};

export default Announcement;
