
import Mainnav from '../components/nav/nav'
import Prodslider from '@/components/prodslider/prodslider'
import Services from '../components/services/services'
import Sendm from '../components/sendm/sendm'
import data from './data/data'

export default function Background() {

  return (
    <div className=' bg-slate-100'>
      <Mainnav/>
      <Prodslider data={data}  header={'منتجات عامه'}/>
      <Prodslider data={data.filter((i)=>i.category==="clothing")}  header={'ملابس '}/>
      <Prodslider data={data.filter((i)=>i.category==="electronics")}  header={'منتجات رقميه'}/>
      <Prodslider data={data.filter((i)=>i.category==="jewelery")}  header={'مجوهرات'}/>
      <Services/>
      <Sendm/>
      
    </div>
  )
}