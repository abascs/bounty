'use client'
import { useState } from 'react';
import Link from "next/link"

function header() {

  const [isActive, setIsActive] = useState(false);

  const toggleClassName = () => {
    setIsActive(!isActive);
  };
  return (
    <div className="w-full top-0  z-10  bg-[#0CAA7D] text-white ">
    <div className="containerr flex justify-between items-center ">
      <button onClick={toggleClassName}  id="menubtn" className="bg-blue-600 px-4 py-2 cursor-pointer rounded-full block md:hidden">Menu</button>
      <div className="w-full top-0 hidden md:block">
        <ul className="list-none  items-center  flex">
          <li className="pr-10 m-0 py-4 cursor-pointer"><Link href={'/'}>Home</Link></li>
          <li className="pr-10 m-0 py-4 cursor-pointer"><Link href={'/about'}>About</Link></li>
          <li className="pr-10 m-0 py-4 cursor-pointer"><Link href={'/portfolio'}>Portfolio</Link></li>
          <li className="pr-10 m-0 py-4 cursor-pointer"><Link href={'/#service'}>Services</Link></li>
          <li className="pr-10 m-0 py-4 cursor-pointer"><Link href={'/#contactus'}>Contact us</Link></li>
        </ul>
      </div>
      <div className="flex items-center gap-4 h-[56px]">
        <p className="cursor-pointer"><Link href={'./login'}>login</Link></p>
        <i className="fa-solid fa-magnifying-glass text-white"></i>
      </div>
    </div>
    <div className={isActive ? 'top-14' : '-top-64 absolute'}>
    <div id="submenu" className="w-full z-10 bg-[#0CAA7D] absolute block md:hidden">
      <ul className=" containerr">
        <li onClick={toggleClassName}  className="py-3 border-b-2 border-gray-600"><Link href={'/'}>Home</Link></li>
        <li onClick={toggleClassName}  className="py-3 border-b-2 border-gray-600"><Link href={'/about'}>About</Link></li>
        <li onClick={toggleClassName}  className="py-3 border-b-2 border-gray-600"><Link href={'/portfolio'}>Portfolio</Link></li>
        <li onClick={toggleClassName}  className="py-3 border-b-2 border-gray-600"><Link href={'/#service'}>Services</Link></li>
        <li onClick={toggleClassName}  className="py-3 border-b-2 border-gray-600"><Link href={'/#contactus'}>Contact us</Link></li>
      </ul>
    </div>
    </div>
  </div>
  
  )
}

export default header