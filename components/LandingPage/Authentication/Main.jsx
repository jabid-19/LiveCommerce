import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import LoginForm from './Sections/LoginForm'
import RegisterForm from './Sections/RegisterForm'
import Image from 'next/image'
import LoginImage from '../../../public/login/login.avif'

const AuthenticationMain = () => {
  const router = useRouter()
  const keyword = router.query.keyword

  const [key, setKey] = useState(keyword)

  console.log('key', key)

  const [visibleLoginItem, setVisibleLoginItem] = useState(true)
  const [visibleRegisterItem, setVisibleRegisterItem] = useState(false)

  useEffect(() => {
    setKey(keyword)
    if (keyword === 'register') {
      setVisibleLoginItem(false)
      setVisibleRegisterItem(true)
    } else {
      setVisibleRegisterItem(false)
      setVisibleLoginItem(true)
    }
  }, [keyword])

  const loadRegisterForm = () => {
    setVisibleLoginItem(false)
    setVisibleRegisterItem(true)
    setKey('register')
  }

  const loadLoginForm = () => {
    setVisibleRegisterItem(false)
    setVisibleLoginItem(true)
    setKey('login')
  }

  return (
    <div className="flex flex-col-reverse md:flex-row">
      <div data-aos="fade-right" className="mb-20 md:mb-0 mx-auto md:mx-0 hidden md:flex">
        <Image width={387} height={581} src={LoginImage} alt="Open Shopping" />
      </div>
      <div
        data-aos="fade-left"
        className="min-w-[90%] md:min-w-[50%] mx-auto my-20 px-8 flex flex-col justify-center">
        <div className="btn-group max-w-4xl">
          <button
            className={
              key != 'register'
                ? 'btn btn-primary w-1/2 text-white'
                : 'btn bg-slate-200 text-slate-400 border-none w-1/2'
            }
            onClick={loadLoginForm}>
            Login
          </button>
          <button
            className={
              key === 'register'
                ? 'btn btn-primary w-1/2 text-white'
                : 'btn bg-slate-200 text-slate-400 border-none w-1/2'
            }
            onClick={loadRegisterForm}>
            Create Account
          </button>
        </div>
        {key === 'register' ? (
          <div>{visibleRegisterItem && !visibleLoginItem && <RegisterForm />}</div>
        ) : (
          <div>{visibleLoginItem && !visibleRegisterItem && <LoginForm />}</div>
        )}
      </div>
    </div>
  )
}

export default AuthenticationMain
