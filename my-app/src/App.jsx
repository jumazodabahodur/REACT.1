import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom" // Беҳтар аст "react-router-dom"
import Layout from "./Layout/Layout"; 
import Home from './pages/Home';
import About from './pages/About';
import ProductById from './pages/ProductById';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index={true} element={<Home />} /> 
          <Route path='/about' element={<About />} /> 
          <Route path='/product/:productId' element={<ProductById />} /> 
        </Route>
        <Route path='*' element={<div>Not FOund</div>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App