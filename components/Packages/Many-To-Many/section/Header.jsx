import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className="lg:min-h-[75vh] min-h-[800px] flex items-center bg-slate-200">
      <div className="mx-6 mt-16 h-full w-auto flex flex-col justify-center items-center 2xl:w-[1400px] 2xl:mx-auto">
        <h1
          className="text-5xl leading-tight font-bold text-center md:leading-loose md:text-6xl"
          data-aos="fade-up">
          Connect anywhere anytime!
        </h1>
        <p className="text-center" data-aos="fade-up" data-aos-duration="2500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium architecto <br />{' '}
          blanditiis ex beatae voluptates fugiat animi vitae a quasi quia.
        </p>
        <button
          className="w-full mt-10 py-4  rounded-md bg-primary text-white font-bold hover:bg-black duration-500 md:w-1/3"
          data-aos="fade-up"
          data-aos-duration="4500">
          Start Free Trial
        </button>
        <Image
          src="/packages/videocall.png"
          width={900}
          height={700}
          className="object-cover rounded-lg"
          alt="LiveCommerce Video Call"
        />
      </div>
    </div>
  )
}

export default Header
