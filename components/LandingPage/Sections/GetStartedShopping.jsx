import Image from 'next/image'
import girlRedCoat from '../../../public/shopping/girl-red-coat.jpg'
import { AiOutlineArrowRight } from 'react-icons/ai'

const GetStartedShopping = () => {
  return (
    <div className="hero min-h-screen bg-base-200 p-8 mx-auto">
      <div className="hero-content p-8 lg:mx-12 bg-base-100 flex-col lg:flex-row-reverse">
        <div data-aos="fade-left">
          <div className="w-50 lg:w-80 lg:ml-12">
            <Image
              className="object-fill"
              width={435}
              height={580}
              src={girlRedCoat}
              alt="Girl Shopping"
            />
          </div>
        </div>
        <div data-aos="fade-right">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold">
            Get Started With Live Shopping Today
          </h1>
          <p className="py-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut ipsum quia labore maiores
            odio blanditiis minima a praesentium. Recusandae totam quaerat molestias ea quisquam
            facere iste explicabo illo excepturi similique!
          </p>
          <button className="btn btn-primary text-white">
            Get Started
            <AiOutlineArrowRight className="w-4 h-4 ml-2 text-White" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default GetStartedShopping
