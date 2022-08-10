import React from 'react'
import Slider from 'react-slick'

// Import css files
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

import ArrowPrevious from '../../../public/previous-next/arrow-previous.svg'
import ArrowNext from '../../../public/previous-next/arrow-next.svg'

const LiveVideoSlickSLider = () => {
  const ArrowButtonPrevious = ({ imgSrc, imgAlt, onClick }) => {
    return (
      <button onClick={onClick} style={{ backgroundColor: 'transparent', border: 'none' }}>
        <img
          src={imgSrc}
          alt={imgAlt}
          style={{
            width: '50px',
            height: '50px',
            filter:
              onClick === null
                ? 'invert(93%) sepia(7%) saturate(7029%) hue-rotate(94deg) brightness(86%) contrast(93%)'
                : 'none',
          }}
        />
      </button>
    )
  }

  const ArrowButtonNext = ({ imgSrc, imgAlt, onClick }) => {
    return (
      <button onClick={onClick} style={{ backgroundColor: 'transparent', border: 'none' }}>
        <img
          src={imgSrc}
          alt={imgAlt}
          style={{
            width: '50px',
            height: '50px',
            filter:
              onClick === null
                ? 'invert(93%) sepia(7%) saturate(7029%) hue-rotate(94deg) brightness(86%) contrast(93%)'
                : 'none',
          }}
        />
      </button>
    )
  }
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: <ArrowButtonPrevious imgSrc={ArrowPrevious} imgAlt="previous-button" />,
    nextArrow: <ArrowButtonNext imgSrc={ArrowNext} imgAlt="next-button" />,
    beforeChange: (current, next) => {
      console.log(next)
    },
    // autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          prevArrow: <ArrowButtonPrevious imgSrc={ArrowPrevious} imgAlt="previous-button" />,
          nextArrow: <ArrowButtonNext imgSrc={ArrowNext} imgAlt="next-button" />,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          prevArrow: <ArrowButtonPrevious imgSrc={ArrowPrevious} imgAlt="previous-button" />,
          nextArrow: <ArrowButtonNext imgSrc={ArrowNext} imgAlt="next-button" />,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: <ArrowButtonPrevious imgSrc={ArrowPrevious} imgAlt="previous-button" />,
          nextArrow: <ArrowButtonNext imgSrc={ArrowNext} imgAlt="next-button" />,
        },
      },
    ],
  }
  return (
    <div className="max-w-7xl mx-auto mt-12 lg:mt-32 lg:py-12">
      <div>
        <h3 className="text-2xl lg:text-4xl font-bold mb-16">Get Idea About Live Shopping</h3>
        <Slider {...settings}>
          <div className="mx-16 flex justify-center items-center">
            <div className="mb-8">
              <iframe
                className="w-[250px] h-[350px] lg:w-[18.75rem] lg:h-[25rem]"
                title="YouTube video player"
                src="https://www.youtube.com/embed/icmOkFVe4SA"
                allowFullScreen="allowFullScreen"
                frameBorder="0"></iframe>
            </div>
          </div>
          <div className="mx-16 flex justify-center items-center">
            <div className="mb-8">
              <iframe
                className="w-[250px] h-[350px] lg:w-[18.75rem] lg:h-[25rem]"
                title="YouTube video player"
                src="https://www.youtube.com/embed/icmOkFVe4SA"
                allowFullScreen="allowFullScreen"
                frameBorder="0"></iframe>
            </div>
          </div>
          <div className="mx-16 flex justify-center items-center">
            <div className="mb-8">
              <iframe
                className="w-[250px] h-[350px] lg:w-[18.75rem] lg:h-[25rem]"
                title="YouTube video player"
                src="https://www.youtube.com/embed/icmOkFVe4SA"
                allowFullScreen="allowFullScreen"
                frameBorder="0"></iframe>
            </div>
          </div>
          <div className="mx-16 flex justify-center items-center">
            <div className="mb-8">
              <iframe
                className="w-[250px] h-[350px] lg:w-[18.75rem] lg:h-[25rem]"
                title="YouTube video player"
                src="https://www.youtube.com/embed/icmOkFVe4SA"
                allowFullScreen="allowFullScreen"
                frameBorder="0"></iframe>
            </div>
          </div>
          <div className="mx-16 flex justify-center items-center">
            <div className="mb-8">
              <iframe
                className="w-[250px] h-[350px] lg:w-[18.75rem] lg:h-[25rem]"
                title="YouTube video player"
                src="https://www.youtube.com/embed/icmOkFVe4SA"
                allowFullScreen="allowFullScreen"
                frameBorder="0"></iframe>
            </div>
          </div>
          <div className="mx-16 flex justify-center items-center">
            <div className="mb-8">
              <iframe
                className="w-[250px] h-[350px] lg:w-[18.75rem] lg:h-[25rem]"
                title="YouTube video player"
                src="https://www.youtube.com/embed/icmOkFVe4SA"
                allowFullScreen="allowFullScreen"
                frameBorder="0"></iframe>
            </div>
          </div>
          <div className="mx-16 flex justify-center items-center">
            <div className="mb-8">
              <iframe
                className="w-[250px] h-[350px] lg:w-[18.75rem] lg:h-[25rem]"
                title="YouTube video player"
                src="https://www.youtube.com/embed/icmOkFVe4SA"
                allowFullScreen="allowFullScreen"
                frameBorder="0"></iframe>
            </div>
          </div>
          <div className="mx-16 flex justify-center items-center">
            <div className="mb-8">
              <iframe
                className="w-[250px] h-[350px] lg:w-[18.75rem] lg:h-[25rem]"
                title="YouTube video player"
                src="https://www.youtube.com/embed/icmOkFVe4SA"
                allowFullScreen="allowFullScreen"
                frameBorder="0"></iframe>
            </div>
          </div>
          <div className="mx-16 flex justify-center items-center">
            <div className="mb-8">
              <iframe
                className="w-[250px] h-[350px] lg:w-[18.75rem] lg:h-[25rem]"
                title="YouTube video player"
                src="https://www.youtube.com/embed/icmOkFVe4SA"
                allowFullScreen="allowFullScreen"
                frameBorder="0"></iframe>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default LiveVideoSlickSLider
