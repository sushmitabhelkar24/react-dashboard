import React from 'react'

function QuizQue({quizico,quizname,quizScore,variant,colorVariant}) {
    const BTNColor={
        "primary":"bg-red-200",
        "secondary":"bg-green-200",
        "tertiary":"bg-blue-200"
    }
    const BTNBorder={
        "one":"border-red-500",
        "two":"border-green-500",
        "three":"border-blue-500"
    }
  return (
    <div className='flex flex-row justify-around align-center mb-2'>
      <img src={quizico} alt={quizname} className='h-10 w-10 bg-red-200 rounded-full'/>
      <p className=' text-[16px] font-bold pt-2'>{quizname}</p>
      <p className={`${BTNBorder[colorVariant]} ${BTNColor[variant]} px-2 py-0.5  rounded-full border-2 m-1`}>{quizScore}</p>
    </div>
  )
}

export default QuizQue
