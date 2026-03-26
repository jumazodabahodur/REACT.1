import React from 'react'
import { Link, Outlet } from "react-router-dom" 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const Layout = () => {
 const products = [
    {
      id: 1,
      name: "Danubius Hotel Regents Park",
      cost: "200$",
      image: "/img/image (61).png",
    },
        {
      id: 2,
      name: "Danubius Hotel Regents Park",
      cost: "200$",
      image: "/img/image (62).png",
    },
        {
      id: 3,
      name: "Danubius Hotel Regents Park",
      cost: "200$",
      image: "/img/image (63).png", 
    },
           {
      id: 4,
      name: "Danubius Hotel Regents Park",
      cost: "200$",
      image: "/img/image (63).png", 
    },
           {
      id: 5,
      name: "Danubius Hotel Regents Park",
      cost: "200$",
      image: "/img/image (63).png", 
    },
  ]


  return (
    <div>
     <div className='flex items-center gap-[640px] justify-around max-w-[1200px] ml-[10%] '>
    <div className='flex gap-[50px]'>
           <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        
    <h1>About Us</h1>
    <h1>Location</h1>
    <h1>Contact</h1>
</div>
<button className='bg-[green] !text-[white] rounded-2xl w-[50px]'>Login</button>
   </div>
 <Outlet /> 
 
<div className='ml-[10%] mt-20 pr-[10%]'>
      <h2 className='text-3xl font-bold mb-10'>Our most popular Hotels</h2>
      
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={'auto'} 
        loop={true}
        speed={800}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
     
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        }}
        className="pb-12"
      >
        {products.map((item) => (
          <SwiperSlide key={item.id} className="w-[400px]">
            <Link to={`/product/${item.id}`} className="block group">
              <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className='w-full h-[300px] object-cover' 
                />
                <div className='p-4'>
                  <h3 className='font-bold group-hover:text-emerald-600 transition-colors'>
                    {item.name}
                  </h3>
                  <p className='text-emerald-500 font-semibold mt-2'>
                    {item.cost} / Night
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
 

<div className='ml-[10%] mt-[90px] items-center gap-[50px] flex'>
  <img src="/img/image (64).png" alt="" />
     <div className="lg:w-1/3 text-left">
        <h2 className="text-[44px] font-bold text-[#1A1A1A] leading-[1.1] mb-6">
Discover our History        </h2>
        <p className="text-gray-400 text-sm mb-10 leading-relaxed max-w-[360px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy.
        </p>

           <p className="text-gray-400 text-sm mb-10 leading-relaxed max-w-[360px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy.
        </p>
        <button className="bg-[#27AE60] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#219150] transition shadow-md">
          Contact Now
        </button>
      </div>
</div>


<img src="/img/Company location & contact.png" alt="" className='ml-[10%] mt-[170px]' />

  <footer className='flex gap-[260px] mt-[100px] ml-[10%]'>
    <div>
      <h1>Lorem Ipsum is simply dummy text <br /> of the printing and typesetting <br /> industry.</h1>
    </div>

    <div>
      <h1 className='text-bold text-[25px]'>Home</h1>
      <p>Booking</p>
      <p>Facilities</p>
      <p>Location</p>
      <p>Contact</p>
    </div>

        <div>
      <h1 className='text-bold text-[25px]'>Home</h1>
      <p>Booking</p>
      <p>Facilities</p>
      <p>Location</p>
      <p>Contact</p>
    </div>

        <div>
      <h1 className='text-bold text-[25px]'>Home</h1>
      <p>Booking</p>
  
    </div>
    </footer>       

    </div>
  )
}

export default Layout