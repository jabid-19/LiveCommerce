import Image from 'next/image'
import imageLoader from '../../../../helper/imageLoader'
import videoCall from '../../../../public/packages/videocall.png'
import React from 'react'

const Header = () => {
  return (
    <div className="py-12 lg:py-36 flex items-center bg-[#e8e4d9]">
      <div className="mx-6 h-full w-auto flex flex-col justify-center items-center 2xl:w-[1400px] 2xl:mx-auto">
        <h1
          className="text-3xl md:text-5xl leading-tight font-bold text-center md:leading-loose lg:text-6xl"
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
          src={videoCall}
          width={900}
          height={700}
          alt="LiveCommerce Video Call"
          placeholder="blur"
          className="object-cover rounded-lg bg-[#e8e4d9]"
          loader={imageLoader}
        />
      </div>
    </div>
  )
}

export default Header
