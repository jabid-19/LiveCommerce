import Image from 'next/image'
import React, { useState } from 'react'
import { BsMic } from 'react-icons/bs'
const OneToOneIndex = () => {
  const [iconsChange, setIconsChange] = useState(false)
  return (
    <div className="lg:min-h-[75vh] min-h-[800px] flex items-center bg-slate-200">
      <div className="mx-6 mt-16 h-full w-auto flex flex-col-reverse items-center lg:flex-row lg:justify-between md:items-center md:gap-2 lg:mt-0 2xl:w-[1400px] 2xl:mx-auto">
        <div className="w-full my-10 flex flex-col items-center lg:w-1/2 lg:items-start lg:my-0">
          <h1 className="text-5xl text-center text-black font-bold leading-tight md:text-6xl lg:text-start">
            Connect{' '}
            <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary relative inline-block">
              <span className="relative text-white">easily</span>
            </span>{' '}
            without <br /> any hassle
          </h1>
          <p className="text-neutral text-center mt-5 text-lg lg:text-start">
            Virtual online meetings is when people from around the world, regardless of their
            location. It conduct meetings from various places without the need to travel.
          </p>
          <div className="mt-10 flex flex-col gap-8 md:flex-row">
            <div className="flex items-center gap-4 mb-2 md:max-mr-28">
              <p className="text-5xl font-bold">96+</p>
              <p className="text-3xl">
                Trusted <br /> Partners
              </p>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-5xl font-bold">10k+</p>
              <p className="text-3xl">
                Active <br /> Users
              </p>
            </div>
          </div>
          <button className="w-full mt-10 py-4  rounded-md bg-primary text-white font-bold hover:bg-black duration-500 md:w-1/2">
            Start Free Trial
          </button>
        </div>
        <div className="relative w-full h-full flex justify-center lg:w-1/2 lg:justify-end">
          <div>
            <Image
              src="/packages/meeting.jpg"
              alt="Picture of the author"
              width={500}
              height={400}
              className="object-cover rounded-lg"
            />
          </div>
          <div className="hidden md:block">
            <div
              className="absolute bg-white w-1/3 rounded-full flex px-4 py-2 items-center gap-4 left-[0%] top-[70%] lg:left-[-10%] lg:w-1/2 lg:top-[60%] lg:px-4 lg:py-4 lg:flex-row xl:left-[5%] xl:w-1/3"
              data-aos="fade-up">
              <div className="flex items-center">
                <div
                  className={`px-4 py-4 rounded-full text-bold hover:cursor-pointer ${
                    iconsChange
                      ? 'bg-primary duration-300'
                      : ' bg-black text-secondary duration-300'
                  }`}
                  onClick={() => setIconsChange(!iconsChange)}>
                  <BsMic size={20} />
                </div>
              </div>
              <div className="">
                <p className="font-bold">Start video call</p>
                <p className="text-neutral text-xs">With Robert</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OneToOneIndex
