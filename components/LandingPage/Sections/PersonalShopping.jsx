import Image from 'next/image'
import { useContext } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import imageLoader from '../../../helper/imageLoader'
import { ModalContext } from '../../../pages/_app'
import businessDeal from '../../../public/business/business-deal.jpeg'
import presentation from '../../../public/business/business-presentation.webp'
import businessTeam from '../../../public/business/business-team.webp'
import chart from '../../../public/business/chart.webp'

const PersonalShopping = () => {
  const [getStartedModal, setGetStartedModal] = useContext(ModalContext)
  return (
    <div className="hero py-8 lg:px-4 my-8 lg:my-16">
      <div className="lg:mx-36 lg:p-8">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="flex lg:gap-4">
            <div className="flex flex-col gap-4">
              <div className="avatar">
                <div className="w-72 lg:w-52 rounded-lg">
                  <Image
                    loader={imageLoader}
                    className="object-fill"
                    width={580}
                    height={580}
                    src={businessDeal}
                    alt="Business Deal"
                  />
                </div>
              </div>
              <div className="avatar">
                <div className="w-72 lg:w-52 rounded-lg">
                  <Image
                    loader={imageLoader}
                    className="object-fill"
                    width={580}
                    height={580}
                    src={chart}
                    alt="Business Chart"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="avatar hidden lg:block">
                <div className="w-52 rounded-lg">
                  <Image
                    loader={imageLoader}
                    className="object-fill"
                    width={580}
                    height={580}
                    src={businessTeam}
                    alt="Business Team"
                  />
                </div>
              </div>
              <div className="avatar hidden lg:block">
                <div className="w-52 rounded-lg">
                  <Image
                    loader={imageLoader}
                    className="object-fill"
                    width={580}
                    height={580}
                    src={presentation}
                    alt="Business Presentation"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="text-center lg:text-left lg:mr-12">
            <h1
              className="text-5xl text-center text-black font-bold md:text-6xl lg:text-start"
              style={{ lineHeight: '4.5rem' }}>
              REACH ALL YOUR
              <br />
              <span
                className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary relative inline-block"
                data-aos="fade-up">
                <span className="relative text-white">BUSINESS</span>
              </span>{' '}
              GOALS
            </h1>
            <br />
            <h3 className="text-2xl text-black font-bold">
              We make it simple for you to use video content
            </h3>
            <div className="py-6 text-black text-left">
              <ul>
                <li className="ml-6 list-disc">
                  Easily reach your audience across multiple social media platforms
                </li>
                <li className="ml-6 list-disc">Manage all chats from our dashboard</li>
                <li className="ml-6 list-disc">
                  Increase customer engagement with ready-to-us interactive elements
                </li>
                <li className="ml-6 list-disc">Create your own branding </li>
                <li className="ml-6 list-disc">Monetize videos to grow your revenue</li>
                <li className="ml-6 list-disc">Analyze your success rate</li>
                <li className="ml-6 list-disc">
                  Use AI to help create a data-based video strategy
                </li>
              </ul>
            </div>
            <div className="mb-8">
              <button
                className="btn btn-primary text-white mr-4"
                onClick={() => setGetStartedModal(!getStartedModal)}>
                Get Started
              </button>
              <button className="btn btn-outline text-black">
                Learn More
                <AiOutlineArrowRight className="w-4 h-4 ml-2 text-black" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonalShopping
