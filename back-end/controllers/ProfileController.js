import { User } from '../model/RegisterSchema.js';

const profileController = {
  // Fetch admin profile
  getAdminProfile: async (req, res) => {
    try {
      const admin = await User.findOne({ role: 'admin' });
      if (!admin) {
        return res.status(404).json({ message: 'Admin not found' });
      }
      res.status(200).json(admin);
    } catch (err) {
      res.status(500).json({ message: 'Error retrieving admin data', error: err });
    }
  },

  // Fetch user profile
  getProfile: async (req, res) => {
    try {
      const userId = req.user.id; // Assuming user ID is set by auth middleware
      const user = await User.findById(userId).select('-password');
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch profile details', error: err });
    }
  },

  // Update profile
  updateProfile: async (req, res) => {
    try {
      const userId = req.user.id; // Assuming user ID is set by auth middleware
      const { name, email, role } = req.body;

      if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
      }

      const updatedUser = await User.findByIdAndUpdate(
        userId,
        { name, email, role },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(400).json({ error: 'Failed to update profile', error: err });
    }
  },
};

export default profileController;
