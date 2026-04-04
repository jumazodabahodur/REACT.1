import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import Button from '../Components/Button';
import NFTSection from '../Components/NFTSection';
import Table from '../Components/Table';
import NFTGrid from '../Components/NFTGrid';

const translations = {
  RU: {
    heroTitle: "Открывайте и создавайте NFT",
    heroDesc: "Открывайте, создавайте и продавайте NFT на нашем маркетплейсе. Более тысячи NFT и бонус $20.",
    exploreBtn: "ИССЛЕДОВАТЬ",
    createBtn: "СОЗДАТЬ NFT",
    topCollection: "Топ Коллекции",
    discovery: "Поиск",
    searchPlaceholder: "Поиск работ / авторов",
    collectorTitle: "Твой внутренний коллекционер",
    collectorList: ["✅ Лучшие продажи", "✅ $2M+ транзакций", "✅ Безопасные сделки", "✅ Сообщество"],
    faqTitle: "Часто задаваемые вопросы",
    bannerTitle: "Создавай и продавай NFT",
    bannerDesc: "Крупнейшая площадка NFT в мире.",
    more: "Узнать больше"
  },
  TJ: {
    heroTitle: "NFT-ҳоро кашф ва эҷод кунед",
    heroDesc: "Дар бозори мо NFT-ҳоро кашф, эҷод ва фурӯшед. Бо зиёда аз ҳазорҳо NFT ва бонуси $20.",
    exploreBtn: "КАШФ КАРДАН",
    createBtn: "СОХТАНИ NFT",
    topCollection: "Коллексияҳои беҳтарин",
    discovery: "Ҷустуҷӯ",
    searchPlaceholder: "Ҷустуҷӯи асар / муаллиф",
    collectorTitle: "Коллексионери ботинии шумо",
    collectorList: ["✅ Беҳтарин фурӯшанда", "✅ $2M+ транзаксия", "✅ Маълумоти бехатар", "✅ Ба мо ҳамроҳ шавед"],
    faqTitle: "Саволҳои зиёд додашаванда",
    bannerTitle: "NFT-ҳоро созед ва фурӯшед",
    bannerDesc: "Бузургтарин макони NFT дар ҷаҳон.",
    more: "Бештар кашф кунед"
  },
  EN: {
    heroTitle: "Discover And Create NFTs",
    heroDesc: "Discover, Create and Sell NFTs On Our NFT Marketplace With Over Thousands Of NFTs And Get a $20 bonus.",
    exploreBtn: "EXPLORE",
    createBtn: "CREATE NFT",
    topCollection: "Top Collection",
    discovery: "Discovery",
    searchPlaceholder: "Search Art Work / Creator",
    collectorTitle: "Your Inner Collector",
    collectorList: ["✅ Best Seller All Around World", "✅ $2M+ Transactions Every Day", "✅ Secure Transactions", "✅ Join Our Community"],
    faqTitle: "Frequently Asked Questions",
    bannerTitle: "Create and Sell NFTs",
    bannerDesc: "World's Largest NFT Place to discover, collect, and sell extraordinary NFTs.",
    more: "Explore More"
  }
};

const Home = () => {
  const context = useOutletContext();
  const currentLang = context ? context[0] : "RU"; 
  const t = translations[currentLang] || translations.RU;
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="max-w-[1440px] mx-auto px-[5%]">
      
      <div className="flex flex-col md:flex-row items-center justify-between mt-[50px] gap-10">
        <div className="flex-1">
          <h1 className="text-[45px] md:text-[85px] font-black leading-[1.1] mb-6 text-black">{t.heroTitle}</h1>
          <p className="text-gray-500 text-lg mb-8">{t.heroDesc}</p>
          <div className="flex items-center gap-5 mb-12">
            <Button name={t.exploreBtn} variant="black" />
            <Button name={t.createBtn} variant="white" />
          </div>

<div className="flex gap-16 py-10">
  <div>
    <h2 className="text-[48px] font-bold text-black leading-none">430K+</h2>
    <p className="text-gray-400 text-lg mt-2">Art Works</p>
  </div>

  <div>
    <h2 className="text-[48px] font-bold text-black leading-none">159K+</h2>
    <p className="text-gray-400 text-lg mt-2">Creators</p>
  </div>

  <div>
    <h2 className="text-[48px] font-bold text-black leading-none">87K+</h2>
    <p className="text-gray-400 text-lg mt-2">Collections</p>
  </div>
</div>

        </div>
        <div className="flex-1 flex justify-end">
          <img src="img/Hero Header.png" alt="Hero" className="w-full max-w-[600px] animate-pulse-slow" />
        </div>
      </div>

      <div className="mt-24">
        <NFTSection />
        <h1 className="text-[50px] pt-[100px] font-bold text-black">{t.topCollection}</h1>
        <Table />

        <div className="flex flex-col md:flex-row justify-between items-center mt-20 mb-10 gap-5">
          <h2 className="text-[40px] font-bold text-black">{t.discovery}</h2>
          <div className="flex items-center bg-gray-100 px-5 py-3 rounded-2xl w-full md:w-[400px]">
            <span className="text-gray-400 mr-3">🔍</span>
            <input 
              type="text" 
              placeholder={t.searchPlaceholder}
              className="bg-transparent border-none outline-none text-sm w-full text-black"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <NFTGrid searchValue={searchTerm} />    
      </div>

      <div className="flex flex-col md:flex-row items-center md:gap-[100px] py-[100px] text-black">
        <div className="flex-1">
          <h1 className="text-[50px] md:text-[60px] leading-tight mb-6 font-bold">{t.collectorTitle}</h1>
          <div className="space-y-3 mb-10">
            {t.collectorList.map((item, index) => (
              <p key={index} className="text-[18px] md:text-[20px] font-medium">{item}</p>
            ))}
          </div>
          <Button name={`${t.more} ->`} variant="black" />
        </div>
        <div className="flex-1">
          <img src="img/Illustration Left.png" alt="Collector" className="w-full max-w-[500px]" />
        </div>
      </div>

      <div className="w-full mb-20">
        <img src="img/Join Community.png" alt="Join Community" className="w-full h-auto object-contain" />
      </div>
      <section className="py-20">
        <h2 className="text-[45px] font-black text-center mb-12 text-black">
          {t.faqTitle.split(" ")[0]} <br /> 
          <span className="text-gray-300">{t.faqTitle.split(" ").slice(1).join(" ")}</span>
        </h2>
      </section>

      <div className="bg-[#141416] rounded-[40px] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 mb-20 text-white">
        <div className="flex-1">
          <h2 className="text-[40px] md:text-[55px] font-bold mb-6">{t.bannerTitle}</h2>
          <p className="text-gray-400 text-lg mb-10">{t.bannerDesc}</p>
          <Button name={t.exploreBtn} variant="white"/>
        </div>
        <div className="flex-1 flex justify-end">
          <img src="img/Mask Group (14).png" className="w-full max-w-[350px] rounded-[30px]" alt="NFT" />
        </div>
      </div>

    </div>
  );
};

export default Home;