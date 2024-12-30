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

import StudentRouter from "./router/StudentRouter.js"; 
import TeacherRouter from "./router/TeacherRouter.js";
import AssignmentRouter from "./router/AssignmentRouter.js";
import ExamRouter from "./router/ExamRouter.js";
import AnnouncementRouter from "./router/AnnouncementRouter.js";
import LibraryRouter from "./router/LibraryRouter.js";
import AttendanceRouter from "./router/AttendanceRouter.js";
import EventRouter from "./router/EventRouter.js";
import PerformanceRouter from "./router/PerformanceRouter.js";
import ProfileSettingRouter from "./router/ProfileSettingRouter.js";
// Middleware
app.use(bodyParser.json());
app.use(
  cors({
  
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

app.use("/students", StudentRouter);
app.use("/teachers",TeacherRouter);
app.use("/assignments",AssignmentRouter);
app.use("/announcements",AnnouncementRouter);
app.use("/exams",ExamRouter);

app.use("/library",LibraryRouter);
app.use("/attendance",AttendanceRouter);
app.use("/events",EventRouter);
app.use("/performance",PerformanceRouter);
app.use("/getAdminProfile",ProfileSettingRouter);
app.listen(5000, () => {
    console.log ('Server running ')

    });