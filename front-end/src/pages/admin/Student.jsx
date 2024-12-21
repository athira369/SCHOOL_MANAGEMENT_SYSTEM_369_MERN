import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import{
    StudentContainer,
    Content,
    StudentsContent,
    StudentsHeader,
    StudentList,
    StudentItem,
    AddStudentForm,
    AddStudentInput,
    AddStudentButton,
    SidebarContainer,
}
from "../../styles/StudentStyles.jsx";

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
      const response = await axios.get('http://localhost:5000/students');
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error.message);
    }
  };

  // Handle adding a new student
  const handleAddStudent = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/students', newStudent);
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
    
      <Content>
      <div>
      <h1>Student List</h1>
      <Sidebar/>
      {/* Display the "Add New Student" form if isAdding is true */}
      {isAdding ? (
        <form onSubmit={handleAddStudent}>
          <h2>Add New Student</h2>
          <input
            type="text"
            placeholder="Name"
            value={newStudent.name}
            onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
            required
          />
          <input
            type="number"
            placeholder="Age"
            value={newStudent.age}
            onChange={(e) => setNewStudent({ ...newStudent, age: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Grade"
            value={newStudent.grade}
            onChange={(e) => setNewStudent({ ...newStudent, grade: e.target.value })}
            required
          />
          <button type="submit">Add Student</button>
          <button type="button" onClick={() => setIsAdding(false)}>Cancel</button>
        </form>
      ) : (
        <button onClick={() => setIsAdding(true)}>Add New Student</button>
      )}

      {/* Display the list of students */}
      <ul>
        {students.length > 0 ? (
          students.map((student) => (
            <li key={student.id}>
              {student.name} - {student.age} - {student.grade}
              <button onClick={() => handleDeleteStudent(student.id)}>Delete</button>
            </li>
          ))
        ) : (
          <p>No students found.</p>
        )}
      </ul>
     
    </div>
    </Content>
    </StudentContainer>
  );
};

export default Student;
