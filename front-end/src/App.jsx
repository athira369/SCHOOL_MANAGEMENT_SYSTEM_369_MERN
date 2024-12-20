import { useState } from 'react'
import SignUp from './components/SignUp'
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as  Router,Routes,Route} from "react-router-dom"
import Login from './components/Login'
import Home from './components/Home'
const App = () => {
  return (
    <Router>
    <Routes>
    <Route path="/" element={<Home />} ></Route>
      <Route path='/register' element={<SignUp/>}> </Route>
      <Route path='/login' element={<Login/>}></Route>
      
   </Routes>
    </Router>
  )
}

export default App
