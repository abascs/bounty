import Image from "next/image"
function product(props) {
  return (
    <div className=" grid grid-rows-2 max-w-[300px] mx-auto relative items-end border rounded-lg overflow-hidden border-[#0CAA7D] ">
      <div className=" w-full h-[200px] relative self-start">
      <Image src={props.thumbnail} fill sizes="100" alt="hello"/>
      </div>
      <div className=" flex flex-col h-[260px] justify-between gap-2  px-4">
        <h2 className="text-left text-lg font-bold">{props.title}</h2>
        <p className="text-left">{props.description}</p>
        <p className="text-left">{props.price} د.ع</p>
        <button className="text-[#0CAA7D] mx-auto border w-min mb-4 whitespace-nowrap self-center border-[#0CAA7D] px-8 rounded-md py-2">أضافه الى السله</button>
      </div>
    </div>

  )
}

export default product