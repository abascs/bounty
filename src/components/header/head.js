'use client'
import { List } from 'postcss/lib/list';
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
    <i onClick={toggleClassName}  id="menubtn" className="bi bi-list text-5xl text-white cursor-pointer rounded-full block md:hidden"></i>
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
        <Link href={'/Card'}><i className="bi bi-cart-check-fill text-2xl"></i></Link>
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
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css"></link>
  </div>
  
  )
}

export default header