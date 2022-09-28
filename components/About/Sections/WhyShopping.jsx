import Image from 'next/image'
import imageLoader from '../../../helper/imageLoader'
import LiveShopping from '../../../public/about/live-shopping.webp'
import { AiOutlineArrowRight } from 'react-icons/ai'

const WhyShopping = () => {
  return (
    <div className="md:max-w-[90%] xl:max-w-6xl mx-auto my-12 md:my-36">
      <div
        className="lg:min-h-[75vh] flex flex-col-reverse md:flex-row justify-center items-center md:gap-10 lg:gap-20 mx-auto px-8"
        //   style={{
        //     backgroundImage: `url('/about/about-bg.png')`,
        //     backgroundRepeat: `no-repeat`,
        //     backgroundSize: 'cover',
        //   }}
      >
        <div className="min-w-[50%]">
          <div className="max-w-3xl mx-auto text-center md:text-left">
            <h1
              className="text-3xl md:text-5xl text-black font-bold lg:text-6xl"
              style={{ lineHeight: '4.5rem' }}>
              Why GoLaiv <br />
              <span
                className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-secondary relative inline-block"
                data-aos="fade-up">
                <span className="relative text-white">live shopping</span>
              </span>{' '}
              ?
            </h1>
            <br />
            <div className="flex mt-8">
              <AiOutlineArrowRight className="w-8 h-8 mr-2 text-2xl text-black font-bold" />
              <div>
                <h3 className="text-3xl text-black font-bold">Premium video quality</h3>
                <p>
                  Online is the new offline, bridge the gap between the online and offline buying
                  experience.
                </p>
              </div>
            </div>
            <div className="flex mt-8">
              <AiOutlineArrowRight className="w-8 h-8 mr-2 text-2xl text-black font-bold" />
              <div>
                <h3 className="text-3xl text-black font-bold">Unprecedented engagement</h3>
                <p>
                  Outperform your competitors, and connect with your customers, wherever in the
                  world they are.
                </p>
              </div>
            </div>
            <div className="flex mt-8">
              <AiOutlineArrowRight className="w-8 h-8 mr-2 text-2xl text-black font-bold" />
              <div>
                <h3 className="text-3xl text-black font-bold">Reliable conversion</h3>
                <p>Increase your sales while decreasing your acquisition cost</p>
              </div>
            </div>
          </div>
        </div>
        <div className="min-w-[50%] flex justify-center items-center">
          <div className="rainbow flex">
            <Image
              loader={imageLoader}
              src={LiveShopping}
              alt="Woman holding a shoe"
              width={500}
              height={650}
              className="object-cover rounded bg-blue-700"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyShopping
