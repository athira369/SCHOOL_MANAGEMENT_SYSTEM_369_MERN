import styled from 'styled-components';

export const AssignmentContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  background-color: #f9f9f9;
  padding: 20px;
  left: 260px; /* Align to the left */
  position: absolute;
  top: 40px; /* Align to the top */
   width: 80%;
`;

export const AssignmentHeader = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;



export const AssignmentDescription = styled.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 30px;
  line-height: 1.6;
  text-align: justify;
`;

export const AssignmentTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

export const TableHeader = styled.th`
  background-color: #007bff;
  color: #fff;
  text-align: left;
  padding: 12px;
  font-size: 16px;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const TableData = styled.td`
  padding: 12px;
  border-bottom: 1px solid #ddd;
  font-size: 16px;
`;

export const AddAssignmentButton = styled.button`
  background-color: #28a745;
  color: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin: 10px 0;

  &:hover {
    background-color: #218838;
  }
`;

export const EditButton = styled.button`
  background-color: #ffc107;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
  font-size: 14px;
  margin-right: 5px;

  &:hover {
    background-color: #e0a800;
  }
`;

export const DeleteButton = styled.button`
  background-color: #dc3545;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #c82333;
  }
`;

export const AddAssignmentForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

export const AddAssignmentInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

export const AddAssignmentTextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  resize: none;
  height: 100px;
`;
