import React from 'react'
import { NavLink } from 'react-router-dom'
import { LuLayoutDashboard } from "react-icons/lu";
import { PiExam } from "react-icons/pi";
import { AiOutlineSafetyCertificate } from "react-icons/ai";


const Sidebar = () => {
  return (
    <div className='bg-[#09122C] h-screen px-4 w-[15%] text-white'>
        <h2 className='px-2 text-xl mt-2'>Dashboard</h2>
        <div>
            <NavLink to={'/'} className='flex gap-2 items-center my-4 px-2 py-2 rounded'><LuLayoutDashboard /> Dashboard</NavLink>
            <NavLink to={'/apply-exam'} className='flex gap-2 items-center my-4 px-2 py-2 rounded'><LuLayoutDashboard /> Apply Exam</NavLink>
            <NavLink to={'/examination'} className='flex gap-2 items-center my-4 px-2 py-2 rounded'><PiExam /> Exam Pannel</NavLink>
            <NavLink to={'/result'} className='flex gap-2 items-center my-4 px-2 py-2 rounded'><AiOutlineSafetyCertificate /> Result</NavLink>
        </div>
    </div>
  )
}

export default Sidebar