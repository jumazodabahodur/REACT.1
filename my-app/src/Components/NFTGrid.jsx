import React, { useReducer, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import CardNFT from './CardNFT';


const initialState = {
  nfts: [
    { id: 1, name: "Sun-Glass", price: 1.75, time: "07h 09m 12s", image: "/img/Mask Group (14).png" },
    { id: 2, name: "NuEvey", price: 1.25, time: "19h 09m 12s", image: "/img/Mask Group (15).png" },
    { id: 3, name: "Abstract Art", price: 2.10, time: "05h 02m 10s", image: "/img/Mask Group (16).png" },
    { id: 4, name: "Music Wave", price: 0.95, time: "12h 00m 00s", image: "/img/Mask Group (15).png" },
    { id: 5, name: "Cyber Punk", price: 1.45, time: "10h 05m 00s", image: "/img/Mask Group (14).png" },
  ],
  priceSort: "All",
};


function reducer(state, action) {
  switch (action.type) {
    case 'SET_PRICE_SORT':
      return { ...state, priceSort: action.payload };
    case 'DELETE_NFT':
      return { ...state, nfts: state.nfts.filter(nft => nft.id !== action.payload) };
    default:
      return state;
  }
}

const NFTGrid = ({ searchValue = "" }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  const priceOptions = [
    { label: "All Prices", value: "All" },
    { label: "High Price", value: "High" },
    { label: "Low Price", value: "Low" }
  ];


  const finalNFTs = useMemo(() => {
    let list = [...state.nfts];

    if (searchValue) {
      list = list.filter(nft => 
        nft.name.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    if (state.priceSort === "High") {
      list.sort((a, b) => b.price - a.price);
    } else if (state.priceSort === "Low") {
      list.sort((a, b) => a.price - b.price);
    }

    return list;
  }, [state.nfts, state.priceSort, searchValue]);

  return (
    <div className="py-10 max-w-[1440px] mx-auto px-4">
      
   
      <div className="flex justify-start items-center gap-8 mb-10 border-b border-gray-100">
        {priceOptions.map((opt) => (
          <button
            key={opt.value}
            onClick={() => dispatch({ type: 'SET_PRICE_SORT', payload: opt.value })}
            className={`pb-4 text-sm font-bold transition-colors outline-none ${
              state.priceSort === opt.value ? "text-black" : "text-gray-400 hover:text-black"
            }`}
          >
            {opt.label}
          
            {state.priceSort === opt.value && (
              <div className="absolute bottom-0 left-0 h-[2px] bg-black w-full" />
            )}
          </button>
        ))}
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {finalNFTs.length > 0 ? (
          finalNFTs.map((nft) => (
            <div 
              key={nft.id} 
              onClick={() => navigate(`/product/${nft.id}`)} 
              className="cursor-pointer"
            >
              <CardNFT 
                data={nft} 
                onDelete={(e) => {
                  e.stopPropagation();
                  dispatch({ type: 'DELETE_NFT', payload: nft.id });
                }}
              />
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-20 text-gray-400 font-bold text-lg">
            Ҳеҷ чиз ёфт нашуд 🔍
          </div>
        )}
      </div>

    </div>
  );
};

export default NFTGrid;