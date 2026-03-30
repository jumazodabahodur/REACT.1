import React from 'react'

const We_Take_Care = () => {
  return (
    <div className=' flex justify-center ml-[2%] mr-[2%] mt-[50px] md:p-[50px] md:p-10'>
      <div className='bg-[#1A1A1A] rounded-3xl p-8 md:p-16 text-white w-full '>
        
        <div className='flex flex-col md:flex-row justify-between items-start gap-10 border-b border-gray-800 pb-12'>
          <h1 className='text-[36px] md:text-[75px] font-bold leading-tight uppercase max-w-[800px]'>
            We <span className='text-[#F5333F]'>take care</span> <br className='hidden md:block'/> of all your email <br className='hidden md:block'/> marketing actives
          </h1>
          
          <div className='flex flex-col gap-4 min-w-[200px]'>
            <div className='flex items-center gap-3 text-lg md:text-xl'>
              <div className='w-2 h-2 bg-[#F5333F] rounded-full'></div> Planning
            </div>
            <div className='flex items-center gap-3 text-lg md:text-xl'>
              <div className='w-2 h-2 bg-[#F5333F] rounded-full'></div> Design
            </div>
            <div className='flex items-center gap-3 text-lg md:text-xl'>
              <div className='w-2 h-2 bg-[#F5333F] rounded-full'></div> Copywriting
            </div>
            <div className='flex items-center gap-3 text-lg md:text-xl'>
              <div className='w-2 h-2 bg-[#F5333F] rounded-full'></div> Analytics
            </div>
            <div className='flex items-center gap-3 text-lg md:text-xl'>
              <div className='w-2 h-2 bg-[#F5333F] rounded-full'></div> Deliverability
            </div>
            <div className='flex items-center gap-3 text-lg md:text-xl'>
              <div className='w-2 h-2 bg-[#F5333F] rounded-full'></div> Automation
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 mt-12'>
          
          <div className='flex flex-col gap-4 text-sm md:text-base'>
            <p className='text-gray-300'>
              <span className='text-[#F5333F] font-bold'>For midsize businesses,</span> we become your budget-friendly email marketing team, ensuring revenue from emails at a fraction of in-house costs. Discover how it works!
            </p>
          </div>

          <div className='flex gap-6 text-sm md:text-base'>
            <div className='hidden md:block w-[1.5px] bg-gray-700 h-full'></div>
            <p className='text-gray-300'>
              <span className='text-[#F5333F] font-bold'>For email marketers at larger companies,</span> we enhance your productivity by handling execution, allowing you to focus on strategy. Learn why we are your support, not your competition!
            </p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default We_Take_Care