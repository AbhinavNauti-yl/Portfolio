import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";

const listItems = [
  {
    name: "Work",
    path: "#"
  },
  {
    name: "Tools",
    path: "#tools"
  },
  {
    name: "Skills",
    path: "#skill"
  },
  {
    name: "Education",
    path: "/education"
  },
  {
    name: "Certificates",
    path: "/certificate"
  }
];

const itemWithAnimation = function (item, index) {
  return (

    <Link  key={index} to={item.path}>
    
      <li className="group text-2xl">
        {item.name}
        <span className="  opacity-0 transition-all duration-500 right-0 top-0 relative group-hover:text-blue-700 group-hover:opacity-100 group-hover:right-[100%]">
          |
        </span>
      </li>
    </Link>

  );
};

export default function Header() {
  const [isNavVisible, setNavVisiblity] = useState(false);
  const changeVisiblity = () => {
    setNavVisiblity((current) => {
      return !current;
    });
  };

  return (
    <div className={ `z-10  flex flex-row justify-between item-center w-100 mx-10 my-5 font-bold sticky left-0 right-0 top-5  shadow-lg shadow-[#718096] p-2 bg-white rounded-xl `}>
      <h1 className="text-3xl ">Abhinav Nautiyal</h1>

      <div className="flex items-center z-50 lg:hidden">
        {isNavVisible ? (
          <ImCross onClick={changeVisiblity} className="h-5 w-5" />
        ) : (
          <IoMdMenu onClick={changeVisiblity} className="h-5 w-5 font-bold" />
        )}
      </div>



      <div
        className={`${isNavVisible ? "right-0 backdrop-blur-md" : "-right-full"} flex flex-col lg:flex-row justify-center lg:justify-end fixed w-full lg:w-auto  top-0 bottom-0 gap-5 z-49 lg:static text-2xl items-center transition-all duration-200 g-5 `}
      >
        <ul
          className={`flex flex-col lg:flex lg:flex-row items-center gap-5 text-2xl`}
        >
          {listItems.map((item, index) => itemWithAnimation(item, index))}
        </ul>

        <Link to='/contact'>
          <button className="text-white text-2xl bg-blue-800 rounded-3xl px-3 py-1.5 hover:bg-blue-700">
            Contact
          </button>
        </Link>
      </div>
    </div>
  );
}
