import React, { Component } from 'react'
import Slider from 'react-slick'
// Import css files
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

import Image from 'next/image'
import imageLoader from '../../../helper/imageLoader'
import Alibaba from '../../../public/logos/Alibaba.svg'
import Amazon from '../../../public/logos/Amazon.svg'
import Daraz from '../../../public/logos/Daraz.pk Logo.svg'
import Ebay from '../../../public/logos/Ebay.svg'
import Rakuten from '../../../public/logos/Rakuten.svg'
import Walmart from '../../../public/logos/Walmart.svg'
import Target from '../../../public/logos/Target.svg'

const Logos = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <div>
      <hr className="border-black"></hr>
      <div className="py-8">
        <Slider {...settings}>
          <div>
            <Image
              loader={imageLoader}
              className="object-fill"
              width={80}
              height={50}
              src={Alibaba}
              alt=""
            />
          </div>
          <div>
            <Image
              loader={imageLoader}
              className="object-fill"
              width={80}
              height={50}
              src={Amazon}
              alt=""
            />
          </div>
          <div>
            <Image
              loader={imageLoader}
              className="object-fill"
              width={80}
              height={50}
              src={Daraz}
              alt=""
            />
          </div>
          <div>
            <Image
              loader={imageLoader}
              className="object-fill"
              width={80}
              height={50}
              src={Ebay}
              alt=""
            />
          </div>
          <div>
            <Image
              loader={imageLoader}
              className="object-fill"
              width={80}
              height={50}
              src={Rakuten}
              alt=""
            />
          </div>
          <div>
            <Image
              loader={imageLoader}
              className="object-fill"
              width={100}
              height={50}
              src={Walmart}
              alt=""
            />
          </div>
          <div>
            <Image
              loader={imageLoader}
              className="object-fill"
              width={100}
              height={50}
              src={Target}
              alt=""
            />
          </div>
        </Slider>
      </div>
      <hr className="border-black"></hr>
    </div>
  )
}

export default Logos
