import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { getCsrfToken, signIn } from 'next-auth/react'
import { useRouter } from 'next/router'

const Login = ({ csrfToken }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const router = useRouter()
  const [errorMsg, setErrorMsg] = useState('')

  const onSubmit = async (data) => {
    // console.log(data)
    const signInResponse = await signIn('credentials', {
      redirect: false,
      email: data.email,
      password: data.password,
    })
    if (!signInResponse.ok) {
      console.log(signInResponse.error)
      setErrorMsg(signInResponse.error)
    } else {
      router.push('https://golaiv-dashboard-ebbo.vercel.app/')
    }
  }
  return (
    <form
      data-aos="fade-in"
      data-aos-anchor-placement="top-bottom"
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col">
      <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
      <label className="text-sm leading-[18px] font-semibold">
        User Name Or Email <span className="text-[#F0676F]">*</span>
      </label>
      <input
        name="email"
        placeholder="email@email.com"
        type="email"
        {...register('email', { required: 'Username or email is required' })}
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
      <p style={{ color: 'red' }}>{errorMsg}</p>
      <input
        className="mt-8 text-[16px] font-bold rounded-[10px] w-full h-11 bg-[#CC955C]/40 cursor-pointer"
        type="submit"
        value="Login"
      />
    </form>
  )
}

export default Login

export const getServerSideProps = async (context) => {
  const csrfToken = await getCsrfToken(context)

  return {
    props: { csrfToken },
  }
}
