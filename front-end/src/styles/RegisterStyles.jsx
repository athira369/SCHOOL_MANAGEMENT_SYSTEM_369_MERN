// RegisterStyles.js
import styled from 'styled-components';

export const RegisterContainer = styled.div`

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
export const SignupWrapper = styled.div`
  margin-top: 15px;
  font-size: 14px;
  text-align: center;

  a {
    color: #007BFF; /* Link color */
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline; /* Underline on hover */
    }
  }
`;
export const SignupLink = styled.a`
  margin-top: 15px; /* Add space above the link */
  font-size: 14px; /* Adjust the font size */
  color: #007BFF; /* Set the link color (blue) */
  text-decoration: none; /* Remove the underline */
  cursor: pointer;

  &:hover {
    text-decoration: underline; /* Add underline on hover */
    color: #0056b3; /* Darker blue on hover */
  }
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