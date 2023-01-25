import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from "./SDTEF Logo Transparent Background 1.svg"


export const Navbar = () => {
   return (
      <nav> 
         <img src={logo} className='logo'/>

         <div className="navLinks">
         <NavLink style={({ isActive }) =>
              isActive ? {color:"#7F1922"} : undefined
            } to="/" className='links'>Data Museum</NavLink>
            <NavLink style={({ isActive }) =>
              isActive ? {color:"#7F1922"} : undefined
            } to="/Education" className='links'>Education</NavLink>
            <NavLink style={({ isActive }) =>
              isActive ? {color:"#7F1922"} : undefined
            } to="/Homelessness" className='links'>Homelessness</NavLink> 
            <NavLink style={({ isActive }) =>
              isActive ? {color:"#7F1922"} : undefined
            } to="/Municipal" className='links'>Municipal</NavLink>            
         </div>            

             
         <div className='right'>
            <NavLink to="/page1" className='links'>Login</NavLink>  
            <button>Sign Up</button>
         </div>
      </nav>
   );
}