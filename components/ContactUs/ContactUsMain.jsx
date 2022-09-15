import Image from 'next/image'
import imageLoader from '../../helper/imageLoader'
import BigScreenContactImage from '../../public/contact/camera.avif'
// import SmallScreenContactImage from '../../public/contact/contact-us-animate.svg'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'
// import axios from 'axios'
import { toast } from 'react-toastify'

const ContactUsMain = () => {
  const form = useRef()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const onSubmit = async (data) => {
    const response = await fetch('/api/sendemail')
    const apiData = await response.json()
    console.log('response', response)
    console.log('apiData', apiData)
    emailjs
      .sendForm(
        `${apiData.SERVICE_ID}`,
        `${apiData.TEMPLATE_ID}`,
        form.current,
        `${apiData.PUBLIC_KEY}`
      )
      .then(
        (result) => {
          console.log(result.text)
          console.log('Email sent')
          toast.success('Email sent')
          reset()
        },
        (error) => {
          console.log(error.text)
          console.log("Couldn't send email")
          toast.error("Couldn't send email")
        }
      )
  }
  return (
    <div className="flex flex-col-reverse md:flex-row bg-slate-200">
      <div data-aos="fade-right" className="rainbow mx-8 my-20 lg:mx-20 flex">
        <Image
          loader={imageLoader}
          width={580}
          height={754}
          src={BigScreenContactImage}
          alt="Open Shopping"
          priority={true}
        />
      </div>
      <div
        data-aos="fade-left"
        className="min-w-[90%] md:min-w-[50%] mx-auto mt-20 md:mb-20 px-8 flex flex-col justify-center max-w-4xl">
        <h1 className="text-5xl text-center text-black font-bold lg:text-6xl">
          <span
            className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary relative inline-block"
            data-aos="fade-up">
            <span className="relative text-white">Contact us</span>
          </span>
        </h1>
        <p className="text-neutral text-center text-base mt-10">
          Fill in the form and we&apos;ll be in touch soon
        </p>
        <form ref={form} onSubmit={handleSubmit(onSubmit)} className="mt-10">
          <div className="mb-5">
            <label className="text-xl font-semibold text-neutral pl-2 mb-4">Full Name*</label>
            <input
              name="name"
              placeholder="John Doe"
              type="text"
              {...register('name', { required: 'Name is required' })}
              className={`w-full
                  px-3
                  py-2
                  h-14
                  text-gray-800
                  border-2
                  border-gray-300
                  rounded
                  outline-secondary
                  min-w-xs
                  ${errors.name?.message && 'border-2 border-error outline-error'}
                  `}
            />
            <div className="text-error text-xs font-bold pl-2 pt-2">{errors.name?.message}</div>
          </div>
          <div className="mb-5 flex flex-col-reverse md:flex-row gap-4">
            <div className="md:w-1/2">
              <label className="text-xl font-semibold text-neutral pl-2">Phone*</label>
              <input
                name="phone"
                placeholder="+880 111111111"
                type="tel"
                {...register('phone', { required: 'Phone Number is required' })}
                className={`w-full
                  px-3
                  py-2
                  h-14
                  text-gray-800
                  border-2
                  border-gray-300
                  rounded
                  outline-secondary
                  min-w-xs
                  ${errors.phone?.message && 'border-2 border-error outline-error'}
                  `}
              />
              <div className="text-error text-xs font-bold pl-2 pt-2">{errors.phone?.message}</div>
            </div>
            <div className="md:w-1/2">
              <label className="text-xl font-semibold text-neutral pl-2">Email*</label>
              <input
                name="email"
                placeholder="example@example.com"
                type="email"
                {...register('email', { required: 'Email is required' })}
                className={`w-full
                  px-3
                  py-2
                  h-14
                  text-gray-800
                  border-2
                  border-gray-300
                  rounded
                  outline-secondary
                  min-w-xs
                  ${errors.email?.message && 'border-2 border-error outline-error'}
                  `}
              />
              <div className="text-error text-xs font-bold pl-2 pt-2">{errors.email?.message}</div>
            </div>
          </div>
          <div className="mb-5">
            <label className="text-xl font-semibold text-neutral pl-2">Subject*</label>
            <input
              name="subject"
              placeholder="XXXXX"
              type="text"
              {...register('subject', { required: 'Subject is required' })}
              className={`w-full
                  px-3
                  py-2
                  h-14
                  text-gray-800
                  border-2
                  border-gray-300
                  rounded
                  outline-secondary
                  min-w-xs
                  ${errors.subject?.message && 'border-2 border-error outline-error'}
                  `}
            />
            <div className="text-error text-xs font-bold pl-2 pt-2">{errors.subject?.message}</div>
          </div>
          <div className="mb-5">
            <label className="text-xl font-semibold text-neutral pl-2">How can we help?*</label>
            <textarea
              name="details"
              type="text"
              {...register('details', { required: 'Details is required' })}
              className={`w-full
                  px-3
                  py-2
                  h-24
                  text-gray-800
                  border-2
                  border-gray-300
                  rounded
                  outline-secondary
                  min-w-xs
                  ${errors.details?.message && 'border-2 border-error outline-error'}
                  `}
            />
            <div className="text-error text-xs font-bold pl-2 pt-2">{errors.details?.message}</div>
          </div>
          <input
            className="btn btn-primary font-bold w-full min-w-xs normal-case text-white rounded cursor-pointer h-14 text-xl border-2"
            type="submit"
          />
        </form>
      </div>
    </div>
  )
}

export default ContactUsMain
