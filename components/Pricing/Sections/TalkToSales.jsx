import Image from 'next/image'
import React from 'react'
import { useForm } from 'react-hook-form'
import Live from '../../../public/pricing/Live.png'
const TalkToSales = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {}

  return (
    <div className="w-auto mx-6 mt-12 lg:min-h-[85vh] lg:mt-16 2xl:w-[1400px] 2xl:mx-auto">
      <div className="flex flex-col-reverse items-center w-full md:flex-row">
        <div className="w-[90%] mx-auto flex flex-col justify-center item-center lg:w-2/3 ">
          <h1 className="text-4xl text-center font-extrabold break-words text-neutral md:text-start lg:tracking-wider xl:text-5xl">
            Get started with <br /> <span className="">Live Shopping today</span>
          </h1>
          <p className="text-neutral text-center text-base mt-10 md:text-start">
            Fill in the form and we&apos;ll be in touch soon
          </p>
          <div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col items-center md:items-start lg:mt-5">
              <label htmlFor="email" className="mt-5 font-bold text-neutral">
                Your Business Email*
              </label>
              <input
                className={`w-[90%] h-14 rounded px-4 py-2 lg:w-1/2 ${
                  errors?.email?.message ? 'border-2 border-error' : 'border-gray-300 border-2'
                }`}
                placeholder="example@example.com"
                type="email"
                {...register('email', { required: 'This Field is required' })}
              />
              {errors.email && (
                <span className="text-error font-bold text-xs mt-2">{errors.email.message}</span>
              )}
              <label htmlFor="phone" className="mt-5 font-bold text-neutral">
                Your Phone Number
              </label>
              <input
                placeholder="(123) 456-7890"
                type="tel"
                className="w-[90%] h-14 border-gray-300 border-2 rounded px-4 py-2 lg:w-1/2"
                {...register('exampleRequired')}
              />
              <button
                className="btn w-[90%] mt-5 h-14 text-white md:mx-0 lg:w-1/2"
                type="submit"
                onClick={handleSubmit(onSubmit)}>
                Talk To Sales
              </button>
            </form>
          </div>
        </div>
        <div
          className="w-[85%] mx-auto flex justify-center rounded-[45px] bg-cover p-10 lg:w-1/3"
          style={{
            backgroundImage: `url('/pricing/LiveBackground.png')`,
          }}>
          <Image
            src={Live}
            alt="Social Media Engagement in LiveCommerce"
            width={270}
            height={580}
          />
        </div>
      </div>
    </div>
  )
}

export default TalkToSales
