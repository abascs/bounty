import Product from "../product/product";


export default async function products({data}) {
  return (
    <div className="containerr"> 
    <div className="">
        <h2 className="text-[2rem] font-bold headed py-10">
          shopping from best markets in iraq :-
        </h2>
      </div>
      <div className="flex flex-wrap gap-10">
        {
          data.map((i)=>{
            return <Product key={i.id} rating={i.rating} number={i.id} title={i.title} description={i.description} price={i.price} thumbnail={i.thumbnail}/>
          })
        }
      </div>
    </div>
  )
}

 