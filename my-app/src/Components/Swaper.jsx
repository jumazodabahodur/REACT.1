import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const Swaper = () => {
  const images = [
    "img/6476f21ab8cad4706f751e11_lev 1.png",
    "img/63c1e4b88ffd31f87447e4ff_sch400 1.png",
    "img/63c1e4b88ffd31f87447e4ff_sch400 1.png",
"img/63c1e4ae1a141592370cc036_ali400 1.png", 
"img/63c1e4a319ef310f2e094bec_kfc400 1.png",
"img/63c1e46417b0ed71a5fcd3d8_pjp400 1.png"
  ];

  return (
    <div className="py-10 bg-white mt-[30px] md:mt-[0px]">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50} 
        slidesPerView={2}
        loop={true}
        speed={5000} 
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        className="linear-swiper"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <img 
              src={img} 
              alt="logo" 
              className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all cursor-pointer" 
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        .linear-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </div>
  )
}

export default Swaper