import Image from 'next/image'
import imageLoader from '../../../../helper/imageLoader'
import chat from '../../../../public/packages/chat.png'
import React, { useState } from 'react'
import { BiDevices, BiMessage } from 'react-icons/bi'
import { BsCameraVideo, BsLightning, BsLock } from 'react-icons/bs'

const ChatWithCustomer = () => {
  const [iconsChange, setIconsChange] = useState(false)
  return (
    <div className="py-12 lg:py-36 flex items-center bg-[#e8e4d9] lg:max-w-7xl lg:mx-auto">
      <div className="mx-6 h-full w-auto flex flex-col items-center lg:flex-row lg:justify-between md:items-center md:gap-2 lg:mt-0 2xl:w-[1400px] 2xl:mx-auto">
        <div className="relative w-full h-full flex justify-center lg:w-[52%] lg:justify-start">
          <div>
            <Image
              src={chat}
              alt="Chat with customer"
              width={500}
              height={800}
              className="object-cover rounded-lg bg-secondary"
              placeholder="blur"
              loader={imageLoader}
            />
          </div>
          <div className="hidden md:block">
            <div
              className="absolute bg-white w-1/3 rounded-full flex px-4 py-2 items-center gap-4 left-[60%] top-[80%] lg:left-[50%] lg:w-1/2 lg:top-[80%] lg:px-4 lg:py-4 lg:flex-row xl:left-[55%] xl:w-1/3"
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
                  <BiMessage size={20} />
                </div>
              </div>
              <div>
                <p className="font-bold">Chatting</p>
                <p className="text-neutral text-xs">With Robert</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full my-10 flex flex-col justify-center items-center lg:w-[48%] lg:items-start lg:my-0">
          <h1 className="text-3xl md:text-5xl text-center text-black font-bold lg:text-6xl lg:text-start leading-10 md:leading-[4rem] lg:leading-[4.5rem]">
            Make you different with{' '}
            <span
              className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-secondary relative inline-block"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom">
              <span className="relative text-white">interesting</span>
            </span>{' '}
            <br /> features.
          </h1>
          <div className="flex flex-wrap gap-4 justify-center items-center mt-10 lg:justify-start">
            <div className="w-[15rem] h-[10rem] text-center lg:text-start">
              <div className="p-4 w-fit rounded-xl bg-accent text-white mx-auto lg:mx-0">
                <BsLock size={20} />
              </div>
              <p className="text-neutral font-bold mt-2">Make sure end-to-end encrypted</p>
            </div>
            <div className="w-[15rem] h-[10rem] text-center lg:text-start">
              <div className="p-4 w-fit rounded-xl bg-accent text-white mx-auto lg:mx-0">
                <BsCameraVideo size={20} />
              </div>
              <p className="text-neutral font-bold mt-2">Audio & premium live-streaming</p>
            </div>
            <div className="w-[15rem] h-[10rem] text-center lg:text-start">
              <div className="p-4 w-fit rounded-xl bg-accent text-white mx-auto lg:mx-0">
                <BsLightning size={20} />
              </div>
              <p className="text-neutral font-bold mt-2">Barrier-free communication</p>
            </div>
            <div className="w-[15rem] h-[10rem] text-center lg:text-start">
              <div className="p-4 w-fit rounded-xl bg-accent text-white mx-auto lg:mx-0">
                <BiDevices size={20} />
              </div>
              <p className="text-neutral font-bold mt-2">Compatible with available devices </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatWithCustomer
