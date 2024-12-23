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
  left: 260px; /* Align to the left */
  position: absolute;
  top: 40px; /* Align to the top */
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
  const [teacherAttendanceData, setTeacherAttendanceData] = useState([]);
  const [studentAttendanceData, setStudentAttendanceData] = useState([]);
  const [error, setError] = useState(null);

  const [newTeacherAttendance, setNewTeacherAttendance] = useState({
    name: '',
    date: '',
    status: '',
  });

  const [newStudentAttendance, setNewStudentAttendance] = useState({
    name: '',
    date: '',
    status: '',
  });

  useEffect(() => {
    fetchAttendanceData();
  }, []);

  const fetchAttendanceData = async () => {
    try {
      const [teacherResponse, studentResponse] = await Promise.all([
        axios.get('http://localhost:5000/teachers/attendance'),
        axios.get('http://localhost:5000/students/attendance'),
      ]);

      setTeacherAttendanceData(teacherResponse.data);
      setStudentAttendanceData(studentResponse.data);
     
    }
     catch (err) {
      setError('Failed to fetch attendance data. Please try again later.');
      
  };
}

  const handleAddTeacherAttendance = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/teachers/attendance', newTeacherAttendance);
      setTeacherAttendanceData([...teacherAttendanceData, response.data]);
      setNewTeacherAttendance({ name: '', date: '', status: '' });
    } catch (err) {
      setError('Failed to add teacher attendance. Please try again.');
    }
  };

  const handleAddStudentAttendance = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/students/attendance', newStudentAttendance);
      setStudentAttendanceData([...studentAttendanceData, response.data]);
      setNewStudentAttendance({ name: '', date: '', status: '' });
    } catch (err) {
      setError('Failed to add student attendance. Please try again.');
    }
  };



  return (
    <AttendanceContainer>
      <Sidebar />
      <AttendanceHeader>Teacher Attendance</AttendanceHeader>

      <FormContainer>
        <Form onSubmit={handleAddTeacherAttendance}>
          <h3>Add Teacher Attendance</h3>
          <Input
            type="text"
            placeholder="Name"
            value={newTeacherAttendance.name}
            onChange={(e) => setNewTeacherAttendance({ ...newTeacherAttendance, name: e.target.value })}
            required
          />
          <Input
            type="date"
            placeholder="Date"
            value={newTeacherAttendance.date}
            onChange={(e) => setNewTeacherAttendance({ ...newTeacherAttendance, date: e.target.value })}
            required
          />
          <Input
            type="text"
            placeholder="Status (Present/Absent)"
            value={newTeacherAttendance.status}
            onChange={(e) => setNewTeacherAttendance({ ...newTeacherAttendance, status: e.target.value })}
            required
          />
          <Button type="submit">Add Attendance</Button>
        </Form>
      </FormContainer>

      <AttendanceTable>
        <thead>
          <TableRow>
            <TableHeader>Name</TableHeader>
            <TableHeader>Date</TableHeader>
            <TableHeader>Status</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {teacherAttendanceData.map((attendance) => (
            <TableRow key={attendance.id}>
              <TableCell>{attendance.name}</TableCell>
              <TableCell>{attendance.date}</TableCell>
              <TableCell>{attendance.status}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </AttendanceTable>

      <AttendanceHeader>Student Attendance</AttendanceHeader>

      <FormContainer>
        <Form onSubmit={handleAddStudentAttendance}>
          <h3>Add Student Attendance</h3>
          <Input
            type="text"
            placeholder="Name"
            value={newStudentAttendance.name}
            onChange={(e) => setNewStudentAttendance({ ...newStudentAttendance, name: e.target.value })}
            required
          />
          <Input
            type="date"
            placeholder="Date"
            value={newStudentAttendance.date}
            onChange={(e) => setNewStudentAttendance({ ...newStudentAttendance, date: e.target.value })}
            required
          />
          <Input
            type="text"
            placeholder="Status (Present/Absent)"
            value={newStudentAttendance.status}
            onChange={(e) => setNewStudentAttendance({ ...newStudentAttendance, status: e.target.value })}
            required
          />
          <Button type="submit">Add Attendance</Button>
        </Form>
      </FormContainer>

      <AttendanceTable>
        <thead>
          <TableRow>
            <TableHeader>Name</TableHeader>
            <TableHeader>Date</TableHeader>
            <TableHeader>Status</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {studentAttendanceData.map((attendance) => (
            <TableRow key={attendance.id}>
              <TableCell>{attendance.name}</TableCell>
              <TableCell>{attendance.date}</TableCell>
              <TableCell>{attendance.status}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </AttendanceTable>
    </AttendanceContainer>
 
        );
      
    };
  
export default Attendance;


