import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  RegisterContainer,
  FormContainer,
  InputField,
  SubmitButton,
} from "../styles/RegisterStyles";
const SignUp = () => {
  const [formData, setFormData] = useState({
    Id: "",
    firstName: "",
    lastName: "",
    email: "",
    role: "Teacher",
    contactNumber: "",
    address: "",
    joiningDate: "",
    password: "", // Add password for login
  });
  const navigate = useNavigate();
  const [responseMessage, setResponseMessage] = useState(" ");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/register", formData)
      .then((result) => {
        console.log(result);
        setResponseMessage("registered successfully");
        const userRole = formData.role;
        setFormData({
          Id: "",
          firstName: "",
          lastName: "",
          email: "",
          role: "Teacher",
          contactNumber: "",
          address: "",
          joiningDate: "",
          password: "",
        });
        // Navigate to respective dashboard
      if (userRole === "Admin") navigate("/admin");
      else if (userRole === "Teacher") navigate("/teacher");
      else if (userRole === "Office Staff") navigate("/office-staff");
      else if (userRole === "Librarian") navigate("/librarian");
      else navigate("/login"); // Default fallback
    })
    .catch((err) => console.log(err));
};
  
  return (
    <RegisterContainer>
      <div className="d-flex justify-content-center  vh-100 vw-100">
        <div className=" bg-white p-3 rounded ">
          <h2>Register</h2>
          <FormContainer onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="id">
                <strong>ID</strong>
              </label>
              <InputField
                type="text"
                placeholder="Enter your ID"
                autoComplete="off"
                name="Id"
                value={formData.Id}
                className="form-control rounded-0"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="firstName">
                <strong>First Name</strong>
              </label>
              <InputField
                type="text"
                placeholder="Enter your first name"
                autoComplete="off"
                name="firstName"
                value={formData.firstName}
                className="form-control rounded-0"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName">
                <strong>Last Name</strong>
              </label>
              <input
                type="text"
                placeholder="Enter your last name"
                autoComplete="off"
                name="lastName"
                value={formData.lastName}
                className="form-control rounded-0"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email">
                <strong>Email</strong>
              </label>
              <InputField
                type="email"
                placeholder="Enter your email"
                autoComplete="off"
                name="email"
                value={formData.email}
                className="form-control rounded-0"
                onChange={handleChange}
              />
            </div>

            {/* Role */}
            <div className="mb-3">
              <label htmlFor="role">
                <strong>Role</strong>
              </label>
              <select
                type="text"
                placeholder="Enter your role"
                autoComplete="off"
                name="role"
                value={formData.role}
                className="form-control rounded-0"
                onChange={handleChange}
              >
                <option value="Teacher">Teacher</option>
                <option value="Admin">Admin</option>
                <option value="Office Staff">Office Staff</option>
                <option value="Librarian">Librarian</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="Contact Number">
                <strong>Contact Number</strong>
              </label>
              <InputField
                type="text"
                placeholder="Enter your contact number"
                autoComplete="off"
                name="contactNumber"
                value={formData.contactNumber}
                className="form-control rounded-0"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Address">
                <strong>Address</strong>
              </label>
              <InputField
                type="text"
                placeholder="Enter your address"
                autoComplete="off"
                name="address"
                value={formData.address}
                className="form-control rounded-0"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="joiningDate">
                <strong>joining Date</strong>
              </label>
              <InputField
                type="date"
                placeholder="Enter your JoiningDate"
                autoComplete="off"
                name="joiningDate"
                value={formData.joiningDate}
                className="form-control rounded-0"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Password">
                <strong>Password</strong>
              </label>
              <InputField
                type="password"
                placeholder="Enter your password"
                autoComplete="off"
                name="password"
                value={formData.password}
                className="form-control rounded-0"
                onChange={handleChange}
              />
            </div>

            <SubmitButton
              type="submit">
             
              SignUp
            </SubmitButton>
            <p>Already have an account </p>
            <Link
              to="/login"
              className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
            >
              LOGIN
            </Link>
          </FormContainer>
        </div>
      </div>
    </RegisterContainer>
  );
};

export default SignUp;
