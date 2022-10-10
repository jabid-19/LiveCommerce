import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/bundle'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, EffectCoverflow, Navigation } from 'swiper'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import imageLoader from '../../../helper/imageLoader'
import item1 from '../../../public/featured-products/onetoOne.png'
import item2 from '../../../public/featured-products/oneToMany.png'
import item3 from '../../../public/featured-products/liveCommerce.png'
import item4 from '../../../public/featured-products/liveStreaming.png'
import item5 from '../../../public/featured-products/multiStreaming.png'

const FeaturedProducts = () => {
  const [size, setSize] = useState(0)

  useEffect(() => {
    setSize(window.innerWidth)
  }, [])

  return (
    <div className="py-12 lg:py-36 w-100 overflow-hidden bg-white shadow-lg shadow-secondary">
      <div className="flex justify-center mb-12 lg:mb-24">
        <h1 className="text-3xl md:text-5xl text-center text-black font-bold lg:text-6xl leading-10 md:leading-[4rem] lg:leading-[4.5rem]">
          Reach your{' '}
          <span
            className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-secondary relative inline-block text-white"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom">
            <span className="relative">targeted</span>
          </span>{' '}
          customers through
        </h1>
      </div>
      <div className="container mx-auto">
        <Swiper
          navigation={true}
          effect={'coverflow'}
          grabCursor={true}
          slidesPerView={
            (size <= 768 && 1) || (size > 768 && size <= 1023 && 3) || (size >= 1024 && 5)
          }
          loop={true}
          coverflowEffect={{
            rotate: 50,
            stretch: -50,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          modules={[Autoplay, EffectCoverflow, Navigation]}
          className="mySwiper">
          <SwiperSlide>
            <Image
              loader={imageLoader}
              src={item1}
              width={306}
              height={500}
              alt="One to one"
              className="object-cover rounded-2xl bg-secondary"
              placeholder="blur"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              loader={imageLoader}
              src={item2}
              width={306}
              height={500}
              alt="One to many"
              className="object-cover rounded-2xl bg-secondary"
              placeholder="blur"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              loader={imageLoader}
              src={item3}
              width={306}
              height={500}
              alt="Live Commerce"
              className="object-cover rounded-2xl bg-secondary"
              placeholder="blur"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              loader={imageLoader}
              src={item4}
              width={306}
              height={500}
              alt="Live Streaming"
              className="object-cover rounded-2xl bg-secondary"
              placeholder="blur"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              loader={imageLoader}
              src={item5}
              width={306}
              height={500}
              alt="Multi Streaming"
              className="object-cover rounded-2xl bg-secondary"
              placeholder="blur"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default FeaturedProducts
