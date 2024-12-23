// announcement.jsx
import React, { useState } from 'react';
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
  const [submitted, setSubmitted] = useState(false);

  const handleAnnouncementChange = (e) => {
    setAnnouncement(e.target.value);
  };

  const handleSubmit = () => {
    // Logic for saving or broadcasting the announcement
    setSubmitted(true);
    // Reset after submission
    setTimeout(() => {
      setAnnouncement('');
      setSubmitted(false);
    }, 3000); // Reset after 3 seconds
  };

  return (
    <AnnouncementContainer>
        <Sidebar/>
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
          {/* Here you can map over your announcements to display */}
          <AnnouncementItem>
            <AnnouncementContent>Sample announcement content.</AnnouncementContent>
          </AnnouncementItem>
        </AnnouncementList>
      </Content>
    </AnnouncementContainer>
  );
};

export default Announcement;
