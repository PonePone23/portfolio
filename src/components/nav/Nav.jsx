import React from 'react'
import "./nav.css"
import { FaHome } from "react-icons/fa";
import { useState } from 'react';
const Nav = () => {
    const [activeNav,setActiveNav] = useState('#')
  return (
   <nav>
    <a href="#" onClick={()=>setActiveNav('#')} className={activeNav === "#" ? 'active' : ''}><FaHome/></a>
    <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === "#about" ? 'active' : ''}><FaHome/></a>
    <a href="#experience"><FaHome/></a>
    <a href="#contact"><FaHome/></a>
   </nav>
  )
}

export default Nav
