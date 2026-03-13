import React,{useState} from 'react'

const Api2 = () =>{

const [data,setData]=useState([
      { id: 1, name: "Idibek", age: 17, status: false },
        { id: 1, name: "Idibek", age: 17, status: false },
        { id: 1, name: "Idibek", age: 17, status: false },
])

const [nameEdit,setNameEdit] =useState("")
const [ageEdit,setAgeEdit] =useState("")
const [search,setSearch]= useState("")
const [idx,setIdx] = useState(null)
const [statusEdit,setStatusEdit] = useState(false)


const deleteUser = (id) =>{
    setData(data.filter((e)=>e.id !==id))
}


const showEdit = (e)=>{
    setNameEdit(e.name)
    setAgeEdit(e.age)
    setIdx(e.id)
    setStatusEdit(e.status)
}


const handleSubmit = (event)=>{
    event.preventDefault()

    const obj ={
        id: idx, name: nameEdit, age: ageEdit, status: statusEdit 
    }

    setData(data.map((e)=>e.id == idx?obj:e))

    setIdx(null)
    setNameEdit("")
    setAgeEdit("")
    setSearch("")



    if (idx === null) {
      const newUser = {
        id: Date.now(), 
        name: nameEdit,
        age: ageEdit,
        status: false
      };
      setData([...data, newUser]); 
    } else {

      const obj = { id: idx, name: nameEdit, age: ageEdit, status: statusEdit };
      setData(data.map((item) => (item.id === idx ? obj : item)));
    }


    setIdx(null);
    setNameEdit("");
    setAgeEdit("");
    setSearch("");

}





  return (
    <div className='p-10'>

        <form onSubmit={handleSubmit} className='p-10'>
            <input className='border m-2 p-1' value={nameEdit} onChange={(e)=>setNameEdit(e.target.value)} type="text" />
            <input className='border m-2 p-1' value={ageEdit} onChange={(e)=>setAgeEdit(e.target.value)} type="text" />
            <button type='submit' className='bg-blue-700'>Save</button>
        </form>
        <input value={search} onChange={(e)=> setSearch(e.target.value)} type="search" />
      
      <table>
<thead>
    <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Actions</th>
    </tr>
</thead>

<tbody>
{data.filter((el)=>el.name.toLowerCase().includes(search.trim().toLowerCase()))
.map((e)=>(
<tr key={e.id}>
<td>{e.name}</td>
<td>{e.age}</td>
<td>
    <button onClick = {()=> showEdit(e)}>Edit</button>
    <button onClick = {()=> deleteUser(e.id)}>Del</button>
</td>

</tr>

))}
</tbody>

      </table>


    </div>
  )
}

export default Api2
