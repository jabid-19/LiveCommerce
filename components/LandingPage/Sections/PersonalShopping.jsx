import Image from 'next/image'
import imageLoader from '../../../helper/imageLoader'
import girlShopping from '../../../public/shopping/girl-shopping.jpg'
import guyShopping from '../../../public/shopping/guy-shopping.jpg'
import tshirtShopping from '../../../public/shopping/tshirt-shopping.jpg'
import clothShopping from '../../../public/shopping/cloth-shopping.jpg'
import { AiOutlineArrowRight, AiOutlinePhone, AiOutlineVideoCamera } from 'react-icons/ai'
import { BiMicrophone } from 'react-icons/bi'
import { BsChatDots } from 'react-icons/bs'

const PersonalShopping = () => {
  return (
    <div className="hero py-8 px-4 my-8 lg:my-16">
      <div className="lg:mx-36 p-8">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div data-aos="fade-down-left" className="lg:ml-12">
            <div className="lg:flex">
              <div className="lg:pr-2">
                <div className="avatar">
                  <div className="w-72 lg:w-48 rounded">
                    <Image
                      loader={imageLoader}
                      className="object-fill"
                      width={580}
                      height={580}
                      src={girlShopping}
                      alt="Girl Shopping"
                    />
                  </div>
                </div>
                <div className="avatar hidden lg:block">
                  <div className="w-48 rounded">
                    <Image
                      loader={imageLoader}
                      className="object-fill"
                      width={580}
                      height={580}
                      src={guyShopping}
                      alt="Girl Shopping"
                    />
                  </div>
                </div>
              </div>
              <div className="lg:pr-2 hidden lg:block">
                <div className="avatar">
                  <div className="w-48 rounded">
                    <Image
                      loader={imageLoader}
                      className="object-fill"
                      width={580}
                      height={580}
                      src={tshirtShopping}
                      alt="Girl Shopping"
                    />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-48 rounded">
                    <Image
                      loader={imageLoader}
                      className="object-fill"
                      width={580}
                      height={580}
                      src={clothShopping}
                      alt="Girl Shopping"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-between lg:flex-col lg:space-y-8">
                  <BiMicrophone className="w-8 h-8 text-black" />
                  <AiOutlinePhone className="w-8 h-8 text-black" />
                  <AiOutlineVideoCamera className="w-8 h-8 text-black" />
                  <BsChatDots className="w-8 h-8 text-black" />
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-down-right" className="text-center lg:text-left">
            <h1
              className="text-5xl text-center text-black font-bold md:text-6xl lg:text-start"
              style={{ lineHeight: '4.5rem' }}>
              Personal Shopping
              <span
                className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary relative inline-block"
                data-aos="fade-up">
                <span className="relative text-white">One-to-One</span>
              </span>
            </h1>
            <p className="py-6 text-black">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi possimus ex quia
              impedit, laudantium eum saepe vero quisquam nobis expedita natus, sed et amet
              aspernatur magni. Inventore assumenda molestiae fugit.
            </p>
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
    </div>
  )
}

export default PersonalShopping
