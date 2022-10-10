import Link from 'next/link'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { useContext } from 'react'
import { ModalContext } from '../../../pages/_app'

const Banner = () => {
  const [getStartedModal, setGetStartedModal] = useContext(ModalContext)
  return (
    <div className="hero py-12 lg:py-36">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="rainbow w-10/12 lg:w-1/2">
          <video
            className="w-full h-full rounded bg-secondary"
            poster="/video/woman-video.png"
            playsInline
            autoPlay
            loop
            muted>
            <source src="/video/woman-video.mp4" type="video/mp4" />
          </video>
        </div>
        {/* <div data-aos="fade-left" data-aos-anchor-placement="top-bottom" className="avatar">
          <div className="w-72 lg:w-96 rounded-full ring-8 ring-primary ring-offset-2"> */}
        {/* <div className="w-72 lg:w-96 rounded-full border-4 border-dotted border-primary animate-spin"> */}
        {/* // <Image
            //   loader={imageLoader}
            //   className="object-fill"
            //   width={580}
            //   height={580}
            //   src={girlShopping}
            //   alt="Girl Shopping"
            //   priority={true}
            // /> */}
        {/* <video
              className="w-full h-full"
              // style={{ width: '384px', height: '384px' }}
              // controls
              playsInline
              autoPlay
              loop
              muted>
              <source src="/video/woman-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div> */}
        <div className="w-10/12 lg:w-1/2 lg:mr-12 text-center lg:text-left">
          <h1 className="text-3xl md:text-5xl text-center text-black font-bold lg:text-6xl lg:text-start leading-10 md:leading-[4rem] lg:leading-[4.5rem]">
            Trusted{' '}
            <span
              className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-secondary relative inline-block"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom">
              <span className="relative text-white">video</span>
            </span>{' '}
            platform for growing business!
          </h1>
          <p className="py-6 text-black">
            No matter where you are or what your customer demands, our straightforward and intuitive
            interface as well as features must assist you grow your business. Our dedicated experts
            team know how to reach your targeted audiences, boost your business and make a position
            for you in the competitive market. With an extensive list of features, our platform is
            designed to support all use cases and enables you to add features as your brand grows,
            using only the capabilities you need. In fact when your business thrives, so will ours!
          </p>
          <div className="flex flex-wrap justify-center items-center lg:justify-start gap-4">
            <button
              className="py-4 px-5 flex justify-center items-center rounded-md bg-[#e8e4d9] border-2 border-primary text-black font-bold hover:text-white hover:bg-black duration-500 normal-case"
              onClick={() => setGetStartedModal(!getStartedModal)}>
              Get started
              <AiOutlineArrowRight className="w-4 h-4 ml-2" />
            </button>
            {/* <Link href="/pricing">
              <a className="py-4 px-5 rounded-md bg-primary border-2 border-primary text-white font-bold hover:bg-black duration-500 normal-case">
                Pricing
              </a>
            </Link> */}
            <Link href="/about">
              <a className="py-4 px-5 rounded-md bg-primary border-2 border-primary text-white font-bold hover:bg-black duration-500 normal-case">
                Learn more
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
