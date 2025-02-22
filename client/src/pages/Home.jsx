import React, { use, useState } from 'react'
import { instructions } from "../assets/assets"
import {useNavigate} from "react-router-dom"
const Home = () => {
  const navigate = useNavigate()
  const [rollnumber, setRollnumber] = useState('')
  const [isExamStarted, setIsExamStarted] = useState(false)
  const validNumber = 'GO123'


  const onStartExamHandler = (e)=>{
  e.preventDefault()
 try {
  if(validNumber === rollnumber){
    navigate('/online-exam')
  }else{
    alert("Please fill correct roll number")
  }
 } catch (error) {
  alert(error.message)
 }
  }



  return (
    <div className='px-32 py-8'>
      <div>
        <ul className='list-decimal pl-6 space-y-2'>
          {
            instructions.map((item, index) => (
              <li key={index} className='my-4'>{item}</li> // Adding key to each list item
            ))
          }
        </ul>
      </div>


      <form onSubmit={onStartExamHandler}>
        <div className="input-box block w-[500px] mx-auto mt-12">
          <label htmlFor="rollNumber">Roll Number</label>
          <input
            type="text"
            id="rollNumber"
            name="rollNumber"
            value={rollnumber}
            onChange={(e)=>setRollnumber(e.target.value)}
            className='border border-2 border-black my-2 py-2 px-4 w-full'
          />
        </div>

      <div className="flex justify-center mt-5">
        <button type='submit' className='bg-blue-400 px-6 py-3 rounded text-white'>Start the Exam</button>
      </div>

      </form>
      
    </div>
  )
}

export default Home
