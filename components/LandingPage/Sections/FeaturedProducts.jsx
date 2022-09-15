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
import item1 from '../../../public/featured-products/clothes.avif'
import item2 from '../../../public/featured-products/shoes.avif'
import item3 from '../../../public/featured-products/jewelry.avif'
import item4 from '../../../public/featured-products/bag.avif'
import item5 from '../../../public/featured-products/watch.avif'
import item6 from '../../../public/featured-products/perfume.avif'

const FeaturedProducts = () => {
  const [size, setSize] = useState(0)

  useEffect(() => {
    setSize(window.innerWidth)
  }, [])

  return (
    <div className="pt-16 pb-28 w-100 overflow-hidden bg-white shadow-lg shadow-primary">
      {/* <div className="relative w-100 h-[60vh] max-h-[461px] block bg-black"> */}
      <div className="flex py-8 justify-center mt-16">
        <div>
          <HiShoppingBag className="w-24 h-24 text-black" />
        </div>
        <div className="mt-5 ml-2">
          <h1
            className="text-5xl text-center text-black font-bold md:text-6xl lg:text-start"
            style={{ lineHeight: '4.5rem' }}>
            <span
              className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-secondary relative inline-block"
              data-aos="fade-down">
              <span className="relative">Featured</span>
            </span>{' '}
            Products
          </h1>
        </div>
      </div>
      <div data-aos="zoom-in" className="container mx-auto my-16">
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
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, EffectCoverflow, Navigation]}
          className="mySwiper">
          <SwiperSlide>
            <Image
              loader={imageLoader}
              src={item1}
              width={300}
              height={400}
              alt=""
              className="object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              loader={imageLoader}
              src={item2}
              width={300}
              height={400}
              alt=""
              className="object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              loader={imageLoader}
              src={item3}
              width={300}
              height={400}
              alt=""
              className="object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              loader={imageLoader}
              src={item4}
              width={300}
              height={400}
              alt=""
              className="object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              loader={imageLoader}
              src={item5}
              width={300}
              height={400}
              alt=""
              className="object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              loader={imageLoader}
              src={item6}
              width={300}
              height={400}
              alt=""
              className="object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      {/* </div> */}
    </div>
  )
}

export default FeaturedProducts
