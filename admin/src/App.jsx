import React from 'react'
import Sidebar from './components/Sidebar'
import Dashbord from './pages/Dashbord'
import Examination from './pages/Examination'
import Results from './pages/Results'
import ApplyExam from './pages/ApplyExam'
import { Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <div className='w-full flex gap-4'>
        <Sidebar/>
        <div className='w-[85%]'>
           <Routes>
               <Route path='/' element={<Dashbord/>}/>
               <Route path='/examination' element={<Examination/>}/>
               <Route path='/result' element={<Results/>}/>
               <Route path='/apply-exam' element={<ApplyExam/>}/>
           </Routes>
        </div>
    </div>
  )
}

export default App