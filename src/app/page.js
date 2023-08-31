
import Mainnav from '@/components/nav/nav'
import Products from '@/components/products/products'
 import Services from '@/components/services/services'
 import Sendm from '@/components/sendm/sendm'
export default function Background() {
  return (
    <div className=' bg-slate-100'>
      <Mainnav/>
      <Products/>
      <Services/>
      <Sendm/>
      
    </div>
  )
}