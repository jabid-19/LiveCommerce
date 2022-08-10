import Image from 'next/image'
import imageLoader from '../../../helper/imageLoader'
import girlShopping from '../../../public/shopping/girl-shopping.jpg'
import { AiOutlineArrowRight } from 'react-icons/ai'

const Banner = () => {
  return (
    <div className="hero lg:min-h-[80vh] bg-base-100 py-8">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div data-aos="fade-left" className="avatar">
          <div className="w-72 lg:w-96 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <Image
              loader={imageLoader}
              className="object-fill"
              width={580}
              height={580}
              src={girlShopping}
              alt="Girl Shopping"
              priority={true}
            />
          </div>
        </div>
        <div data-aos="fade-right">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold">
            World-Leading Live Video Shopping
          </h1>
          <p className="py-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut ipsum quia labore maiores
            odio blanditiis minima a praesentium. Recusandae totam quaerat molestias ea quisquam
            facere iste explicabo illo excepturi similique!
          </p>
          <button className="btn btn-outline mr-4">
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
