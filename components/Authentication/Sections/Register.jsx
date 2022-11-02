import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { doRegister } from '../../../backend/authApi'
import InputField from '../../InputFields/InputField'
import PasswordField from '../../InputFields/PasswordField'

const Register = () => {
  const [message, setMessage] = useState('')
  const [success, setSuccess] = useState(false)
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    console.log(data)

    if (data.password !== data.confirmPassword) {
      setError('confirmPassword', {
        type: 'manual',
        message: 'Password and Confirm Password do not match!',
      })
      setError('password', {
        type: 'manual',
        message: 'Password and Confirm Password do not match!',
      })

      return
    }

    const res = await doRegister(data)
    if (res.success) {
      setSuccess(true)
      setMessage(res.message)
    } else {
      setSuccess(false)
      setMessage(res.message)
    }
  }
  return (
    <form
      data-aos="fade-in"
      data-aos-anchor-placement="top-bottom"
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col space-y-5">
      <InputField
        type="text"
        name="fullname"
        label="Full Name"
        placeholder="John Doe"
        className={errors.fullname?.message && 'border-[0.5] border-[#F0676F] outline-[#F0676F]'}
        errorMsg={errors.fullname?.message}
        {...register('fullname', { required: 'Full name is required' })}
      />

      <InputField
        type="email"
        name="email"
        label="Email"
        placeholder="user@email.com"
        className={errors.email?.message && 'border-[0.5] border-[#F0676F] outline-[#F0676F]'}
        errorMsg={errors.email?.message}
        {...register('email', { required: 'Email is required' })}
      />

      <PasswordField
        name="password"
        label="Password"
        placeholder="********"
        className={errors.password?.message && 'border-[0.5] border-[#F0676F] outline-[#F0676F]'}
        errorMsg={errors.password?.message}
        {...register('password', { required: 'Password is required' })}
      />

      <PasswordField
        name="confirmPassword"
        label="Confirm Password"
        placeholder="********"
        className={
          errors.confirmPassword?.message && 'border-[0.5] border-[#F0676F] outline-[#F0676F]'
        }
        errorMsg={errors.confirmPassword?.message}
        {...register('confirmPassword', { required: 'Confirm password is required' })}
      />

      {message && (
        <p
          style={{ marginTop: '.5rem' }}
          className={`text-sm tracking-wide font-bold ${
            !success ? 'text-[#F0676F]' : 'text-green-500'
          }`}>
          {message}
        </p>
      )}

      <input
        style={{ marginTop: '2rem' }}
        className="text-[16px] font-bold rounded-[10px] w-full h-11 bg-[#CC955C]/40 cursor-pointer"
        type="submit"
        value="Register"
      />
    </form>
  )
}

export default Register
