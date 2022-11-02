import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import LoadingButton from '../../Buttons/LoadingButton'
import InputField from '../../InputFields/InputField'
import PasswordField from '../../InputFields/PasswordField'

const Login = ({ csrfToken }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const router = useRouter()
  const [errorMsg, setErrorMsg] = useState('')
  const [success, setSuccess] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const onSubmit = async (data) => {
    setSubmitting(true)
    // console.log(data)
    const signInResponse = await signIn('credentials', {
      redirect: false,
      email: data.email,
      password: data.password,
    })
    if (!signInResponse.ok) {
      setSuccess(false)
      setSubmitting(false)
      console.log(signInResponse.error)
      setErrorMsg(signInResponse.error)
    } else {
      setSuccess(true)
      setSubmitting(false)
      // router.push('https://golaiv-dashboard-ebbo.vercel.app/')
    }
  }

  return (
    <form
      data-aos="fade-in"
      data-aos-anchor-placement="top-bottom"
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col space-y-5">
      <input name="csrfToken" type="hidden" defaultValue={csrfToken} />

      <InputField
        type="email"
        name="email"
        label="User Name Or Email"
        placeholder="user@email.com"
        className={errors.email?.message && 'border-[0.5] border-[#F0676F] outline-[#F0676F]'}
        errorMsg={errors.email?.message}
        {...register('email', { required: 'Username or email is required' })}
      />

      <PasswordField
        label="Password"
        name="password"
        placeholder="********"
        className={errors.password?.message && 'border-[0.5] border-[#F0676F] outline-[#F0676F]'}
        errorMsg={errors.password?.message}
        {...register('password', { required: 'Password is required' })}
      />

      {errorMsg && (
        <p
          style={{ marginTop: '.5rem' }}
          className={`text-sm tracking-wide font-bold ${
            !success ? 'text-[#F0676F]' : 'text-green-500'
          }`}>
          {errorMsg}
        </p>
      )}

      <LoadingButton
        style={{ marginTop: '2rem' }}
        className="mt-8 text-[16px] font-bold rounded-[10px] w-full h-11 bg-[#CC955C]/40 cursor-pointer"
        type="submit"
        value="Login"
        disabled={submitting}
        loading={submitting}
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
