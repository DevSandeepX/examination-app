import React from 'react'

const ApplyExam = () => {
  return (
    <div className='pr-4'>
        <form>
            <h2 className='text-2xl text-center my-4'>Apply Online Exam</h2>
            <div className='my-4 grid grid-cols-[1fr_1fr] gap-24'>
                
                {/* Column left */}
                <div>
                    {/* input fileds */}
                    <div className='my-4'>
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder='Name' 
                        className='p-2 rounded border border-black w-full mt-2'/>
                    </div>

                    <div className='my-4'>
                        <label htmlFor="">Roll No</label>
                        <input type="text" placeholder='Name' 
                        className='p-2 rounded border border-black w-full mt-2'/>
                    </div>

                </div>



                {/* Column right */}
                <div>
                    <div className='my-4'>
                        <label htmlFor="">Course</label>
                        <input type="text" placeholder='Name' 
                        className='p-2 rounded border border-black w-full mt-2'/>
                    </div>

                    <div className='my-4'>
                        <label htmlFor="">Image</label>
                        <input type="text" placeholder='Name' 
                        className='p-2 rounded border border-black w-full mt-2'/>
                    </div>

                </div>

            </div>
        </form>
    </div>
  )
}

export default ApplyExam