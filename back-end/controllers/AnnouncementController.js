import {Announcement} from '../model/AnnouncementSchema.js'; // Adjust the path based on your structure
const AnnouncementController ={
// Create a new announcement
createAnnouncement : async (req, res) => {
  try {
    const { content } = req.body;

    if (!content.trim()) {
      return res.status(400).json({ message: 'Content cannot be empty' });
    }

    const newAnnouncement = new Announcement({
      content,
      createdBy: req.user?.id || null, // Assumes `req.user` contains the authenticated user
    });

    await newAnnouncement.save();
    res.status(201).json({ message: 'Announcement created successfully', announcement: newAnnouncement });
  } catch (error) 
  {
    console.error(error);
    res.status(500).json({ message: 'Failed to create announcement', error });
  }
},

// Get all announcements
getAllAnnouncements : async (req, res) => {
  try {
    const announcements = await Announcement.find().sort({ createdAt: -1 });
    res.status(200).json(announcements);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to retrieve announcements', error });
  }
},
};
export default AnnouncementController;



