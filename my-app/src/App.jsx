import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom" 
import Home from './pages/Home';

import ProductById from "./pages/ProductById"
import Layout from './Layout/Layout';

const About = lazy(() =>new Promise((resolve) => { setTimeout(() => resolve(import("./pages/About")), 2000); }));
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index={true} element={<Home />} /> 
          <Route
           path='/about'
            element={
            <Suspense fallback={"loading..."}>
            <About /> </Suspense>} /> 
          <Route path='/product/:productId' element={<ProductById/>} /> 
        </Route>
        <Route path='*' element={<div>Not FOund</div>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App