import React from 'react'

function ratting({rating}) {
  return (
    <div>
        {
            rating>=1?(<i className="bi bi-star-fill text-yellow-500"></i>):rating>=0.5?(<i className="bi bi-star-half text-yellow-500"></i>):(<i className="bi bi-star text-yellow-500"></i>)
        }
        {
            rating>=2?(<i className="bi bi-star-fill text-yellow-500"></i>):rating>=1.5?(<i className="bi bi-star-half text-yellow-500"></i>):(<i className="bi bi-star text-yellow-500"></i>)
        }
        {
            rating>=3?(<i className="bi bi-star-fill text-yellow-500"></i>):rating>=2.5?(<i className="bi bi-star-half text-yellow-500"></i>):(<i className="bi bi-star text-yellow-500"></i>)
        }
        {
            rating>=4?(<i className="bi bi-star-fill text-yellow-500"></i>):rating>=3.5?(<i className="bi bi-star-half text-yellow-500"></i>):(<i className="bi bi-star text-yellow-500"></i>)
        }
        {
            rating>=5?(<i className="bi bi-star-fill text-yellow-500"></i>):rating>=4.5?(<i className="bi bi-star-half text-yellow-500"></i>):(<i className="bi bi-star text-yellow-500"></i>)
        }
    </div>
  )
}

export default ratting