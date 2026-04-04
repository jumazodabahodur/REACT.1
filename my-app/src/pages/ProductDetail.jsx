import React from 'react';
import { useNavigate, useParams, useOutletContext } from 'react-router-dom';
import NFTSection from '../Components/NFTSection';

const nftData = [
  { id: 2, name: "NuEvey", price: "1.25", time: "19h 09m 12s", image: "/img/Mask Group (15).png" },
  { id: 3, name: "Sun-Glass", price: "1.75", time: "07h 09m 12s", image: "/img/Mask Group (16).png" },
  { id: 4, name: "NuEvey", price: "1.25", time: "19h 09m 12s", image: "/img/Mask Group (15).png" },
  { id: 5, name: "NuEvey", price: "1.25", time: "19h 09m 12s", image: "/img/Mask Group (14).png" },
  { id: 6, name: "NuEvey", price: "1.25", time: "19h 09m 12s", image: "/img/Mask Group (15).png" },
];

const translations = {
  RU: {
    back: "Назад",
    notFound: "Товар не найден!",
    description: "Коллекция из 10 000 полезных PFP, которые отличаются богатым разнообразием и уникальным набором редких черт.",
    created: "Создано",
    owned: "Владелец",
    currentBid: "Текущая ставка",
    endsIn: "Осталось времени",
    bidBtn: "Сделать ставку"
  },
  TJ: {
    back: "Ба қафо",
    notFound: "Маҳсулот ёфт нашуд!",
    description: "Коллексияи 10,000 PFP-ҳои муфид, ки бо гуногунии бой ва маҷмӯи беназири хислатҳои нодир фарқ мекунанд.",
    created: "Офаранда",
    owned: "Соҳиб",
    currentBid: "Нархи ҷорӣ",
    endsIn: "Вақти боқимонда",
    bidBtn: "Нарх гузоштан"
  },
  EN: {
    back: "Back to Explore",
    notFound: "Product not found!",
    description: "A collection of 10,000 utility-enabled PFPs that feature a richly diverse and unique pool of rarity-powered traits.",
    created: "Created by",
    owned: "Owned by",
    currentBid: "Current Bid",
    endsIn: "Remaining Time",
    bidBtn: "Place Bid"
  }
};

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  

  const context = useOutletContext();
  const currentLang = context ? context[0] : "RU";
  const t = translations[currentLang] || translations.RU;

  const product = nftData.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div className="text-center py-20 text-2xl font-bold text-black">{t.notFound}</div>;
  }

  return (
    <div className="max-w-[1440px] mx-auto px-[5%] py-10 text-black font-sans">
      

      <button 
        onClick={() => navigate(-1)} 
        className="flex items-center gap-2 font-bold mb-8 hover:opacity-70 transition-all text-black"
      >
        <span className="bg-gray-100 p-2 rounded-full text-xs">←</span> {t.back}
      </button>

      <div className="bg-white rounded-[40px] p-6 md:p-10 shadow-sm border border-gray-50 flex flex-col md:flex-row gap-12">
        
      
        <div className="flex-1">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full aspect-square object-cover rounded-[30px] shadow-lg"
          />
        </div>

     
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-[40px] md:text-[55px] font-black leading-tight mb-4 text-black">
            {product.name}
          </h1>
          
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            {t.description}
          </p>

      
          <div className="flex flex-wrap gap-10 mb-10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-pink-100 rounded-full overflow-hidden">
                 <img src={`https://i.pravatar.cc/100?u=${product.id}`} alt="avatar" />
              </div>
              <div>
                <p className="text-gray-400 text-sm font-medium">{t.created}</p>
                <p className="font-bold text-black">Perperzon</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-orange-100 rounded-full overflow-hidden">
                 <img src={`https://i.pravatar.cc/100?u=${product.id + 10}`} alt="avatar" />
              </div>
              <div>
                <p className="text-gray-400 text-sm font-medium">{t.owned}</p>
                <p className="font-bold text-black">Videz</p>
              </div>
            </div>
          </div>


          <div className="bg-gray-50/50 rounded-[30px] p-6 mb-8 flex justify-between items-center border border-gray-100">
            <div>
              <p className="text-gray-400 text-sm mb-1 font-medium">{t.currentBid}</p>
              <div className="flex items-center gap-2 text-2xl font-black text-black">
                <span>💎</span> {product.price} ETH
              </div>
            </div>
            <div className="text-right">
              <p className="text-gray-400 text-sm mb-1 font-medium">{t.endsIn}</p>
              <p className="font-bold text-black">{product.time}</p>
            </div>
          </div>


          <button className="w-full bg-black !text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-zinc-800 transition-all active:scale-95">
            <span>💼</span> {t.bidBtn}
          </button>
        </div>
      </div>

      
      <div className="mt-20">
        <NFTSection />
      </div>

    </div>
  );
};

export default ProductDetail;