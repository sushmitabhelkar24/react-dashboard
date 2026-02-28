import React from 'react'

function Button({namebtn,variant,bgvariant}) {
  const Buttontext={
    "primary":"text-white",
    "secondary":"text-blue-800",
    "tertiary":"text-green-600",
  }

  const Backgroundtext={
    "new":"bg-white",
    "old":"bg-red-300",
    "upcoming":"bg-blue-700"
  }

  return (
    <div>
      <button className={`${Buttontext[variant ]} ${Backgroundtext[bgvariant]}  font-bold text-[15px] px-10 py-2 rounded-lg pt-2 block mx-auto border-2 border-gray-400 cursor-pointer shadow-lg hover:text-shadow-lg/20 `}>{namebtn}</button>
    </div>
  )
}

export default Button
