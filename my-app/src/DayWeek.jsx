

const DayWeek = ({ day,className}) => {
  return (
    <div className={className}  style={{border:"3px solid #DFCCB7",width:"200px",height:'37px', borderRadius:"30px",textAlign:"center",paddingBottom:"30px", fontSize:"20px"}}>
      <h3>{day}</h3>
    </div>
  )
}

export default DayWeek
