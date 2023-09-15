'use client'
import Link from "next/link";
import Product from "../product/product";
import React, { useState } from 'react'

function pagination({data}) {
  const [currentPage,setCurrentPage]=useState(1);
  const PRUDUCT_PER_PAGE=6;
  const pages=Math.ceil(data.length/PRUDUCT_PER_PAGE);
  const startIndex=(currentPage-1)*PRUDUCT_PER_PAGE;
  const finishIndex =currentPage*PRUDUCT_PER_PAGE;
  const prud=data.slice(startIndex,finishIndex);
  let generatepages=[];
  for (let i = 1; i <= pages; i++) {
    generatepages.push(i)
    
  }
  return (
    <div className="containerr"> 
    <div className="">
        <h2 id="first" className="text-[2rem] font-bold headed py-10">
          shopping from best markets in iraq :-
        </h2>
      </div>
      <div className="flex flex-wrap gap-10">
        {
          prud.map((i)=>{
            return <Product key={i.id} rating={i.rating} number={i.id} title={i.title} description={i.description} price={i.price} thumbnail={i.thumbnail}/>
          })
        }
      </div>
      
      <div className="mt-4 flex items-center justify-center">
        <nav className="relative z-0 inline-flex shadow-sm">
          <button disabled={currentPage===1} onClick={()=>setCurrentPage(prev=>prev-1)} className="relative disabled:cursor-not-allowed cursor-pointer inline-flex items-center border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"> Previous </button>
          {
            generatepages.map((i)=>{
              return(<Link href={'/#first'} onClick={()=>setCurrentPage(i)} key={i}   className={`${currentPage===i?'bg-gray-100':'bg-white'} relative cursor-pointer -ml-px inline-flex items-center border border-gray-300  px-4 py-2 text-sm font-medium text-indigo-600 hover:bg-indigo-50`}> {i} </Link>)
            })
          }
          <button disabled={currentPage===pages}  onClick={()=>setCurrentPage(prev=>prev+1)} className="relative disabled:cursor-not-allowed cursor-pointer -ml-px inline-flex items-center border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"> Next </button>
        </nav>
    </div>

      
    </div>
  )
}

export default pagination