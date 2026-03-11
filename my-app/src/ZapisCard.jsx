
const ZapisCard = ({img}) => {
  return (
    <div className="md:w-[205px] transition-transform duration-300 hover:scale-105 md:h-[111px]  w-[121px] h-[66px] bg-[white] rounded-[10px]">
     <img src={img} alt="" className="p-[33px] "/>
    </div>
  )
}

export default ZapisCard
