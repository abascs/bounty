import Image from "next/image"
import img from '../../../public/about.svg'

import { Cairo } from 'next/font/google'
 
const cairo = Cairo({
  subsets: ['latin'],
  display: 'swap',
  variable:'--font-cario'
})

function about() {
  return (
    <div className={`${cairo.className} text-right containerr`}>
      <section className=" py-12">
        <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:col-span-1">
                    <Image src={img} alt="صورة عنا" className="rounded-lg shadow-md"/>
                </div>
                <div className="md:col-span-1">
                    <h2 className="text-3xl font-semibold mb-4">من نحن؟</h2>
                    <p className="text-xl mb-6 leading-8">
                        نحن شركة متخصصة في تطوير حلول تكنولوجية مبتكرة. نسعى دائمًا إلى تقديم أفضل الخدمات والمنتجات لعملائنا في جميع أنحاء العالم.
                    </p>
                    <p className="text-xl mb-6 leading-8">
                        نحن نضمن تقديم حلاً مخصصًا لاحتياجاتك ومتطلباتك الفريدة. فريقنا ذو الخبرة الواسعة يمكنه مساعدتك في تحقيق أهدافك التكنولوجية.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section className=" py-12">
        <div className="container mx-auto">
            <h2 className="text-3xl font-semibold mb-4">خدماتنا</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg p-6 shadow-md">
                    <h3 className="text-xl font-semibold mb-4">تطوير تطبيقات الويب</h3>
                    <p className="text-lg leading-6">نقدم خدمات تطوير تطبيقات الويب عالية الجودة تلبي احتياجات عملك.</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                    <h3 className="text-xl font-semibold mb-4">تصميم واجهات المستخدم</h3>
                    <p className="text-lg leading-6">نقدم تصميمًا مبتكرًا وجذابًا لواجهات المستخدم لتحسين تجربة المستخدم.</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                    <h3 className="text-xl font-semibold mb-4">استشارات تكنولوجية</h3>
                    <p className="text-lg leading-6">نقدم استشارات متخصصة في مجال التكنولوجيا لمساعدتك في اتخاذ القرارات الصائبة.</p>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default about