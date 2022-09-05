import Image from 'next/image'
import imageLoader from '../../../helper/imageLoader'
import girlShopping from '../../../public/shopping/girl-shopping.jpg'
import { AiOutlineArrowRight } from 'react-icons/ai'

const Banner = () => {
  return (
    <div className="hero xl:min-h-[80vh] bg-base-100 py-8 mb-16">
      <div className="hero-content flex-col xl:flex-row-reverse">
        <div className="rainbow">
          {/* <Image
            loader={imageLoader}
            className="object-fill"
            width={300}
            height={258}
            src={girlShopping}
            alt="Girl Shopping"
            priority={true}
          /> */}
          <video
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
        {/* <div className="circle-wrapper">
          <div className="success circle"></div>
          <div className="icon">
            <Image
              loader={imageLoader}
              className="rounded-full object-fill"
              width={580}
              height={580}
              src={girlShopping}
              alt="Girl Shopping"
              priority={true}
            />
          </div>
        </div> */}
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
        <div data-aos="fade-right">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-black">
            World-Leading Live Video Shopping
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
