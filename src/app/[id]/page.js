import Image from "next/image"
import product from '@/app/data/data.json'
export default function page({params}) {
  let img=product.products[params.id -1]
  return (
    <div className="w-full relative containerr h-screen flex flex-col justify-around items-center">
  <Image src={img.thumbnail} width={400} height={400} alt="hello"/>
  <div className="w-full flex justify-around gap-4">
    {
      img.images.map((i)=>{
        return(<Image width={100} height={100} src={i} alt="hello"/>)
      })
    }
  </div>
  <div className="flex justify-around items-center w-full">
    <p>{img.price} د,ع</p>
    <p>⭐⭐⭐⭐⭐</p>
    <p>{img.title}</p>
  </div>
  <p className="columns-2 text-justify">
    {
      img.description
    }
  </p>

</div>
  )
}

