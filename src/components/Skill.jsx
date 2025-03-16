import React from 'react'
import { FaGithub } from "react-icons/fa";

import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import { SiAuthelia } from "react-icons/si";
import { TbVersions } from "react-icons/tb";


const data = [
    {
        title: "Frontend Development",
        description: "From crafting interactive interfaces to optimizing user experiences, I utilize modern frameworks like React.js, along with Tailwind CSS , to build responsive and dynamic web applications.",
        icon: <FaReact className='h-[calc(100%)] w-[calc(100%)] text-pink-500'/>
    },
    {
        title: "Backend Development",
        description: "From building robust APIs to managing server logic, I leverage Node.js and Express.js to develop scalable and secure backend systems that power seamless user experiences.",
        icon: <FaNode className='h-[calc(100%)] w-[calc(100%)] text-pink-500'/>
    },
    {
        title: "Database Management",
        description: "From designing data models to optimizing queries, I utilize MongoDB to ensure efficient data storage, retrieval, and management, supporting the backend with reliable database solutions.",
        icon: <FaDatabase className='h-[calc(100%)] w-[calc(100%)] text-pink-500'/>
    },
    {
        title: "Full-Stack Project Management",
        description: "From planning architecture to integrating client-server interactions, I manage complete project lifecycles, ensuring cohesive functionality across the stack for applications like booking platforms and productivity tools",
        icon: <GoProjectSymlink className='h-[calc(100%)] w-[calc(100%)] text-pink-500'/>
    },
    {
        title: "Authentication & Authorization",
        description: "From implementing secure login systems to managing role-based access, I ensure data integrity and secure user experiences using technologies like JWT and OAuth.",
        icon: <SiAuthelia className='h-[calc(100%)] w-[calc(100%)] text-pink-500'/>
    },
    {
        title: "Version Control & Deployment",
        description: "From maintaining code versions to deploying applications, I utilize Git for efficient collaboration and platforms like Vercel and Render to ensure seamless production rollouts.",
        icon: <TbVersions className='h-[calc(100%)] w-[calc(100%)] text-pink-500'/>
    }
]

const skillSection = (data, index) => {
    return (
        <div key={index} className='increaseSize  mx-10 p-1  text-6xl flex flex-row items-center gap-5 rounded-3xl  bg-pink-50 lg:full lg:mx-auto'>

            {
                data.icon
            }


            <div>
                <h1 className='text-xl font-bold md:text-4xl lg:text-3xl'>{data.title}</h1>
                <p className='text-sm md:text-xl lg:text-sm'>
                {data.description}
                </p>
            </div>

        </div>
    )
}

export default function Skill() {
  return (
    <div id='skill' className='flex flex-col gap-20 mt-20'>

        <div className='flex flex-col items-center  justify-center p-10'>
            <button className=' font-bold rounded-full block p-3 text-black bg-gradient-to-l from-pink-200 via-orange-200 to-yellow-200'>Ways of Working</button>
            <h1 className='text-4xl text-center '>
                Skill that I use to create world-class products
            </h1>
        </div>


      <div className='flex flex-col gap-20 lg:grid lg:grid-cols-2 lg:gap-10 lg:w-[calc(90%)] lg:mx-auto'>
      {
        data.map((item, index) => (
            skillSection(item, index)
        ))
      }
      </div>
    </div>
  )
}
