import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../componentes/Home";
import Dashboard from "../componentes/Dashboard";
import About from "../componentes/About";
import React from 'react'

const Navigation = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default Navigation