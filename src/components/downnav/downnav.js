import { Cairo } from 'next/font/google'
 
const cairo = Cairo({
  subsets: ['latin'],
  display: 'swap',
  variable:'--font-cario'
})

function downnav() {
  return (
    <div className={`${cairo.className} w-full bg-slate-800 py-10   text-white`}>
    <div className="w-full containerr grid grid-cols-3">
      <div className=" col-span-2  flex flex-col gap-5 items-end mr-20 text-right">
        <h1>تواصل معنا</h1>
        <ul className="flex flex-col gap-2" dir="rtl">
          <li>07813877361</li>
          <li>07813877361</li>
          <li>07813877361</li>
        </ul>
      </div>
      <div className="text-right flex flex-col gap-4 mr-4">
        <h1 className="text-xl font-bold">لهلا  بيكم في موقع بونتي ستور</h1>
        <p>ظيف المنتج و ابني متجر و نسق براحتك و اكسب زبائن استفد من خدمه دفع سريع و و متجر المربوط</p>
      </div>
    </div>
  </div>
  )
}

export default downnav