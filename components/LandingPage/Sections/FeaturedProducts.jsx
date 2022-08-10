import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/bundle'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { HiShoppingBag } from 'react-icons/hi'
import { Autoplay, EffectCoverflow, Navigation } from 'swiper'
import { useEffect, useState } from 'react'
import Image from 'next/image'
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
    <div className="relative w-100 min-h-screen max-h-[768px] overflow-hidden">
      <div className="relative w-100 h-[60vh] max-h-[461px] block bg-black">
        <div className="flex py-8 justify-center">
          <div>
            <HiShoppingBag className="w-24 h-24 text-white" />
          </div>
          <div className="lg:mt-5 lg:pl-5">
            <h3 className="text-5xl text-white">Featured Products</h3>
          </div>
        </div>
        <div data-aos="zoom-in" className="container mx-auto mt-16">
          <Swiper
            navigation={true}
            effect={'coverflow'}
            grabCursor={true}
            slidesPerView={
              (size <= 768 && 1) ||
              (size > 768 && size <= 1280 && 3) ||
              (size > 1280 && size < 1688 && 4) ||
              (size >= 1688 && 5)
            }
            loop={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, EffectCoverflow, Navigation]}
            className="mySwiper">
            <SwiperSlide>
              <div className="">
                <Image src={item1} width={300} height={400} alt="" className="object-cover" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="">
                <Image src={item2} width={300} height={400} alt="" className="object-cover" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="">
                <Image src={item3} width={300} height={400} alt="" className="object-cover" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="">
                <Image src={item4} width={300} height={400} alt="" className="object-cover" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="">
                <Image src={item5} width={300} height={400} alt="" className="object-cover" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="">
                <Image src={item6} width={300} height={400} alt="" className="object-cover" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProducts
