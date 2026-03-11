
const UserCard = ({img,name,about}) => {
  return (
    <div className="w-[300px] h-100g text-center transition-transform duration-300 hover:scale-105">
      <img src={img} alt="" />
      <h1 className="font-bold text-[25px]">{name}</h1>
      <p>{about}</p>
    </div>
  )
}

export default UserCard
