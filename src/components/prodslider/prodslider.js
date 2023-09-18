import { Cairo } from 'next/font/google'
 
const cairo = Cairo({
  subsets: ['latin'],
  display: 'swap',
  variable:'--font-Cairo'
})
import Miniproduct from '../miniproduct/miniproduct'


import React from 'react'

function prodslider({data,header}) {
  return (
    <div className='containerr mt-6 relative w-full flex flex-col gap-10'>
    <div className='w-full px-8 '>
    <div className="w-full flex relative justify-center items-center ">
      <h1 className={`${cairo.className} z-10 text-4xl bg-slate-100 px-2 md:px-8`}>{header}</h1>
      <div className="absolute w-full h-1 top-6 bg-blue-500"></div>
    </div>  
    </div>
    <div id='scroll' className='snap-x w-full  flex flex-row-reverse gap-6 overflow-x-scroll'>
        {
            data.map((i)=>{
                return(<Miniproduct key={i.id} rating={i.rating.rate} number={i.id} title={i.title} description={i.description} price={i.price} thumbnail={i.thumbnail}/>)
            })
        }
    </div>
</div>
  )
}

export default prodslider