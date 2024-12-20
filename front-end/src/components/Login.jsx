import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  LogInContainer,
  FormContainer,
  InputField,
  SubmitButton,
  SelectField,
  SignupLink,
  SignupWrapper,
} from "../styles/LoginStyles";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "Teacher", // Default role can be 'Teacher', but the user can select from other roles.
  });
  const [responseMessage, setResponseMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/login", formData) // Backend API for login
      .then((result) => {
        console.log(result);
        console.log("Response from backend:", result);
        setResponseMessage(result.data.message);
        setResponseMessage("Login successful");
        console.log(formData);
        // Extract the role from the response data
        const { role } = result.data;
        console.log("Role from backend:", role);
        

        // Navigate based on the user's role
        if (role === "Admin") {
          navigate("/admin-dashboard");
        } else if (role === "Teacher") {
          navigate("/teacher-dashboard");
        } else if (role === "Office Staff") {
          navigate("/office-staff-dashboard");
        } else if (role === "Librarian") {
          navigate("/librarian-dashboard");
        } else {
          setResponseMessage("Role not recognized");
        }
      })
      .catch((err) => {
        console.log(err);
        setResponseMessage(
          "Error: " + (err.response?.data?.message || err.message)
        );
      });
  };

  return (
    <LogInContainer>
      <div className="d-flex justify-content-center align-items-center  vh-100 vw-100">
          <div className="p-3 rounded ">
            <h2>Login</h2>
            <FormContainer onSubmit={handleSubmit}>
              {/* Email */}
              <div className="mb-3">
                <label htmlFor="email">
                  <strong>Email</strong>
                </label>
                <InputField
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  className="form-control rounded-0"
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Password */}
              <div className="mb-3">
                <label htmlFor="password">
                  <strong>Password</strong>
                </label>
                <InputField
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  value={formData.password}
                  className="form-control rounded-0"
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Role Selection */}
              <div className="mb-3">
                <label htmlFor="role">
                  <strong>Role</strong>
                </label>
                <SelectField
                  name="role"
                  value={formData.role}
                  className="form-control rounded-0"
                  onChange={handleChange}
                >
                  <option value="Teacher">Teacher</option>
                  <option value="Admin">Admin</option>
                  <option value="Office Staff">Office Staff</option>
                  <option value="Librarian">Librarian</option>
                </SelectField>
              </div>

              {/* Submit Button */}
              <SubmitButton
                type="submit"
                
              >
                Login
              </SubmitButton>

              {/* Display Response Message */}
              {responseMessage && <p>{responseMessage}</p>}
              <SignupWrapper>
                <SignupLink href="/register">
                  Not a member? Sign up now
                </SignupLink>
              </SignupWrapper>
              </FormContainer>
          </div>
        
      </div>
    </LogInContainer>
  );
};

export default Login;
