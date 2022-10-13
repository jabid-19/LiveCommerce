import Image from 'next/image'
import { useContext } from 'react'
import imageLoader from '../../../helper/imageLoader'
import { ModalContext } from '../../../pages/_app'
import meeting from '../../../public/packages/meeting.jpg'
import PrimaryButton from '../../Shared/PrimaryButton'
// import videoCall from '../../../public/packages/videocall.png'

const Heading = ({ headingContent }) => {
  const [getStartedModal, setGetStartedModal] = useContext(ModalContext)
  return (
    <div className="pt-12 lg:pt-36 px-8 flex flex-col-reverse md:flex-col justify-center items-center">
      <div className="mt-4 md:mt-0 max-w-2xl text-center">
        {headingContent.pageTitle && (
          <h4 className="text-accent text-2xl font-bold">
            <span
              className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-accent relative inline-block"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom">
              <span className="relative text-white">{headingContent.pageTitleMain}</span>
            </span>{' '}
            {headingContent.pageTitle}
          </h4>
        )}
        <h1 className="text-black text-3xl md:text-5xl lg:text-6xl font-bold leading-10 md:leading-[4rem] lg:leading-[4.5rem]">
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
        <div className="my-4 md:my-8 flex flex-col gap-2 md:gap-4 md:flex-row justify-center items-center">
          {!headingContent.buttonContent2 && (
            <div
              className="w-full"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              onClick={() => setGetStartedModal(!getStartedModal)}>
              <PrimaryButton
                textClass="text-white"
                bgClass="bg-primary"
                hoverText="hover:text-white"
                hoverBg="hover:bg-accent"
                hoverBorder="hover:border-accent"
                horizontalPadding="w-full">
                {headingContent.buttonContent1}
              </PrimaryButton>
            </div>
          )}
          {headingContent.buttonContent2 && (
            <div
              className="w-full md:w-1/2"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              onClick={() => setGetStartedModal(!getStartedModal)}>
              <PrimaryButton
                textClass="text-white"
                bgClass="bg-primary"
                borderClass="border-primary"
                hoverText="hover:text-white"
                hoverBg="hover:bg-accent"
                hoverBorder="hover:border-accent"
                horizontalPadding="w-full">
                {headingContent.buttonContent1}
              </PrimaryButton>
            </div>
          )}
          {headingContent.buttonContent2 && (
            <div
              className="w-full md:w-1/2"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              onClick={() => setGetStartedModal(!getStartedModal)}>
              <PrimaryButton
                textClass="text-white"
                bgClass="bg-secondary"
                borderClass="border-secondary"
                hoverText="hover:text-white"
                hoverBg="hover:bg-primary"
                hoverBorder="hover:border-primary"
                horizontalPadding="w-full">
                {headingContent.buttonContent2}
              </PrimaryButton>
            </div>
          )}
        </div>
      </div>
      <Image
        src={meeting}
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
