import React, { useCallback, useState } from 'react'
import Card from "./pages/Card"
const App = () => {

  const [count,setCount] = useState(0)
  const [count2,setCount2] = useState(0)

  const handelClick = useCallback(()=>{
console.log("Clicked");

  },[])

  console.log("Parent render");
  

  return (
    <div>
      <p>{count}</p>
      <button onClick={()=> setCount(count + 1)}>Inc</button>

         <p>{count2}</p>
      <button onClick={()=> setCount2(count2 + 1)}>Inc</button>
      <Card onClick={handelClick} count={count} />
    </div>
  )
}

export default App
