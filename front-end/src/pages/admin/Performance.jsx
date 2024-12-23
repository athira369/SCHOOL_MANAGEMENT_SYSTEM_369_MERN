import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar.jsx';
import axios from 'axios';

const PerformanceContainer = styled.div`
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

const PerformanceHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const PerformanceTable = styled.table`
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

const Performance = () => {
  const [teacherPerformanceData, setTeacherPerformanceData] = useState([]);
  const [studentPerformanceData, setStudentPerformanceData] = useState([]);

  const [error, setError] = useState(null);

  const [newTeacher, setNewTeacher] = useState({
    name: '',
    subject: '',
    rating: '',
    remarks: '',
  });

  const [newStudent, setNewStudent] = useState({
    name: '',
    grade: '',
    attendance: '',
  });

  useEffect(() => {
    fetchPerformanceData();
  }, []);

  const fetchPerformanceData = async () => {
    try {
      const [teacherResponse, studentResponse] = await Promise.all([
        axios.get('http://localhost:5000/teachers/performance'),
        axios.get('http://localhost:5000/students/performance'),
      ]);

      setTeacherPerformanceData(teacherResponse.data);
      setStudentPerformanceData(studentResponse.data);
   
    } 
    catch (err) 
    {
      setError('Failed to fetch performance data. Please try again later.');
    }
  };

  const handleAddTeacher = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/teachers/performance', newTeacher);
      setTeacherPerformanceData([...teacherPerformanceData, response.data]);
      setNewTeacher({ name: '', subject: '', rating: '', remarks: '' });
    } 
    catch (err)
     {
      setError('Failed to add teacher. Please try again.');
    }
  };

  const handleAddStudent = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/students/performance', newStudent);
      setStudentPerformanceData([...studentPerformanceData, response.data]);
      setNewStudent({ name: '', grade: '', attendance: '' });
    } 
    catch (err) 
    {
      setError('Failed to add student. Please try again.');
    }
  };

 

  return (
    <PerformanceContainer>
      <Sidebar />
      <PerformanceHeader>Teacher Performance</PerformanceHeader>

      <FormContainer>
        <Form onSubmit={handleAddTeacher}>
          <h3>Add Teacher Performance</h3>
          <Input
            type="text"
            placeholder="Name"
            value={newTeacher.name}
            onChange={(e) => setNewTeacher({ ...newTeacher, name: e.target.value })}
            required
          />
          <Input
            type="text"
            placeholder="Subject"
            value={newTeacher.subject}
            onChange={(e) => setNewTeacher({ ...newTeacher, subject: e.target.value })}
            required
          />
          <Input
            type="number"
            step="0.1"
            placeholder="Rating"
            value={newTeacher.rating}
            onChange={(e) => setNewTeacher({ ...newTeacher, rating: e.target.value })}
            required
          />
          <Input
            type="text"
            placeholder="Remarks"
            value={newTeacher.remarks}
            onChange={(e) => setNewTeacher({ ...newTeacher, remarks: e.target.value })}
          />
          <Button type="submit">Add Teacher</Button>
        </Form>
      </FormContainer>

      <PerformanceTable>
        <thead>
          <TableRow>
            <TableHeader>Teacher Name</TableHeader>
            <TableHeader>Subject</TableHeader>
            <TableHeader>Rating</TableHeader>
            <TableHeader>Remarks</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {teacherPerformanceData.map((performance) => (
            <TableRow key={performance.id}>
              <TableCell>{performance.name}</TableCell>
              <TableCell>{performance.subject}</TableCell>
              <TableCell>{performance.rating}</TableCell>
              <TableCell>{performance.remarks}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </PerformanceTable>

      <PerformanceHeader>Student Performance</PerformanceHeader>

      <FormContainer>
        <Form onSubmit={handleAddStudent}>
          <h3>Add Student Performance</h3>
          <Input
            type="text"
            placeholder="Name"
            value={newStudent.name}
            onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
            required
          />
          <Input
            type="text"
            placeholder="Grade"
            value={newStudent.grade}
            onChange={(e) => setNewStudent({ ...newStudent, grade: e.target.value })}
            required
          />
          <Input
            type="number"
            placeholder="Attendance (%)"
            value={newStudent.attendance}
            onChange={(e) => setNewStudent({ ...newStudent, attendance: e.target.value })}
            required
          />
          <Button type="submit">Add Student</Button>
        </Form>
      </FormContainer>

      <PerformanceTable>
        <thead>
          <TableRow>
            <TableHeader>Student Name</TableHeader>
            <TableHeader>Grade</TableHeader>
            <TableHeader>Attendance</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {studentPerformanceData.map((performance) => (
            <TableRow key={performance.id}>
              <TableCell>{performance.name}</TableCell>
              <TableCell>{performance.grade}</TableCell>
              <TableCell>{performance.attendance}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </PerformanceTable>
    </PerformanceContainer>
  );
};

export default Performance;
