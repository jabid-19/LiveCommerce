import Image from 'next/image'
const Banner = () => {
  return (
    <div className="md:max-w-[90%] xl:max-w-6xl mx-auto my-20 md:my-36">
      <div
        className="lg:min-h-[75vh] flex flex-col-reverse md:flex-row-reverse justify-center items-center md:gap-10 lg:gap-20 mx-auto px-8"
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
              Empowering brands to <br />
              <span
                className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary relative inline-block"
                data-aos="fade-up">
                <span className="relative text-white">create and connect</span>
              </span>{' '}
              <br />
              through live video
            </h1>
            <br />
            <p className="text-2xl text-black">
              Millions of people around the world use GoLaiv to reach, engage and monetize their
              audiences. Our customers include professional and amateur gamers, Fortune 500
              companies, media, politicians and celebrities.
            </p>
            <button
              className="w-full mt-10 py-4  rounded-md bg-primary text-white font-bold hover:bg-black duration-500 md:w-3/5"
              data-aos="fade-up"
              data-aos-duration="4500">
              Start 14 days trial
            </button>
          </div>
        </div>
        <div className="min-w-[50%] flex justify-center items-center">
          <div data-aos="fade-right" className="rainbow flex">
            <Image
              src="/about/video-streaming.jpeg"
              alt="Picture of the author"
              width={450}
              height={700}
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
