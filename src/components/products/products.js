import Product from "../product/product";
import data from '../../app/data/data.json'


export default async function products() {
  return (
    <div className="containerr"> 
    <div className="">
        <h2 className="text-[2rem] font-bold headed py-10">
          shopping from best markets in iraq :-
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2  lg:grid-cols-3">
        {
          data.products.map((i)=>{
            return <Product key={i.id} number={i.id} title={i.title} description={i.description} price={i.price} thumbnail={i.thumbnail}/>
          })
        }
      </div>
    </div>
  )
}

 