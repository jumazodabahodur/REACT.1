

const OService = ({img,name,about}) => {
  return (
    <div style={{width:"400px",height:"200px",padding:"30px"}}>
      <img src={img} alt="" />
      <h3 style={{color:"#493E3E"}}>{name}</h3>
      <p style={{color:"#493E3E"}}>{about}</p>
    </div>
  )
}

export default OService
