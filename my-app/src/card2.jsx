const Card2 = ({img,name}) => {
  return (
<div className="w-[392px] h-[348px] mt-[30px] text-center bg-white rounded-[30px] shadow-2xl px-6 flex flex-col items-center justify-center"> 
  <img src={img} alt="" width={100} className="mx-auto" /> <br />
  <h1 className="text-[25px] font-medium mt-4">{name}</h1>
</div>
  )
}

export default Card2
