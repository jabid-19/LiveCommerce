import { AiOutlineArrowRight } from 'react-icons/ai'
// import video from '../../../public/video/videoplayback.mp4'
// import imageLoader from '../../../helper/imageLoader'
const LiveVideoShopping = () => {
  return (
    <div className="hero mx-auto py-8 lg:px-36 lg:py-0">
      <div className="hero-content flex-col lg:flex-row">
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
          // controls
          poster="/video/live-video.png"
          playsInline
          autoPlay
          loop
          muted>
          <source src="/video/live-video.mp4" type="video/mp4" />
        </video>
        <div data-aos="fade-down-left" className="lg:ml-12 text-center lg:text-left">
          <h1
            className="text-5xl text-center text-black font-bold md:text-6xl lg:text-start"
            style={{ lineHeight: '4.5rem' }}>
            Make sure
            <br />
            <span
              className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary relative inline-block"
              data-aos="fade-up">
              <span className="relative text-white">your content</span>
            </span>
            <br />
            delivers value
            <br />
            to your business
          </h1>
          <div className="py-6 text-black">
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
          {/* <div className="py-6">
            <div className="pt-1.5 text-black flex items-center">
              <AiOutlineArrowRight className="w-6 h-6 mr-2" />
              <p>Multistream simultaneously on a large range of platforms</p>
            </div>
            <div className="pt-1.5 text-black flex items-center">
              <AiOutlineArrowRight className="w-6 h-6 mr-2" />
              <p>No limits on time & places, create video content from anywhere</p>
            </div>
            <div className="pt-1.5 text-black flex items-center">
              <AiOutlineArrowRight className="w-6 h-6 mr-2" />
              <p>Audio & HD video calling and live streaming </p>
            </div>
            <div className="pt-1.5 text-black flex items-center">
              <AiOutlineArrowRight className="w-6 h-6 mr-2" />
              <p>Compatible with any device</p>
            </div>
            <div className="pt-1.5 text-black flex items-center">
              <AiOutlineArrowRight className="w-6 h-6 mr-2" />
              <p>Playback recorded videos on any platform with scheduling and reminder options</p>
            </div>
            <div className="pt-1.5 text-black flex items-center">
              <AiOutlineArrowRight className="w-6 h-6 mr-2" />
              <p>
                Receive analytics on your success rate and use our AI to help create a video content
                strategy
              </p>
            </div>
            <div className="pt-1.5 text-black flex items-center">
              <AiOutlineArrowRight className="w-6 h-6 mr-2" />
              <p>Translation captions will help to widen your audience reach</p>
            </div>
            <div className="pt-1.5 text-black flex items-center">
              <AiOutlineArrowRight className="w-6 h-6 mr-2" />
              <p>Solutions to make your video content scalable, reliable and secure</p>
            </div>
          </div> */}
          <div className="mb-8">
            <button className="btn btn-primary text-white mr-4">Get Started</button>
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
