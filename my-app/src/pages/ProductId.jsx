import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductById = () => {
  const [products] = useState([
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
  ])

  const { productId } = useParams()

  const item = products.find(e => e.id == productId)

  if (!item) {
    return <h2>Отель не найден (ID: {productId})</h2>
  }

  return (
<div className="p-10 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        <div className="relative w-full md:w-1/2">
          <div className="rounded-[30px] overflow-hidden">
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-full h-[450px] object-cover block"
            />
          </div>
          
       
        </div>

        <div className="w-full md:w-1/2 space-y-4">
          <p className="text-[#56C490] text-sm font-medium">
            London NW8 7JT England
          </p>

          <h1 className="text-[42px] font-bold text-[#1A1A1A] leading-tight">
            {item.name}
          </h1>

          <div className="flex items-center gap-4">
            <p className="text-xl font-bold text-[#1A1A1A]">
              {item.cost} <span className="text-gray-500 font-normal">Par Night</span>
            </p>
            <div className="h-4 w-[1px] bg-gray-300 mx-2"></div>
            <div className="flex items-center gap-2">
              <div className="flex text-red-400">★★★★<span className="text-gray-300">★</span></div>
              <span className="text-gray-500 font-medium">4.8</span>
            </div>
          </div>

          <p className="text-gray-600 text-sm leading-[1.8] max-w-[500px]">
            {item.about}
          </p>

          <div className="pt-6">
            <button className="bg-[#27AE60] hover:bg-[#219150] text-white font-semibold py-4 px-12 rounded-[50px] transition-all">
              To book Now
            </button>
          </div>
        </div>

      </div>




      <div className='ml-[10%] mt-[90px] items-center gap-[50px] flex'>
  <img src="/img/Perfect Place 1 (1).png" alt="" />
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

    </div>
  )
}

export default ProductById