import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import imageLoader from '../../../helper/imageLoader'
import { ModalContext } from '../../../pages/_app'
import businessDeal from '../../../public/business/business-deal.jpeg'
import presentation from '../../../public/business/business-presentation.webp'
import businessTeam from '../../../public/business/business-team.webp'
import chart from '../../../public/business/chart.webp'
import PrimaryButton from '../../Shared/PrimaryButton'

const PersonalShopping = () => {
  const [getStartedModal, setGetStartedModal] = useContext(ModalContext)
  return (
    <div className="hero lg:px-4 my-12 lg:my-36">
      <div className="lg:mx-36 lg:px-8">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="flex lg:gap-4">
            <div className="flex flex-col gap-4">
              <div className="avatar">
                <div className="w-72 lg:w-52 rounded-lg">
                  <Image
                    loader={imageLoader}
                    className="object-fill bg-secondary"
                    width={580}
                    height={580}
                    src={businessDeal}
                    alt="Business Deal"
                    placeholder="blur"
                  />
                </div>
              </div>
              <div className="avatar">
                <div className="w-72 lg:w-52 rounded-lg">
                  <Image
                    loader={imageLoader}
                    className="object-fill bg-secondary"
                    width={580}
                    height={580}
                    src={chart}
                    alt="Business Chart"
                    placeholder="blur"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="avatar hidden xl:block">
                <div className="w-52 rounded-lg">
                  <Image
                    loader={imageLoader}
                    className="object-fill bg-secondary"
                    width={580}
                    height={580}
                    src={businessTeam}
                    alt="Business Team"
                    placeholder="blur"
                  />
                </div>
              </div>
              <div className="avatar hidden xl:block">
                <div className="w-52 rounded-lg">
                  <Image
                    loader={imageLoader}
                    className="object-fill bg-secondary"
                    width={580}
                    height={580}
                    src={presentation}
                    alt="Business Presentation"
                    placeholder="blur"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="text-center lg:text-left lg:mr-12">
            <h1 className="text-3xl md:text-5xl text-center text-black font-bold lg:text-6xl lg:text-start leading-10 md:leading-[4rem] lg:leading-[4.5rem]">
              Grab your{' '}
              <span
                className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-secondary relative inline-block"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom">
                <span className="relative text-white">business</span>
              </span>
              <br />
              goals at home
            </h1>
            <br />
            <h2 className="text-2xl text-black font-bold">
              We make your virtual path easier and bring success
            </h2>
            <div className="py-6 text-black text-left">
              <ul>
                <li className="ml-6 list-disc">
                  Easily reach your targeted audiences across the world through multiple social
                  media platforms
                </li>
                <li className="ml-6 list-disc">Manage all chats from our dashboard</li>
                <li className="ml-6 list-disc">
                  Increase customer engagement with ready-to-us interactive elements
                </li>
                <li className="ml-6 list-disc">Create your own branding with low-cost</li>
                <li className="ml-6 list-disc">Monetize videos to grow your revenue</li>
                <li className="ml-6 list-disc">Analyze your competitors and success ratio</li>
                <li className="ml-6 list-disc">Use AI to create a data-based video strategy</li>
              </ul>
            </div>
            <div className="flex flex-wrap justify-center items-center lg:justify-start gap-4">
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
                </PrimaryButton>
              </div>
              <Link href="/about">
                <a>
                  <PrimaryButton
                    textClass="text-black"
                    bgClass="bg-transparent"
                    borderClass="border-primary"
                    hoverText="hover:text-white"
                    hoverBg="hover:bg-primary"
                    hoverBorder="hover:border-primary"
                    horizontalPadding="px-5">
                    About us
                    <AiOutlineArrowRight className="w-4 h-4 ml-2" />
                  </PrimaryButton>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonalShopping
