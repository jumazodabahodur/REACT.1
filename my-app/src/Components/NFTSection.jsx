import React, { useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardNFT from './CardNFT';

const initialState = {
  nfts: [
    { id: 1, name: "Sun-Glass", price: "1.75", time: "07h 09m 12s", image: "/img/Mask Group (14).png" },
    { id: 2, name: "NuEvey", price: "1.25", time: "19h 09m 12s", image: "/img/Mask Group (15).png" },
    { id: 3, name: "Abstract Art", price: "2.10", time: "05h 02m 10s", image: "/img/Mask Group (16).png" },
    { id: 4, name: "NuEvey", price: "1.25", time: "19h 09m 12s", image: "/img/Mask Group (15).png" },
    { id: 5, name: "NuEvey", price: "1.25", time: "19h 09m 12s", image: "/img/Mask Group (14).png" },
    { id: 6, name: "NuEvey", price: "1.25", time: "19h 09m 12s", image: "/img/Mask Group (15).png" },
  ],
  isModalOpen: false,
  editNft: null 
};

function reducer(state, action) {
  switch (action.type) {
    case 'OPEN_MODAL':
      return { ...state, isModalOpen: true, editNft: action.payload || null };
    case 'CLOSE_MODAL':
      return { ...state, isModalOpen: false, editNft: null };
    case 'ADD_NFT':
      return { ...state, nfts: [action.payload, ...state.nfts], isModalOpen: false };
    case 'DELETE_NFT':
      return { ...state, nfts: state.nfts.filter(nft => nft.id !== action.payload) };
    case 'UPDATE_NFT':
      return {
        ...state,
        nfts: state.nfts.map(nft => nft.id === action.payload.id ? action.payload : nft),
        isModalOpen: false,
        editNft: null
      };
    default:
      return state;
  }
}

const NFTGrid = ({ searchValue = "" }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [formData, setFormData] = useState({ name: '', url: '' });
  const navigate = useNavigate();

  const filteredNFTs = state.nfts.filter((nft) =>
    nft.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.url) return alert("Пур кунед!");

    if (state.editNft) {
      const updatedNFT = { ...state.editNft, name: formData.name, image: formData.url };
      dispatch({ type: 'UPDATE_NFT', payload: updatedNFT });
    } else {
      const newNFT = {
        id: Date.now(),
        name: formData.name,
        price: (Math.random() * 2).toFixed(2),
        time: "24h 00m 00s",
        image: formData.url
      };
      dispatch({ type: 'ADD_NFT', payload: newNFT });
    }
    setFormData({ name: '', url: '' });
  };

  return (
    <div className="py-10 max-w-[1440px] mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredNFTs.map((nft) => (
          <div 
            key={nft.id} 
            onClick={() => navigate(`/product/${nft.id}`)} 
            className="cursor-pointer"
          >
            <CardNFT 
              data={nft} 
              onAdd={(e) => {
                e.stopPropagation();
                setFormData({ name: '', url: '' });
                dispatch({ type: 'OPEN_MODAL' });
              }}
              onEdit={(e) => {
                e.stopPropagation();
                setFormData({ name: nft.name, url: nft.image });
                dispatch({ type: 'OPEN_MODAL', payload: nft });
              }}
              onDelete={(e) => {
                e.stopPropagation();
                dispatch({ type: 'DELETE_NFT', payload: nft.id });
              }}
            />
          </div>
        ))}
      </div>

      {state.isModalOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-[999] flex items-center justify-center p-4">
          <div className="bg-white rounded-[40px] p-10 w-full max-w-[450px] relative text-black" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => dispatch({ type: 'CLOSE_MODAL' })}
              className="absolute top-6 right-6 text-2xl"
            >✕</button>
            <h2 className="text-3xl font-black mb-6">{state.editNft ? "Edit NFT" : "Create NFT"}</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <input 
                type="text" placeholder="NFT Name" value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="p-4 bg-gray-50 border rounded-2xl outline-none focus:border-black"
              />
              <input 
                type="text" placeholder="Image URL" value={formData.url}
                onChange={(e) => setFormData({...formData, url: e.target.value})}
                className="p-4 bg-gray-50 border rounded-2xl outline-none focus:border-black"
              />
              <button className="bg-black text-white py-5 rounded-[20px] font-bold">
                {state.editNft ? "Save Changes" : "Confirm & List NFT"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default NFTGrid;