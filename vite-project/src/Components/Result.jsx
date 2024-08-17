import React from 'react'

function Result({question,allAnswers,reset}) {

    const correctAnswer = allAnswers.filter((prev) => prev).length;

  return (
    <>
    <div className='flex items-center flex-col gap-3'>
         <h1 className='text-5xl text-center my-3 font-bold'>Result</h1>
         <p className='text-center text-3xl font-semibold'>You answered {correctAnswer} out of {question.length} questions</p>
         <button onClick={reset} className='p-3 text-center bg-black text-white font-semibold rounded text-2xl'>Retry The quiz</button>
         <div >
               {question.map((ques, i) => {
                   return <p className={`text-2xl ${allAnswers[i] === true?"text-green-600":"text-red-600"} font-bold`} key={i}>{ques.question}</p>
                })}
         </div>

    </div>
    </>
  )
}

export default Result