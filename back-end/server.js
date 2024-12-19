import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import {User} from "./model/RegisterSchema.js";
const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb+srv://athira369:athira369@cluster0.0aikm.mongodb.net/register?retryWrites=true&w=majority&appName=Cluster0");
// Start Server
app.post("/login",(req,res)=>
{
    const{email,password} = req.body;
    User.findOne({email:email})
    .then (user =>
    {
        if(user)
        {
            if(password === user.password)
            {
                res.json("Login Successfully")
            }
            else
            {
                res.json("password is incorrect")
            }
        }
        
        else
        {
            res.json("no record existed")
        }
    })
})
app.post('/register',(req,res) =>{
    User.create(req.body)
    .then(Register => res.json(Register))
    .catch(err =>res.json(err))

}
)
app.listen(5000, () => {
    console.log ('Server running ')

    })