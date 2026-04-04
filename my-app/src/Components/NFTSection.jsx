import React, { useReducer, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import 'swiper/css';
import CardNFT from './CardNFT';


const initialState = {
  nfts: [
    { id: 1, name: "Sun-Glass", price: "1.75", time: "07h 09m 12s", image: "/img/Mask Group (14).png" },
    { id: 2, name: "NuEvey", price: "1.25", time: "19h 09m 12s", image: "/img/Mask Group (15).png" },
    { id: 3, name: "Sun-Glass", price: "1.75", time: "07h 09m 12s", image: "/img/Mask Group (16).png" },
    { id: 4, name: "NuEvey", price: "1.25", time: "19h 09m 12s", image: "/img/Mask Group (15).png" },
    { id: 5, name: "NuEvey", price: "1.25", time: "19h 09m 12s", image: "/img/Mask Group (14).png" },
    { id: 6, name: "NuEvey", price: "1.25", time: "19h 09m 12s", image: "/img/Mask Group (15).png" },
  ]
};

function nftReducer(state, action) {
  switch (action.type) {
    default: return state;
  }
}

const NFTSection = () => {
  const [state] = useReducer(nftReducer, initialState);
  const swiperRef = useRef(null);
  const navigate = useNavigate();

 
  if (!state.nfts || state.nfts.length === 0) {
    return <div className="py-10 text-center text-gray-400">No trending NFTs found.</div>;
  }

  return (
    <div className="py-10 bg-[#F9F9F9] px-10 rounded-[40px]">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-black">Trending NFTs</h2>
        
        <div className="flex border border-gray-200 rounded-full bg-white overflow-hidden shadow-sm">
          <button onClick={() => swiperRef.current?.slidePrev()} className="p-3 hover:bg-gray-50 border-r border-gray-200 text-black">←</button>
          <button onClick={() => swiperRef.current?.slideNext()} className="p-3 hover:bg-gray-50 text-black">→</button>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        onBeforeInit={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={20}
        slidesPerView={4}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {state.nfts.map((nft) => (
          <SwiperSlide key={nft.id}>
            <div onClick={() => navigate(`/product/${nft.id}`)} className="cursor-pointer">
              <CardNFT 
                data={nft} 
                onPlaceBid={() => console.log("Bid clicked")} 
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NFTSection;