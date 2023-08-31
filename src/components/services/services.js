import React from 'react'
import Image from 'next/image'
import idea from '../../../public/idea.png'
import controller from '../../../public/controller.png'
import monitor from '../../../public/monitor.png'
import rocketship from '../../../public/rocket-ship.png'
function services() {
  return (
    <section id='service' className="w-full py-4">
    <div className="containerr">
      <div className="">
        <h2 className="text-[2rem] font-bold headed">
          What we do
        </h2>
      </div>
      <div className="flex flex-wrap">
        <div className="md:w-1/4 pr-4 pl-4 sm:w-1/2 ">
          <div className="my-4 content-box bg-[#f00] flex flex-col justify-around text-center text-white gap-4 py-8 rounded-2xl items-center">
            <div className="img-box">
              <Image src={idea} alt=""/>
            </div>
            <div className="detail-box">
              <h6 className=" text-lg tracking-wider mb-2 font-bold">
                Original Ideas
              </h6>
              <p className="px-10">
                It is a long established fact that a reader will be distracted
                by the readable content
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-1/4 pr-4 pl-4 sm:w-1/2">
          <div className="my-4 content-box bg-[#0CAA7D] flex flex-col justify-around text-center text-white gap-4 py-8 rounded-2xl items-center">
            <div className="img-box">
              <Image src={controller} alt=""/>
            </div>
            <div className="detail-box">
              <h6 className="text-lg tracking-wider mb-2 font-bold">
                Great apps
              </h6>
              <p className="px-10">
                It is a long established fact that a reader will be distracted
                by the readable content
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-1/4 pr-4 pl-4 sm:w-1/2">
          <div className="my-4 content-box bg-[#f00] flex flex-col justify-around text-center text-white gap-4 py-8 rounded-2xl items-center">
            <div className="img-box">
              <Image src={monitor} alt=""/>
            </div>
            <div className="detail-box">
              <h6 className="text-lg tracking-wider mb-2 font-bold">
                High Resolution
              </h6>
              <p className="px-10">
                It is a long established fact that a reader will be distracted
                by the readable content
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-1/4 pr-4 pl-4 sm:w-1/2">
          <div className="my-4 content-box bg-[#0CAA7D] flex flex-col justify-around text-center text-white gap-4 py-8 rounded-2xl items-center">
            <div className="img-box">
              <Image src={rocketship} alt=""/>
            </div>
            <div className="detail-box">
              <h6 className="text-lg tracking-wider mb-2 font-bold">
                Fast Loading
              </h6>
              <p className="px-10">
                It is a long established fact that a reader will be distracted
                by the readable content
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default services