import React from 'react'
import Image from 'next/image'
function basket() {
  return (
                <div className="flex  items-center mb-2 border px-4">
                    <Image width={64} height={64} src={"https://i.dummyjson.com/data/products/23/thumbnail.jpg"} alt="اسم المنتج" className="w-16 h-16 rounded-full"/>
                    <div className="ml-4">
                        <h3 className="text-lg font-semibold">اسم المنتج</h3>
                        <p className="text-gray-600">السعر: $20.00</p>
                        <p className="text-gray-600">الكمية: 2</p>
                    </div>
                </div>
  )
}

export default basket