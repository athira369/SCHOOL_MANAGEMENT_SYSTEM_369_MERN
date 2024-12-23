import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar.jsx';
import {
  TeacherContainer,
  TeachersHeader,
  TeachersTable,
  TableHeader,
  TableRow,
  TableData,
  AddTeacherButton,
  DeleteButton,
  EditButton,
  AddTeacherForm,
  AddTeacherInput,
  Content,
  TeachersContent,
} from '../../styles/TeacherStyles.jsx';

const Teacher = () => {
  const [teachers, setTeachers] = useState([]);
  const [newTeacher, setNewTeacher] = useState({ name: '', subject: '', email: '' });
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/teachers/getteacher');
      setTeachers(response.data);
    } catch (error) {
      console.error('Error fetching teachers:', error);
    }
  };

  const handleAddTeacher = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/teachers/createteacher', newTeacher);
      setNewTeacher({ name: '', subject: '', email: '' });
      fetchTeachers();
      setIsAdding(false);
    } catch (error) {
      console.error('Error adding teacher:', error);
    }
  };

  const handleDeleteTeacher = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/teachers/${id}`);
      fetchTeachers();
    } catch (error) {
      console.error('Error deleting teacher:', error);
    }
  };

  return (
    <TeacherContainer>
      <Sidebar />
      <Content>
        <TeachersContent>
          <TeachersHeader>Teacher Management</TeachersHeader>
          {isAdding ? (
            <AddTeacherForm onSubmit={handleAddTeacher}>
              <h2>Add New Teacher</h2>
              <label htmlFor="name">
                <strong>Name:</strong>
              </label>
              <AddTeacherInput
                type="text"
                placeholder="Name"
                value={newTeacher.name}
                onChange={(e) => setNewTeacher({ ...newTeacher, name: e.target.value })}
                required
              />
              <label htmlFor="subject">
                <strong>Subject:</strong>
              </label>
              <AddTeacherInput
                type="text"
                placeholder="Subject"
                value={newTeacher.subject}
                onChange={(e) => setNewTeacher({ ...newTeacher, subject: e.target.value })}
                required
              />
              <label htmlFor="email">
                <strong>Email:</strong>
              </label>
              <AddTeacherInput
                type="email"
                placeholder="Email"
                value={newTeacher.email}
                onChange={(e) => setNewTeacher({ ...newTeacher, email: e.target.value })}
                required
              />
              <AddTeacherButton type="submit">Add Teacher</AddTeacherButton>
              <AddTeacherButton type="button" onClick={() => setIsAdding(false)}>
                Cancel
              </AddTeacherButton>
            </AddTeacherForm>
          ) : (
            <AddTeacherButton onClick={() => setIsAdding(true)}>Add New Teacher</AddTeacherButton>
          )}

          <TeachersTable>
            <thead>
              <TableRow>
                <TableHeader>Name</TableHeader>
                <TableHeader>Subject</TableHeader>
                <TableHeader>Email</TableHeader>
                <TableHeader>Actions</TableHeader>
              </TableRow>
            </thead>
            <tbody>
              {teachers.length > 0 ? (
                teachers.map((teacher) => (
                  <TableRow key={teacher.id}>
                    <TableData>{teacher.name}</TableData>
                    <TableData>{teacher.subject}</TableData>
                    <TableData>{teacher.email}</TableData>
                    <TableData>
                      <EditButton onClick={() => console.log(`Edit Teacher ID: ${teacher.id}`)}>
                        Edit
                      </EditButton>
                      <DeleteButton onClick={() => handleDeleteTeacher(teacher.id)}>
                        Delete
                      </DeleteButton>
                    </TableData>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableData colSpan="4">No teachers found</TableData>
                </TableRow>
              )}
            </tbody>
          </TeachersTable>
        </TeachersContent>
      </Content>
    </TeacherContainer>
  );
};

export default Teacher;
