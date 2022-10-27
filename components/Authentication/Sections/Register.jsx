import React from 'react'
import { useForm } from 'react-hook-form'

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <form data-aos="fade-in" onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <label className="text-sm leading-[18px] font-semibold">
        Full Name <span className="text-[#F0676F]">*</span>
      </label>
      <input
        name="name"
        placeholder="full name"
        type="text"
        {...register('name', { required: 'Name is required' })}
        className={`
              w-full
              mt-3
              pl-[14px]
              h-11
              border-[0.5px]
              border-[#EAEBEB]
              rounded-[10px]
              outline-[0.5px]
              outline-[#CC955C]/40
              min-w-xs
              ${errors.name?.message && 'border-[0.5] border-[#F0676F] outline-[#F0676F]'}
              `}
      />
      <div className="text-[#F0676F] text-xs font-bold pl-2 pt-2">{errors.name?.message}</div>
      <label className="text-sm leading-[18px] font-semibold">
        Email <span className="text-[#F0676F]">*</span>
      </label>
      <input
        name="email"
        placeholder="email@email.com"
        type="email"
        {...register('email', { required: 'Email is required' })}
        className={`
              w-full
              mt-3
              pl-[14px]
              h-11
              border-[0.5px]
              border-[#EAEBEB]
              rounded-[10px]
              outline-[0.5px]
              outline-[#CC955C]/40
              min-w-xs
              ${errors.email?.message && 'border-[0.5] border-[#F0676F] outline-[#F0676F]'}
              `}
      />
      <div className="text-[#F0676F] text-xs font-bold pl-2 pt-2">{errors.email?.message}</div>
      <label className="text-sm leading-[18px] font-semibold mt-5">
        Password <span className="text-[#F0676F]">*</span>
      </label>
      <input
        name="password"
        placeholder="********"
        type="password"
        {...register('password', { required: 'Password is required' })}
        className={`
              w-full
              mt-3
              pl-[14px]
              h-11
              border-[0.5px]
              border-[#EAEBEB]
              rounded-[10px]
              outline-[0.5px]
              outline-[#CC955C]/40
              min-w-xs
              ${errors.password?.message && 'border-[0.5] border-[#F0676F] outline-[#F0676F]'}
              `}
      />
      <div className="text-[#F0676F] text-xs font-bold pl-2 pt-2">{errors.password?.message}</div>
      <label className="text-sm leading-[18px] font-semibold mt-5">
        Confirm Password <span className="text-[#F0676F]">*</span>
      </label>
      <input
        name="confirmPassword"
        placeholder="********"
        type="password"
        {...register('confirmPassword', { required: 'Confirm password is required' })}
        className={`
              w-full
              mt-3
              pl-[14px]
              h-11
              border-[0.5px]
              border-[#EAEBEB]
              rounded-[10px]
              outline-[0.5px]
              outline-[#CC955C]/40
              min-w-xs
              ${
                errors.confirmPassword?.message && 'border-[0.5] border-[#F0676F] outline-[#F0676F]'
              }
              `}
      />
      <div className="text-[#F0676F] text-xs font-bold pl-2 pt-2">
        {errors.confirmPassword?.message}
      </div>
      <input
        className="mt-8 text-[16px] font-bold rounded-[10px] w-full h-11 bg-[#CC955C]/40 cursor-pointer"
        type="submit"
        value="Register"
      />
    </form>
  )
}

export default Register
