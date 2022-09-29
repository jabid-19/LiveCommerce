// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css/bundle'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

// import required modules
import { FreeMode, Pagination, Navigation } from 'swiper'
import { useEffect, useState } from 'react'

const LiveVideoSlider = () => {
  const [size, setSize] = useState(0)

  useEffect(() => {
    setSize(window.innerWidth)
  }, [])

  return (
    <div className="container mx-auto mt-12 lg:mt-32 lg:py-12">
      <h3 className="text-2xl lg:text-4xl font-bold mb-12 text-black">
        Get Idea About Live Shopping
      </h3>
      <div data-aos="zoom-in" data-aos-anchor-placement="top-bottom">
        <Swiper
          navigation={true}
          slidesPerView={
            (size <= 768 && 1) ||
            (size > 768 && size <= 1280 && 3) ||
            (size > 1280 && size < 1688 && 4) ||
            (size >= 1688 && 5)
          }
          spaceBetween={30}
          grabCursor={true}
          freeMode={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination, Navigation]}
          className="mySwiper">
          <SwiperSlide>
            <div className="mb-12 w-9/12 h-64 mx-auto lg:w-[18.75rem] lg:h-[25rem]">
              <iframe
                className="w-full h-full"
                title="YouTube video player"
                src="https://www.youtube.com/embed/icmOkFVe4SA"
                allowFullScreen="allowFullScreen"
                frameBorder="0"></iframe>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mb-12 w-9/12 h-64 mx-auto lg:w-[18.75rem] lg:h-[25rem]">
              <iframe
                className="w-full h-full"
                title="YouTube video player"
                src="https://www.youtube.com/embed/MLsOPVxY4y0"
                allowFullScreen="allowFullScreen"
                frameBorder="0"></iframe>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mb-12 w-9/12 h-64 mx-auto lg:w-[18.75rem] lg:h-[25rem]">
              <iframe
                className="w-full h-full"
                title="YouTube video player"
                src="https://www.youtube.com/embed/ia7006AzOUY"
                allowFullScreen="allowFullScreen"
                frameBorder="0"></iframe>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mb-12 w-9/12 h-64 mx-auto lg:w-[18.75rem] lg:h-[25rem]">
              <iframe
                className="w-full h-full"
                title="YouTube video player"
                src="https://www.youtube.com/embed/2w0g42XkSEQ"
                allowFullScreen="allowFullScreen"
                frameBorder="0"></iframe>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mb-12 w-9/12 h-64 mx-auto lg:w-[18.75rem] lg:h-[25rem]">
              <iframe
                className="w-full h-full"
                title="YouTube video player"
                src="https://www.youtube.com/embed/IaX6fXbVC94"
                allowFullScreen="allowFullScreen"
                frameBorder="0"></iframe>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mb-12 w-9/12 h-64 mx-auto lg:w-[18.75rem] lg:h-[25rem]">
              <iframe
                className="w-full h-full"
                title="YouTube video player"
                src="https://www.youtube.com/embed/mZ0kWgmjQ6A"
                allowFullScreen="allowFullScreen"
                frameBorder="0"></iframe>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default LiveVideoSlider
