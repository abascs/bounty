import Link from "next/link"

function header() {
  return (
    <div className="w-full top-0 sticky z-10  bg-[#0CAA7D] text-white ">
    <div className="containerr flex justify-between items-center ">
      <div className="w-full top-0">
        <ul className="list-none  items-center  hidden md:flex">
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
    
  </div>
  )
}

export default header