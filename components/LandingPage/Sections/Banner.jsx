import { AiOutlineArrowRight } from 'react-icons/ai'

const Banner = () => {
  return (
    <div className="hero py-8 mb-16 lg:mb-28">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div data-aos="fade-left" className="rainbow w-10/12 lg:w-1/2">
          <video
            className="w-full h-full"
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
        <div data-aos="fade-right" className="w-10/12 lg:w-1/2 lg:mr-12 text-center lg:text-left">
          <h1
            className="text-5xl text-center text-black font-bold md:text-6xl lg:text-start"
            style={{ lineHeight: '4.5rem' }}>
            World-Leading
            <span
              className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary relative inline-block"
              data-aos="fade-up">
              <span className="relative text-white">Live Video</span>
            </span>{' '}
            <br /> Shopping
          </h1>
          <p className="py-6 text-black">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut ipsum quia labore maiores
            odio blanditiis minima a praesentium. Recusandae totam quaerat molestias ea quisquam
            facere iste explicabo illo excepturi similique!
          </p>
          <button className="btn btn-outline mr-4 text-black">
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
