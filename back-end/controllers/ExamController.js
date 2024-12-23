// controllers/examController.js
import {Exam} from '../model/ExamSchema.js';
const examController = {

// Assuming you have a Mongoose model for exams

// Fetch all exams
 getAllExams : async (req, res) => {
  try {
    const exams = await Exam.find();
    res.status(200).json(exams);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch exams' });
  }
},

// Fetch a single exam by ID
 getExamById : async (req, res) => {
  const { id } = req.params;
  try {
    const exam = await Exam.findById(id);
    if (!exam) {
      return res.status(404).json({ error: 'Exam not found' });
    }
    res.status(200).json(exam);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch exam' });
  }
},
// Create a new exam
 createExam : async (req, res) => {
  const { title, description, date, time, duration } = req.body;

  try {
    const newExam = new Exam({
      title,
      description,
      date,
      time,
      duration,
    });
    await newExam.save();
    res.status(201).json(newExam);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create exam' });
  }
},

// Update an existing exam
 updateExam : async (req, res) => {
  const { id } = req.params;
  const { title, description, date, time, duration } = req.body;

  try {
    const updatedExam = await Exam.findByIdAndUpdate(
      id,
      { title, description, date, time, duration },
      { new: true } // Return the updated document
    );

    if (!updatedExam) {
      return res.status(404).json({ error: 'Exam not found' });
    }

    res.status(200).json(updatedExam);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update exam' });
  }
},

// Delete an exam
 deleteExam :async (req, res) => {
  const { id } = req.params;

  try {
    const deletedExam = await Exam.findByIdAndDelete(id);
    if (!deletedExam) {
      return res.status(404).json({ error: 'Exam not found' });
    }
    res.status(200).json({ message: 'Exam deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete exam' });
  }
} ,
};

export default examController;