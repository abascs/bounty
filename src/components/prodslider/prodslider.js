'use client'
import { useState } from 'react'
import Miniproduct from '../miniproduct/miniproduct'
import './prodslider.modul.css'

function prodslider({data}) {
    const [slideindex,setslideindex]=useState(1);
    const handelClick=direction=>{
        console.log(slideindex)
        if(direction=="left")
        setslideindex(slideindex-1);
        else 
        setslideindex(slideindex+1);
    }

  return (
    <div className='containerr mt-6 relative w-full flex flex-col gap-10'>
        <h1 id='title' className='text-right relative text-4xl'>منتجات منزليه</h1>
        <div className={` snap-x w-full  flex flex-row-reverse gap-6 overflow-scroll`}>
            {
                data.map((i)=>{
                    return(<Miniproduct key={i.id} rating={i.rating} number={i.id} title={i.title} description={i.description} price={i.price} thumbnail={i.thumbnail}/>)
                })
            }
        </div>
    </div>
  )
}

export default prodslider