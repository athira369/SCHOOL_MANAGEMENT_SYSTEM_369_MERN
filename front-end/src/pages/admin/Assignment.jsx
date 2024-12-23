import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar.jsx';
import {
  AssignmentContainer,
  AssignmentHeader,
  AssignmentDescription,
  AssignmentTable,
  TableHeader,
  TableRow,
  TableData,
  AddAssignmentButton,
  EditButton,
  DeleteButton,
  AddAssignmentForm,
  AddAssignmentInput,
  AddAssignmentTextArea,
} from "../../styles/AssignmentStyles.jsx";

const Assignment = () => {
  const [assignments, setAssignments] = useState([]);
  const [newAssignment, setNewAssignment] = useState({ title: '', description: '', dueDate: '' });
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    fetchAssignments();
  }, []);

  const fetchAssignments = async () => {
    try {
      const response = await axios.get('http://localhost:5000/assignments/getassignment');
      setAssignments(response.data);
    } catch (error) {
      console.error('Error fetching assignments:', error);
    }
  };

  const handleAddAssignment = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/assignments/createassignment', newAssignment);
      setNewAssignment({ title: '', description: '', dueDate: '' });
      fetchAssignments();
      setIsAdding(false);
    } catch (error) {
      console.error('Error adding assignment:', error);
    }
  };

  const handleDeleteAssignment = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/assignments/${id}`);
      fetchAssignments();
    } catch (error) {
      console.error('Error deleting assignment:', error);
    }
  };

  return (
    <AssignmentContainer>
      <Sidebar />
      <div>
        <AssignmentHeader>Assignment Management</AssignmentHeader>
        <AssignmentDescription>Manage and track assignments efficiently.</AssignmentDescription>
        {isAdding ? (
          <AddAssignmentForm onSubmit={handleAddAssignment}>
            <h2>Add New Assignment</h2>
            <label>
              <strong>Title:</strong>
            </label>
            <AddAssignmentInput
              type="text"
              placeholder="Title"
              value={newAssignment.title}
              onChange={(e) => setNewAssignment({ ...newAssignment, title: e.target.value })}
              required
            />
            <label>
              <strong>Description:</strong>
            </label>
            <AddAssignmentTextArea
              placeholder="Description"
              value={newAssignment.description}
              onChange={(e) => setNewAssignment({ ...newAssignment, description: e.target.value })}
              required
            />
            <label>
              <strong>Due Date:</strong>
            </label>
            <AddAssignmentInput
              type="date"
              placeholder="Due Date"
              value={newAssignment.dueDate}
              onChange={(e) => setNewAssignment({ ...newAssignment, dueDate: e.target.value })}
              required
            />
            <AddAssignmentButton type="submit">Add Assignment</AddAssignmentButton>
            <AddAssignmentButton type="button" onClick={() => setIsAdding(false)}>
              Cancel
            </AddAssignmentButton>
          </AddAssignmentForm>
        ) : (
          <AddAssignmentButton onClick={() => setIsAdding(true)}>
            Add New Assignment
          </AddAssignmentButton>
        )}

        <AssignmentTable>
          <thead>
            <TableRow>
              <TableHeader>Title</TableHeader>
              <TableHeader>Description</TableHeader>
              <TableHeader>Due Date</TableHeader>
              <TableHeader>Actions</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            {assignments.length > 0 ? (
              assignments.map((assignment) => (
                <TableRow key={assignment.id}>
                  <TableData>{assignment.title}</TableData>
                  <TableData>{assignment.description}</TableData>
                  <TableData>{assignment.dueDate}</TableData>
                  <TableData>
                    <EditButton onClick={() => console.log(`Edit Assignment ID: ${assignment.id}`)}>
                      Edit
                    </EditButton>
                    <DeleteButton onClick={() => handleDeleteAssignment(assignment.id)}>
                      Delete
                    </DeleteButton>
                  </TableData>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableData colSpan="4">No assignments found</TableData>
              </TableRow>
            )}
          </tbody>
        </AssignmentTable>
      </div>
    </AssignmentContainer>
  );
};

export default Assignment;
