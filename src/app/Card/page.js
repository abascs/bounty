import React from 'react'
import Basket from '@/components/basket/basket'
import Sellbuy from '@/components/sellbuy/sellbuy'
import { Cairo } from 'next/font/google'
 
const cairo = Cairo({
  subsets: ['latin'],
  display: 'swap',
  variable:'--font-cario'
})


function Card() {
  return (
    <div className={`${cairo.className} containerr min-h-[500px] mx-auto py-8`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <h2 className="text-2xl font-semibold mb-4">المنتجات في السلة</h2>
                <Basket/>
            </div>
            <Sellbuy/>
            
        </div>
    </div>
  )
}

export default Card