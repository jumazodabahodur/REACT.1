import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  
  const [courses] = useState([
    { 
      id: 1, name: "HTML & CSS", avatar: "/img/html.png", 
      about: "Learn the building blocks of the web", 
      duration: "1 month", category: "Frontend", color: "orange" 
    },
    { 
      id: 2, name: "JavaScript", avatar: "/img/js.png", 
      about: "Master programming fundamentals with JavaScript", 
      duration: "2 months", category: "Frontend", color: "yellow" 
    },
    { 
      id: 3, name: "React", avatar: "/img/react.png", 
      about: "Build interactive UIs with the popular JavaScript library", 
      duration: "3 months", category: "Frontend", color: "blue" 
    },
    { 
      id: 4, name: "Design", avatar: "/img/figma.png", 
      about: "Create beautiful, functional digital experiences", 
      duration: "4 months", category: "Design", color: "green" 
    },
    { 
      id: 5, name: "Basics of C++", avatar: "/img/cpp.png", 
      about: "Start your programming journey with C++", 
      duration: "1 month", category: "Backend", color: "blue-dark" 
    },
    { 
      id: 6, name: "Python", avatar: "/img/python.png", 
      about: "Learn one of the most versatile programming languages", 
      duration: "4 months", category: "Backend", color: "cyan" 
    }
  ]);

  const [filter, setFilter] = useState("All");

  const cardStyles = {
    orange: "border-l-[#f97316] bg-[#2a1a14] shadow-[0_0_15px_rgba(249,115,22,0.1)]",
    yellow: "border-l-[#eab308] bg-[#2a2714] shadow-[0_0_15px_rgba(234,179,8,0.1)]",
    blue: "border-l-[#3b82f6] bg-[#141c2a] shadow-[0_0_15px_rgba(59,130,246,0.1)]",
    green: "border-l-[#22c55e] bg-[#142a1a] shadow-[0_0_15px_rgba(34,197,94,0.1)]",
    "blue-dark": "border-l-[#2563eb] bg-[#141e2d] shadow-[0_0_15px_rgba(37,99,235,0.1)]",
    cyan: "border-l-[#06b6d4] bg-[#14282d] shadow-[0_0_15px_rgba(6,182,212,0.1)]",
  };

  const filteredCourses = filter === "All" 
    ? courses 
    : courses.filter(c => c.category === filter);

  return (
    <div className="bg-[#0f172a] min-h-screen p-8 text-white font-sans">
      
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {["All", "Frontend", "Backend", "Mobile", "Kids", "Olympiad", "Design"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full border text-sm font-medium transition-all duration-300
              ${filter === cat 
                ? 'bg-white text-black border-white' 
                : 'bg-[#1e293b] text-gray-400 border-gray-700 hover:border-gray-500'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {filteredCourses.map((e) => (
          <div 
            key={e.id}
            onClick={() => navigate(`/product/${e.id}`)}
            className={`relative p-8 rounded-[2rem] border-l-[6px] transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col justify-between min-h-[320px] 
            ${cardStyles[e.color] || 'border-l-blue-500 bg-[#1e293b]'}`}
          >
            <div className="flex justify-between items-start">
              <h2 className="text-4xl font-bold leading-tight max-w-[180px]">
                {e.name}
              </h2>
              <div className="bg-[#0f172a] p-4 rounded-2xl shadow-inner">
                <img src={e.avatar} alt={e.name} className="w-10 h-10 object-contain" />
              </div>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed mt-4">
              {e.about}
            </p>

            <div className="flex items-center gap-6 mt-8">
              <div className="flex items-center gap-2 text-sm font-semibold opacity-80" style={{ color: cardStyles[e.color]?.split(' ')[0].replace('border-l-[', '').replace(']', '') }}>
                <span className="text-lg">🕒</span> {e.duration}
              </div>
              <span className="text-gray-500 text-sm font-medium uppercase tracking-wider">
                {e.category}
              </span>
            </div>
          </div>
        ))}
      </div>


    </div>
  );
};

export default Home;