import "./App.css";
import NumbCard from "./numbCard.jsx";
import RinokCard from "./RinokCard.jsx";
import Card2 from "./card2.jsx";
import ModuleCard from "./ModuleCard.jsx";
import ZapisCard from "./ZapisCard.jsx";
import StoimostCard from "./StoimostCard.jsx";
import UserCard from "./UserCard.jsx";

export default function App() {
  const stats = [
    { value: ">5,5 Млрд", label: "Инвестиции pre-seed, seed" },
    { value: ">300", label: "Акселераторов, инкубаторов" },
    { value: "73", label: "Венчурных фонда" },
    { value: "Скачать отчет", label: "по рынку MENA", isDownload: true }
  ];
    const stoimost = [
    { img:"../public/img/Vector (14).png" ,name:"Анализ международных рынков ",cost:"$1 000"},
    { img:"../public/img/Vector (15).png" ,name:"Упаковка стартапа под локальные рынки",cost:"$1 000"},
    { img:"../public/img/Vector (16).png" ,name:"Акселератор вашего бизнеса ",cost:"$1 000"},
 
  ];

  const user = [
    { img:"../public/img/Ellipse 545.png",name:"Юрий Ким",about:"Проведение исследования целевой аудитории позволит сформировать Product market fit"},
    { img:"../public/img/Ellipse 546.png",name:"Эшли",about:"Проведение исследования целевой аудитории позволит сформировать Product market fit"},
    { img:"../public/img/Ellipse 544.png",name:"Майкл Донован",about:"Проведение исследования целевой аудитории позволит сформировать Product market fit"},
    { img:"../public/img/Ellipse 548.png",name:"Фатими Юсуф",about:"Проведение исследования целевой аудитории позволит сформировать Product market fit"},
  ]

  return (
    <div>
   
      <div className="Head">
        <header className="flex items-center justify-around py-5">
          <img src="../public/img/INNOMA.VC (2).png" alt="Logo" />
          <div className="flex items-center gap-[25px] text-[23px] hidden md:flex">
            <h2>Кто мы?</h2>
            <h2>Услуги</h2>
            <h2>Акселератор</h2>
            <h2>Новости</h2>
          </div>
          <button className="w-[149px] h-[50px] bg-[#07AF91] rounded-[20px] md:w-[88px]">Войти</button>
          <img src="../public/img/Group 929 (1).png" alt="" className="sm:hidden" />
        </header>

        <div style={{ marginTop: "100px", marginLeft: "9%" }}>
          <h1 className="text-[30px] sm:text-[60px] font-medium leading-tight text-center md:text-start">
            Запустите <br />
            <span className="bg-[#07AF91]">технологический IT-бизнес</span> <br />
            на международных рынках
          </h1>
          <div className="flex justify-center md:justify-start pt-[30px]">
            <button className="w-[239px] h-[80px] bg-[#61B5E4] rounded-[10px] text-[25px]">
              Подать заявку
            </button>
          </div>
        </div>
      </div>

    
      <h1 style={{ color: "#1178B2", fontSize: "45px", fontWeight: "500", marginLeft: "10%", marginTop: "100px" }}>
        Наши услуги
      </h1>

      <section className="flex flex-col md:flex-row items-center gap-10 md:gap-[130px] px-[10%] py-10">
        <div className="flex-1">
          <h1 className="text-[#1178B2] text-[25px] font-medium mb-6">Аналитические исследования</h1>
          <p className="text-[20px] text-gray-500 mb-8 leading-relaxed">
            Одним из наших ключевых направлений является анализ технологических трендов на международных рынках.
          </p>
          <button className="w-full md:w-[329px] h-[70px] bg-[#07AF91] rounded-[10px] text-white text-[25px]">
            Узнать подробнее
          </button>
        </div>
        <img src="../public/img/kisspng-competitor-analysis-market-research-marketing-quan-5b102810d85456 1 (1).png" alt="Analytics" className="max-w-full md:w-1/2" />
      </section>

      <section className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-[130px] px-[10%] py-10">
        <img src="../public/img/rocket 1 (1).png" alt="Rocket" className="max-w-full md:w-1/3" />
        <div className="flex-1">
          <h1 className="text-[#1178B2] text-[25px] font-medium mb-6">Онлайн акселератор для IT бизнеса</h1>
          <p className="text-[20px] text-gray-500 mb-8 leading-relaxed">
            Онлайн программа акселерации IT бизнеса позволит вашей команде открыть новые горизонты.
          </p>
          <button className="w-full md:w-[329px] h-[70px] bg-[#07AF91] rounded-[10px] text-white text-[25px]">
            Узнать подробнее
          </button>
        </div>
      </section>

      
      <h1 style={{ color: "#1178B2", fontSize: "45px", fontWeight: "500", marginLeft: "10%", marginTop: "100px" }}>
        Для кого мы?
      </h1>
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-[130px] px-[10%] py-10">
        <NumbCard num="01" name="IT проекты на стадии идеи" about="Для стартапов, которые планируют привлечь инвестиции" />
        <NumbCard num="02" name="Инновационный бизнес" about="Для стартапов, которые планируют привлечь инвестиции" />
        <NumbCard num="03" name="Корпорации" about="Для стартапов, которые планируют привлечь инвестиции" />
      </div>

      <section className="px-[5%] py-10 md:px-[10%]">
        <h1 className="text-[#1178B2] text-[30px] md:text-[45px] font-medium mb-8 text-center md:text-start">
          С какими рынками мы работаем?
        </h1>
<div className="pb-[50px] pt-[50px] grid grid-cols-2 md:flex gap-4">
  <button className="md:w-[318px] h-[70px] w-full bg-[#88BBD8] text-[white] transition-transform duration-300 hover:scale-105 rounded-lg shadow-md">
    Ближний восток
  </button>
  <button className="md:w-[318px] h-[70px] w-full bg-[#d5ebf7] text-[grey] transition-transform duration-300 hover:scale-105 rounded-lg shadow-md">
    Азия
  </button>
  <button className="md:w-[318px] h-[70px] w-full bg-[#d5ebf7] text-[grey] transition-transform duration-300 hover:scale-105 rounded-lg shadow-md">
    Латинская Америка
  </button>
  <button className="md:w-[318px] h-[70px] w-full bg-[#d5ebf7] text-[grey] transition-transform duration-300 hover:scale-105 rounded-lg shadow-md">
    Африка
  </button>
</div>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/3">
            <h2 className="text-[20px] md:text-[25px] font-bold mb-4">ЧЕМ ИНТЕРЕСЕН <br/><span className="text-[#07AF91]">РЫНОК MENA:</span></h2>
            <p className="text-gray-500 mb-6 text-[16px]">ОАЭ, Саудовская Аравия, Израиль, Оман, Бахрейн, Катар, Тунис, Йемен, Египет, Алжир</p>
            <br />
            <div className="flex items-center gap-[10px] mb-6"> 
              <img src="../public/img/Ellipse 527.png" alt="" />
              <div>
                <h3>Менеджер</h3>
                <p>Менеджер по MENA</p>
              </div>
            </div>
            <br />
            <button className="bg-[#61B5E4] text-white w-full md:w-auto px-8 py-3 rounded-lg font-bold">Выйти на рынок</button>
          </div>
          <div className="w-full md:w-2/3 grid grid-cols-2 gap-4">
            {stats.map((item, index) => (
              <RinokCard key={index} value={item.value} label={item.label} isDownload={item.isDownload} />
            ))}
          </div>
        </div>
      </section>


      <div className="startUp min-h-[400px] flex items-center justify-center px-4 py-10">
        <div className="flex flex-col items-center text-center w-full">
          <div className="flex flex-col items-center space-y-1 md:space-y-2 mb-6 w-full">
            <span className="bg-[#07AF91] text-white text-[16px] sm:text-[24px] md:text-[50px] font-bold px-3 py-1 md:px-6 md:py-2 uppercase inline-block leading-tight">Научитесь исследовать</span>
            <span className="bg-[#07AF91] text-white text-[16px] sm:text-[24px] md:text-[50px] font-bold px-3 py-1 md:px-6 md:py-2 uppercase inline-block leading-tight">иностранные рынки</span>
            <span className="bg-[#07AF91] text-white text-[16px] sm:text-[24px] md:text-[50px] font-bold px-3 py-1 md:px-6 md:py-2 uppercase inline-block leading-tight">и откройте новые</span>
            <span className="bg-[#07AF91] text-white text-[16px] sm:text-[24px] md:text-[50px] font-bold px-3 py-1 md:px-6 md:py-2 uppercase inline-block leading-tight">возможности для своего</span>
            <span className="bg-[#07AF91] text-white text-[16px] sm:text-[24px] md:text-[50px] font-bold px-3 py-1 md:px-6 md:py-2 uppercase inline-block leading-tight">бизнеса</span>
          </div> <br />
          <p className="text-white text-[14px] md:text-[20px] max-w-[90%] md:max-w-[700px] mb-8 font-light leading-snug">
            Наша команда поможет вам изучить рынки Ближнего Востока, <br className="hidden md:block" />
            Азии, Латинской Америки и Африки
          </p> <br />
          <button className="w-full max-w-[300px] md:w-auto bg-gradient-to-r from-[#61B5E4] to-[#1178B2] text-white text-[16px] md:text-[22px] px-8 md:px-12 py-4 rounded-[10px] shadow-lg active:scale-95 transition-all">
            Получить консультацию
          </button>
        </div>
      </div>


<div className="text-center pt-[100px]">

<h1 className="text-[#1178B2] md:text-[60px] font-medium">Об акселераторе IT бизнеса</h1> <br />
<p className="md:text-[24px] text-[grey]">Программа акселератора расчитана на 8 недель интенсивного онлайн <br />  курса с вебинарами приглашенных экспертов по международным рынкам, <br /> разборами ваших идей и проектов </p>
</div>


  <div className="flex flex-col md:flex-row items-center gap-10 md:gap-[130px] px-[10%] py-10">
<Card2 img="../public/img/3 (1).png" name="Месяца обучения" />
<Card2 img="../public/img/Vector (12).png" name="Приглашенные эксперты" />
<Card2 img="../public/img/Vector (13).png" name="Персональный менеджер" />
      </div>

<video src="../public/video/---Hisense_4K_Demo-_Australia_Scenery_-_YouTube.mp4"
className="w-full h-full object-cover" 
  loop 
  muted 
  playsInline
  controls
>

  Ваш браузер не поддерживает видео.
</video>


<h1 className="text-[#1178B2] md:text-[60px] md:pl-[10%] font-medium pt-[100px]">Программа акселератора</h1> <br />

<div className="flex justify-center w-full px-4">
  <div className="w-[340px] md:w-[1300px] bg-white rounded-[30px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden">
    
    <div className="flex items-center justify-between px-6 md:px-12 border-b border-gray-200 h-[80px]">
      <h1 className="text-[20px] md:text-[35px] font-medium leading-tight">
        <span className="text-[#2A79C2]">Модуль 1. </span>
        Тенденции и тренды современного мира
      </h1>
      <span className="text-[30px] cursor-pointer">🔼</span>
    </div>

    <div className="flex flex-col px-6 md:px-12">
      <p className="text-[16px] md:text-[22px] text-gray-600 border-b border-gray-200 h-[80px] flex items-center">
        Тема 1. Куда движутся IT тренды? Аналитика Gartner, разбор отчетов консалтинговых компаний
      </p>
      <p className="text-[16px] md:text-[22px] text-gray-600 border-b border-gray-200 h-[80px] flex items-center">
        Тема 2. Рынки Ближнего Востока, Азии, Латинской Америки
      </p>
      <p className="text-[16px] md:text-[22px] text-gray-600 border-b border-gray-200 h-[80px] flex items-center">
        Тема 3. Что такое внутренние и внешние инновации? Как искать инновационные идеи?
      </p>
      <p className="text-[16px] md:text-[22px] text-gray-500 font-medium h-[80px] flex items-center">
        9 видео роликов, вебинар с приглашенным экспертом
      </p>
    </div>
  </div>
</div>



<ModuleCard num="2" name="Стартап подход к созданию международного IT продукта"  />
<ModuleCard num="3" name="Бизнес моделирование и поиск Product Market Fit" />
<ModuleCard num="4" name="Определение рынка, поиск и исследование Целевой аудитории" />
<ModuleCard num="5" name="Unit экономика и финансовое моделирование" />
<ModuleCard num="6" name="Что такое дорожная карта продукта?" />
<ModuleCard num="7" name="Документы дя международных инвесторов" />
<ModuleCard num="8" name="Открытие юридического лица. Возможности для стартапов" />


<div className="w-full flex justify-start pl-[10%] pt-[50px] mt-8">
  <button className="max-w-[370px] md:w-auto bg-gradient-to-r from-[#61B5E4] to-[#1178B2] text-white text-[16px] md:text-[22px] px-8 md:px-12 py-4 rounded-[10px] shadow-lg active:scale-95 transition-all">
    Получить консультацию
  </button>
</div>



<div className="ZapisCard ">

<div>
  <h1 className="md:text-[50px] font-medium  md:text-start text-center text-[30px]">Попадите на радары <br /> инвесторов и партнеров</h1>
<br />
  <p className="md:text-[23px]  text-[18px] text-center md:text-start">В результате прохождения обучения мы создадим <br /> профили вашей компании на всех международных <br /> скаутинговых площадках</p>
<br />
    <button className="md:max-w-[370px] w-[320px] md:w-auto bg-gradient-to-r from-[#025835] to-[#00fcc1] text-white text-[16px] md:text-[22px] px-8 md:px-12 py-4 rounded-[10px] shadow-lg active:scale-95 transition-all ">
    Получить консультацию
  </button>
</div>

<div>

<div className="flex items-center gap-[30px] pt-[30px]">
<ZapisCard img="../public/img/Снимок экрана 2022-09-08 в 1.50.png" />
<ZapisCard img="../public/img/Снимок экрана 2022-09-08 в 1.50 (1).png" />
</div>

<div className="flex items-center gap-[30px] pt-[30px]">
<ZapisCard img="../public/img/Dealroom 1.png" />
<ZapisCard img="../public/img/unnamed 1.png" />
</div>

<div className="flex items-center gap-[30px] pt-[30px]">
<ZapisCard img="../public/img/unnamed 1.png" />
<ZapisCard img="../public/img/Снимок экрана 2022-09-08 в 1.50 (1).png" />
</div>

</div>


</div>


<h1 className="text-[#1178B2] md:text-[60px] font-medium pt-[100px] md:pl-[10%]">Программа акселератора</h1> <br />



     <div className="flex flex-col md:flex-row items-center gap-10 md:gap-[130px] px-[10%] py-10">
        <NumbCard num="01" name="IT проекты на стадии идеи" about="Для стартапов, которые планируют привлечь инвестиции" />
        <NumbCard num="02" name="Инновационный бизнес" about="Для стартапов, которые планируют привлечь инвестиции" />
        <NumbCard num="03" name="Корпорации" about="Для стартапов, которые планируют привлечь инвестиции" />
      </div>

    <div className="flex flex-col md:flex-row items-center gap-10 md:gap-[130px] px-[10%] py-10">
        <NumbCard num="04" name="IT проекты на стадии идеи" about="Для стартапов, которые планируют привлечь инвестиции" />
        <NumbCard num="05" name="Инновационный бизнес" about="Для стартапов, которые планируют привлечь инвестиции" />
        <NumbCard num="06" name="Корпорации" about="Для стартапов, которые планируют привлечь инвестиции" />
      </div>

<h1 className="text-[#1178B2] md:text-[60px] font-medium pt-[100px] md:pl-[10%]">Стоимость</h1> <br />


<div className="flex flex-col md:flex-row md:justify-around items-center gap-[40px] md:gap-[0px]">
      {stoimost.map((item, index) => (
              <StoimostCard key={index} img={item.img} name={item.name} cost={item.cost} />
            ))}

</div>



<h1 className="text-[#1178B2] md:text-[60px] font-medium pt-[100px] md:pl-[10%]">Кто мы?</h1> <br />


<div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 px-4 md:px-[10%]">
  
 
  <img 
    className="w-[300px] md:w-[600px] object-contain" 
    src="../public/img/Снимок экрана 2022-11-14 в 5.45 1 (1).png" 
    alt="INNOMA.VC" 
  />

  <div className="text-[20px] md:text-[23px] text-gray-500 text-center md:text-start">
    <h1 className="mb-6"> 
      <span className="text-[#1178B2] font-bold">INNOMA.VC - </span> 
      Международное аналитическое агентство по запуску IT бизнеса на локальных рынках регионов Азии, Ближнего Востока, Латинской Америки, Африки.
    </h1>
    <br />
    <h1>
      Международное аналитическое агентство по запуску IT бизнеса на локальных рынках регионов Азии, Ближнего Востока, Латинской Америки, Африки.
    </h1>
  </div>
</div>


<div className="flex flex-col  md:flex-row items-center justify-center gap-10 md:gap-20 px-4 md:px-[10%] md:pt-[50px]">
  
 
  <img 
    className="w-[300px] md:w-[600px] object-contain" 
    src="../public/img/Group 841 (1).png" 
    alt="INNOMA.VC" 
  />

  <div className="text-[20px]  md:text-[23px] text-gray-500 text-center md:text-start">
    <h1 className="mb-6"> 
      <span className="text-[#1178B2] font-bold">INNOMA.VC - </span> 
      Международное аналитическое агентство по запуску IT бизнеса на локальных рынках регионов Азии, Ближнего Востока, Латинской Америки, Африки.
    </h1>
    <br />
    <h1>
      Международное аналитическое агентство по запуску IT бизнеса на локальных рынках регионов Азии, Ближнего Востока, Латинской Америки, Африки.
    </h1>
  </div>
</div>


<div className="flex overflow-x-auto gap-4 py-4 px-4 scrollbar-hide justify-center gap-[10px] pt-[80px]">
  <img className="w-[250px] transition-transform duration-300 hover:scale-105 h-auto flex-shrink-0" src="../public/img/IMG_6197 2.png" alt="img" />
  <img className="w-[250px] transition-transform duration-300 hover:scale-105 h-auto flex-shrink-0" src="../public/img/test23444 1.png" alt="img" />
  <img className="w-[250px] transition-transform duration-300 hover:scale-105 h-auto flex-shrink-0" src="../public/img/test233 1.png" alt="img" />
  <img className="w-[250px] transition-transform duration-300 hover:scale-105 h-auto flex-shrink-0" src="../public/img/Снимок экрана 2022-09-02 в 1.56 1.png" alt="img" />
  <img className="w-[250px] transition-transform duration-300 hover:scale-105 h-auto flex-shrink-0" src="../public/img/IMG_6198 2.png" alt="img" />
</div>



<h1 className="text-[#1178B2] md:text-[60px] font-medium pt-[100px] md:pl-[10%]">Кто мы?</h1> <br />


<div className="flex flex-row overflow-x-auto md:overflow-visible md:flex-wrap md:justify-center gap-6 py-10 px-4 scrollbar-hide">
  {user.map((item, index) => (
    <div key={index} className="flex-shrink-0 md:flex-shrink-0 w-[280px] md:w-[300px]">
       <UserCard img={item.img} name={item.name} about={item.about} />
    </div>
  ))}
</div>

<h1 className="text-[#1178B2] md:text-[60px] font-medium pt-[100px] md:pl-[10%]">Наши партнеры</h1> <br />
<div className="grid grid-cols-2 gap-4 pt-[30px] pb-6 px-4 justify-items-center md:flex md:justify-center md:gap-[30px]">
  
    <div className="w-[160px] md:w-[250px] shadow-[0_20px_40px_rgba(0,0,0,0.15)] rounded-[20px] p-4 bg-white">
    <ZapisCard img="../public/img/Снимок экрана 2022-11-19 в 7.54.png" />
  </div>
  <div className="w-[160px] md:w-[250px] shadow-[0_20px_40px_rgba(0,0,0,0.15)] rounded-[20px] p-4 bg-white">
    <ZapisCard img="../public/img/Dealroom 1.png" />
  </div>
  
  <div className="w-[160px] md:w-[250px] shadow-[0_20px_40px_rgba(0,0,0,0.15)] rounded-[20px] p-4 bg-white">
    <ZapisCard img="../public/img/Снимок экрана 2022-11-19 в 7.52.png" />
  </div>

  <div className="w-[160px] md:w-[250px] shadow-[0_20px_40px_rgba(0,0,0,0.15)] rounded-[20px] p-4 bg-white">
    <ZapisCard img="../public/img/unnamed 1.png" />
  </div>


</div>

<div className="grid grid-cols-2 gap-4 pt-[30px] pb-6 px-4 md:flex md:flex-wrap md:justify-center md:gap-[30px]">
  
  <div className="w-full md:w-[250px] shadow-[0_20px_40px_rgba(0,0,0,0.15)] rounded-[20px] p-6 bg-white flex justify-center items-center">
    <ZapisCard img="../public/img/Dealroom 1.png" />
  </div>
  
    <div className="w-full md:w-[250px] shadow-[0_20px_40px_rgba(0,0,0,0.15)] rounded-[20px] p-6 bg-white flex justify-center items-center">
    <ZapisCard img="../public/img/Снимок экрана 2022-11-19 в 7.54.png" />
  </div>
  <div className="w-full md:w-[250px] shadow-[0_20px_40px_rgba(0,0,0,0.15)] rounded-[20px] p-6 bg-white flex justify-center items-center">
    <ZapisCard img="../public/img/Снимок экрана 2022-11-19 в 7.52.png" />
  </div>

  <div className="w-full md:w-[250px] shadow-[0_20px_40px_rgba(0,0,0,0.15)] rounded-[20px] p-6 bg-white flex justify-center items-center">
    <ZapisCard img="../public/img/unnamed 1.png" />
  </div>



</div>



      <div className="startUp min-h-[400px]  flex items-center justify-center px-4 py-10">
        <div className="flex flex-col items-center text-center w-full">
          <div className="flex flex-col items-center space-y-1 md:space-y-2 mb-6 w-full">
<h1 className="text-center md:text-[70px] font-medium  text-[25px]" >Мы создаем международное сообщество экспертов и партнеров</h1>
          </div> <br />
          <p className="text-white text-[14px] md:text-[20px] max-w-[90%] md:max-w-[700px] mb-8 font-light leading-snug">
            Наша команда поможет вам изучить рынки Ближнего Востока, <br className="hidden md:block" />
            Азии, Латинской Америки и Африки
          </p> <br />
          <button className="w-full max-w-[300px] md:w-auto bg-gradient-to-r from-[#61B5E4] to-[#1178B2] text-white text-[16px] md:text-[22px] px-8 md:px-12 py-4 rounded-[10px] shadow-lg active:scale-95 transition-all">
          Стать партнером
          </button>
        </div>
      </div>


<h1 className="text-[#1178B2] md:text-[60px] font-medium pt-[100px] md:pl-[10%]">Мероприятия и события</h1> <br />

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">

  <div className="bg-white rounded-[20px] transition-transform duration-300 hover:scale-105 shadow-[0_10px_30px_rgba(0,0,0,0.1)] overflow-hidden">
    <img src="../public/img/иллюстрация-вектора-карты-в-регионе-mena-eps-167723480 1.png" className="w-full h-[200px] object-cover" />
    <div className="p-6">
      <h2 className="font-bold text-[18px]">Новый отчет по MENA</h2>
      <p className="text-gray-500 mt-2">Аналитический отчет по рынкам...</p>
      <span className="block mt-4 text-sm text-gray-400">22.11.2022</span>
    </div>
  </div>

  <div className="bg-white transition-transform duration-300 hover:scale-105 rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.1)] overflow-hidden">
    <img src="../public/img/434ba4f5a20d0c361d4ae733771006a7 1.png" className="w-full h-[200px] object-cover" />
    <div className="p-6">
      <h2 className="font-bold text-[18px]">Вебинар по особенностям...</h2>
      <p className="text-gray-500 mt-2">Поговорим с экспертами рынков...</p>
      <span className="block mt-4 text-sm text-gray-400">22.11.2022</span>
    </div>
  </div>


  <div className="bg-white transition-transform duration-300 hover:scale-105 rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.1)] overflow-hidden">
    <img src="../public/img/Снимок экрана 2022-11-15 в 1.13 1.png" className="w-full h-[200px] object-cover" />
    <div className="p-6">
      <h2 className="font-bold text-[18px]">Вебинар по особенностям...</h2>
      <p className="text-gray-500 mt-2">Поговорим с экспертами рынков...</p>
      <span className="block mt-4 text-sm text-gray-400">22.11.2022</span>
    </div>
  </div>
</div>


<div className="ZapisCard p-8 md:p-20 text-white rounded-[0px] flex flex-col md:flex-row items-center justify-between gap-12">
  

  <div className="w-full md:w-1/2">
    <h2 className="text-[32px] md:text-[48px] font-bold mb-4">Остались вопросы?</h2>
    <p className="text-[18px] opacity-90 mb-10 md:pb-[100px]">Оставьте заявку и наша команда свяжется с вами</p>
    





   <div > <p className=" font-medium pt-[60px] pl-[5%]">Или напишите нам:</p>
<div className="flex items-center ">
<img className="w-[160px]" src="../public/img/Group 856.png" alt="" />
<img className="w-[160px]" src="../public/img/Group 855.png" alt="" />
</div>
</div>

  </div>


  <div className=" transition-transform duration-300 hover:scale-105  w-full md:w-[450px] bg-white text-black p-8 md:p-10 rounded-[10px] shadow-2xl">
    <form className="flex flex-col gap-6">
      <input type="text" placeholder="Имя" className="w-full border-b border-gray-300 pb-2 outline-none focus:border-[#00A884]" />
      <input type="email" placeholder="Почта" className="w-full border-b border-gray-300 pb-2 outline-none focus:border-[#00A884]" />
      <div className="flex items-center border-b border-gray-300 pb-2">
        <span className="mr-2 text-gray-500">▼ (971) 🇦🇪</span>
      </div>
      <button className="w-full bg-[#00A884] text-white py-4 rounded-xl font-bold hover:bg-[#008f6f] transition-colors">
        Оставить заявку
      </button>
    </form>
  </div>
</div>



<footer className="Footer flex items-center justify-around py-5 gap-[20px] pl-[5%]">

<img src="../public/img/Group 872.png" alt="" />
  <div className="flex items-center gap-[25px] text-[23px] hidden md:flex">
            <h2>Кто мы?</h2>
            <h2>Услуги</h2>
            <h2>Акселератор</h2>
            <h2>Новости</h2>
          </div>

<div>

</div>

<p>Dubai, Single Business Tower 1503, Business Bay
</p>

</footer>


    </div>
  );
}


