import React from 'react'
import Button from './Button'



function Cards({imgUrl,name,status,btn,progress,variant,bgvariant}) {
  return (
    <div className='w-70 h-72 border-4 border-gray-600 rounded-2xl shadow-lg bg-emerald-100 '>
      <img src={imgUrl} alt={name} className='w-80 rounded-t-2xl'/>
      <p className='text-center font-bold text-[18px] p-2 text-red-700'>{name}</p>
      <div className='flex flex-row justify-between '>
        <button className='ml-2 h-2 w-full bg-green-300 rounded-3xl mt-2'>{progress}</button>
        <p className='mr-2 font-bold bg-green-300 p-1 rounded-lg'>{status}</p>
      </div>
       
      <Button namebtn={btn} variant={variant} bgvariant={bgvariant}/>  
      
    </div>
  )
}

export default Cards
