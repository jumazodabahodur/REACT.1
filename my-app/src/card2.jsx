

const Card2 = ({ img,name,about}) => { 
  
  return (
    <div style={{ margin: "15px", padding: "20px",width:"320px",borderRadius:"10px" ,textAlign:"start",fontWeight:"600",backgroundColor:"white",marginLeft:"-50px",backgroundColor:"#ffffff",height:"400px"}}>

<img src={img} alt="" width={300} />
<h1>{name}</h1>
<p>{about}</p> <br /> <br />

        <button style={{ backgroundColor:"rgb(255, 255, 255)",color:"rgb(0, 114, 21)",fontSize:"20px",border:"none",fontWeight:"700",width:"170px",height:"60px",borderRadius:"10px"}}>Подробнее о товаре</button>

   
     
    </div>
  );
};

export default Card2;