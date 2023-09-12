import Link from "next/link"
import Image from "next/image"
function product(props) {
  return (
    <div className="relative flex w-64 mx-auto flex-col h-min rounded-xl bg-slate-200 bg-clip-border text-gray-700 shadow-md">
  <div className="relative aspect-square w-52 mx-auto -mt-6  overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-[#0CAA7D]">
  <Image fill className="object-fill border rounded-xl border-[#0CAA7D] " src={props.thumbnail} alt=""/>
  </div>
  <div className="p-6 pb-1">
    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
     {props.title}
    </h5>
    
  </div>
  <div className="px-6 py-1 flex gap-1">
  <i className="bi bi-star-fill  text-yellow-600"></i>
  <i className="bi bi-star-fill  text-yellow-600"></i>
  <i className="bi bi-star-fill  text-yellow-600"></i>
  <i className="bi bi-star-fill  text-yellow-600"></i>
  <i className="bi bi-star-fill  text-yellow-600"></i>
  <p>(300 view)</p>
  </div>
  <div className="p-6 pt-0">
    <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-[#0CAA7D] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
      <Link href={`/${props.number}`}>Read More</Link>
    </button>
  </div>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"></link>
</div>

  )
}

export default product