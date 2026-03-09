const ProgramaPitaniya = ({ num1, num2, className }) => {   
  return (
    <div   className={className}   style={{
        border: "1px solid #DFCCB7",
        width: "240px",
        height: "96px", 
        textAlign: "center",
        borderRadius: "30px"
      }}
    >
      <h3>{num1}</h3>
      <p>{num2}</p>
    </div>
  );
}

export default ProgramaPitaniya;


