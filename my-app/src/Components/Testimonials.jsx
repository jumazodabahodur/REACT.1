import React from 'react'

const Testimonials = () => {
  return (
    <div className='flex flex-col md:flex-row items-center gap-10 p-[5%]'>
      
      <div className='flex-1'>
        <h1 className='text-[40px] font-bold mb-8 uppercase'>Testimonials</h1>
        
        <div className='flex flex-col md:flex-row items-start gap-6 p-8 bg-white rounded-2xl shadow-xl border border-gray-50'>
          
          {/* Иконка кавычек или аватар */}
          <img src="img/Frame (20).png" alt="" className='w-12 h-12 object-contain' />
          
          <div>
            <h1 className='text-[20px] md:text-[24px] font-medium leading-relaxed italic'>
              "You have ensured a systematic approach to our email strategy and helped us streamline all chaotic thoughts and ideas we had about our emails!"
            </h1>
            <p className='mt-4 font-bold text-[#F5333F] text-[18px]'>
              Natalia Pereldik
            </p>
          </div>

          
        </div>

           <div className='flex flex-col mt-[30px] md:flex-row items-start gap-6 p-8 bg-white rounded-2xl shadow-xl border border-gray-50'>
          
          {/* Иконка кавычек или аватар */}
          <img src="img/Frame (20).png" alt="" className='w-12 h-12 object-contain' />
          
          <div>
            <h1 className='text-[20px] md:text-[24px] font-medium leading-relaxed italic'>
              "You have ensured a systematic approach to our email strategy and helped us streamline all chaotic thoughts and ideas we had about our emails!"
            </h1>
            <p className='mt-4 font-bold text-[#F5333F] text-[18px]'>
              Natalia Pereldik
            </p>
          </div>

          
        </div>
      </div>

      <div className='flex-1 flex justify-center'>
        <img 
          src="img/Снимок экрана 2026-03-29 003533.png" 
          alt="Client" 
          className='w-full max-w-[500px] object-contain rounded-lg' 
        />
      </div>
      
    </div>
  )
}

export default Testimonials