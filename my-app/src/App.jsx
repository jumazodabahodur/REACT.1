import React, { useEffect, useState } from 'react'
import axios from 'axios';

const App = () => {
const Api = "http://localhost:3001/users"
const [data,setData] = useState([])

async function GetData() {
  try {
    const {data} = await axsios.get(Api)
    setData(data)
  } catch (error) {
    console.error(error);
    
  }
}


async function DeleteData(id) {
  try {
    await axsios.delete(`${Api}/${id}`)
  } catch (error) {
  console.error(error);
    
  }
}

useEffect(()=>{
  GetData()
},[])

  return (
    <div>
      {data.map((e)=>{
        return(
          <div>
            <h1>{e.name}</h1>
            <button onClick={()=>DeleteData(e.id)}></button>
          </div>
        )
      })}
      
    </div>
  )
}

export default App
