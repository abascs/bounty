'use client'
import style from './sendm.module.css'
import Link from 'next/link'
import { useState } from 'react'
export default function login() {
  let [Name,setname]=useState('')
  let [Email,setEmail]=useState('')
  let [Password,setPassword]=useState('')
  const handelname = (event) => {
    setname(event.target.value);
  };
  const handelEmail = (event) => {
    setEmail(event.target.value);
  };
  const handelPassword = (event) => {
    setPassword(event.target.value);
  };
  async function send(){
    const header = {
      'Content-Type': 'application/json',
    };
    let a=await fetch('/API/signUp',{
      method:"POST",
      headers:header,
      body:JSON.stringify({
        Name,Email,Password
      })
    })
    console.log(a)
  }
  return (
    <div  className=" bg-slate-100 w-full h-screen flex justify-center items-center">
      <form action={send} className={style.form}>
    <div className={style.header}>Sign up</div>
    <div className={style.inputs}>
        <input onChange={handelname} placeholder="Name" className={style.input} type="text"/>
        <input onChange={handelEmail} placeholder="Email" className={style.input} type="text"/>
        <input onChange={handelPassword} placeholder="Password" className={style.input} type="password"/>
    <div className={style.checkboxcontainer}>
        <label className={style.checkbox}>
        <input type="checkbox" id="checkbox"/>
        </label>
        <label htmlFor="checkbox" className={style.checkboxtext}>Remember me</label>
    </div>
    <button className={style.siginbtn}>Submit</button>
    <p className={style.signuplink}>Do you have an account? <Link href="/login">login</Link></p>
    </div>
</form>
    </div>
  )
}

