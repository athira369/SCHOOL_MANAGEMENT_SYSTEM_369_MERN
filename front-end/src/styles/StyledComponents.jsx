import styled from 'styled-components';

// Container for the whole page
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
   left: 260px; /* Align to the left */
  position: absolute;
  top: 40px; /* Align to the top */
   width: 80%;
`;

// Header for sections
export const Header = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
`;

// Form elements
export const Form = styled.form`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 5px;
  display: block;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  min-height: 100px;
`;

// Error message
export const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 10px;
`;


export const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

export const ProfileHeader = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const ProfileDetails = styled.div`
  max-width: 400px;
`;

export const ProfileLabel = styled.label`
  font-weight: bold;
`;

export const ProfileInfo = styled.p`
  margin-bottom: 10px;
`;
