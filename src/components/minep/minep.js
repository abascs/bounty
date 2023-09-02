import Image from "next/image"
import Link from "next/link"
function product(props) {
  return (
    <div dir="ltr" className=" flex flex-col justify-between max-w-[300px] min-w-[250px] snap-center	 mx-auto relative items-end border rounded-lg overflow-hidden border-[#0CAA7D] ">
      <div className=" w-full h-[200px] relative self-start">
      <Image src={props.thumbnail} fill sizes="100" alt="hello"/>
      </div>
      <div className=" flex flex-col justify-between gap-2  px-4">
        <h2 className="text-left text-lg font-bold">{props.title}</h2>
        <p className="text-left line-clamp-2">{props.description}</p>
        <p className="text-left">{props.price} د.ع</p>
        <button className="text-[#0CAA7D] mx-auto border w-min mb-4 whitespace-nowrap self-center border-[#0CAA7D] px-8 rounded-md py-2"><Link href={`${props.number}`}>احصل عليه</Link></button>
      </div>
    </div>

  )
}

export default product