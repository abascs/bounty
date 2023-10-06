import Market from '../../../public/market.svg'
import Image from 'next/image'
function nav() {
  return (
    <div className="containerr grid px-4 grid-cols-1 lg:grid-cols-2 gap-0 md:gap-10">
    <div className="flex flex-col justify-around py-10 text-center md:text-left gap-10 order-2 lg:order-1">
      <h1 className=" text-4xl md:text-7xl text-[#bbb]">your best online shop destination</h1>
      <p className="text-2xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, mollitia a! Fugit mollitia vel dicta facilis neque magnam commodi in.</p>
      <button className="uppercase text-xl py-4 cursor-pointer font-bold rounded-md bg-[#0CAA7D] border-none outline-none w-max text-white px-10">shop now</button>
    </div>
    <div className="order-1 flex justify-center items-center">
        <Image
        src={Market} alt='hello'
        />
    </div>
  </div>
  )
}

export default nav