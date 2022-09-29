import axios from 'axios'
import Image from 'next/image'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import capitalizeFirstLetter from '../../helper/capitalize'
import imageLoader from '../../helper/imageLoader'
import BigScreenContactImage from '../../public/contact/camera.avif'

const ContactUsMain = () => {
  const [status, setStatus] = useState({
    message: null,
    result: null,
    status: null,
    loading: null,
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    const { firstName, lastName, email, phone, subject, details } = data
    setStatus({ ...status, loading: true })
    axios
      .post('/api/contactus', {
        email,
        firstName,
        lastName,
        phone,
        subject,
        details,
      })
      .then((response) =>
        setStatus({
          message: response?.data?.message,
          result: response?.data?.result,
          status: response?.status,
          loading: false,
        })
      )
  }
  return (
    <div className="flex flex-col-reverse md:flex-row bg-[#e8e4d9] justify-center items-center">
      <div className="rainbow mx-8 my-20 lg:mx-20 flex">
        <Image
          loader={imageLoader}
          width={580}
          height={754}
          src={BigScreenContactImage}
          alt="Woman with camera"
          priority={true}
          className="object-cover rounded bg-zinc-900"
          placeholder="blur"
        />
      </div>
      <div className="min-w-[90%] md:min-w-[50%] mx-auto mt-20 md:mb-20 px-8 flex flex-col justify-center max-w-4xl">
        <h1 className="text-5xl text-center text-black font-bold lg:text-6xl">
          <span
            className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-secondary relative inline-block"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom">
            <span className="relative text-white">Contact us</span>
          </span>
        </h1>
        <p className="text-neutral text-center text-base mt-10">
          Fill in the form and we&apos;ll be in touch soon
        </p>
        {status.result === 'error' && (
          <p className="p-4 bg-error rounded-md mt-4">{status.message}.</p>
        )}
        {status?.result !== 'success' && (
          <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
            <div className="mb-5 flex w-full gap-4">
              <div className="md:w-1/2">
                <label className="text-xl font-semibold text-neutral pl-2 mb-4">First Name*</label>
                <input
                  name="firstName"
                  placeholder="John"
                  type="text"
                  {...register('firstName', { required: 'First Name is required' })}
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
                  ${errors.firstName?.message && 'border-2 border-error outline-error'}
                  `}
                />
                <div className="text-error text-xs font-bold pl-2 pt-2">
                  {errors.firstName?.message}
                </div>
              </div>
              <div className="md:w-1/2">
                <label className="text-xl font-semibold text-neutral pl-2 mb-4">Last Name*</label>
                <input
                  name="lastName"
                  placeholder="Doe"
                  type="text"
                  {...register('lastName', { required: 'Last Name is required' })}
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
                  ${errors.lastName?.message && 'border-2 border-error outline-error'}
                  `}
                />
                <div className="text-error text-xs font-bold pl-2 pt-2">
                  {errors.lastName?.message}
                </div>
              </div>
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
                <div className="text-error text-xs font-bold pl-2 pt-2">
                  {errors.phone?.message}
                </div>
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
                <div className="text-error text-xs font-bold pl-2 pt-2">
                  {errors.email?.message}
                </div>
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
              <div className="text-error text-xs font-bold pl-2 pt-2">
                {errors.subject?.message}
              </div>
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
              <div className="text-error text-xs font-bold pl-2 pt-2">
                {errors.details?.message}
              </div>
            </div>
            <button
              className="mt-8 w-full p-4 bg-primary text-white text-xl font-semibold rounded-md hover:cursor-pointer"
              type="submit">
              {status.loading ? 'Loading...' : 'Get Started'}
            </button>
          </form>
        )}
        {status.result === 'success' && (
          <div>
            <h1
              className={`text-3xl font-bold ${
                status.result === 'error' ? 'text-error' : 'text-secondary'
              }`}>
              {capitalizeFirstLetter(status.result)}
            </h1>
            <p className="mt-5 text-xl">{status.message}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ContactUsMain
