import React from 'react'
import Button from './Button'

const Head = () => {
  return (
    <div className='flex text-center md:text-start  md:flex-row items-center ml-[2%]'>
      <div>
        <h1 className='text-[36px] md:text-[90px] !font-bold leading-tight'>
          <span className='text-[#F5333F]'>BOOST</span> your email <br />
          marketing results!
        </h1>
        <p className='text-[18px] md:text-[25px] mt-4 mb-6'>
          We help B2C brands grow their email-attributed revenue
        </p>
        <Button name="Boost your results" />
      </div>

      <img src="/img/Ресурс 1 1 (2).png" alt="Desktop version" width={804}  className='hidden md:block' />

      
    </div>
  )
}

export default Head