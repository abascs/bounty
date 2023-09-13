import React from 'react'

function sellbuy() {
  return (
            <div>
                <h2 className="text-2xl font-semibold mb-4">ملخص الطلب</h2>
                <div className="bg-white p-4 rounded shadow">
                    <p className="text-gray-600">عدد المنتجات: 2</p>
                    <p className="text-gray-600">المجموع الكلي: $40.00</p>
                </div>
                <div className="mt-4">
                    <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">شراء الآن</button>
                </div>
            </div>
  )
}

export default sellbuy