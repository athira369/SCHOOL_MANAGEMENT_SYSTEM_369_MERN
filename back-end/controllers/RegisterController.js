import {User} from "../model/RegisterSchema.js"; // Import the User model

const RegisterController = {
  registerUser: (req, res) => {
    const { Id, firstName, lastName, email, role, contactNumber, address, password } = req.body;

    // Basic validation
    if (!Id || !firstName || !lastName || !email || !contactNumber || !password || !role ||!address) {
      return res.status(400).json({ message: "All required fields must be provided" });
    }

    // Check for duplicate email or ID
    User.findOne({ $or: [{ email }, { Id }] })
      .then((existingUser) => {
        if (existingUser) {
          return res.status(400).json({
            message: existingUser.email === email
              ? "Email already exists"
              : "ID already exists",
          });
        }

        // Create a new user
        return User.create(req.body);
      })
      .then((newUser) => {
        // Respond with success and the newly created user
        res.status(201).json({
          message: "User registered successfully",
          user: {
            id: newUser.Id,
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            email: newUser.email,
            role: newUser.role,
            contactNumber: newUser.contactNumber,
            address: newUser.address,
            joiningDate: newUser.joiningDate,
          },
        });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ message: "An error occurred during registration" });
      });
  },





   // GET method to retrieve user details
   getUserDetails: (req, res) => {
    const { id } = req.query;

    if (id) {
      // Find a specific user by ID
      User.findOne({ Id: id })
        .then((user) => {
          if (!user) {
            return res.status(404).json({ message: "User not found" });
          }

          res.status(200).json({
            message: "User retrieved successfully",
            user: {
              id: user.Id,
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email,
              role: user.role,
              contactNumber: user.contactNumber,
              address: user.address,
              joiningDate: user.joiningDate,
            },
          });
        })
        .catch((err) => {
          console.error(err);
          res.status(500).json({ message: "An error occurred while retrieving the user" });
        });
    } else {
      // Retrieve all users if no ID is provided
      User.find()
        .then((users) => {
          if (users.length === 0) {
            return res.status(404).json({ message: "No users found" });
          }

          res.status(200).json({
            message: "Users retrieved successfully",
            users: users.map((user) => ({
              id: user.Id,
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email,
              role: user.role,
              contactNumber: user.contactNumber,
              address: user.address,
              joiningDate: user.joiningDate,
            })),
          });
        })
        .catch((err) => {
          console.error(err);
          res.status(500).json({ message: "An error occurred while retrieving users" });
        });
    }
  },
};

export default RegisterController;
