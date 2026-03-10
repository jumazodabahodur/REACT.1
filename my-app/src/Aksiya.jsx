

const Aksiya = ({name,about,className}) => {
  return (
    <div className={className}   style={{width:"645px",height:"252px",borderRadius:"20px",display:"flex",gap:"150px",padding:"20px",color:"white"}}>
      <div>
        <h3>{name}</h3>
        <p>{about}</p>
        <button style={{backgroundColor:"white",borderRadius:"30px",width:"195px",height:"48px",marginTop:"70px"}}>Подробнее</button>
      </div>
<img src="../public/img/Ellipse 15.png" alt="" />
    </div>
  )
}

export default Aksiya
