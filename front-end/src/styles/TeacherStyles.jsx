import styled from 'styled-components';

export const TeacherContainer = styled.div`
  display: flex;
  height: 80vh;
  background-color: #f4f4f4;
   left: 260px; /* Align to the left */
  position: absolute;
  top: 40px; /* Align to the top */
   width: 80%;
  

`;

export const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

export const TeachersContent = styled.div`
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

export const TeachersHeader = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`;

export const TeachersTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

export const TableHeader = styled.th`
  background-color: #007bff;
  color: #ffffff;
  text-align: left;
  padding: 10px;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

export const TableData = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

export const AddTeacherButton = styled.button`
  background-color: #28a745;
  color: #ffffff;
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

export const DeleteButton = styled.button`
  background-color: #dc3545;
  color: #ffffff;
  border: none;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #c82333;
  }
`;

export const EditButton = styled.button`
  background-color: #ffc107;
  color: #ffffff;
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

export const AddTeacherForm = styled.form`
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

export const AddTeacherInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;
