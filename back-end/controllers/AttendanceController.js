import { Attendance } from '../model/AttendanceSchema.js';

const AttendanceController = {
  // Get all attendance records
  getAllAttendance: async (req, res) => {
    try {
      const attendanceRecords = await Attendance.find();
      res.status(200).json(attendanceRecords);
    } catch (error) {
      res.status(500).json({ 
        message: 'Failed to fetch attendance records', 
        error: error.message 
      });
    }
  },

  // Get attendance by role (Teacher or Student)
  getAttendanceByRole: async (req, res) => {
    const { role } = req.params;
    try {
      const attendanceRecords = await Attendance.find({ role });
      res.status(200).json(attendanceRecords);
    } catch (error) {
      res.status(500).json({ 
        message: `Failed to fetch ${role} attendance records`, 
        error: error.message 
      });
    }
  },

  // Add new attendance record
  addAttendance: async (req, res) => {
    const { name, date, status, role } = req.body;

    // Validate required fields
    if (!name || !date || !status || !role) {
      return res.status(400).json({ 
        message: 'Name, date, status, and role are required' 
      });
    }

    // Validate status values
    if (!['Present', 'Absent'].includes(status)) {
      return res.status(400).json({ 
        message: 'Invalid status. Only "Present" or "Absent" are allowed.' 
      });
    }

    try {
      const newAttendance = new Attendance({ name, date, status, role });
      await newAttendance.save();
      res.status(201).json(newAttendance);
    } catch (error) {
      res.status(500).json({ 
        message: 'Failed to add attendance record', 
        error: error.message 
      });
    }
  },
};

export default AttendanceController;
