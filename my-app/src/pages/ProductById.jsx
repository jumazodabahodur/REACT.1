import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Button from './Button'

const ProductById = () => {
  const [products] = useState([
    { 
      id: 1, name: "HTML CSS", avatar: "/img/html.webp", 
      about: "Learn HTML5 and CSS3 step by step — from basic tags to responsive layouts. Build real websites, practice semantic markup, and master modern CSS techniques like Flexbox, Grid, and animations.",
      salary: { junior: "250$", middle: "600$", senior: "1500$" }
    },
    { 
      id: 2, name: "JavaScript", avatar: "/img/js.webp", 
      about: "Master programming fundamentals with JavaScript", 
      salary: { junior: "300$", middle: "700$", senior: "1800$" }
    },
  ])

  const { productId } = useParams()
  const product = products.find(e => e.id == productId)

  if (!product) {
    return <h1 className='p-5 text-red-500 text-center'>Маҳсулот ёфт нашуд!</h1>
  }

  return (
    <div className='bg-[#0b1120] min-h-screen text-white p-10 font-sans'>
      
      <div className='flex justify-between items-center gap-20 mt-[50px] mb-20'> 
        <div className='flex-1'>
          <h1 className='text-[#00aaff] text-[60px] font-bold mb-6'>{product.name}</h1>
          <p className='text-[22px] text-gray-300 leading-relaxed mb-8'>{product.about}</p>
          <button className='px-10 py-3 border-2 border-[#00aaff] text-[#00aaff] rounded-full hover:bg-[#00aaff] hover:text-white transition-all font-bold'>
            Sign up for a course →
          </button>
        </div>
        <div className='relative'>
          <div className='absolute inset-0 bg-[#00aaff] opacity-20 blur-3xl rounded-full'></div>
          <img src={product.avatar} alt={product.name} className='relative z-10 w-[300px] drop-shadow-2xl' />
        </div>
      </div>

      <div className='flex justify-between gap-4 mb-20'>
        <Button name={"5 April"}/>
        <Button name={"6 classes per week"}/>
        <Button name={"3 portfolio projects"}/>
        <Button name={"Group of 10–12 people"}/>
      </div>

      <div className='bg-[#1e293b] p-[60px] rounded-[40px] border border-gray-800 mb-20'>
        <h1 className='text-[40px] font-bold mb-6'>Why {product.name}?</h1>
        <p className='text-[20px] text-gray-400 leading-relaxed'>{product.about}</p>
      </div>

      <div className="bg-[#1e293b] rounded-[40px] p-12 flex items-center gap-10 mb-20 border border-gray-800 shadow-2xl">
        <div className="w-1/4">
          <img src="/img/wallet.webp" alt="Wallet" className="w-full object-contain" />
        </div>
        <div className="w-3/4">
          <h2 className="text-3xl font-bold text-[#38bdf8] mb-12">Average salaries in IT professions</h2>
          <div className="relative flex justify-between items-center">
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gray-700"></div>
            <div className="z-10 bg-[#1e293b] px-4 text-center">
              <p className="text-gray-500 uppercase text-xs font-bold mb-2">Junior</p>
              <p className="text-4xl font-black text-[#38bdf8]">{product.salary?.junior || "200$"}</p>
            </div>
            <div className="z-10 bg-[#1e293b] px-4 text-center">
              <p className="text-gray-500 uppercase text-xs font-bold mb-2">Middle</p>
              <p className="text-4xl font-black text-[#38bdf8]">{product.salary?.middle || "500$"}</p>
            </div>
            <div className="z-10 bg-[#1e293b] px-4 text-center">
              <p className="text-gray-500 uppercase text-xs font-bold mb-2">Senior</p>
              <p className="text-4xl font-black text-[#38bdf8]">{product.salary?.senior || "1200$"}</p>
            </div>
          </div>
        </div>
      </div>

     
      <h2 className="text-3xl font-bold text-center mb-16">
        Minimum <span className="text-[#38bdf8]">required laptop</span> for the course
      </h2>
      <div className="flex flex-col md:flex-row gap-10 items-center mb-20">
        <div className="w-full md:w-1/2 bg-[#1e293b] rounded-[40px] p-12 border border-gray-800 flex justify-center">
          <img src="/img/macbook.png" alt="Laptop" className="w-full max-w-sm" />
        </div>
        <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
          <div className="bg-[#111827] border border-gray-800 p-6 rounded-2xl border-l-4 border-[#38bdf8]">
            <p className="font-bold">Intel Core i5 (10-gen)</p>
            <p className="text-[10px] text-[#38bdf8] uppercase mt-2">Processor</p>
          </div>
          <div className="bg-[#111827] border border-gray-800 p-6 rounded-2xl border-l-4 border-[#38bdf8]">
            <p className="font-bold">Windows 10, 64-bit</p>
            <p className="text-[10px] text-[#38bdf8] uppercase mt-2">Operating System</p>
          </div>
          <div className="bg-[#111827] border border-gray-800 p-6 rounded-2xl border-l-4 border-[#38bdf8]">
            <p className="font-bold">8GB</p>
            <p className="text-[10px] text-[#38bdf8] uppercase mt-2">RAM</p>
          </div>
          <div className="bg-[#111827] border border-gray-800 p-6 rounded-2xl border-l-4 border-[#38bdf8]">
            <p className="font-bold">SSD 256GB</p>
            <p className="text-[10px] text-[#38bdf8] uppercase mt-2">Storage</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ProductById