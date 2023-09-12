import Image from "next/image"
import product from '@/app/data/data.json'
import Miniproduct from "@/components/miniproduct/miniproduct"
import { Cairo,Poppins } from 'next/font/google'
const poppins = Poppins({subsets:['latin'],weight:['400'],variable:'--font-poppins'})

const cairo = Cairo({
  subsets: ['latin'],
  display: 'swap',
  variable:'--font-cario'
})

export default function page({params}) {
  let img=product.products[params.id -1]
  return (
    <main dir="rtl" className={`${cairo.className} containerr text-right bg-slate-200 mx-auto my-8 p-4`}>
        <div className="grid relative grid-cols-1 md:grid-cols-3 gap-4">
            <div className=" order-2 md:order-1 col-span-2 justify-between flex flex-col">
                <h1 className={` ${poppins.className} font-extrabold text-3xl leading-10`}>{img.title}</h1>
                <h2 className="text-xl font-semibold mb-2">تفاصيل المنتج</h2>
                <p className="text-gray-600">{img.description}</p>

                <h3 className="text-lg font-semibold mt-4">المميزات:</h3>
                <ul  className="list-disc list-inside text-gray-600">
                    <li>ميزة 1</li>
                    <li>ميزة 2</li>
                    <li>ميزة 3</li>
                </ul>

                <button className="bg-blue-500 justify-self-end text-white px-4 py-2 mt-4 hover:bg-blue-600 transition duration-300 ease-in-out" >أضف إلى السلة {img.price}$</button>
            </div>
            <div className=" aspect-square w-full relative order-1 md:order-2">
          <Image  fill src={img.thumbnail} alt="صورة المنتج"/>
          </div>
        </div>

        <div className="mt-8">
            <h2 className="text-xl font-semibold mb-2">وصف ويل للمنتج</h2>
            <p className="text-gray-600">وصف مفصل لماذا يجب عليك شراء هذا المنتج وكيف يمكن أن يفيدك في حياتك اليومية.</p>
        </div>

        <div className="mt-8">
            <h2 className="text-xl font-semibold mb-2">منتجات ذات علاقة</h2>
            <div className="flex items-end overflow-x-auto gap-4 snap-x scroll-mx-10">
              {
                product.products.map((i)=>{
                  return(
                    <Miniproduct key={i.id} number={i.id} title={i.title} description={i.description} price={i.price} thumbnail={i.thumbnail}/>
                  )
                })
              }
            </div>
        </div>

        <div className="mt-8">
            <h2 className="text-xl font-semibold mb-2">تعليقات المشترين</h2>
            <div className="bg-white p-4 shadow-md">
                <h3 className="text-lg font-semibold">عنوان التعليق</h3>
                <p className="text-gray-600">نص التعليق هنا. يمكنك تضمين آراء المشترين وتقييماتهم حول المنتج.</p>
            </div>
        </div>
    </main>
  )
}

