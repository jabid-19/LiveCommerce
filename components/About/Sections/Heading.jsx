import Image from 'next/image'
import videoCall from '../../../public/packages/videocall.png'
import imageLoader from '../../../helper/imageLoader'
const Heading = () => {
  return (
    <div className="min-h-[75vh] pt-20 px-8 flex flex-col-reverse md:flex-col justify-center items-center">
      <div className="max-w-2xl text-center">
        <h4 className="text-gray-500 text-4xl font-bold">
          <span
            className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary relative inline-block"
            data-aos="fade-up">
            <span className="relative text-white">About GoLaiv</span>
          </span>
        </h4>
        <h1 className="text-black text-6xl font-bold">How the website works</h1>
        <br />
        <p className="text-black">
          Connect with unlimited customers by hosting shoppable livestreams or pre-recorded videos
          on your native website. Connect with anyone from anywhere.
        </p>
        {/* <button
          className="w-full my-10 py-4 rounded-md bg-primary text-white font-bold hover:bg-black duration-500 md:w-4/5"
          data-aos="fade-up"
          data-aos-duration="4500">
          Start Free Trial
        </button> */}
        <div className="my-4 flex flex-col gap-2 md:gap-4 md:flex-row justify-center items-center">
          <button className="py-4 w-full md:w-1/2 rounded-md bg-primary text-white font-bold hover:bg-black duration-500">
            Get Started
          </button>
          <button className="py-4 w-full md:w-1/2 rounded-md bg-secondary text-white font-bold hover:bg-black duration-500">
            Watch Demo
          </button>
        </div>
      </div>
      <Image
        src={videoCall}
        width={900}
        height={700}
        className="object-cover rounded-3xl bg-slate-200"
        placeholder="blur"
        loader={imageLoader}
        alt="LiveCommerce Video Call"
      />
    </div>
  )
}

export default Heading
