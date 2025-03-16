import React from 'react'
import { Link } from 'react-router-dom';

import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const listItems = ["Work", "Tools", "Skills", "Education", "Certificates"];

export default function Footer() {
  return (
    
    <div className='mx-10 mt-20'>
      <h1 className='text-2xl  mb-5 lg:text-4xl'>Follow me on other chanels</h1>
    
      <div className=' flex flex-col lg:grid lg:grid-cols-2 lg:gap-10 lg:items-center mb-10'>
        <div className='text-4xl flex flex-col gap-5 p-10'>
          <Link to='https://github.com/AbhinavNauti-yl'>
            <div className='flex flex-row border-2 rounded-full p-3 items-center gap-3 bg-pink-100 w-[calc(85%)]'>
              <FaGithub />
              <h1 className='text-3xl'>GitHub</h1>
            </div>
          </Link>

          <Link to='https://www.instagram.com/abhinavnautiyal04/'>
            <div className='flex flex-row border-2 rounded-full p-3 items-center gap-3 bg-pink-100 w-[calc(67.5%)]'>
              <FaInstagram />
              <h1 className='text-3xl'>Instagram</h1>
            </div>
          </Link>

          <Link to='https://www.linkedin.com/in/abhinav-nautiyal-264828248/'>
            <div className='flex flex-row border-2 rounded-full p-3 items-center gap-3 bg-pink-100 w-[calc(50%)]'>
              <FaLinkedin />
              <h1 className='text-3xl'>LinkedIn</h1>
            </div>
          </Link>
        </div>

        <div className=''>
          <h1 className='text-xl font-bold '>Navigation</h1>
          <ul >
            {
              listItems.map((item, index) => (
                <li className='text-md my-3' key={index}>{item}</li>
              ))
            }
          </ul>
        </div>

      </div>


      <h1 className='text-center'>&copy; 2025 Abhinav Nautiyal</h1>
    </div>
  )
}
