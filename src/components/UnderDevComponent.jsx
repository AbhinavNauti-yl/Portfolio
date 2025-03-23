import React from 'react'
import { FaRegSadTear } from "react-icons/fa";

export default function UnderDevComponent() {
  return (
    <div className='min-h-screen flex flex-col text-6xl items-center gap-5'>
      <h1>Sorry, this  page is under Development</h1>
        <FaRegSadTear className='' />
    </div>
  )
}
