import Image from 'next/image'
import imageLoader from '../../helper/imageLoader'
import BigScreenContactImage from '../../public/contact/contact.avif'
import SmallScreenContactImage from '../../public/contact/contact-us-animate.svg'
import { useForm } from 'react-hook-form'

const ContactUsMain = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <div className="flex flex-col md:flex-row">
      <div data-aos="fade-right" className="mb-20 md:mb-0 mx-auto md:mx-0 hidden md:flex">
        <Image
          loader={imageLoader}
          width={560}
          height={754}
          src={BigScreenContactImage}
          alt="Open Shopping"
          priority={true}
        />
      </div>
      <div
        data-aos="fade-left"
        className="min-w-[90%] md:min-w-[50%] mx-auto my-20 px-8 flex flex-col justify-center">
        <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-br from-primary via-accent to-secondary">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
          <div className="mb-5">
            <label className="text-xl font-semibold text-neutral pl-2 mb-4">Full Name</label>
            <input
              name="name"
              placeholder="John Doe"
              type="text"
              {...register('name', { required: 'Name is required' })}
              className={`w-full
                  px-3
                  py-2
                  text-gray-800
                  border
                  rounded
                  outline-secondary
                  bg-gray-50
                  min-w-xs
                  ${errors.name?.message && 'border-error outline-error'}
                  `}
            />
            <div className="text-error text-xs font-bold pl-2 pt-2">{errors.name?.message}</div>
          </div>
          <div className="mb-5 flex flex-col-reverse md:flex-row gap-4">
            <div className="md:w-1/2">
              <label className="text-xl font-semibold text-neutral pl-2">Phone</label>
              <input
                name="phone"
                placeholder="+880 111111111"
                type="tel"
                {...register('phone', { required: 'Phone Number is required' })}
                className={`w-full
                  px-3
                  py-2
                  text-gray-800
                  border
                  rounded
                  outline-secondary
                  bg-gray-50
                  min-w-xs
                  ${errors.phone?.message && 'border-error outline-error'}
                  `}
              />
              <div className="text-error text-xs font-bold pl-2 pt-2">{errors.phone?.message}</div>
            </div>
            <div className="md:w-1/2">
              <label className="text-xl font-semibold text-neutral pl-2">Email</label>
              <input
                name="email"
                placeholder="example@example.com"
                type="email"
                {...register('email', { required: 'Email is required' })}
                className={`w-full
                  px-3
                  py-2
                  text-gray-800
                  border
                  rounded
                  outline-secondary
                  bg-gray-50
                  min-w-xs
                  ${errors.email?.message && 'border-error outline-error'}
                  `}
              />
              <div className="text-error text-xs font-bold pl-2 pt-2">{errors.email?.message}</div>
            </div>
          </div>
          <div className="mb-5">
            <label className="text-xl font-semibold text-neutral pl-2">Subject</label>
            <input
              name="subject"
              placeholder="XXXXX"
              type="text"
              {...register('subject', { required: 'Subject is required' })}
              className={`w-full
                  px-3
                  py-2
                  text-gray-800
                  border
                  rounded
                  outline-secondary
                  bg-gray-50
                  min-w-xs
                  ${errors.subject?.message && 'border-error outline-error'}
                  `}
            />
            <div className="text-error text-xs font-bold pl-2 pt-2">{errors.subject?.message}</div>
          </div>
          <div className="mb-5">
            <label className="text-xl font-semibold text-neutral pl-2">How can we help?</label>
            <textarea
              name="details"
              type="text"
              {...register('details', { required: 'Details is required' })}
              className={`w-full
                  px-3
                  py-2
                  text-gray-800
                  border
                  rounded
                  outline-secondary
                  bg-gray-50
                  min-w-xs
                  ${errors.details?.message && 'border-error outline-error'}
                  `}
            />
            <div className="text-error text-xs font-bold pl-2 pt-2">{errors.details?.message}</div>
          </div>
          <input
            className="btn btn-secondary font-bold w-full min-w-xs normal-case text-white rounded cursor-pointer"
            type="submit"
          />
        </form>
      </div>
      <div data-aos="fade-right" className="mb-20 flex justify-center md:hidden">
        <Image
          src={SmallScreenContactImage}
          alt="Contact Image"
          width={300}
          height={300}
          className="rounded-lg"
          loader={imageLoader}
        />
      </div>
    </div>
  )
}

export default ContactUsMain
