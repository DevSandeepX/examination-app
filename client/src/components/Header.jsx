import React from 'react'

const Header = () => {
  return (
    <div className='px-32 flex gap-4 justify-between w-full bg-blue-700 text-white text-lg items-center'>
      

        <div>
        <h2>Name - {'Sandeep chauhan'}</h2>
          <h2>Roll - {'GO1234'}</h2>
        </div>
        <div>
          <p>Subject - CCC</p>
          <h2>Remining - {'1:29'}</h2>
        </div>
        <div>
         <h2>Count {'30'}</h2>
        </div>
        
        <div className='flex gap-4'>
      <img src="" alt="" className='w-24 h-24 border border-black' />
        </div>
      <button className='bg-white text-blue-600 rounded px-4 py-2'>Finish Exam</button>
    </div>
  )
}

export default Header