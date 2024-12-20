import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import {User} from "./model/RegisterSchema.js";
const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb+srv://athira369:athira369@cluster0.0aikm.mongodb.net/register?retryWrites=true&w=majority&appName=Cluster0");
// Start Server
app.post("/login", (req, res) => {
    const { email, password, role } = req.body;
    // console.log(req.body);
  
    // Find the user by email
    User.findOne({ email: email })
      .then((user) => {
        // console.log(user);
        if (user) {
          // Check if the password matches
          if (password === user.password) {
            // Check if the provided role matches the user's role 
             console.log(role,user.role );
            if (user.role === role) {
              // If the role matches, respond with the login success message and the user's role
            
              res.json({
                message: "Login Successfully",
                role: user.role,  // Send the user role
                userId: user._id, // Optionally send user ID or other info
              });
                        } else {
              // If the role doesn't match
              res.status(403).json({ message: "Role mismatch" });
            }
          } else {
            // Password is incorrect
            res.status(400).json({ message: "Password is incorrect" });
          }
        } else {
          // No record found for the email
          res.status(404).json({ message: "No record found" });
        }
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ message: "Server error" });
      });
  });
  
  
app.post('/register',(req,res) =>{
    User.create(req.body)
    .then(Register => res.json(Register))
    .catch(err =>res.json(err))

}
)
app.listen(5000, () => {
    console.log ('Server running ')

    })