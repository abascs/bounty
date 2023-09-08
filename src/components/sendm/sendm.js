'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Market from '../../../public/market.svg'
export default function sendm() {
  let [name,setname]=useState('')
  let [password,setpassword]=useState('')
  let [pnumber,setpnumber]=useState('')
  let [message,setmessage]=useState('')
  const handelname = (event) => {
    setname(event.target.value);
  };
  const handelmessage = (event) => {
    setmessage(event.target.value);
  };
  const handelpassword = (event) => {
    setpassword(event.target.value);
  };
  const handelpnumber = (event) => {
    setpnumber(event.target.value);
  };
  async function send(){
    //   let data={
    //   name:name,
    //   password:password,
    //   Pnumber:Pnumber,
    //   Message:Message
    // }
    // console.log(data)
    const header = {
      'Content-Type': 'application/json',
    };
    let a=await fetch('/API/post',{
      method:"POST",
      headers:header,
      body:JSON.stringify({
        name,password,pnumber,message
      })
    })
    console.log(a)
  }

  return (
    <div id='contactus' className="w-full md:h-screen grid grid-cols-1  md:grid-cols-2 mt-10">
        <div className="bg-[#0CAA7D] flex justify-center items-center py-10">
            <form action={send} className="form flex items-center flex-col gap-7 w-full">
            <h1 className="text-4xl font-bold text-white">Sign Up</h1>
                <input onChange={handelname} type="text" className="w-9/12 h-10 rounded-3xl" placeholder="     Name"/>
                <input onChange={handelpassword} type="text" className="w-9/12 h-10 rounded-3xl" placeholder="     Password"/> 
                <input onChange={handelpnumber} type="text" className="w-9/12 h-10 rounded-3xl" placeholder="     Phone number"/> 
                <input onChange={handelmessage} type="text" className="w-9/12 h-10 rounded-3xl" placeholder="     Message"/> 
                <button className="bg-[red] px-6 py-2 rounded-full text-white text-xl font-bold tracking-widest">send</button>
            </form>
        </div>
        <div className="flex justify-center items-center relative">
            <Image src={Market} className="w-8/12"  alt=""/>
        </div>
    </div>
  )
}

