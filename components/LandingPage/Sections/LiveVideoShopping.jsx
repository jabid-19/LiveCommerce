import { useContext } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { ModalContext } from '../../../pages/_app'
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
          <h1
            className="text-3xl md:text-5xl text-center text-black font-bold lg:text-6xl lg:text-start"
            style={{ lineHeight: '4.5rem' }}>
            Make sure
            <br />
            your{' '}
            <span
              className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary relative inline-block"
              data-aos="fade-up">
              <span className="relative text-white">content</span>
            </span>
            <br />
            delivers value
            <br />
            to your business
          </h1>
          <div className="py-6 text-black text-left">
            <ul>
              <li className="ml-6 list-disc">
                Multi-stream simultaneously on a large range of platforms
              </li>
              <li className="ml-6 list-disc">
                No limits on time & places, create video content from anywhere
              </li>
              <li className="ml-6 list-disc">Audio & HD video calling and live streaming</li>
              <li className="ml-6 list-disc">Compatible with any device</li>
              <li className="ml-6 list-disc">
                Playback recorded videos on any platform with scheduling and reminder options
              </li>
              <li className="ml-6 list-disc">
                Receive analytics on your success rate and use our AI to help create a video content
                strategy
              </li>
              <li className="ml-6 list-disc">
                Translation captions will help to widen your audience reach
              </li>
              <li className="ml-6 list-disc">
                Solutions to make your video content scalable, reliable and secure
              </li>
            </ul>
          </div>
          <div>
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
  )
}

export default LiveVideoShopping
