
import { Assignment } from '../model/AssignmentSchema.js';
// Get all assignments
const AssignmentController = {
 getAssignments : async (req, res) => {
  try {
    const assignments = await Assignment.find();
    res.status(200).json(assignments);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching assignments', error });
  }
},

// Create a new assignment
 createAssignment : async (req, res) => {
  const { title, description, date,time,duration } = req.body;

  if (!title || !description || !date|| !time || !duration) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newAssignment = new Assignment({ title, description,  date,time,duration });
    await newAssignment.save();
    res.status(201).json(newAssignment);
  } catch (error) {
    res.status(500).json({ message: 'Error creating assignment', error });
  }
},

// Update an existing assignment
 updateAssignment : async (req, res) => {
  const { id } = req.params;
  const { title, description,  date,time,duration} = req.body;

  try {
    const updatedAssignment = await Assignment.findByIdAndUpdate(
      id,
      { title, description,  date,time,duration },
      { new: true } // Return the updated document
    );

    if (!updatedAssignment) {
      return res.status(404).json({ message: 'Assignment not found' });
    }

    res.status(200).json(updatedAssignment);
  } catch (error) {
    res.status(500).json({ message: 'Error updating assignment', error });
  }
},

// Delete an assignment
 deleteAssignment : async (req, res) => {
  const { id } = req.params;

  try {
    const deletedAssignment = await Assignment.findByIdAndDelete(id);

    if (!deletedAssignment) {
      return res.status(404).json({ message: 'Assignment not found' });
    }

    res.status(200).json({ message: 'Assignment deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting assignment', error });
  }
},
};
export default AssignmentController;
