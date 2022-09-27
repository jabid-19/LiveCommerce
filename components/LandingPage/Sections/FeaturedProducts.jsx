import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/bundle'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { HiShoppingBag } from 'react-icons/hi'
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
    <div className="py-12 lg:py-36 w-100 overflow-hidden bg-white shadow-lg shadow-primary">
      {/* <div className="relative w-100 h-[60vh] max-h-[461px] block bg-black"> */}
      <div className="flex justify-center mb-12 lg:mb-24">
        {/* <div>
          <HiShoppingBag className="w-24 h-24 text-black" />
        </div> */}
        <h1
          className="text-3xl md:text-5xl text-center text-black font-bold lg:text-6xl"
          style={{ lineHeight: '4.5rem' }}>
          Reach your{' '}
          <span
            className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-secondary relative inline-block"
            data-aos="fade-up">
            <span className="relative">audience</span>
          </span>{' '}
          by
        </h1>
      </div>
      <div className="container mx-auto">
        <Swiper
          navigation={true}
          effect={'coverflow'}
          grabCursor={true}
          slidesPerView={
            (size <= 768 && 1) || (size > 768 && size <= 1320 && 3) || (size > 1320 && 5)
          }
          loop={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, EffectCoverflow, Navigation]}
          className="mySwiper">
          <SwiperSlide>
            <Image
              loader={imageLoader}
              src={item1}
              width={300}
              height={500}
              alt="One to one"
              className="object-cover rounded-2xl bg-violet-400"
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
              className="object-cover rounded-2xl bg-violet-400"
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
              className="object-cover rounded-2xl bg-violet-400"
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
              className="object-cover rounded-2xl bg-violet-400"
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
              className="object-cover rounded-2xl bg-violet-400"
              placeholder="blur"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      {/* </div> */}
    </div>
  )
}

export default FeaturedProducts
