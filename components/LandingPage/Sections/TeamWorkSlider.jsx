import Image from 'next/image'
import imageLoader from '../../../helper/imageLoader'
import team1 from '../../../public/team/team1.jpg'
import team2 from '../../../public/team/team2.jpg'
import team3 from '../../../public/team/team3.avif'
import team4 from '../../../public/team/team4.avif'
import team5 from '../../../public/team/team5.avif'
import team6 from '../../../public/team/team6.avif'
import team7 from '../../../public/team/team7.avif'
import team8 from '../../../public/team/team8.avif'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css/bundle'
import 'swiper/css/effect-creative'

// import custom styles;
// import "./TeamWork.css";

// import required modules
import { EffectCreative, Pagination, Navigation, Scrollbar } from 'swiper'
import { useEffect, useState } from 'react'

const TeamWorkSlider = () => {
  const [size, setSize] = useState(0)

  useEffect(() => {
    setSize(window.innerWidth)
  }, [])

  return (
    <div className="container mx-auto mt-40 lg:mt-52">
      <h3 className="text-2xl lg:text-4xl font-bold mb-12 text-black">How Our Team Works</h3>
      <div data-aos="zoom-in">
        <Swiper
          navigation={true}
          slidesPerView={size < 768 ? 1 : 2}
          centeredSlides={true}
          grabCursor={true}
          effect={'creative'}
          scrollbar={true}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ['100%', 0, 0],
            },
          }}
          modules={[EffectCreative, Pagination, Navigation, Scrollbar]}
          className="mySwiper">
          <SwiperSlide className="mb-12">
            <Image
              loader={imageLoader}
              className="object-fill hover:scale-105"
              width={870}
              height={580}
              src={team1}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="mb-12">
            <Image
              loader={imageLoader}
              className="object-fill hover:scale-105"
              width={870}
              height={580}
              src={team2}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="mb-12">
            <Image
              loader={imageLoader}
              className="object-fill hover:scale-105"
              width={870}
              height={580}
              src={team3}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="mb-12">
            <Image
              loader={imageLoader}
              className="object-fill hover:scale-105"
              width={870}
              height={580}
              src={team4}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="mb-12">
            <Image
              loader={imageLoader}
              className="object-fill hover:scale-105"
              width={870}
              height={580}
              src={team5}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="mb-12">
            <Image
              loader={imageLoader}
              className="object-fill hover:scale-105"
              width={870}
              height={580}
              src={team6}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="mb-12">
            <Image
              loader={imageLoader}
              className="object-fill hover:scale-105"
              width={870}
              height={580}
              src={team7}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="mb-12">
            <Image
              loader={imageLoader}
              className="object-fill hover:scale-105"
              width={870}
              height={580}
              src={team8}
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default TeamWorkSlider
