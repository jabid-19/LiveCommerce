import Link from 'next/link'
import { useContext } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { ModalContext } from '../../../pages/_app'
import PrimaryButton from '../../Shared/PrimaryButton'
// import video from '../../../public/video/videoplayback.mp4'
const LiveVideoShopping = () => {
  const [getStartedModal, setGetStartedModal] = useContext(ModalContext)
  return (
    <div className="hero mx-auto lg:px-36">
      <div className="hero-content flex-col items-center justify-center lg:flex-row">
        {/* <iframe
          width="300"
          height="400"
          src="https://www.youtube.com/embed/MLsOPVxY4y0?playlist=MLsOPVxY4y0&loop=1&autoplay=1&mute=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen></iframe> */}
        <video
          style={{ height: '600px' }}
          className="rounded-lg bg-orange-300"
          // controls
          poster="/video/live-video.png"
          playsInline
          autoPlay
          loop
          muted>
          <source src="/video/live-video.mp4" type="video/mp4" />
        </video>
        <div className="lg:ml-12 text-center lg:text-left">
          <h1 className="text-3xl md:text-5xl text-center text-black font-bold lg:text-6xl lg:text-start leading-10 md:leading-[4rem] lg:leading-[4.5rem]">
            Create relevant content
            <br />
            to your{' '}
            <span
              className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-secondary relative inline-block"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom">
              <span className="relative text-white">business</span>
            </span>
            <br />
            that attracts customers
          </h1>
          <div className="py-6 text-black text-left">
            <ul>
              <li className="ml-6 list-disc">
                Create video content from anywhere whenever you want
              </li>
              <li className="ml-6 list-disc">
                Multi-streaming simultaneously on a large range of platforms
              </li>
              <li className="ml-6 list-disc">HD video live streaming as well as Audio promo</li>
              <li className="ml-6 list-disc">
                Playback recorded videos on any platform with scheduling and reminder options
              </li>
              <li className="ml-6 list-disc">
                Translation options will help to widen your audience reach worldwide
              </li>
              <li className="ml-6 list-disc">
                Solutions to make your video content scalable, reliable and secure
              </li>
              <li className="ml-6 list-disc">
                Receive analytics on your success rate and use our AI to create a video content
                strategy
              </li>
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
                  Learn more
                  <AiOutlineArrowRight className="w-4 h-4 ml-2" />
                </PrimaryButton>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LiveVideoShopping
