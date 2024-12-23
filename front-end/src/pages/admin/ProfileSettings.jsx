import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button,
     Input, 
     Form, 
     FormGroup, 
     Label, 
     Container,
      Header } from '../../styles/StyledComponents.jsx';
import Sidebar from './Sidebar';
const ProfileSettings = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    role: '',
    registrationDate: '',
  });
  const [editableProfile, setEditableProfile] = useState({
    name: '',
    email: '',
    role: '',
  });
  const [settings, setSettings] = useState({
    theme: 'light',
    notificationsEnabled: true,
  });
  const [editableSettings, setEditableSettings] = useState({
    theme: 'light',
    notificationsEnabled: true,
  });

  const [error, setError] = useState(null);

  // Fetch profile and settings data from the backend
  useEffect(() => {
    const fetchProfileAndSettings = async () => {
      try {
        const profileResponse = await axios.get('http://localhost:5000/api/profile');
        const settingsResponse = await axios.get('http://localhost:5000/api/settings');
        setProfile(profileResponse.data);
        setEditableProfile(profileResponse.data);
        setSettings(settingsResponse.data.settings);
        setEditableSettings(settingsResponse.data.settings);
      
      } catch (err) {
        setError('Failed to load profile and settings');
 
      }
    };

    fetchProfileAndSettings();
  }, []);

  // Handle input change for profile and settings
  const handleProfileInputChange = (e) => {
    const { name, value } = e.target;
    setEditableProfile((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSettingsInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEditableSettings((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Handle profile update
  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put('http://localhost:5000/api/profile', editableProfile);
      setProfile(response.data); // Update profile with new data
      alert('Profile updated successfully');
    } catch (err) {
      setError('Failed to update profile');
    }
  };

  // Handle settings update
  const handleSettingsSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put('http://localhost:5000/api/settings', editableSettings);
      setSettings(response.data.settings); // Update settings
      alert('Settings updated successfully');
    } catch (err) {
      setError('Failed to update settings');
    }
  };

 
  return (
    <Container>
        <Sidebar/>
      <Header>Profile and Settings</Header>

      {/* Profile Section */}
      <div>
        <h2>Profile Settings</h2>
        <Form onSubmit={handleProfileSubmit}>
          <FormGroup>
            <Label htmlFor="name">Name:</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={editableProfile.name}
              onChange={handleProfileInputChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email:</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={editableProfile.email}
              onChange={handleProfileInputChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="role">Role:</Label>
            <Input
              type="text"
              id="role"
              name="role"
              value={editableProfile.role}
              onChange={handleProfileInputChange}
              disabled
            />
          </FormGroup>
          <Button type="submit">Update Profile</Button>
        </Form>

        <div>
          <h3>Registration Details:</h3>
          <p>Registration Date: {profile.registrationDate}</p>
        </div>
      </div>

      {/* Settings Section */}
      <div>
        <h2>Application Settings</h2>
        <Form onSubmit={handleSettingsSubmit}>
          <FormGroup>
            <Label htmlFor="theme">Theme:</Label>
            <select
              id="theme"
              name="theme"
              value={editableSettings.theme}
              onChange={handleSettingsInputChange}
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </FormGroup>

          <FormGroup>
            <Label htmlFor="notificationsEnabled">Enable Notifications:</Label>
            <Input
              type="checkbox"
              id="notificationsEnabled"
              name="notificationsEnabled"
              checked={editableSettings.notificationsEnabled}
              onChange={handleSettingsInputChange}
            />
          </FormGroup>

          <Button type="submit">Update Settings</Button>
        </Form>
      </div>

      {error && <div style={{ color: 'red' }}>{error}</div>}
    </Container>
  );
};

export default ProfileSettings;
