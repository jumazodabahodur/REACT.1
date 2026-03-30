import React, { useRef } from 'react'
import { Link, Outlet } from "react-router-dom"
import Button from '../Components/Button'

const Layout = () => {
let inpfoces=useRef(null)


  return (
    <div>
      <nav className='flex items-center justify-between mx-[2%] mt-[20px] relative h-[50px]'>
        

        <img src="/img/manifold_logotype.svg" alt="logo" className="h-8" />


        <input type="checkbox" id="menu-toggle" className="hidden peer" />

        <label 
          htmlFor="menu-toggle" 
          className='flex md:hidden flex-col gap-1.5 cursor-pointer z-50 p-2'
        >
          <span className="h-1 w-8 bg-[#F5333F] rounded-full"></span>
          <span className="h-1 w-8 bg-[#F5333F] rounded-full"></span>
          <span className="h-1 w-8 bg-[#F5333F] rounded-full"></span>
        </label>

        <div className='hidden md:flex gap-[30px] text-[20px] items-center'>
          <Link to="/">Home</Link>
          <Link to="/add">Add</Link>
          <Link to="/add">Add</Link>
          <button onClick={()=>inpfoces.current.focus()}>UseRef</button>
          <Button name="Contact Us" />
        </div>

        <div className='hidden peer-checked:flex flex-col absolute top-[60px] left-0 w-full bg-white shadow-xl border-t border-gray-100 py-6 items-center gap-6 z-40 md:hidden'>
          <Link to="/" className="text-xl">Home</Link>
          <Link to="/add" className="text-xl">Add</Link>
          <Link to="/add" className="text-xl">Add</Link>
          <Button name="Contact Us" />
        </div>
      </nav> 
      
      <div className="mt-5">
        <hr className="border-t border-gray-300" />   
      </div>
      
      <Outlet /> 

 <div className='w-full flex justify-center p-4 md:p-10'>
      <div className='bg-[#212121] rounded-3xl p-8 md:p-16 text-white flex flex-col md:flex-row items-center gap-10 md:gap-20 w-full '>
        
        <div className='w-full md:w-1/2'>
          <h1 className='text-[36px] md:text-[70px] font-bold leading-tight uppercase'>
            Subscribe <br className='hidden md:block' /> 
            to <span className='text-[#F5333F]'>L.U.Y.E</span>
          </h1>
          <p className='text-[#F5333F] text-sm md:text-xl font-semibold mt-2 uppercase italic'>
            Level Up Your Email Newsletter
          </p>
        </div>

        <div className='w-full md:w-1/2 flex flex-col gap-6'>
          <div className='flex flex-col gap-4 text-gray-300 text-sm md:text-base leading-relaxed'>
            <p>Our aim is to level up your email marketing to world-class standards. We want to bring joy to your readers and deliver excellent ROI for your business.</p>
            <p>In our emails, we share valuable advice and practical tips based on our own experiences.</p>
          </div>

          <h2 className='text-[18px] md:text-[24px] font-bold uppercase mt-2'>Subscribe to our newsletters</h2>
          
          <div className='flex flex-row bg-white rounded-xl overflow-hidden shadow-lg w-full'>
            <input 
              type="email" 
              placeholder="Your Email" 
              ref={inpfoces}
              className='flex-1 bg-transparent text-black py-3 md:py-4 px-4 md:px-6 outline-none placeholder:text-gray-400 text-sm md:text-base w-full'
            />
            <button className='bg-[#F5333F] text-white px-4 md:px-10 h-auto text-[12px] md:text-base font-bold uppercase hover:bg-[#d42d37] transition-colors whitespace-nowrap'>
              Subscribe
            </button>
          </div>

          <p className='text-gray-500 text-[10px] md:text-xs mt-1'>Согласие на получение писем?</p>
        </div>

      </div>
    </div>



<div className='bg-[#212121] text-white p-10 md:p-[50px] flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left'>
      
      <img src="img/manifold_logotype (1).svg" alt="logo" className="w-40 md:w-auto" />

      <div className='flex flex-col md:flex-row gap-10 md:gap-16 items-center'>
        <div className='flex flex-col gap-3 items-center md:items-start'>
          <h1 className='text-gray-400 text-sm uppercase'>Menu</h1>
          <h1>Services</h1>
          <h1>About Us</h1>
        </div>
        
        <div className='flex flex-col gap-3 items-center md:items-start'>
          <h1 className='text-gray-400 text-sm uppercase'>Support</h1>
          <h1>Email Marketing Audit</h1>
          <h1>Portfolio</h1>
        </div>
        
        <div className='flex flex-col gap-3 items-center md:items-start'>
          <h1 className='text-gray-400 text-sm uppercase'>Legal</h1>
          <h1>Blog</h1>
          <h1>Privacy Policy</h1>
        </div>
      </div>

      <img src="img/Frame 30.png" alt="socials" className="w-32 md:w-auto" />
      
    </div>




    </div>
  )
}

export default Layout