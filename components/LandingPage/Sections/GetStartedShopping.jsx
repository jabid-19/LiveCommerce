import Image from 'next/image'
import imageLoader from '../../../helper/imageLoader'
import girlRedCoat from '../../../public/shopping/girl-red-coat.jpg'
import { AiOutlineArrowRight } from 'react-icons/ai'

const GetStartedShopping = () => {
  return (
    <div className="hero bg-primary px-8 py-12 lg:py-36 mx-auto">
      <div className="rainbowBorder">
        <div className="hero-content max-w-7xl p-8 bg-base-100 flex-col lg:flex-row-reverse">
          <div>
            <div className="w-50 lg:w-80 lg:ml-12">
              <Image
                loader={imageLoader}
                className="object-cover rounded-lg"
                width={435}
                height={580}
                src={girlRedCoat}
                alt="Girl Shopping"
              />
            </div>
          </div>
          <div className="text-center lg:text-left">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black">
              <span
                className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-secondary relative inline-block"
                data-aos="fade-up">
                <span className="relative">Get Started</span>
              </span>{' '}
              With Live Shopping Today
            </h1>
            <p className="py-6 text-black">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut ipsum quia labore
              maiores odio blanditiis minima a praesentium. Recusandae totam quaerat molestias ea
              quisquam facere iste explicabo illo excepturi similique!
            </p>
            <button className="btn btn-primary text-white">
              Get Started
              <AiOutlineArrowRight className="w-4 h-4 ml-2 text-White" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetStartedShopping
