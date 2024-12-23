import styled from 'styled-components';

export const StudentContainer = styled.div`
  display: flex;
`;

export const Content = styled.div`
  flex: 1;
  left: 260px; /* Align to the left */
  position: absolute;
  top: 40px; /* Align to the top */
`;

export const StudentsContent = styled.div`
  padding: 20px;
`;

export const StudentsHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;
export const StudentList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const StudentItem = styled.li`
  background-color: #f9f9f9 ;
  border-radius: 8px ;
  padding: 10px 20px ;
  margin-bottom: 10px ;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) ;
`;
export const AddStudentForm = styled.form`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px; /* Adjust spacing between elements as needed */
`;

export const AddStudentInput = styled.input`
  padding: 8px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const AddStudentButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
   margin-bottom: 20px; /* Adds space below the button */
`;

export const SidebarContainer = styled.div`
  flex: 0 0 250px;
`;

// Table Styles
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
 
 
`;

export const TableHeader = styled.th`
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  background-color: #f4f4f4;
`;

export const TableRow = styled.tr``;

export const TableData = styled.td`
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

export const DeleteButton = styled.button`
  background-color: #f44336;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #d32f2f;
  }
`;
