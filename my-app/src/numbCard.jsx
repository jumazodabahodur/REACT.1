const NumbCard = ({num, name, about}) => {
  return (
    <div className="w-[392px] h-[348px] mt-[30px] text-center bg-white rounded-[30px] shadow-2xl px-6 flex flex-col justify-center transition-transform duration-300 hover:scale-105"> 
      <h1 className="text-[80px] text-[#1178B280] font-bold leading-none">{num}</h1> <br />
      <h1 className="text-[25px] font-medium mt-4">{name}</h1> <br />
      <p className="text-gray-500 mt-2">{about}</p>
    </div>
  )
}

export default NumbCard