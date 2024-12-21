import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb+srv://athira369:athira369@cluster0.0aikm.mongodb.net/register?retryWrites=true&w=majority&appName=Cluster0");
import RegisterRouter from "./router/RegisterRouter.js";
import LoginRouter from "./router/LoginRouter.js";




import ClassRouter from "./router/ClassRouter.js";
// Middleware
app.use(bodyParser.json());
app.use(
  cors({
    origin:"http://localhost:5000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // Allow cookies or authentication headers
  })
);
app.options('*', cors());  // Handle preflight requests for all routes


app.use((err, req, res, next) => {
    errorHandler(err, req, res, next);
  });
 
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use("/register",RegisterRouter);
app.use("/login",LoginRouter);



app.use("/class",ClassRouter);
app.use("/getall",ClassRouter);



app.listen(5000, () => {
    console.log ('Server running ')

    })