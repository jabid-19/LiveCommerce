import { AiOutlineVideoCamera, AiOutlineCalendar } from 'react-icons/ai'
import { BsChatDots } from 'react-icons/bs'
import { IoIosStats } from 'react-icons/io'
const Products = () => {
  return (
    <div className="mt-20 pb-20 lg:pb-36 lg:mt-36 px-8">
      <div className="max-w-7xl">
        <h1 className="text-5xl text-black font-bold lg:text-6xl">
          <span
            className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary relative inline-block"
            data-aos="fade-up">
            <span className="relative text-black">Our products</span>
          </span>
        </h1>
        <br />
        <p className="text-2xl text-black">
          At GoLaiv, we keep nurturing our product portfolio to empower content creators to reach
          wider audiences, and brands to spread their messages throughout a massive network of
          streamers.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-10 gap-10">
        <div data-aos="zoom-in" className="rainbow shadow-lg shadow-primary">
          <div className="bg-white p-8 text-black h-full">
            <div className="flex justify-center bg-slate-200 py-2">
              <AiOutlineVideoCamera className="w-24 h-24 p-2 bg-primary rounded-full text-white" />
            </div>
            <h1 className="text-3xl text-black font-bold mt-10">
              <span
                className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-secondary relative inline-block"
                data-aos="fade-up">
                <span className="relative text-black">Multi-streaming</span>
              </span>
            </h1>
            <br />
            <p className="text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores excepturi esse iste
              eligendi eum similique corporis tempora tenetur odio impedit!
            </p>
          </div>
        </div>
        <div data-aos="zoom-in" className="rainbow shadow-lg shadow-primary">
          <div className="bg-white p-8 text-black h-full">
            <div className="flex justify-center bg-slate-200 py-2">
              <AiOutlineCalendar className="w-24 h-24 p-2 bg-primary rounded-full text-white" />
            </div>
            <h1 className="text-3xl text-black font-bold mt-10">
              <span
                className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-secondary relative inline-block"
                data-aos="fade-up">
                <span className="relative text-black">Upload & Stream</span>
              </span>
            </h1>
            <br />
            <p className="text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores excepturi esse iste
              eligendi eum similique corporis tempora tenetur odio impedit!
            </p>
          </div>
        </div>
        <div data-aos="zoom-in" className="rainbow shadow-lg shadow-primary">
          <div className="bg-white p-8 text-black h-full">
            <div className="flex justify-center bg-slate-200 py-2">
              <BsChatDots className="w-24 h-24 p-2 bg-primary rounded-full text-white" />
            </div>
            <h1 className="text-3xl text-black font-bold mt-10">
              <span
                className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-secondary relative inline-block"
                data-aos="fade-up">
                <span className="relative text-black">Talk & Chat</span>
              </span>
            </h1>
            <br />
            <p className="text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores excepturi esse iste
              eligendi eum similique corporis tempora tenetur odio impedit!
            </p>
          </div>
        </div>
        <div data-aos="zoom-in" className="rainbow shadow-lg shadow-primary">
          <div className="bg-white p-8 text-black h-full">
            <div className="flex justify-center bg-slate-200 py-2">
              <IoIosStats className="w-24 h-24 p-2 bg-primary rounded-full text-white" />
            </div>
            <h1 className="text-3xl text-black font-bold mt-10">
              <span
                className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-secondary relative inline-block"
                data-aos="fade-up">
                <span className="relative text-black">Analytics</span>
              </span>
            </h1>
            <br />
            <p className="text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores excepturi esse iste
              eligendi eum similique corporis tempora tenetur odio impedit!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
