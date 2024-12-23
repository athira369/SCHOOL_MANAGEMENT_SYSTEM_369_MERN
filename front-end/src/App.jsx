import { useState } from 'react'
import SignUp from './components/SignUp'
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as  Router,Routes,Route} from "react-router-dom"
import Login from './components/Login'
import Home from './components/Home'

import  Class from "./pages/admin/Class";
import Student from './pages/admin/Student';
import Teacher from './pages/admin/Teacher';
import Assignment from "./pages/admin/Assignment";
import Exam from "./pages/admin/Exam";
import Performance from './pages/admin/Performance'
import Attendance from './pages/admin/Attendance';
import Library  from './pages/admin/Library'
import Announcement from './pages/admin/Announcement'
import EventCalendar from './pages/admin/EventCalendar'
import ProfileSettings from './pages/admin/ProfileSettings'

import AdminDashboard from './pages/admin/AdminDashboard'
const App = () => {
  return (
    <Router>
    <Routes>
    <Route path="/" element={<Home />} ></Route>
      <Route path='/register' element={<SignUp/>}> </Route>
      <Route path='/login' element={<Login/>}></Route>




      <Route path='/admin/dashboard' element={<AdminDashboard/>}></Route>
      <Route path='/admin/class' element={<Class/>}></Route>
      <Route path='/admin/teacher' element={<Teacher/>}></Route>
      <Route path='/admin/student' element={<Student/>}></Route>
      <Route path='/admin/assignment' element={<Assignment/>}></Route>
      <Route path='/admin/exam' element={<Exam/>}></Route>
      <Route path='/admin/performance' element={<Performance/>}></Route>
      <Route path='/admin/attendance' element={<Attendance/>}></Route>
      <Route path='/admin/library' element={<Library/>}></Route>
      <Route path='/admin/announcement' element={<Announcement/>}></Route>
      <Route path='/admin/events' element={<EventCalendar/>}></Route>
      <Route path='/admin/settings' element={<ProfileSettings/>}></Route>
   </Routes>
    </Router>
  )
}

export default App
