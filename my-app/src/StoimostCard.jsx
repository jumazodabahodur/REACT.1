
const StoimostCard = ({img,name,cost}) => {
  return (
    <div className="md:w-[392px] md:h-[890px] pt-[40px] bg-white rounded-[30px] shadow-2xl text-center transition-transform duration-300 hover:scale-105">
      <img src={img} alt="" className="pl-[40%] pt-[10%]"/> br
<h1 className="border-b border-gray-200 text-center text-[30px] font-medium">{name}</h1> <br />

<h3 className="text-[23px]">Что входит в отчет?</h3>
<p className="text-[20px] text-start pl-[5%] pt-[10px]">1.Анализ конкурентов</p>
<p className="text-[20px] text-start pl-[5%] pt-[10px]">2.Анализ инвесторов</p>
<p className="text-[20px] text-start pl-[5%] pt-[10px]">3.Размеры рынка (TAM,SAM,SOM)</p>
<p className="text-[20px] text-start pl-[5%] pt-[10px]">2.Анализ инвесторов</p>
<p className="border-b border-gray-300 text-[20px] text-start pl-[5%] pb-[50px]">3.Размеры рынка (TAM,SAM,SOM)</p>
<div className="flex items-center gap-[20%] border-b border-gray-300">
    <h2 className="text-[30px] text-start pl-[5%] pt-[10px]">Готовность</h2>

    <p className="text-[20px] text-start pl-[5%] pt-[10px]">7 раб. дней</p>
</div>

<div className="flex items-center gap-[42%] border-b border-gray-300">
    <h2 className="text-[30px] text-start pl-[5%] pt-[10px]">Язык</h2>

    <p className="text-[20px] text-start pl-[5%] pt-[10px]">рус. / англ.</p>
</div>

<div className="flex items-center gap-[21%] border-b border-gray-300 pb-[50px]">
    <h2 className="text-[30px] text-start pl-[5%] pt-[10px]">Стоимость</h2>

    <p className="text-[20px] text-start pl-[5%] pt-[10px] text-[#1178B2] font-bold">{cost}</p>
</div>

  <button className="md:max-w-[370px] transition-transform duration-300 hover:scale-105 w-[320px] md:w-auto bg-gradient-to-r from-[#016CA8] to-[#61B5E4] text-white text-[16px] md:text-[22px] px-8 md:px-12 py-4 rounded-[10px] shadow-lg active:scale-95 transition-all ">
    Получить консультацию
  </button>







    </div>
  )
}

export default StoimostCard
