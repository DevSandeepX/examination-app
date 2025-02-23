import React from 'react'
import {Routes, Route} from "react-router-dom"

import Navbar from './components/Navbar'
import Home from './pages/Home'
import ExamPannel from './pages/ExamPannel'
import Welcome from './pages/Welcome'
const App = () => {
  return (
    <div>
      <Navbar/>
      <div>
        <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/online-exam' element={<ExamPannel/>}/>
           <Route path='/finish-exam/:rollnumber' element={<Welcome/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App