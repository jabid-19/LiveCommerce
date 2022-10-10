import Image from 'next/image'
import imageLoader from '../../../../helper/imageLoader'
import customerMarketing from '../../../../public/packages/marketing.png'
import React, { useState } from 'react'
import { BiBroadcast } from 'react-icons/bi'
import { useContext } from 'react'
import { ModalContext } from '../../../../pages/_app'

const ManyToMany = () => {
  const [getStartedModal, setGetStartedModal] = useContext(ModalContext)
  const [iconsChange, setIconsChange] = useState(false)
  return (
    <div className="pt-12 lg:pt-36 flex items-center bg-[#e8e4d9] lg:max-w-7xl lg:mx-auto">
      <div className="mx-6 h-full w-auto flex flex-col-reverse items-center lg:flex-row lg:justify-between md:items-center md:gap-2 lg:mt-0 2xl:w-[1400px] 2xl:mx-auto">
        <div className="w-full my-10 flex flex-col items-center lg:w-[48%] lg:items-start lg:my-0">
          <h1 className="text-3xl md:text-5xl text-center text-black font-bold lg:text-6xl lg:text-start leading-10 md:leading-[4rem] lg:leading-[4.5rem]">
            Connect{' '}
            <span
              className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-secondary relative inline-block"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom">
              <span className="relative text-white">easily</span>
            </span>{' '}
            <br /> with customers and <br /> grow business
          </h1>
          <p className="text-black text-center mt-5 lg:text-start">
            You must make sure customer engagement to achieve your business goals. So the easier the
            path you follow, the easier you can reach your targeted customers.
          </p>
          <div className="mt-10 flex flex-col gap-8 md:flex-row text-black">
            <div className="flex items-center gap-4 mb-2 md:max-mr-28">
              <p className="text-5xl font-bold">12M </p>
              <p className="text-3xl">
                In Dollar <br /> Sells
              </p>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-5xl font-bold">27k+</p>
              <p className="text-3xl">
                Active <br /> Users
              </p>
            </div>
          </div>
          <button
            onClick={() => setGetStartedModal(!getStartedModal)}
            className="w-full mt-10 py-4  rounded-md bg-primary border-2 border-primary normal-case text-white font-bold hover:bg-black duration-500 md:w-1/2">
            Start free trial
          </button>
        </div>
        <div className="relative w-full h-full flex justify-center lg:w-[52%] lg:justify-end">
          <div>
            <Image
              src={customerMarketing}
              alt="Customer Marketing"
              width={500}
              height={700}
              className="object-cover rounded-lg bg-secondary"
              placeholder="blur"
              loader={imageLoader}
            />
          </div>
          <div className="hidden md:block">
            <div
              className="absolute bg-white w-1/3 rounded-full flex px-4 py-2 items-center gap-4 left-[0%] top-[80%] lg:left-[-10%] lg:w-1/2 lg:top-[80%] lg:px-4 lg:py-4 lg:flex-row xl:left-[5%] xl:w-1/3"
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
                  <BiBroadcast size={20} />
                </div>
              </div>
              <div className="">
                <p className="text-black font-bold">Start broadcast</p>
                <p className="text-neutral text-xs">With audiences</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManyToMany
