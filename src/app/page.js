
import Mainnav from '../components/nav/nav'
import Products from '../components/products/products'
import Pagination from '@/components/pagination/pagination'
import Services from '../components/services/services'
import Sendm from '../components/sendm/sendm'
import data from './data/data'

export default function Background() {
  return (
    <div className=' bg-slate-100'>
      <Mainnav/>
      <Pagination data={data.products}/>
      <Services/>
      <Sendm/>
      
    </div>
  )
}