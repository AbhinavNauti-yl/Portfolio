import React from 'react'

export default function Intro() {
  return (
    <div className='fadeIn bg-pink-300 flex flex-col mx-10 my-5 rounded-3xl p-3 justify-center items-center gap-5 bg-gradient-to-b from-pink-200 to-pink-50 md:p-20 md:mx-15  lg:w-[calc(75%)] lg:mx-auto'>

      <button className='bg-pinl-250 rounded-xl p-1 bg-gradient-to-l from-orange-200 to-yellow-200 md:text-2xl'>Hi I'am Abhinav</button>

      <h1 className='text-3xl text-center md:text-6xl'>
      I design and code websites that blows your mind
      </h1>

      <div className='flex flex-col justify-center items-center gap-5 p-3 w-full md:flex md:flex-row'>

        <buttton className= "w-full bg-blue-900 rounded-full text-white text-center text-2xl py-3">My Work</buttton>
        <buttton className= "w-full bg-pink-50 rounded-full text-blue-900 text-center text-2xl py-3 border-2 border-blue-900">Aobout Me</buttton>
      </div>

    </div>
  )
}
