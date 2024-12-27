import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar.jsx';
import axios from 'axios';

const AttendanceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f9f9f9;
  min-height: 100vh;
  left: 260px;
  position: absolute;
  top: 40px;
  width: 80%;
`;

const AttendanceHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const AttendanceTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: white;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #ccc;
  &:hover {
    background-color: #f1f1f1;
  }
`;

const TableHeader = styled.th`
  padding: 10px;
  text-align: left;
  background-color: #007bff;
  color: white;
`;

const TableCell = styled.td`
  padding: 10px;
  text-align: left;
`;

const FormContainer = styled.div`
  margin: 20px 0;
  width: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: white;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Attendance = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [error, setError] = useState(null);

  const [newAttendance, setNewAttendance] = useState({
    name: '',
    date: '',
    status: '',
    role: '',
  });

  useEffect(() => {
    fetchAttendanceData();
  }, []);

  const fetchAttendanceData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/attendance/getAllAttendance');
      setAttendanceData(response.data);
    } catch (err) {
      setError('Failed to fetch attendance data. Please try again later.');
    }
  };

  const handleAddAttendance = async (e) => {
    e.preventDefault();
    try {
      console.log(newAttendance);
      const response = await axios.post('http://localhost:5000/attendance/', newAttendance);
      setAttendanceData([...attendanceData, response.data]);
      setNewAttendance({ name: '', date: '', status: '', role: '' });
    } catch (err) {
      setError('Failed to add attendance. Please try again.');
    }
  };

  return (
    <AttendanceContainer>
      <Sidebar />
      <AttendanceHeader>Attendance Management</AttendanceHeader>

      <FormContainer>
        <Form>
          <h3>Add Attendance</h3>
          <Input
            type="text"
            placeholder="Name"
            value={newAttendance.name}
            onChange={(e) => setNewAttendance({ ...newAttendance, name: e.target.value })}
            required
          />
          <Input
            type="date"
            placeholder="Date"
            value={newAttendance.date}
            onChange={(e) => setNewAttendance({ ...newAttendance, date: e.target.value })}
            required
          />
          <Input
            type="text"
            placeholder="Status (Present/Absent)"
            value={newAttendance.status}
            onChange={(e) => setNewAttendance({ ...newAttendance, status: e.target.value })}
            required
          />
          <Input
            type="text"
            placeholder="Role (Teacher/Student)"
            value={newAttendance.role}
            onChange={(e) => setNewAttendance({ ...newAttendance, role: e.target.value })}
            required
          />
          <Button type="submit" onClick={handleAddAttendance}>Add Attendance</Button>
        </Form>
      </FormContainer>

      <AttendanceTable>
        <thead>
          <TableRow>
            <TableHeader>Name</TableHeader>
            <TableHeader>Date</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Role</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {attendanceData.map((attendance) => (
            <TableRow key={attendance.id}>
              <TableCell>{attendance.name}</TableCell>
              <TableCell>{attendance.date}</TableCell>
              <TableCell>{attendance.status}</TableCell>
              <TableCell>{attendance.role}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </AttendanceTable>
    </AttendanceContainer>
  );
};

export default Attendance;
