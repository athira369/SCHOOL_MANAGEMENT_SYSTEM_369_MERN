import { User } from '../model/RegisterSchema.js'; // Import your User model

const LoginController = {
  loginUser: (req, res) => {
    const { email, password, role } = req.body;

    // Find the user by email
    User.findOne({ email })
      .then((user) => {
        if (user) {
          // Check if the password matches
          if (password === user.password) {
            // Check if the provided role matches the user's role
            if (user.role === role) {
              // If the role matches, respond with the login success message and user details
              res.json({
                message: "Login successful",
                role: user.role,  // Send the user's role
                userId: user._id, // Optionally send user ID or other info
              });
            } else {
              // If the role doesn't match
              res.status(403).json({ message: "Role mismatch" });
            }
          } else {
            // Password is incorrect
            res.status(400).json({ message: "Incorrect password" });
          }
        } else {
          // No user found with the given email
          res.status(404).json({ message: "User not found" });
        }
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ message: "Server error" });
      });
  },
};

export default LoginController;
