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
      <div className="flex flex-wrap gap-10">
        {
          data.products.map((i)=>{
            return <Product key={i.id} number={i.id} title={i.title} description={i.description} price={i.price} thumbnail={i.thumbnail}/>
          })
        }
      </div>
    </div>
  )
}

 