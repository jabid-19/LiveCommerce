import Link from 'next/link'
import ForgotPassLink from './Sections/ForgotPassLink'
import Login from './Sections/Login'
import LogoSection from './Sections/LogoSection'
import SocialLogin from './Sections/SocialLogin'

const AuthenticationLogin = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row py-[5%] lg:py-[2%] md:px-[15%] 2xl:min-h-[80vh]">
      <div className="flex justify-center md:rounded-b-[20px] lg:rounded-r-none lg:rounded-l-[20px] py-[6%] lg:w-1/2 text-black bg-white">
        <div className="container px-[10%]">
          <h1
            data-aos="fade-in"
            data-aos-anchor-placement="top-bottom"
            className="text-[32px] leading-10 font-bold mb-[25px]">
            Login
          </h1>

          <Login />

          <ForgotPassLink />

          <div className="flex justify-center items-center mt-7">
            <div className="bg-black w-[37px] h-[1px]"></div>
            <p className="text-xs font-bold px-1.5">Or Login With</p>
            <div className="bg-black w-[37px] h-[1px]"></div>
          </div>

          <SocialLogin />

          <p
            data-aos="fade-in"
            data-aos-anchor-placement="top-bottom"
            className="text-xs font-medium">
            Don’t have an account?{' '}
            <Link href="/register">
              <a className="text-[#CC955C] cursor-pointer hover:underline">Register Now</a>
            </Link>
          </p>
        </div>
      </div>

      <LogoSection />
    </div>
  )
}

export default AuthenticationLogin
