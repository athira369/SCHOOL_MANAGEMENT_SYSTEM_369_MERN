// Classes.js
import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import {
  ClassesContainer,
  Content,
  ClassesContent,
  ClassesHeader,
  ClassList,
  ClassItem,
  AddClassForm,
  AddClassInput,
  AddClassButton,
} from '../../styles/ClassStyles';

const Class = () => {
  const [newClassName, setNewClassName] = useState('');
  const [newClassGrade, setNewClassGrade] = useState('');
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses =  async  () => {
    try {
      const response =  await axios.get('http://localhost:5000/class/getall');
      if (response.data && Array.isArray(response.data.classes)) {
        setClasses(response.data.classes);
      } else {
        console.error('Error fetching classes: Invalid data format', response.data);
      }
    } catch (error) {
      console.error('Error fetching classes:', error.message);
    }
  };

  const handleAddClass = async (e) => {
    e.preventDefault();
    if (newClassName.trim() !== '' && newClassGrade.trim() !== '') {
      try {
        const response =   await axios.post('http://localhost:5000/class/class', { 
          name: newClassName, 
          grade: newClassGrade 
        });
        console.log('Response data:', response.data);
        setClasses(prevClasses => {
          if (Array.isArray(prevClasses)) {
            return [...prevClasses, response.data];
          } else {
            console.error('Error adding class: Invalid state for classes:', prevClasses);
            return [];
          }
        });
        setNewClassName('');
        setNewClassGrade('');
      } catch (error) {
        console.error('Error adding class:', error);
      }
    } else {
      console.error('Both class name and grade are required.');
    }
  };

  return (
    <ClassesContainer>
      <Sidebar />
      <Content>
        <ClassesContent>
          <ClassesHeader>Classes</ClassesHeader>
          <AddClassForm onSubmit={handleAddClass}>
            <AddClassInput
              type="text"
              placeholder="Enter class name"
              value={newClassName}
              onChange={(e) => setNewClassName(e.target.value)}
            />
            <AddClassInput
              type="text"
              placeholder="Enter grade"
              value={newClassGrade}
              onChange={(e) => setNewClassGrade(e.target.value)}
            />
            <AddClassButton type="submit">Add Class</AddClassButton>
          </AddClassForm>
          <ClassList>
            {Array.isArray(classes) && classes.map((classItem, index) => (
              <ClassItem key={index}>
                {classItem.name} - Grade: {classItem.grade}
              </ClassItem>
            ))}
          </ClassList>
        </ClassesContent>
      </Content>
    </ClassesContainer>
  );
};

export default Class;
