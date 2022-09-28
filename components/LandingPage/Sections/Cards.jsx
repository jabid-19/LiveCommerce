import { AiOutlineClockCircle, AiOutlineDollarCircle, AiOutlinePhone } from 'react-icons/ai'

const Cards = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-8 mt-16 mb-12 lg:mt-48 lg:mb-44 container mx-auto">
      <div data-aos="flip-left" className="card lg:card-side bg-primary">
        <figure className="flex items-center justify-center lg:pl-5 pt-5 lg:pt-0">
          <AiOutlineClockCircle className="h-24 w-24 text-white" />
        </figure>
        <div className="card-body text-white">
          <h2 className="text-xl text-center lg:text-left normal-case font-bold">
            24 hours online shopping
          </h2>
          <p className="lg:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div data-aos="flip-up" className="card lg:card-side bg-secondary">
        <figure className="flex items-center justify-center lg:pl-5 pt-5 lg:pt-0">
          <AiOutlineDollarCircle className="h-24 w-24 text-white" />
        </figure>
        <div className="card-body text-white">
          <h2 className="text-xl text-center lg:text-left normal-case font-bold">
            100% money back guarantee
          </h2>
          <p className="lg:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div data-aos="flip-right" className="card lg:card-side bg-accent">
        <figure className="flex items-center justify-center lg:pl-5 pt-5 lg:pt-0">
          <AiOutlinePhone className="h-24 w-24 text-white" />
        </figure>
        <div className="card-body text-white">
          <h2 className="text-xl text-center lg:text-left normal-case font-bold">
            24/7 online and phone support
          </h2>
          <p className="lg:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  )
}

export default Cards
