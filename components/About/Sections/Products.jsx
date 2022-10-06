import { AiOutlineVideoCamera, AiOutlineCalendar } from 'react-icons/ai'
import { BsChatDots } from 'react-icons/bs'
import { IoIosStats } from 'react-icons/io'
const Products = () => {
  return (
    <div className="mt-12 lg:mt-36 mb-16 lg:mb-44 px-8">
      <div className="max-w-7xl">
        <h1 className="text-3xl md:text-5xl text-black font-bold lg:text-6xl">
          <span
            className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-secondary relative inline-block"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom">
            <span className="relative text-white">Our services</span>
          </span>
        </h1>
        <br />
        <p className="text-2xl text-black">
          At GoLaiv, we are committed to nurturing our product portfolio to empower content creators
          to reach wider audiences, establish brands and assist them to spread their messages
          throughout a massive network of streamers.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-10 gap-10">
        <div className="rainbow shadow-lg shadow-accent">
          <div className="bg-white p-8 text-black h-full">
            <div className="flex justify-center bg-[#e8e4d9] py-2">
              <AiOutlineVideoCamera className="w-24 h-24 p-2 bg-accent rounded-full text-white" />
            </div>
            <h1 className="text-2xl md:text-3xl text-black font-bold mt-10">
              <span
                className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-secondary relative inline-block"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom">
                <span className="relative text-white">Multi-streaming</span>
              </span>
            </h1>
            <br />
            <p className="text-black">
              We make it easy to manage multiple streams so that you can increase your audiences and
              get the exposure you are looking for.
            </p>
          </div>
        </div>
        <div className="rainbow shadow-lg shadow-accent">
          <div className="bg-white p-8 text-black h-full">
            <div className="flex justify-center bg-[#e8e4d9] py-2">
              <AiOutlineCalendar className="w-24 h-24 p-2 bg-accent rounded-full text-white" />
            </div>
            <h1 className="text-2xl md:text-3xl text-black font-bold mt-10">
              <span
                className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-secondary relative inline-block"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom">
                <span className="relative text-white">Upload & Stream</span>
              </span>
            </h1>
            <br />
            <p className="text-black">
              Create relevant videos to your business, upload and share with customers. Take the
              opportunities of a stream that is loved by millions worldwide.
            </p>
          </div>
        </div>
        <div className="rainbow shadow-lg shadow-accent">
          <div className="bg-white p-8 text-black h-full">
            <div className="flex justify-center bg-[#e8e4d9] py-2">
              <BsChatDots className="w-24 h-24 p-2 bg-accent rounded-full text-white" />
            </div>
            <h1 className="text-2xl md:text-3xl text-black font-bold mt-10">
              <span
                className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-secondary relative inline-block"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom">
                <span className="relative text-white">Talk & Chat</span>
              </span>
            </h1>
            <br />
            <p className="text-black">
              Monitor and directly make live conversation with your valued audiences and customers.
              This must increase your customer engagement and boost your business.
            </p>
          </div>
        </div>
        <div className="rainbow shadow-lg shadow-accent">
          <div className="bg-white p-8 text-black h-full">
            <div className="flex justify-center bg-[#e8e4d9] py-2">
              <IoIosStats className="w-24 h-24 p-2 bg-accent rounded-full text-white" />
            </div>
            <h1 className="text-2xl md:text-3xl text-black font-bold mt-10">
              <span
                className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-secondary relative inline-block"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom">
                <span className="relative text-white">Analytics</span>
              </span>
            </h1>
            <br />
            <p className="text-black">
              We provide better tools you need to understand your customers better. You can use
              these business insights to take further action for growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
