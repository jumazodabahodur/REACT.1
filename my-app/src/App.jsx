import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './pages/Home'
import Add from './pages/Add'
import Info from "./pages/Info"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/info/:id" element={<Info />} />
          <Route path="add" element={<Add/>} />
        </Route>

        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App