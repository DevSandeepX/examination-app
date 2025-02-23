import React from 'react'

const Welcome = () => {
  return (
    <div className='px-32 flex items-center justify-center w-full'>
      <div className='w-[500px] shadow p-8 rounded bg-blue-100 min-h-[300px] mt-32'>
        <h2 className='text-4xl'>Thanks You</h2>
        <p className='my-4'>{'GO123'} Your {90} questions of 100 has been successfully submitted!</p>
        <p>Thank you for completing your exam. You will receive your results shortly. We appreciate your effort and wish you the best of luck!</p>
      </div>
    </div>
  )
}

export default Welcome