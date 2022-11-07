import Image from 'next/image'
import imageLoader from '../../../helper/imageLoader'
import Logo from '../../../public/navbar-logo/navbar-logo.png'

const LogoSection = ({ message }) => {
  return (
    <div className="md:rounded-t-[20px] lg:rounded-l-none lg:rounded-r-[20px] py-[6%] lg:w-1/2 bg-[#CC955C]/40 px-[8%] lg:px-[4%] flex flex-col justify-between items-start lg:items-end text-start lg:text-end text-black">
      <div className="mb-4 lg:mb-0">
        <h1 className="text-[32px] leading-10 font-bold mb-[25px]">Welcome</h1>

        <p
          data-aos="fade-in"
          data-aos-anchor-placement="top-bottom"
          className="text-lg leading-5 font-medium max-w-xs">
          {message || 'Enter your login details to access your account'}
        </p>
      </div>

      <Image width={142} height={62} src={Logo} alt="Go Laiv's Logo" loader={imageLoader} />
    </div>
  )
}

export default LogoSection
