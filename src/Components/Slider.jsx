import React from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
// Import required modules
import { Autoplay, FreeMode, Pagination ,Navigation} from "swiper/modules"

// Import Data
import { products } from "../data";

import Card from "./Card"

function Slider() {
  

  return (
      <div className=" p-[10px] sm:px-[28px] py-[28px] h-screen max-w-maxContentTab lg:max-w-maxContent bg-blue-500 text-white flex justify-center items-center">
        <Swiper
          slidesPerView={1}
          spaceBetween={25}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1000:{
              slidesPerView:3
            }
          }}
          freeMode={true}
          pagination={{ clickable: true }}
          navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left" }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Pagination, Autoplay , Navigation]}
          className="w-10/12 flex justify-center items-center md:w-full"
        >
          {products.map((product) => {
            return (
              <SwiperSlide key={product.id} className="px-10 pt-7 pb-20">
                <Card product = {product} />
              </SwiperSlide>
            )
          })}
        </Swiper>
        
        <button className="arrow-left absolute left-2 top-[40%] text-3xl">&lt;</button>
        <button className="arrow-right absolute right-2 top-[40%] text-3xl">&gt;</button>
      </div>

  )
}

export default Slider


