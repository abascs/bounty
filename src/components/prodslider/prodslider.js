
import Script from 'next/script'
import Miniproduct from '../miniproduct/miniproduct'
import './prodslider.modul.css'


import React from 'react'

function prodslider({data}) {
  return (
    <div className='containerr mt-6 relative w-full flex flex-col gap-10'>
    <div className='w-full px-8 flex justify-between items-center'>
    <p className='text-blue-500 cursor-pointer'>...المزيد</p>
    <h1 id='title' className='text-right relative text-4xl'>منتجات منزليه</h1>
    </div>
    <div id='scroll' className='snap-x w-full  flex flex-row-reverse gap-6 overflow-x-scroll'>
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