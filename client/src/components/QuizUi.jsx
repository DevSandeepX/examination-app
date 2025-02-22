import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { questions } from '../assets/assets';

const QuizUi = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);

  // Update the current question whenever the index changes
  useEffect(() => {
    setCurrentQuestion(questions[currentQuestionIndex]);
  }, [currentQuestionIndex]);

  const handleNext = (e) => {
    e.preventDefault();
    if (currentQuestionIndex >= questions.length - 1) {
      alert("This is the final question. Please submit your exam.");
      return;
    }

    setCurrentQuestionIndex((prev) => prev + 1);
  };

  return (
    <div className='min-h-screen bg-gray-100 flex flex-col items-center p-6'>
      <div className='bg-white shadow-lg rounded-xl p-6 w-full max-w-2xl mt-5'>
        <form onSubmit={handleNext}>
          <h2 className='text-xl font-semibold mb-4'>
            {currentQuestionIndex + 1}. {currentQuestion.question}
          </h2>
          <div className='space-y-3'>
            <label className='flex items-center p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100'>
              <input type='radio' name={`question${currentQuestionIndex}`} className='mr-3' />
              {currentQuestion.option1}
            </label>
            <label className='flex items-center p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100'>
              <input type='radio' name={`question${currentQuestionIndex}`} className='mr-3' />
              {currentQuestion.option2}
            </label>
            <label className='flex items-center p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100'>
              <input type='radio' name={`question${currentQuestionIndex}`} className='mr-3' />
              {currentQuestion.option3}
            </label>
            <label className='flex items-center p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100'>
              <input type='radio' name={`question${currentQuestionIndex}`} className='mr-3' />
              {currentQuestion.option4}
            </label>
          </div>
          <button
            type="submit"
            className='mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition'
          >
            {currentQuestionIndex === questions.length - 1 ? "Submit Exam" : "Next"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuizUi;
