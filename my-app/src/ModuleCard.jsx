const ModuleCard = ({num,name}) => {
  return (
    <div className="flex justify-center w-full px-4 mt-10 pt-[30px]">
      <div className="w-[340px] md:w-[1300px] bg-white rounded-[30px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden">
        
        <div className="flex items-center justify-between px-6 md:px-12 h-[100px]">
          <h1 className="text-[16px] md:text-[30px] font-medium leading-tight">
            <span className="text-[#2A79C2]">Модуль {num} </span>
           {name}
          </h1>
          <span className="text-[30px] cursor-pointer">🔽</span>
        </div>

      </div>
    </div>
  )
}

export default ModuleCard