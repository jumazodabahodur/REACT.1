import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from "react-router-dom";
import Footer from '../Components/Footer';

const Layout = () => {
  const navigate = useNavigate();


  const [lang, setLang] = useState({ 
code: 'EN', 
  name: 'English', 
  flag: 'https://flagcdn.com/w20/us.png'
  });


  const [isOpen, setIsOpen] = useState(false);

  
  const languages = [
        { code: 'EN', name: 'English', flag: 'https://flagcdn.com/w20/us.png' },
    { code: 'RU', name: 'Russian', flag: 'https://flagcdn.com/w20/ru.png' },
    { code: 'TJ', name: 'Tajik', flag: 'https://flagcdn.com/w20/tj.png' },

  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
     
      <nav className="flex items-center justify-between px-12 py-4 border-b border-gray-100 bg-white sticky top-0 z-[100] shadow-sm">
        
    
        <div className="flex items-center gap-10">
          <div 
            className="flex flex-col gap-1 cursor-pointer group" 
            onClick={() => navigate('/')}
          >
            <div className="w-6 h-1 bg-black rounded-full group-hover:w-8 transition-all"></div>
            <div className="w-6 h-1 bg-black rounded-full ml-1.5"></div>
            <div className="w-6 h-1 bg-black rounded-full"></div>
          </div>

          <div className="flex gap-7">
            <Link to="/" className="text-[13px] font-bold text-gray-600 hover:text-black tracking-wider uppercase transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-[13px] font-bold text-gray-600 hover:text-black tracking-wider uppercase transition-colors">
              About
            </Link>
            <Link to="/discover" className="text-[13px] font-bold text-gray-600 hover:text-black tracking-wider uppercase transition-colors">
              Discover
            </Link>
          </div>
        </div>

  
        <div className="flex items-center gap-6">
          
      
          <div className="relative">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all border border-gray-100"
            >
              <img src={lang.flag} alt="flag" className="w-5 h-3.5 rounded-sm object-cover" />
              <span className="text-[13px] font-bold uppercase">{lang.code}</span>
              <span className={`text-[10px] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>

       
            {isOpen && (
              <div className="absolute top-full right-0 mt-2 w-[150px] bg-white border border-gray-100 rounded-2xl shadow-2xl p-2 z-50">
                {languages.map((item) => (
                  <button
                    key={item.code}
                    onClick={() => {
                      setLang(item);
                      setIsOpen(false);
                    }}
                    className="flex items-center gap-3 w-full p-3 hover:bg-gray-50 rounded-xl transition-colors text-[13px] font-bold text-left"
                  >
                    <img src={item.flag} alt={item.name} className="w-5 h-3.5 rounded-sm" />
                    {item.name}
                  </button>
                ))}
              </div>
            )}
          </div>

      
          <button 
            onClick={() => navigate('/account')}
            className="bg-black !text-white px-7 py-3 rounded-xl text-[13px] font-bold hover:bg-zinc-800 transition-all active:scale-95 shadow-lg shadow-black/10"
          >
            Account
          </button>
        </div>
      </nav>


      <main className="max-w-[1440px] mx-auto min-h-[80vh]">
       <Outlet context={[lang.code]} />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;