import { useContext } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { ModalContext } from '../../../pages/_app'

const Banner = () => {
  const [getStartedModal, setGetStartedModal] = useContext(ModalContext)
  return (
    <div className="hero py-12 lg:py-36">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="rainbow w-10/12 lg:w-1/2">
          <video
            className="w-full h-full rounded bg-violet-400"
            poster="/video/woman-video.png"
            playsInline
            autoPlay
            loop
            muted>
            <source src="/video/woman-video.mp4" type="video/mp4" />
          </video>
        </div>
        {/* <div data-aos="fade-left" className="avatar">
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
          <h1
            className="text-3xl md:text-5xl text-center text-black font-bold lg:text-6xl lg:text-start"
            style={{ lineHeight: '4.5rem' }}>
            YOUR LEADING <br />
            <span
              className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary relative inline-block"
              data-aos="fade-up">
              <span className="relative text-white">VIDEO</span>
            </span>{' '}
            PLATFORM
            <br />
            FOR BUSINESS
          </h1>
          <p className="py-6 text-black">
            Our simple and intuitive interface and features can help you reach audiences wherever
            and whenever they want. With an extensive list of features, our platform is designed to
            support all use cases and enables you to add features as your brand grows, use only the
            capabilities you need. When your business thrives, so will ours!
          </p>
          <button
            className="btn btn-outline mr-4 text-black"
            onClick={() => setGetStartedModal(!getStartedModal)}>
            Get Started
            <AiOutlineArrowRight className="w-4 h-4 ml-2" />
          </button>
          <button className="btn btn-primary text-white">Pricing</button>
        </div>
      </div>
    </div>
  )
}

export default Banner
