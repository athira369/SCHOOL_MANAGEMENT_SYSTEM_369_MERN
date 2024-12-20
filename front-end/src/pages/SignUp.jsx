import { useState, } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
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
    const navigate = useNavigate()
    const [responseMessage,setResponseMessage] = useState(" ");
    const handleChange =(e) =>
    {
      const {name,value} =e.target;
      setFormData({...formData,[name]:value});
    }
    const handleSubmit= (e) =>
    {
        e.preventDefault()
        axios.post("http://localhost:5000/register",formData)
        .then(result=>{console.log(result)
          setResponseMessage("registered successfully");
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
        navigate("/login")
    })
        .catch((err=>console.log(err)))
    }
  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100 vw-100">
      <div className="bg-white p-3 rounded w-50">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>

        <div className="mb-3">
            <label htmlFor="id">
              <strong>ID</strong>
            </label>
            <input
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
            <input
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
            <input
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
            <input
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
            <input
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
            <input
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
            <input
              type="password"
              placeholder="Enter your password"
              autoComplete="off"
              name="password"
              value={formData.password}
              className="form-control rounded-0"
              onChange={handleChange}
            />
          </div>
         
          <button type="submit" className="btn btn-success w-100 rounded-0">
            SignUp
          </button>
          <p>Already have an account </p>
          <Link to ="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
            LOGIN
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
