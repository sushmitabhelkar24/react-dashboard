import React from 'react'



function Cards({imgUrl,name,status,btn,progress}) {
  return (
    <div className='w-70 h-72 border-4 border-gray-600 rounded-2xl shadow-lg bg-emerald-100 '>
      <img src={imgUrl} alt={name} className='w-80 rounded-t-2xl'/>
      <p className='text-center font-bold text-[18px] p-2 text-red-700'>{name}</p>
      <div className='flex flex-row justify-between '>
        <p className='ml-2'>{progress}</p>
        <p className='mr-2 font-bold bg-green-300 p-1 rounded-lg'>{status}</p>
      </div>
      
      <button className='bg-blue-500 text-white font-bold text-[15px] px-10 py-2 rounded-lg pt-2 block mx-auto border-2 border-gray-400 cursor-pointer shadow-lg hover:text-shadow-lg/20 '>{btn}</button>
    </div>
  )
}

export default Cards
