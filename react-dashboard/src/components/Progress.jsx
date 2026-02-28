import React from 'react'

function Progress() {
  return (
    <div className='bg-amber-100 w-120 h-50 border-2 border-amber-50 rounded-2xl shadow-2xl'>
      <p className='font-bold text-xl p-2'>Your Progress</p>
      <div className='flex flex-row justify-around mt-1'>
        <div className='w-36 h-36 bg-white rounded-full border-20 border-green-700 font-bold text-2xl text-center pt-8'>75 %</div>
        <div className='flex flex-col justify-around font-semibold'>
          <div><button className='h-4 w-4 bg-green-700 mr-2'></button>Completed<span>(4)</span></div>
          <div><button className='h-4 w-4 bg-yellow-700 mr-2'></button>In progress<span>(2)</span></div>
          <div><button className='h-4 w-4 bg-red-700 mr-2'></button>Pending<span>(1)</span></div>
        </div>
      </div>
    </div>
  )
}

export default Progress
