
const ZapisCard = ({img}) => {
  return (
    <div className="md:w-51.25 transition-transform duration-300 hover:scale-105 md:h-27.75  w-30.25 h-16.5 bg-[white] rounded-[10px]">
     <img src={img} alt="" className="p-8.25 "/>
    </div>
  )
}

export default ZapisCard
