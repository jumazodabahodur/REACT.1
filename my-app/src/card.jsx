

const Card = ({ img,name,about}) => { 
  
  return (
    <div style={{ margin: "15px",color:"white", padding: "20px",width:"320px",borderRadius:"10px" ,textAlign:"start",fontWeight:"600",backgroundColor:"white",marginLeft:"-50px",backgroundColor:"#535353",height:"400px"}}>

<img src={img} alt="" />
<h1>{name}</h1>
<p>{about}</p> <br /> <br />

        <button style={{ backgroundColor:"rgb(10, 108, 8)",color:"rgb(255, 255, 255)",fontSize:"20px",border:"none",fontWeight:"700",width:"170px",height:"60px",borderRadius:"10px"}}>Подробнее о товаре</button>

   
     
    </div>
  );
};

export default Card;
