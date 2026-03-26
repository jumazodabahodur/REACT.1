import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Файлҳои CSS-ро фаромӯш накун!
import 'swiper/css';

// Модулҳои лозима
import { Autoplay, FreeMode } from 'swiper/modules';

export default function App() {
  const slides = [
    { id: 1, title: "CRYSTAL", icon: "💎", clr: "#00f2ff" },
    { id: 2, title: "PHOENIX", icon: "🔥", clr: "#ff4d00" },
    { id: 3, title: "GALAXY", icon: "🌌", clr: "#7000ff" },
    { id: 4, title: "MATRIX", icon: "🔋", clr: "#00ff88" },
    { id: 5, title: "ZENITH", icon: "👑", clr: "#ffcc00" },
  ];

  return (
    <div style={{ padding: "100px 0", background: "#000", minHeight: "100vh" }}>
      <Swiper
        // ТАНЗИМОТИ ТЕХНИКӢ БАРОИ ХАТМАН КОР КАРДАН:
        modules={[Autoplay, FreeMode]}
        slidesPerView={1.5}
        spaceBetween={30}
        loop={true}            // Ҳатмист барои ҳаракати беохир
        freeMode={true}        // Ҳатмист барои ҳаракати мулоим (linear)
        speed={7000}           // Суръати ҳаракат
        
        autoplay={{
          delay: 0,                   // Пауза нест
          disableOnInteraction: false, // Баъди ламс кардан ҳам кор мекунад
          pauseOnMouseEnter: false,    // Ҳангоми наздик кардани муш намеистад
        }}

        breakpoints={{
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="mySwiper"
      >
        {slides.map((s) => (
          <SwiperSlide key={s.id}>
            <div style={{
              background: "#111",
              height: "250px",
              borderRadius: "25px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              border: `2px solid ${s.clr}44`,
              color: "#fff"
            }}>
              <div style={{ fontSize: "50px" }}>{s.icon}</div>
              <h2 style={{ letterSpacing: "3px", fontSize: "18px" }}>{s.title}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ИН CSS БАРОИ ПЛАВНЫЙ ШУДАН ҲАТМИСТ */}
      <style>{`
        .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </div>
  );
}