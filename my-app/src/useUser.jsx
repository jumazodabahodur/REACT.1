import React, { useState } from 'react'
import axios from "axios"

const Api = "http://localhost:3001/users"

const useUser = () => {

    const [data,setData] = useState([])
    // const {searchText,setSearchText} = useState("")

    const getData = async ()=>{
        try {
        const {data} = await axios.get(Api)
        setData(data)

        } catch (error) {
            console.error(error);
            
        }
    }


    const deleteUser = async () =>{
        try {
            await axios.delete(`${Api}/${id}`)
            getData()
        } catch (error) {
            console.error(error);
            
        }
    }

    


    // const Check = async ()=>{
    // try {
    //         await axios.patch(`${Api}/${users.id}`,(status:!user.status))
    // } catch (error) {
    //     console.error(error);
        
    // }
    // }




  return {
deleteUser,
refresh:getData
  }
}

export default useUser
