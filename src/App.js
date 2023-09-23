import React from 'react'
import { Routes,Route,NavLink } from "react-router-dom";
import { useState } from "react";
// import Home from './pages/Home.js';
import About from './pages/About.js';
import PageNotFound from './pages/PageNotFound.js';
import Services from "./pages/Services.js";
import Models from "./pages/Models.js";
import './App.css'
function App() {
  const [mode,setMode]=useState('dark');
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');

    }
    else{
      setMode('light');
    }
  }
  return (
    <>
     <nav className={`${mode} text1-${mode}`}>
        {/* <NavLink className={`Link-${mode} text1-${mode}`} to="/">Home</NavLink> */}
        <NavLink className={`Link-${mode} text1-${mode}`}  to="/">Car Models</NavLink>
        <NavLink className={`Link-${mode} text1-${mode}`}  to="/services">Services</NavLink>
        <NavLink className={`Link-${mode} text1-${mode}`}  to="/about">About us</NavLink>
        <div className="form-check form-switch">
          <input className="form-check-input" onClick={toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{mode}</label>
        </div>
        </nav>
        
        <Routes>
          {/* <Route path='/' element={<Home/>}/> */}
          <Route path='/' element={<Models/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path='*' element={<PageNotFound/>}></Route>
        </Routes>
    </>
  );
}

export default App;
