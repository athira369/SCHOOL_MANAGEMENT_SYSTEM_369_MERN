import { useState } from 'react'
import SignUp from './pages/SignUp'
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as  Router,Routes,Route} from "react-router-dom"
import Login from './pages/Login'
const App = () => {
  return (
    <Router>
    <Routes>
    <Route path="/" element={<Login />} /> {/* Default route */}
      <Route path='/register' element={<SignUp/>}> </Route>
      <Route path='/login' element={<Login/>}></Route>
      
   </Routes>
    </Router>
  )
}

export default App
