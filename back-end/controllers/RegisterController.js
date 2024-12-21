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
};

export default RegisterController;
