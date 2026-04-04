import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import ProductDetail from './pages/ProductDetail'
import Account from './pages/Account'


const App = () => {
  return (
<BrowserRouter>
<Routes>
  <Route path="/" element={<Layout/>}>
  <Route index element ={<Home/>} />
<Route path="/account" element={<Account />} />
<Route path="/product/:id" element={<ProductDetail />} /> 
 <Route path="about" element ={<About/>} />
  </Route>


  
        <Route path="*" element={<div>Not Found</div>} />
</Routes>

</BrowserRouter>
  )
}

export default App
