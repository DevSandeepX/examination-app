import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import QuizUi from '../components/QuizUi'

const ExamPannel = () => {
  // const [count, setCount] = useState(5);
  // const [restartCount, setRestartCount] = useState(false)
  
  //   useEffect(() => {
  //     const timer = setInterval(() => {
  //       setCount(prevCount => {
  //         if (prevCount > 0) {
  //           return prevCount - 1;
  //         }
  //          // Optionally clear interval when count reaches 0
  //         return 0;
  //       });
  //     }, 1000);
  
  //     // Clean up the interval on component unmount
  //   }, [restartCount]);

  return (
    <div className=''>
        <Header />
        <QuizUi />
    </div>
  )
}

export default ExamPannel