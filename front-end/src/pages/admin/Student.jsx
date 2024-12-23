import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import {
  StudentContainer,
  Content,
  StudentsContent,
  StudentsHeader,
  AddStudentForm,
  AddStudentInput,
  AddStudentButton,
  StudentList,
  Table,
  TableRow,
  TableHeader,
  TableData,
  DeleteButton
} from "../../styles/StudentStyles.jsx";

const Student = () => {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({ name: '', age: '', grade: '' });
  const [isAdding, setIsAdding] = useState(false);

  // Fetch students when the component mounts
  useEffect(() => {
    fetchStudents();
  }, []);

  // Function to fetch students from the server
  const fetchStudents = async () => {
    try {
      const response = await axios.get('http://localhost:5000/students/getstudent');
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error.message);
    }
  };

  // Handle adding a new student
  const handleAddStudent = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/students/create', newStudent);
      setNewStudent({ name: '', age: '', grade: '' });  // Reset form fields
      fetchStudents();  // Fetch updated list of students
      setIsAdding(false); // Close the form
    } catch (error) {
      console.error('Error adding student:', error.message);
    }
  };

  // Handle deleting a student
  const handleDeleteStudent = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/students/${id}`);
      fetchStudents();  // Fetch updated list of students
    } catch (error) {
      console.error('Error deleting student:', error.message);
    }
  };

  return (
    <StudentContainer>
      <Sidebar />
      <Content>
        <StudentsContent>
          <div>
            <StudentsHeader>Student List</StudentsHeader>

            {/* Display the "Add New Student" form if isAdding is true */}
            {isAdding ? (
              <AddStudentForm onSubmit={handleAddStudent}>
                <h2>Add New Student</h2>
                <label htmlFor="Name:">
                  <strong>Name:</strong>
                </label>
                <AddStudentInput
                  type="text"
                  placeholder="Name"
                  value={newStudent.name}
                  onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
                  required
                />
                <label htmlFor="Age">
                  <strong>Age:</strong>
                </label>
                <AddStudentInput
                  type="number"
                  placeholder="Age"
                  value={newStudent.age}
                  onChange={(e) => setNewStudent({ ...newStudent, age: e.target.value })}
                  required
                />
                <label htmlFor="Grade">
                  <strong>Grade:</strong>
                </label>
                <AddStudentInput
                  type="text"
                  placeholder="Grade"
                  value={newStudent.grade}
                  onChange={(e) => setNewStudent({ ...newStudent, grade: e.target.value })}
                  required
                />
                <AddStudentButton type="submit">Add Student</AddStudentButton>
                <AddStudentButton type="button" onClick={() => setIsAdding(false)}>
                  Cancel
                </AddStudentButton>
              </AddStudentForm>
            ) : (
              <AddStudentButton onClick={() => setIsAdding(true)}>Add New Student</AddStudentButton>
            )}

            {/* Display the list of students in a table */}
            <StudentList>
              <Table>
                <thead>
                  <TableRow>
                    <TableHeader>Name</TableHeader>
                    <TableHeader>Age</TableHeader>
                    <TableHeader>Grade</TableHeader>
                    <TableHeader>Actions</TableHeader>
                  </TableRow>
                </thead>
                <tbody>
                  {students.length > 0 ? (
                    students.map((student) => (
                      <TableRow key={student._id}>
                        <TableData>{student.name}</TableData>
                        <TableData>{student.age}</TableData>
                        <TableData>{student.grade}</TableData>
                        <TableData>
                          <DeleteButton onClick={() => handleDeleteStudent(student._id)}>
                            Delete
                          </DeleteButton>
                        </TableData>
                      </TableRow>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4">No students found.</td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </StudentList>
          </div>
        </StudentsContent>
      </Content>
    </StudentContainer>
  );
};

export default Student;
