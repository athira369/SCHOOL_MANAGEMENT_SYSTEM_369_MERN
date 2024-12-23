import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar.jsx';
import axios from 'axios';

const LibraryContainer = styled.div`
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

const LibraryHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const LibraryTable = styled.table`
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

const Library = () => {
  const [libraryData, setLibraryData] = useState([]);
  
  const [error, setError] = useState(null);

  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    isbn: '',
    status: '',
  });

  useEffect(() => {
    fetchLibraryData();
  }, []);

  const fetchLibraryData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/library/books');
      setLibraryData(response.data);
     
    } catch (err) {
      setError('Failed to fetch library data. Please try again later.');
     
    }
  };

  const handleAddBook = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/library/books', newBook);
      setLibraryData([...libraryData, response.data]);
      setNewBook({ title: '', author: '', isbn: '', status: '' });
    } catch (err) {
      setError('Failed to add book. Please try again.');
    }
  };

 

  return (
    <LibraryContainer>
      <Sidebar />
      <LibraryHeader>Library Management</LibraryHeader>

      <FormContainer>
        <Form onSubmit={handleAddBook}>
          <h3>Add New Book</h3>
          <Input
            type="text"
            placeholder="Title"
            value={newBook.title}
            onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
            required
          />
          <Input
            type="text"
            placeholder="Author"
            value={newBook.author}
            onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
            required
          />
          <Input
            type="text"
            placeholder="ISBN"
            value={newBook.isbn}
            onChange={(e) => setNewBook({ ...newBook, isbn: e.target.value })}
            required
          />
          <Input
            type="text"
            placeholder="Status (Available/Issued)"
            value={newBook.status}
            onChange={(e) => setNewBook({ ...newBook, status: e.target.value })}
            required
          />
          <Button type="submit">Add Book</Button>
        </Form>
      </FormContainer>

      <LibraryTable>
        <thead>
          <TableRow>
            <TableHeader>Title</TableHeader>
            <TableHeader>Author</TableHeader>
            <TableHeader>ISBN</TableHeader>
            <TableHeader>Status</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {libraryData.map((book) => (
            <TableRow key={book.id}>
              <TableCell>{book.title}</TableCell>
              <TableCell>{book.author}</TableCell>
              <TableCell>{book.isbn}</TableCell>
              <TableCell>{book.status}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </LibraryTable>
    </LibraryContainer>
  );
};

export default Library;
