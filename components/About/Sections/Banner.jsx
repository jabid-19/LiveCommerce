import Image from 'next/image'
import videoStreaming from '../../../public/about/video-streaming.jpeg'
import imageLoader from '../../../helper/imageLoader'
import { useContext } from 'react'
import { ModalContext } from '../../../pages/_app'
import PrimaryButton from '../../Shared/PrimaryButton'

const Banner = () => {
  const [getStartedModal, setGetStartedModal] = useContext(ModalContext)
  return (
    <div className="md:max-w-[90%] xl:max-w-6xl mx-auto my-12 md:my-36">
      <div className="lg:min-h-[75vh] flex flex-col-reverse md:flex-row-reverse justify-center items-center md:gap-10 lg:gap-20 mx-auto px-8">
        <div className="min-w-[50%]">
          <div className="max-w-3xl mx-auto text-center md:text-left">
            <h1 className="text-3xl md:text-5xl text-black font-bold lg:text-6xl leading-10 md:leading-[4rem] lg:leading-[4.5rem]">
              Establish your brand worldwide through creating
              <br />
              <span
                className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-secondary relative inline-block"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom">
                <span className="relative text-white">live videos</span>
              </span>
            </h1>
            <br />
            <p className="text-black">
              Millions of people around the world take services from GoLaiv to reach targeted
              customers, increase engagement and monetize their audiences. We have a number of
              customers including renowned companies, media agencies, entrepreneurs, politicians as
              well as celebrities worldwide.
            </p>
            <div
              className="mt-10"
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
                horizontalPadding="w-full md:w-3/5">
                Start 14 days trial
              </PrimaryButton>
            </div>
          </div>
        </div>
        <div className="min-w-[50%] flex justify-center items-center">
          <div className="rainbow flex">
            <Image
              src={videoStreaming}
              alt="Woman in live call"
              width={450}
              height={700}
              className="object-cover rounded bg-yellow-500"
              placeholder="blur"
              loader={imageLoader}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
