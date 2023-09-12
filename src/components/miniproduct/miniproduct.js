import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Ratting from '../ratting/ratting'

function miniproduct(props) {
  return (
    <div className="relative flex w-44 mx-auto my-6 flex-col h-min rounded-xl bg-slate-50 bg-clip-border text-gray-700 shadow-md">
  <div className="relative aspect-square w-32 mx-auto -mt-6  overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-[#0CAA7D]">
  <Image fill className="object-fill border rounded-xl border-[#0CAA7D] " src={props.thumbnail} alt=""/>
  </div>
  <div className="p-6 py-1">
    <h5 dir='ltr' className=" block whitespace-nowrap text-left truncate text-sm leading-snug tracking-normal text-blue-gray-900 antialiased">
    {props.title}
    </h5>
    
  </div>
  <div dir='ltr' className="px-6 mb-1 flex flex-wrap">
  <Ratting rating={props.rating}/>
  </div>
  <div className="px-6 pb-3 pt-0">
    <button data-ripple-light="true" type="button" className="select-none whitespace-nowrap rounded-lg bg-[#0CAA7D] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
      <Link href={`/${props.number}`}>Read More</Link>
    </button>
  </div>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"></link>
</div>
  )
}

export default miniproduct