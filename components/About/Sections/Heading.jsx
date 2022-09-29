import Image from 'next/image'
import { useContext } from 'react'
import imageLoader from '../../../helper/imageLoader'
import { ModalContext } from '../../../pages/_app'
import videoCall from '../../../public/packages/videocall.png'

const Heading = ({ headingContent }) => {
  const [getStartedModal, setGetStartedModal] = useContext(ModalContext)
  return (
    <div className="pt-12 lg:pt-36 px-8 flex flex-col-reverse md:flex-col justify-center items-center">
      <div className="max-w-2xl text-center">
        {headingContent.pageTitle && (
          <h4 className="text-gray-500 text-2xl md:text-4xl font-bold">
            <span
              className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-accent relative inline-block"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom">
              <span className="relative text-white">{headingContent.pageTitle}</span>
            </span>
          </h4>
        )}
        <h1 className="text-black text-3xl md:text-5xl lg:text-6xl font-bold">
          {headingContent.title}
        </h1>
        <br />
        <p className="text-black">{headingContent.details}</p>
        {/* <button
          className="w-full my-10 py-4 rounded-md bg-primary text-white font-bold hover:bg-black duration-500 md:w-4/5"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="4500">
          Start Free Trial
        </button> */}
        <div className="my-4 flex flex-col gap-2 md:gap-4 md:flex-row justify-center items-center">
          {!headingContent.buttonContent2 && (
            <button
              data-aos="zoom-in"
              data-aos-anchor-placement="top-bottom"
              onClick={() => setGetStartedModal(!getStartedModal)}
              className="py-4 w-full rounded-md bg-primary text-white font-bold hover:bg-black duration-500 normal-case">
              {headingContent.buttonContent1}
            </button>
          )}
          {headingContent.buttonContent2 && (
            <button
              onClick={() => setGetStartedModal(!getStartedModal)}
              className="py-4 w-full md:w-1/2 rounded-md bg-primary text-white font-bold hover:bg-black duration-500 normal-case">
              {headingContent.buttonContent1}
            </button>
          )}
          {headingContent.buttonContent2 && (
            <button className="py-4 w-full md:w-1/2 rounded-md bg-secondary text-white font-bold hover:bg-black duration-500 normal-case">
              {headingContent.buttonContent2}
            </button>
          )}
        </div>
      </div>
      <Image
        src={videoCall}
        width={900}
        height={700}
        className="object-cover rounded-3xl bg-[#e8e4d9]"
        placeholder="blur"
        loader={imageLoader}
        alt="LiveCommerce Video Call"
      />
    </div>
  )
}

export default Heading
