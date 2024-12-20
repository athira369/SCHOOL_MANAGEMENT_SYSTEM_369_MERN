import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LogInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(45deg, #FF69B4, #FFA07A, #90EE90); /* Gradient background */
  min-height: 100vh; /* Full height of the viewport */
  width:100%
 
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  max-width: 500px; /* Limit form width */
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
export const SelectField = styled.select`
  width: 100%; /* Full width like other input fields */
  padding: 10px; /* Consistent padding with input fields */
  margin: 10px 0; /* Space between fields */
  border: 1px solid #ccc; /* Border similar to InputField */
  border-radius: 4px; /* Rounded corners */
  background-color: #fff; /* White background */
  font-size: 16px; /* Readable font size */
  color: #333; /* Text color */
  box-sizing: border-box; /* Ensures padding and border are included in the width */

  /* Add a dropdown arrow customization */
  appearance: none; /* Removes default browser styles */
  
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 10px;

  &:focus {
    outline: none; /* Remove the default outline */
    border-color: #FF4500; /* Highlight border on focus */
    box-shadow: 0 0 5px rgba(255, 69, 0, 0.5); /* Add focus glow */
  }
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


export const SubmitButton =  styled.button`
  width: 100%;
  padding: 12px;
  margin-top: 20px;
  border: none;
  border-radius: 8px;
  background-color: #FF4500;
  color: white;
  font-size: 18px;
  text-decoration: none;
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