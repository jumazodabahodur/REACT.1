
const MenuCard = ({img,gr,name,className}) => {
  return (
    <div className={className} style={{width:"470px",height:"400px"}}>
      <img src={img} alt="" />
      <p style={{color:"#A98C64"}}>{gr}</p>
      <h3 style={{fontWeight:"545"}}>{name}</h3>
    </div>
  )
}

export default MenuCard
