import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
 
  return (
    <div>
      <div className='flex items-center mt-[60px] ml-[10%]'>
        <div>
          <h1 className='text-[70px] leading-tight'>Find your perfect <br /> place to stay</h1>
          <p className='text-gray-500 max-w-[400px] mt-4'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          </p>
        </div>
        <img src="/img/image (60).png" alt="Hero" className="ml-10" />
      </div>


    <div className="flex flex-col lg:flex-row items-center gap-10 py-20 px-[10%] bg-white">
      
      <div className="lg:w-1/3 text-left">
        <h2 className="text-[44px] font-bold text-[#1A1A1A] leading-[1.1] mb-6">
          We do our best <br /> facilities provide you
        </h2>
        <p className="text-gray-400 text-sm mb-10 leading-relaxed max-w-[360px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy.
        </p>
        <button className="bg-[#27AE60] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#219150] transition shadow-md">
          Contact Now
        </button>
      </div>

      <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
        
        <div className="flex flex-col items-center justify-center border border-gray-100 rounded-2xl p-6 shadow-sm h-[170px] hover:border-emerald-200 transition">
          <div className="text-[#27AE60] text-4xl mb-4">🖥️</div>
          <span className="text-[#1A1A1A] text-[12px] font-bold text-center uppercase tracking-wider">Private Workspace</span>
        </div>

        <div className="flex flex-col items-center justify-center border border-gray-100 rounded-2xl p-6 shadow-sm h-[170px] hover:border-emerald-200 transition">
          <div className="text-[#27AE60] text-4xl mb-4">🅿️</div>
          <span className="text-[#1A1A1A] text-[12px] font-bold text-center uppercase tracking-wider">Parking Area</span>
        </div>

        <div className="flex flex-col items-center justify-center border border-gray-100 rounded-2xl p-6 shadow-sm h-[170px] hover:border-emerald-200 transition">
          <div className="text-[#27AE60] text-4xl mb-4">☕</div>
          <span className="text-[#1A1A1A] text-[12px] font-bold text-center uppercase tracking-wider">Breakfast</span>
        </div>

        <div className="flex flex-col items-center justify-center border border-gray-100 rounded-2xl p-6 shadow-sm h-[170px] hover:border-emerald-200 transition">
          <div className="text-[#27AE60] text-4xl mb-4">📶</div>
          <span className="text-[#1A1A1A] text-[12px] font-bold text-center uppercase tracking-wider">Free Wifi</span>
        </div>

        <div className="flex flex-col items-center justify-center border border-gray-100 rounded-2xl p-6 shadow-sm h-[170px] hover:border-emerald-200 transition">
          <div className="text-[#27AE60] text-4xl mb-4">⚡</div>
          <span className="text-[#1A1A1A] text-[12px] font-bold text-center uppercase tracking-wider">Free Electricity</span>
        </div>

        <div className="flex flex-col items-center justify-center border border-gray-100 rounded-2xl p-6 shadow-sm h-[170px] hover:border-emerald-200 transition">
          <div className="text-[#27AE60] text-4xl mb-4">🏊</div>
          <span className="text-[#1A1A1A] text-[12px] font-bold text-center uppercase tracking-wider">Swimming Pool</span>
        </div>

        <div className="flex flex-col items-center justify-center border border-gray-100 rounded-2xl p-6 shadow-sm h-[170px] hover:border-emerald-200 transition">
          <div className="text-[#27AE60] text-4xl mb-4">🏋️</div>
          <span className="text-[#1A1A1A] text-[12px] font-bold text-center uppercase tracking-wider">exercise Space</span>
        </div>

        <div className="flex flex-col items-center justify-center border border-gray-100 rounded-2xl p-6 shadow-sm h-[170px] hover:border-emerald-200 transition">
          <div className="text-[#27AE60] text-4xl mb-4">💬</div>
          <span className="text-[#1A1A1A] text-[12px] font-bold text-center uppercase tracking-wider">Other Service</span>
        </div>

      </div>
    </div>

  

<div className='ml-[10%] mt-[90px] items-center gap-[200px] flex'>
     <div className="lg:w-1/3 text-left">
        <p className="text-gray-400 text-sm mb-10 leading-relaxed max-w-[360px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's standard dummy.
        </p>

           <p className="text-gray-400 text-sm mb-10 leading-relaxed max-w-[360px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy.
        </p>
       
        <h2 className="text-[44px] font-bold text-[#1A1A1A] leading-[1.1] mb-6">
Alexandr Ivchenko      </h2>
      </div>
  <img src="/img/Mask Group (13).png" alt="" />
</div>
      
    </div>
  )
}


export default Home