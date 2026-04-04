import React from 'react';
import { useOutletContext } from 'react-router-dom';
import NFTGrid from '../Components/NFTGrid';


const translations = {
  RU: {
    name: "Гарри К.",
    userName: "@harry_nft",
    followBtn: "ПОДПИСАТЬСЯ +",
    bioTitle: "О СЕБЕ",
    bioDesc: "Художник, превращающий нематериальное в бесценные активы с помощью своих невероятных творений NFT. От потрясающих визуальных эффектов до захватывающих концепций.",
    stats: [
      { label: "Всего продаж", value: "86 ETH" },
      { label: "Подписчики", value: "12K" },
      { label: "Подписки", value: "587" }
    ],
    tabs: { collection: "Коллекция", activity: "Активность" }
  },
  TJ: {
    name: "Ҳарри К.",
    userName: "@harry_nft",
    followBtn: "ОБУНА ШУДАН +",
    bioTitle: "ДАР БОРАИ МАН",
    bioDesc: "Ҳунарманде, ки чизҳои ноаёнро ба дороиҳои бебаҳо тавассути офаридаҳои аҷиби NFT табдил медиҳад. Аз тасвирҳои ҳайратангез то консепсияҳои аҷиб.",
    stats: [
      { label: "Фурӯши умумӣ", value: "86 ETH" },
      { label: "Обуначиён", value: "12K" },
      { label: "Обунаҳо", value: "587" }
    ],
    tabs: { collection: "Коллексия", activity: "Фаъолият" }
  },
  EN: {
    name: "Harry K.",
    userName: "@harry_nft",
    followBtn: "FOLLOW +",
    bioTitle: "BIO",
    bioDesc: "The Artist who transforms the intangible into priceless assets with their incredible NFT creations. From stunning visuals to mind-bending concepts.",
    stats: [
      { label: "Total Sales", value: "86 ETH" },
      { label: "Followers", value: "12K" },
      { label: "Followings", value: "587" }
    ],
    tabs: { collection: "Collection", activity: "Activity" }
  }
};

const Account = () => {
 
  const context = useOutletContext();
  const currentLang = context ? context[0] : "RU"; 
  const t = translations[currentLang] || translations.RU;

  return (
    <div className="bg-white min-h-screen pb-20 font-sans">
      
    
      <div className="relative h-[250px] md:h-[300px] w-full px-[5%] mt-5">
        <img 
          src="/img/Mask Group (16).png" 
          alt="Banner" 
          className="w-full h-full object-cover rounded-[40px] shadow-sm" 
        />
        <div className="absolute -bottom-16 left-12 md:left-24">
          <div className="relative">
            <img 
              src="https://i.pravatar.cc/150?u=harry" 
              alt="Avatar" 
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border-8 border-white object-cover shadow-xl"
            />
            <span className="absolute bottom-4 right-2 bg-blue-500 text-white p-1 rounded-full border-4 border-white text-[10px]">✔</span>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-[5%] mt-20 flex flex-col md:flex-row gap-10">
        
     
        <div className="w-full md:w-[320px] space-y-8">
          <div>
            <div className="flex items-center justify-between mb-2">
               <h1 className="text-3xl font-black text-black">{t.name}</h1>
               <button className="bg-black !text-white px-4 py-2 rounded-xl text-sm font-bold active:scale-95 transition-all">
                 {t.followBtn}
               </button>
            </div>
            <p className="text-gray-400 font-medium">{t.userName}</p>
          </div>

        
          <div className="flex justify-between border-y border-gray-100 py-6">
            {t.stats.map((item, index) => (
              <div key={index} className="text-center md:text-left">
                <p className="text-2xl font-black text-black">{item.value}</p>
                <p className="text-gray-400 text-sm">{item.label}</p>
              </div>
            ))}
          </div>

          <div>
            <h3 className="font-bold mb-3 text-gray-400 uppercase text-[10px] tracking-widest">
              {t.bioTitle}
            </h3>
            <p className="text-gray-500 leading-relaxed text-sm">
              {t.bioDesc}
            </p>
          </div>

        
          <div className="flex gap-5 text-gray-300 text-lg">
             <i className="fab fa-instagram cursor-pointer hover:text-black transition-colors"></i>
             <i className="fab fa-twitter cursor-pointer hover:text-black transition-colors"></i>
             <i className="fab fa-facebook cursor-pointer hover:text-black transition-colors"></i>
          </div>
        </div>

       
        <div className="flex-1">
          {/* Tabs Section */}
          <div className="flex border-b border-gray-100 mb-8 gap-8">
            <button className="pb-4 border-b-2 border-black font-bold text-black flex items-center gap-2">
              📁 {t.tabs.collection}
            </button>
            <button className="pb-4 text-gray-400 font-bold flex items-center gap-2 hover:text-black transition-colors">
              🕒 {t.tabs.activity}
            </button>
          </div>

    
          <NFTGrid />
        </div>

      </div>
    </div>
  );
};

export default Account;