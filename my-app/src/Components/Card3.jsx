import React from 'react'

const Card3 = () => {
  return (
    <div className='max-w-[1200px] mx-auto px-4 md:mt-[170px] mt-[50px] flex flex-col md:flex-row items-center gap-10 md:gap-20'>
      
      <div className='w-full md:w-1/2'>
        <img src="img/Frame 18.png"  alt="Email Cases" className='w-full h-auto object-contain'  />
      </div>

      <div className='w-full md:w-1/2 space-y-6'>
        <img src="img/6476f21ab8cad4706f751e11_lev 1.png" alt="Lev Haolam" className='h-8 object-contain' />
        
        <div className='space-y-4'>
          <div className='flex gap-4'>
            <span className='text-red-500 font-bold min-w-[80px]'>Result:</span>
            <span className='font-semibold'>$20K per email campaign</span>
          </div>
          <div className='flex gap-4'>
            <span className='text-red-500 font-bold min-w-[80px]'>Type:</span>
            <span className='text-gray-700'>Subscription e-commerce</span>
          </div>
          <div className='flex gap-4'>
            <span className='text-red-500 font-bold min-w-[80px]'>Company:</span>
            <span className='text-gray-700'>Lev Haolam</span>
          </div>
          <div className='flex gap-4'>
            <span className='text-red-500 font-bold min-w-[80px]'>Product:</span>
            <span className='text-gray-700'>Handmade gifts from Israel</span>
          </div>
          <div className='flex gap-4'>
            <span className='text-red-500 font-bold min-w-[80px]'>Platform:</span>
            <span className='text-gray-700'>Klaviyo</span>
          </div>
        </div>

        <button className='mt-4 px-6 py-2 border border-red-500 text-red-500 font-bold hover:bg-red-500 hover:text-white transition-all rounded-sm text-sm uppercase'>
          Learn More
        </button>

        <div className='flex gap-4 mt-8'>
            <div className='w-10 h-10 border rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100'>&lt;</div>
            <div className='w-10 h-10 border rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100'>&gt;</div>
        </div>
      </div>
    </div>
  )
}

export default Card3