import React from 'react'
import Image from 'next/image'
import Market from '../../../public/market.svg'
function sendm() {
  return (
    <div id='contactus' className="w-full md:h-screen grid grid-cols-1  md:grid-cols-2 mt-10">
        <div className="bg-[#0CAA7D] flex justify-center items-center py-10">
            <form className="form flex items-center flex-col gap-7 w-full">
            <h1 className="text-4xl font-bold text-white">Sign Up</h1>
                <input type="text" className="w-9/12 h-10 rounded-3xl" placeholder="     Name"/>
                <input type="text" className="w-9/12 h-10 rounded-3xl" placeholder="     Password"/> 
                <input type="text" className="w-9/12 h-10 rounded-3xl" placeholder="     Phone number"/> 
                <input type="text" className="w-9/12 h-10 rounded-3xl" placeholder="     Message"/> 
                <button className="bg-[red] px-6 py-2 rounded-full text-white text-xl font-bold tracking-widest">send</button>
            </form>
        </div>
        <div className="flex justify-center items-center relative">
            <Image src={Market} className="w-8/12"  alt=""/>
        </div>
    </div>
  )
}

export default sendm