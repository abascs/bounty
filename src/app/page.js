
import Mainnav from '../components/nav/nav'
import Prodslider from '@/components/prodslider/prodslider'
import Services from '../components/services/services'
import Sendm from '../components/sendm/sendm'
import data from './data/data'
import data2 from './data/data2'

export default function Background() {
  let clothes=data2.filter(items=>{return (items.category==="men's clothing" || items.category==="women's clothing")})
  let machine=data2.filter(items=>{return (items.category==="electronics")})
  let jems=data2.filter(items=>{return(items.category==="jewelery")})
  return (
    <div className=' bg-slate-100'>
      <Mainnav/>
      <Prodslider data={data.products}  header={'منتجات عامه'}/>
      <Prodslider data={clothes}  header={'ملابس '}/>
      <Prodslider data={machine}  header={'منتجات رقميه'}/>
      <Prodslider data={jems}  header={'مجوهرات'}/>
      <Services/>
      <Sendm/>
      
    </div>
  )
}