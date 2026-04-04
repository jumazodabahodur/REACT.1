import React from 'react';

const CardNFT = ({ data, onAdd, onEdit, onDelete }) => {
  return (
    <div className="bg-white p-4 rounded-[30px]  border border-gray-100 transition-all group">
      <div className="relative overflow-hidden rounded-[20px] mb-4">
        <img 
          src={data.image} 
          alt={data.name} 
          className="w-full h-[230px] object-cover group-hover:scale-110 transition-transform duration-500" 
        />
      </div>

      <div className="flex justify-between items-center mb-5 px-1">
        <div>
          <h3 className="font-bold text-black">{data.name}</h3>
          <p className="text-gray-400 text-[11px]">Price</p>
        </div>
        <p className="font-black text-black">{data.price} ETH</p>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <button 
          onClick={onAdd}
          className="bg-black !text-white py-2.5 rounded-xl text-[12px] font-bold hover:bg-zinc-800 active:scale-90 transition-all"
        >
          Add+
        </button>
        <button 
          onClick={onEdit}
          className="bg-gray-100 text-black py-2.5 rounded-xl text-[12px] font-bold hover:bg-gray-200 active:scale-90 transition-all"
        >
          Edit
        </button>
        <button 
          onClick={onDelete}
          className="bg-red-50 text-red-500 py-2.5 rounded-xl text-[12px] font-bold hover:bg-red-500 hover:text-white active:scale-90 transition-all"
        >
          Del🗑️
        </button>
      </div>
    </div>
  );
};

export default CardNFT;