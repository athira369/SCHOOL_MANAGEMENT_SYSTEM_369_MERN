import { Class } from "../model/ClassSchema.js"; // Import the Class model

const ClassController = {
  // Add a new class
  addClass: async (req, res) => {
    try {
      const { name, grade } = req.body;

      // Create a new class
      const newClass = new Class({
        name,
        grade,
      });

      const savedClass = await newClass.save();
      res.status(201).json(savedClass); // Return the saved class

    } catch (error) {
      console.error("Error adding class:", error);
      res.status(500).json({ message: "Error adding class" });
    }
  },

  // Get all classes
  getAllClasses: async (req, res) => {
    try {
      const classes = await Class.find();
      res.status(200).json({ classes }); // Return all classes

    } catch (error) {
      console.error("Error fetching classes:", error);
      res.status(500).json({ message: "Error fetching classes" });
    }
  },
};

export default ClassController;
