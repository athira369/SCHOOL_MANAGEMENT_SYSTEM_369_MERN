// examStyles.js
import styled from 'styled-components';

export const ExamContainer = styled.div`
  padding: 50px;
  background-color: #f4f4f9;
  border-radius: 8px;
  height :200vh;
  margin: 20px auto;
  left: 260px; /* Align to the left */
  position: absolute;
  top: 40px; /* Align to the top */
   width: 80%;
   right:20px
`;
export const Heading = styled.h2`
margin-top:20px;
  margin-bottom: 20px; /* Adjust the value for desired spacing */
`;

export const ExamHeader = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;


export const ExamTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

export const ExamDescription = styled.p`
  font-size: 16px;
  color: #555;
`;

export const ExamDetails = styled.div`
  margin: 10px 0;
  font-size: 14px;
  color: #666;
`;
export const ExamBorder = styled.div `
  border-bottom: 1px solid #ccc;
  padding-bottom: 8px;
  margin-bottom: 8px;
`;

export const ExamTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

export const TableHeader = styled.th`
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
  background-color: #f1f1f1;
  font-weight: bold;
`;

export const TableCell = styled.td`
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
  background-color: #fff;
`;

export const Button = styled.button`
  padding: 8px 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #45a049;
  }
`;

export const ExamForm = styled.div`
  margin-top: 20px;
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const AddExamButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  border: none;
  margin-right: 10px; /* Adjust the value for desired spacing */

  &:hover {
    background-color: #0056b3;
  }
`;
