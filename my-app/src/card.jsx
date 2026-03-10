

const Card = ({ name,date,location,req,count}) => { 
    const isValid = req * 0.8 < count;
  return (
    <div style={{ margin: "15px", padding: "20px",width:"320px",borderRadius:"10px" ,textAlign:"start",fontWeight:"600",backgroundColor:"white",marginLeft:"-50px"}}>

        <div  style={{display:"flex",alignItems:"start",gap:"50px"}}>
            <div>
      <h2>{name}</h2>
      <p style={{color:"grey"}}>{date}</p>
      <button style={{backgroundColor:"rgb(175, 175, 241)",color:"rgb(132, 0, 255)",fontSize:"14px",border:"none",fontWeight:"700",borderRadius:"5px"}}>{location}</button>
      <h4>Pn,Vt,Cht,Pt,Sb</h4>
      </div>
<p style={{ 
  backgroundColor: isValid ? "lightgreen" : "salmon",
  padding: "5px", 
  borderRadius: "30px",
  textAlign: "center",
  width:"60px"
}}>
  {count}/{req}
</p>  
</div>

    <div style={{display:"flex",gap:"80px",alignItems:"center"}}>
        <button style={{ backgroundColor:"rgb(175, 175, 241)",color:"rgb(132, 0, 255)",fontSize:"20px",border:"none",fontWeight:"700",width:"120px",height:"40px",borderRadius:"10px"}}>Journal</button>
       <div >
        <button style={{border:"none",background:"white"}}>✈️</button>
        <button style={{border:"none",background:"white"}}>✏️</button>
        <button style={{border:"none",background:"white"}}>🗑️</button>
       </div>
      </div>
     
    </div>
  );
};

export default Card;