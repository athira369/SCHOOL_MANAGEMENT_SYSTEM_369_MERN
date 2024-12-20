// RegisterStyles.js
import styled from 'styled-components';

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(45deg, #FF69B4, #FFA07A, #90EE90); /* Gradient background */
  height: 200vh; /* Full height of the viewport */

`;

export const FormContainer = styled.form`
 display: flex;
  flex-direction: column;
  align-items: stretch; /* Ensure child elements take full width */
  width: 200%;
  max-width: 1000px; /* Increase max-width for better appearance */
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top:80px;
`;

export const InputField = styled.input`
 width: 100%; /* Make it stretch to fill the container */
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  margin-top:10px;
  border-radius: 4px;
  box-sizing: border-box; /* Ensures padding is included in the width *
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  margin-top: 20px;
  border: none;
  border-radius: 8px;
  background-color: #FF4500;
  color: white;
  font-size: 18px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #FF6347;
  }
  
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;