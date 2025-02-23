import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { questions } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
const QuizUi = () => {
const navigate = useNavigate()
const [isExamFinished, setIsExamFinished] = useState(false)
const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
const [currentQuestion, setCurrentQuestion] = useState(questions[currentQuestionIndex])
const [attempt, setAttempt] = useState([])
const [right, setRight] = useState([])
const [wrong, setWrong] = useState([])
const [userSelected, setUserSelected] = useState(null)
const [isLoading, setIsLoading] = useState(true)


const onSubmit = (e)=>{
e.preventDefault()
if(userSelected == null) return

if(questions.length - 1 === currentQuestionIndex){
  return null
}

if(currentQuestion.answer == userSelected){
  setRight(prev=>[...prev, currentQuestion])
}else{
  setWrong(prev=>[...prev, currentQuestion])
}

setAttempt(prev=>[...prev, currentQuestion])
setCurrentQuestionIndex(prev=>prev+1)

setUserSelected(null)

}

useEffect(()=>{
  console.log("Attempt ",attempt.length)
  console.log("Right ",right.length)
  console.log("Wrong ",wrong.length)
  if(questions.length - 1 === currentQuestionIndex){
    setIsExamFinished(true)
  }
  setCurrentQuestion(questions[currentQuestionIndex])
},[currentQuestionIndex])



  return (
    <div className='min-h-screen bg-gray-100 flex flex-col items-center p-6'>
      <div className='bg-white shadow-lg rounded-xl p-6 w-full max-w-2xl mt-5'>
        <form onSubmit={onSubmit}>
          <h2 className='text-xl font-semibold mb-4'>
            {currentQuestionIndex+1}. {currentQuestion.question}
          </h2>
          <div className='space-y-3'>
            <label className='flex items-center p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100'>
              <input type='radio' checked={userSelected == "1"} onChange={(e)=>setUserSelected(1)} name={`question`} className='mr-3' />
              {currentQuestion.option1}
            </label>
            <label className='flex items-center p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100'>
              <input type='radio' checked={userSelected == "2"} onChange={(e)=>setUserSelected(2)} name={`question`} className='mr-3' />
              {currentQuestion.option2}
            </label>
            <label className='flex items-center p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100'>
              <input type='radio' checked={userSelected == "3"} onChange={(e)=>setUserSelected(3)} name={`question`} className='mr-3' />
              {currentQuestion.option3}
            </label>
            <label className='flex items-center p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100'>
              <input type='radio' checked={userSelected == "4"} onChange={(e)=>setUserSelected(4)} name={`question`} className='mr-3' />
              {currentQuestion.option4}
            </label>
          </div>
          {
            isExamFinished?(<button
              type="submit"
              onClick={()=>navigate(`/finish-exam/${123}`)}
              className='mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition' >
              {'Finish Exam'}
            </button>):(<button
            type="submit" 
            className='mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition' >
            {'Submit'}
          </button>)
          }
        </form>
      </div>
    </div>
  );
};

export default QuizUi;
