const RinokCard = ({ value, label }) => {
  return (
    <div className="h-[220px] flex flex-col justify-center items-center p-8 rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-transform hover:scale-105 bg-white text-center border border-gray-50">
      <h1 className="text-[40px] font-bold mb-2 text-[#61B5E4]">{value}</h1>
      <p className="text-[16px] text-gray-500 leading-tight">
        {label}
      </p>
    </div>
  );
};

export default RinokCard;