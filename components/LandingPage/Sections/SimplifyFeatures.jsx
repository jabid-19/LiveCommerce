import Image from 'next/image'
import imageLoader from '../../../helper/imageLoader'
import meeting from '../../../public/packages/meeting_2.jpg'
import React from 'react'
import { BiDevices, BiPhoneCall } from 'react-icons/bi'
import { BsCameraVideo, BsLightning, BsLock } from 'react-icons/bs'

const SimplifyFeatures = ({ featuresContent }) => {
  const [iconsChange, setIconsChange] = React.useState(false)
  return (
    <div className="flex items-center bg-[#e8e4d9] mb-8 lg:mb-32">
      <div className="mx-6 h-full w-auto flex flex-col items-center lg:flex-row lg:justify-between md:items-center md:gap-2 2xl:w-[1400px] 2xl:mx-auto">
        <div className="relative w-full h-full flex justify-center lg:w-1/2 lg:justify-start">
          <div>
            <Image
              src={meeting}
              alt="Live meeting with client"
              width={500}
              height={400}
              className="object-cover rounded-lg bg-secondary"
              placeholder="blur"
              loader={imageLoader}
            />
          </div>
          <div className="hidden md:block">
            <div
              className="absolute bg-white w-1/3 rounded-full flex px-4 py-2 items-center gap-4 left-[60%] top-[70%] lg:left-[50%] lg:w-1/2 lg:top-[72%] lg:px-4 lg:py-4 lg:flex-row xl:left-[55%] xl:w-1/3"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom">
              <div className="flex items-center">
                <div
                  className={`px-4 py-4 rounded-full text-bold hover:cursor-pointer ${
                    iconsChange
                      ? 'bg-black text-secondary duration-300'
                      : 'bg-accent text-white duration-300'
                  }`}
                  onClick={() => setIconsChange(!iconsChange)}>
                  <BiPhoneCall size={20} />
                </div>
              </div>
              <div className="">
                <p className="font-bold">Calling</p>
                <p className="text-neutral text-xs">With Robert</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center lg:w-1/2 lg:items-start">
          <h1
            className="text-3xl md:text-5xl text-center text-black font-bold lg::text-6xl lg:text-start"
            style={{ lineHeight: '4.5rem' }}>
            {featuresContent.featureTitlePart1}
            <br />
            <span
              className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-secondary relative inline-block"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom">
              <span className="relative text-white">{featuresContent.featureTitlePart2}</span>
            </span>
            <br /> {featuresContent.featureTitlePart3}
          </h1>
          <div className="flex flex-wrap gap-4 justify-center items-center mt-10 lg:justify-start">
            <div className="w-[15rem] h-[10rem] text-center lg:text-start">
              <div className="p-4 w-fit rounded-xl bg-accent text-white mx-auto lg:mx-0">
                <BsLock size={20} />
              </div>
              <p className="text-neutral font-bold mt-2">{featuresContent.feature1}</p>
            </div>
            <div className="w-[15rem] h-[10rem] text-center lg:text-start">
              <div className="p-4 w-fit rounded-xl bg-accent text-white mx-auto lg:mx-0">
                <BsCameraVideo size={20} />
              </div>
              <p className="text-neutral font-bold mt-2">{featuresContent.feature2}</p>
            </div>
            <div className="w-[15rem] h-[10rem] text-center lg:text-start">
              <div className="p-4 w-fit rounded-xl bg-accent text-white mx-auto lg:mx-0">
                <BsLightning size={20} />
              </div>
              <p className="text-neutral font-bold mt-2">{featuresContent.feature3}</p>
            </div>
            <div className="w-[15rem] h-[10rem] text-center lg:text-start">
              <div className="p-4 w-fit rounded-xl bg-accent text-white mx-auto lg:mx-0">
                <BiDevices size={20} />
              </div>
              <p className="text-neutral font-bold mt-2">{featuresContent.feature4}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SimplifyFeatures
