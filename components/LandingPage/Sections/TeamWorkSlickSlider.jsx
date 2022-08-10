import React from 'react'
import Slider from 'react-slick'

// Import css files
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

import Image from 'next/image'
import team1 from '../../../public/team/team1.jpg'
import team2 from '../../../public/team/team2.jpg'
import team3 from '../../../public/team/team3.avif'
import team4 from '../../../public/team/team4.avif'
import team5 from '../../../public/team/team5.avif'
import team6 from '../../../public/team/team6.avif'
import team7 from '../../../public/team/team7.avif'
import team8 from '../../../public/team/team8.avif'

const TeamWorkSlickSlider = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', background: 'black', borderRadius: '50%' }}
        onClick={onClick}
      />
    )
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', background: 'black', borderRadius: '50%' }}
        onClick={onClick}
      />
    )
  }
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
    ],
  }
  return (
    <div className="max-w-7xl mx-auto mt-12 lg:mt-32 lg:py-12">
      <div>
        <h3 className="text-2xl lg:text-4xl font-bold mb-16">Get Idea About Live Shopping</h3>
        <Slider {...settings}>
          <div className="mb-8">
            <Image
              className="object-fill hover:scale-105"
              width={870}
              height={580}
              src={team1}
              alt=""
            />
          </div>
          <div className="mb-8">
            <Image
              className="object-fill hover:scale-105"
              width={870}
              height={580}
              src={team2}
              alt=""
            />
          </div>
          <div className="mb-8">
            <Image
              className="object-fill hover:scale-105"
              width={870}
              height={580}
              src={team3}
              alt=""
            />
          </div>
          <div className="mb-8">
            <Image
              className="object-fill hover:scale-105"
              width={870}
              height={580}
              src={team4}
              alt=""
            />
          </div>
          <div className="mb-8">
            <Image
              className="object-fill hover:scale-105"
              width={870}
              height={580}
              src={team5}
              alt=""
            />
          </div>
          <div className="mb-8">
            <Image
              className="object-fill hover:scale-105"
              width={870}
              height={580}
              src={team6}
              alt=""
            />
          </div>
          <div className="mb-8">
            <Image
              className="object-fill hover:scale-105"
              width={870}
              height={580}
              src={team7}
              alt=""
            />
          </div>
          <div className="mb-8">
            <Image
              className="object-fill hover:scale-105"
              width={870}
              height={580}
              src={team8}
              alt=""
            />
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default TeamWorkSlickSlider
