import Image from 'next/image'
import { useContext } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import imageLoader from '../../../helper/imageLoader'
import { ModalContext } from '../../../pages/_app'
import girlShopping from '../../../public/shopping/girl-shopping-online.jpeg'
import PrimaryButton from '../../Shared/PrimaryButton'

const GetStartedShopping = () => {
  const [getStartedModal, setGetStartedModal] = useContext(ModalContext)
  return (
    <div className="hero bg-secondary px-8 py-12 lg:py-36 mx-auto">
      <div className="rainbowBorder">
        <div className="hero-content max-w-7xl p-8 bg-base-100 flex-col lg:flex-row-reverse">
          <div>
            <div className="w-50 lg:w-80 lg:ml-12">
              <Image
                loader={imageLoader}
                className="object-cover rounded-lg"
                width={435}
                height={580}
                src={girlShopping}
                alt="Girl Shopping"
              />
            </div>
          </div>
          <div className="text-center lg:text-left">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black leading-10 md:leading-[4rem] lg:leading-[4.5rem]">
              <span
                className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-secondary relative inline-block text-white"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom">
                <span className="relative">Get started</span>
              </span>{' '}
              your shopping here with live video
            </h1>
            <p className="py-6 text-black">
              You can easily buy anything with live video shopping as your choice without hassle.
              You can here sort out your desired products from a huge collection with competitive
              prices and get satisfied.
            </p>
            <div onClick={() => setGetStartedModal(!getStartedModal)}>
              <PrimaryButton
                textClass="text-white"
                bgClass="bg-primary"
                borderClass="border-primary"
                hoverText="hover:text-white"
                hoverBg="hover:bg-accent"
                hoverBorder="hover:border-accent"
                horizontalPadding="px-5">
                Get started
                <AiOutlineArrowRight className="w-4 h-4 ml-2" />
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetStartedShopping
