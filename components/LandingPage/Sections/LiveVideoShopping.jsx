import { AiOutlineArrowRight } from 'react-icons/ai'
const LiveVideoShopping = () => {
  return (
    <div className="hero min-h-[75vh] bg-base-100 mx-auto py-8 lg:px-36 lg:py-0">
      <div className="hero-content flex-col lg:flex-row">
        <iframe
          width="300px"
          height="400px"
          title="YouTube video player"
          data-aos="fade-down-right"
          src="https://www.youtube.com/embed/MLsOPVxY4y0"
          className="max-w-sm rounded-lg shadow-2xl lg:mr-12"
          allowFullScreen="allowFullScreen"
          frameBorder="0"></iframe>
        <div data-aos="fade-down-left">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-black">
            Live Video Shopping One-to-Many
          </h1>
          <p className="py-6 text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nam eveniet
            corporis, provident corrupti impedit delectus ipsum, a molestiae, architecto ullam
            pariatur commodi velit maiores inventore necessitatibus debitis enim ducimus?
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
  )
}

export default LiveVideoShopping
