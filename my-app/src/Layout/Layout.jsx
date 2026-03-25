import React from 'react'
import { Link, Outlet } from "react-router-dom" 

const Layout = () => {



  return (
    <div>

        
      <nav style={{ display: 'flex', gap: '10px' }}>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
      </nav>
      <hr />
      <Outlet /> 
    </div>
  )
}

export default Layout