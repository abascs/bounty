
import Mainnav from '../components/nav/nav'
import Prodslider from '@/components/prodslider/prodslider'
import Pagination from '@/components/pagination/pagination'
import Services from '../components/services/services'
import Sendm from '../components/sendm/sendm'
import data from './data/data'

export default function Background() {
  return (
    <div className=' bg-slate-100'>
      <Mainnav/>
      <Prodslider data={data.products}/>
      <Prodslider data={data.products}/>
      <Services/>
      <Sendm/>
      
    </div>
  )
}