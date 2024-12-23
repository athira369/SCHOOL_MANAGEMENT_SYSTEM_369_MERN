import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  ExamContainer,
  ExamTitle,
  ExamDescription,
  ExamDetails,
  ExamForm,
  FormLabel,
  FormInput,
  AddExamButton,
  ExamHeader,
  ExamBorder,
  Heading,
} from '../../styles/ExamStyles.jsx';
import Sidebar from './Sidebar.jsx';



const Exam = () => {
  const [exams, setExams] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [newExam, setNewExam] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    duration: '',
  });
 
  const [error, setError] = useState('');

  // Fetch exams from API on component mount
  useEffect(() => {
    fetchExams();
  }, []);
    const fetchExams = async () => {
      try {
       
        const response = await axios.get('http://localhost:5000/exams/getexam');
        setExams(response.data);
      } catch (error) {
        setError('Failed to load exams. Please try again later.');
        console.log('Error fetching Exam:',error);
      } 
    };

    

  // Handle adding a new exam
  const handleAddExam = async (e) => {
    debugger; 
    // e.preventDefault();
    console.log('Form submitted, sending request...');

    try {
     
      const response = await axios.post('http://localhost:5000/exams/createexam', newExam);
      console.log('Response from backend:', response.data);
      setExams((prevExams) => [...prevExams, response.data]);

      // Reset form fields
      setNewExam({
        title: '',
        description: '',
        date: '',
        time: '',
        duration: '',
      });
      
      fetchExams();
      setIsAdding(false);
    } catch (error) {
      setError('Failed to add exam. Please try again.');
      console.error('Error adding Exam:',error);
    } 
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewExam((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <ExamContainer>
      <Sidebar />
      <ExamHeader>Exam Management</ExamHeader>
      
      {isAdding ? (
        <ExamForm onSubmit={handleAddExam}>
          <h2>Add New Exam</h2>
          <FormLabel>
            Title:
            <FormInput
              type="text"
              name="title"
              value={newExam.title}
              onChange={handleInputChange}
            />
          </FormLabel>
          <FormLabel>
            Description:
            <FormInput
              type="text"
              name="description"
              value={newExam.description}
              onChange={handleInputChange}
            />
          </FormLabel>
          <FormLabel>
            Date:
            <FormInput
              type="date"
              name="date"
              value={newExam.date}
              onChange={handleInputChange}
            />
          </FormLabel>
          <FormLabel>
            Time:
            <FormInput
              type="time"
              name="time"
              value={newExam.time}
              onChange={handleInputChange}
            />
          </FormLabel>
          <FormLabel>
            Duration:
            <FormInput
              type="text"
              name="duration"
              value={newExam.duration}
              onChange={handleInputChange}
            />
          </FormLabel>
          <AddExamButton type="button" onClick={()=>{handleAddExam()}}>Add Exam</AddExamButton>
          <AddExamButton type="button" onClick={() => setIsAdding(false)}>
            Cancel
          </AddExamButton>
        </ExamForm>
      ) : (
        <AddExamButton onClick={() => setIsAdding(true)}>Add New Exam</AddExamButton>
      )}
<Heading>Exam Details</Heading>
      {exams.map((exam) => (
        
        <div key={exam.examId}>
          <ExamTitle>{exam.title}</ExamTitle>
          <ExamDescription>{exam.description}</ExamDescription>
          <ExamDetails>
            < ExamBorder>
              <p>Date: {exam.date}</p>
              <p>Time: {exam.time}</p>
              <p>Duration: {exam.duration}</p>
            </ ExamBorder>
          </ExamDetails>
        </div>
      ))}
    </ExamContainer>
  );
};

export default Exam;
