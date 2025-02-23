import React from 'react'
import student from "../assets/student.jpg"
const Results = () => {
  return (
     <div className='pr-4 pt-4'>
       <div className='grid bg-[#D70654] grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr] px-2 py-2 text-white'>
         
         <b>Roll Number</b>
         <b>Image</b>
         <b>Course</b>
         <b>Attempt</b>
         <b>Right</b>
         <b>Wrong</b>
         <b>Result</b>
         
       </div>
 
 
       <div className='grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr] my-4 px-2 py-3 bg-[#FFEFC8]'>
         <span>GO123</span>
         <img src={student} alt="" className='h-24' />
         <span>O Level</span>
         <span>100</span>
         <span>67</span>
         <span>33</span>
         <span>B Grade</span>
       </div>
 
       <div className='grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr] my-4 px-2 py-3 bg-[#FFEFC8]'>
         <span>GO123</span>
         <img src={student} alt="" className='h-24' />
         <span>O Level</span>
         <span>100</span>
         <span>67</span>
         <span>33</span>
         <span>B Grade</span>
       </div>
     </div>
   )
}

export default Results