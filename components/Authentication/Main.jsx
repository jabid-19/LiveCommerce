import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import imageLoader from '../../helper/imageLoader'
import Logo from '../../public/navbar-logo/navbar-logo.png'
import Login from './Sections/Login'
import Register from './Sections/Register'
import SocialLogin from './Sections/SocialLogin'

const AuthenticationMain = () => {
  const router = useRouter()
  const keyword = router.query.keyword

  const [key, setKey] = useState(keyword)

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
    <div className="flex flex-col-reverse lg:flex-row py-[5%] lg:py-[2%] px-[8%] 2xl:min-h-[95vh]">
      <div className="flex justify-center rounded-b-[20px] lg:rounded-r-none lg:rounded-l-[20px] py-[6%] lg:w-1/2 text-black bg-white">
        <div className="container px-[8%]">
          {!visibleRegisterItem && visibleLoginItem && (
            <h1
              data-aos="fade-in"
              data-aos-anchor-placement="top-bottom"
              className="text-[32px] leading-10 font-bold mb-[25px]">
              Login
            </h1>
          )}
          {visibleRegisterItem && !visibleLoginItem && (
            <h1
              data-aos="fade-in"
              data-aos-anchor-placement="top-bottom"
              className="text-[32px] leading-10 font-bold mb-[25px]">
              Register
            </h1>
          )}
          {key === 'register' ? (
            <div>{visibleRegisterItem && !visibleLoginItem && <Register />}</div>
          ) : (
            <div>{visibleLoginItem && !visibleRegisterItem && <Login />}</div>
          )}
          <div className="flex justify-center items-center mt-7">
            <div className="bg-black w-[37px] h-[1px]"></div>
            <p className="text-xs font-bold px-1.5">Or Login With</p>
            <div className="bg-black w-[37px] h-[1px]"></div>
          </div>
          <SocialLogin />
          {!visibleRegisterItem && visibleLoginItem && (
            <p
              data-aos="fade-in"
              data-aos-anchor-placement="top-bottom"
              className="text-xs font-medium">
              Don’t have an account?{' '}
              <span
                onClick={loadRegisterForm}
                className="text-[#CC955C] cursor-pointer hover:underline">
                Register Now
              </span>
            </p>
          )}
          {visibleRegisterItem && !visibleLoginItem && (
            <p
              data-aos="fade-in"
              data-aos-anchor-placement="top-bottom"
              className="text-xs font-medium">
              Already have an account?{' '}
              <span
                onClick={loadLoginForm}
                className="text-[#CC955C] cursor-pointer hover:underline">
                Login
              </span>
            </p>
          )}
        </div>
      </div>
      <div className="rounded-t-[20px] lg:rounded-l-none lg:rounded-r-[20px] py-[6%] lg:w-1/2 bg-[#CC955C]/40 px-[8%] lg:px-[4%] flex flex-col justify-between items-start lg:items-end text-start lg:text-end text-black">
        <div className="mb-4 lg:mb-0">
          <h1 className="text-[32px] leading-10 font-bold mb-[25px]">Welcome</h1>
          {!visibleRegisterItem && visibleLoginItem && (
            <p
              data-aos="fade-in"
              data-aos-anchor-placement="top-bottom"
              className="text-2xl leading-5 font-semibold max-w-xs">
              Enter your login details to access your account
            </p>
          )}
          {visibleRegisterItem && !visibleLoginItem && (
            <p
              data-aos="fade-in"
              data-aos-anchor-placement="top-bottom"
              className="text-2xl leading-5 font-semibold max-w-sm">
              Register your account to start using all of our services
            </p>
          )}
        </div>
        <Image width={142} height={62} src={Logo} alt="Go Laiv's Logo" loader={imageLoader} />
      </div>
    </div>
  )
}

export default AuthenticationMain
