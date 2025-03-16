import React from "react";

import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";

import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiMongoosedotws } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

const data = [
  {
    type: "Languages",
    skill: [
      {
        name: "C/C++",
        icon: (
          <TbBrandCpp className="w-[calc(25%)] h-[calc(25%)] text-pink-500 md:w-[calc(50%)] md:h-[calc(50%)]" />
        ),
        proficency: "Intermediate",
      },
      {
        name: "Java",
        icon: <FaJava className="w-[calc(25%)] h-[calc(25%)] text-pink-500 md:w-[calc(50%)] md:h-[calc(50%)]" />,
        proficency: "Intermediate",
      },
      {
        name: "Python",
        icon: (
          <FaPython className="w-[calc(25%)] h-[calc(25%)] text-pink-500 md:w-[calc(50%)] md:h-[calc(50%)]" />
        ),
        proficency: "Intermediate",
      },
      {
        name: "JavaScript",
        icon: <FaJs className="w-[calc(25%)] h-[calc(25%)] text-pink-500 md:w-[calc(50%)] md:h-[calc(50%)]" />,
        proficency: "Intermediate",
      },
    ],
  },
  {
    type: "Frameworks, Libraries and Databases",
    skill: [
      {
        name: "React.js",
        icon: <FaReact className="w-[calc(25%)] h-[calc(25%)] text-pink-500 md:w-[calc(50%)] md:h-[calc(50%)]" />,
        proficency: "Intermediate",
      },
      {
        name: "Redux.js",
        icon: <SiRedux className="w-[calc(25%)] h-[calc(25%)] text-pink-500 md:w-[calc(50%)] md:h-[calc(50%)]" />,
        proficency: "Intermediate",
      },
      {
        name: "Mongoose",
        icon: (
          <SiMongoosedotws className="w-[calc(25%)] h-[calc(25%)] text-pink-500 md:w-[calc(50%)] md:h-[calc(50%)]" />
        ),
        proficency: "Intermediate",
      },
      {
        name: "MySQL",
        icon: <SiMysql className="w-[calc(25%)] h-[calc(25%)] text-pink-500 md:w-[calc(50%)] md:h-[calc(50%)] " />,
        proficency: "Intermediate",
      },
      {
        name: "MongoDB",
        icon: (
          <SiMongodb className="w-[calc(25%)] h-[calc(25%)] text-pink-500 md:w-[calc(50%)] md:h-[calc(50%)]" />
        ),
        proficency: "Intermediate",
      },
    ],
  },
];

const element = (data, index) => {
  return (
    <div
      key={index}
      className={`m-10 p-10 rounded-2xl mx-auto gap-5 bg-pink-50 w-[calc(75%)]  ${index == 1 ? "appearRight" : "appearLeft"} `}
    >
      <h1 className="text-3xl md:text-4xl lg:7xl">{data.type}</h1>

      <div className="flex flex-col gap-5 md:grid md:grid-cols-2 lg:gap-1 ">

        {data.skill.map((data, index) => (
          <div key={index} className="text-2xl md:text-3xl lg:text-4xl flex flex-row items-center gap-5 ">
            {data.icon}
            <div>
              <h1 className="font-bold">{data.name}</h1>
              <p className="text-lg md:text-xl">{data.proficency}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default function TechStack() {

    const othersData = ["Node.js","Data Structures and Algorithms", "OOPS", "DBMS", "Web Development"]
  return(
    <div id="tools">

        
        {data.map((data, index) => (
            element(data, index) 
        ))}

        <div
        className="m-10 p-10 rounded-2xl flex flex-col gap-5 bg-pink-50 mx-auto w-[calc(75%)] appearLeft"
        >
            <h1 className="text-3xl md:text-5xl">Others</h1>
            
            <div className="text-lg grid grid-cols-2 gap-5 items-center ">
            {othersData.map((data, index) => (
                <div key={index} className="text-lg md:text-2xl flex flex-row items-center gap-5 ">
                <div>
                    <h1 className="font-bold">{data}</h1>
                    <p className="">Intermediate</p>
                </div>
                </div>
            ))}
            </div>
        </div>
    </div>
  )
}
