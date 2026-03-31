import axios from 'axios';
import React, { useEffect, useState } from 'react'

const App = () => {
const Api = "http://37.27.29.18:8001/api/to-dos"
const img_api = "http://37.27.29.18:8001/images"

const [data, setData] = useState([]);
const [loading,setLoading] = useState(false)
const [name,setName] = useState("")




const addData = async (obj)=>{
try {
  await axios.post(Api,obj)
  getData()
} catch (error) {
  console.error(error);
  
}
}

const handleSubmit = (event)=>{
  event.preventDefault()

  const formData = new FormData()
formData.append("Images",event.target["images"].files[0])
formData.append("Name",event.target["name"].value)
formData.append("Description",event.target["description"].value)


addData(formData)
event.target.reset();
}



const getData = async ()=>{
  try {
    setLoading(true)
    const res = await axios.get(Api)
    setData(res.data.data)
  } catch (error) {
    console.error(error);
    
  }finally{
    setLoading(false)
  }

  
}

  const delData = async (id) => {
    try {
      await axios.delete(`${Api}?id=${id}`);
      getData();
    } catch (error) {
      console.error(error);
    }
  };


useEffect(()=>{
  getData()
},[])

  return (
    <div>
<form onSubmit={handleSubmit}>
  <input className='bg-[grey]' name="name" type="text" />
  <input className='bg-[grey]' name="description" type="text" />
  <input className='bg-[grey]' name="images" type="file" />
  <button className='bg-[green] type="submit" '>Submit</button>
</form>

    {data.map((item)=>{
      return <div key={item.id} >
    
        <h1>{item.name}</h1>
        <button className='bg-[red]' onClick={()=>delData(item.id)}>del</button>
      {item.images.map((image)=>{
        return (
          <div>
          <img src={`${img_api}/${image.imageName}`} alt="" />
          </div>
        )
      })}
      </div>
    })}
    </div>
  )
}

export default App
