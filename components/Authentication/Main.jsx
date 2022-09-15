import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import LoginForm from './Sections/LoginForm'
import RegisterForm from './Sections/RegisterForm'
import Image from 'next/image'
import imageLoader from '../../helper/imageLoader'
import BigScreenContactImage from '../../public/login/live-video.webp'
// import LoginImage from '../../public/login/login.avif'

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
    <div className="bg-slate-200">
      <div className="flex flex-col-reverse md:flex-row bg-slate-200 md:w-[95%]">
        {/* <div data-aos="fade-right" className="mb-20 md:mb-0 mx-auto md:mx-0 hidden md:flex">
        <Image
          loader={imageLoader}
          width={387}
          height={581}
          src={LoginImage}
          alt="Open Shopping"
          priority={true}
        />
      </div> */}
        <div className="md:min-w-[50%] flex justify-center items-center max-h-[1024px]">
          <div data-aos="fade-right" className="rainbow mx-8 my-20 lg:mx-20 lg:my-20 flex">
            <Image
              loader={imageLoader}
              width={500}
              height={750}
              className="object-cover"
              src={BigScreenContactImage}
              alt="Login Image"
              priority={true}
            />
          </div>
        </div>
        <div
          data-aos="fade-left"
          className="min-w-[90%] md:min-w-[50%] mx-auto mt-20 md:mb-20 px-8 flex flex-col justify-center">
          <div className="mb-20 max-w-4xl">
            {key === 'register' ? (
              <h1 className="text-5xl text-center text-black font-bold lg:text-6xl">
                <span
                  className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary relative inline-block"
                  data-aos="fade-up">
                  <span className="relative text-white">Sign up</span>
                </span>
              </h1>
            ) : (
              <h1 className="text-5xl text-center text-black font-bold lg:text-6xl">
                <span
                  className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary relative inline-block"
                  data-aos="fade-up">
                  <span className="relative text-white">Login</span>
                </span>
              </h1>
            )}
          </div>
          <div className="btn-group max-w-4xl">
            <button
              className={
                key != 'register'
                  ? 'btn btn-primary w-1/2 text-white'
                  : 'btn bg-slate-300 text-slate-400 border-none w-1/2'
              }
              onClick={loadLoginForm}>
              Login
            </button>
            <button
              className={
                key === 'register'
                  ? 'btn btn-primary w-1/2 text-white'
                  : 'btn bg-slate-300 text-slate-400 border-none w-1/2'
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
    </div>
  )
}

export default AuthenticationMain
