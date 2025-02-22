import React from 'react';
import Header from '../components/Header';

const QuizUi = () => {
  return (
    <div className='min-h-screen bg-gray-100 flex flex-col items-center p-6'>
      <div className='bg-white shadow-lg rounded-xl p-6 w-full max-w-2xl mt-5'>
        <form>
          <h2 className='text-xl font-semibold mb-4'>1. What is the full name of RAM?</h2>
          <div className='space-y-3'>
            <label className='flex items-center p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100'>
              <input type='radio' name='question1' className='mr-3' />
              Random Access Memory
            </label>
            <label className='flex items-center p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100'>
              <input type='radio' name='question1' className='mr-3' />
              Read-Only Memory
            </label>
            <label className='flex items-center p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100'>
              <input type='radio' name='question1' className='mr-3' />
              Rapid Application Model
            </label>
            <label className='flex items-center p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100'>
              <input type='radio' name='question1' className='mr-3' />
              Random Algorithm Method
            </label>
          </div>
          <button className='mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuizUi;
