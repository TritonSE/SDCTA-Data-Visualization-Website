import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from "./SDTEF Logo Transparent Background 1.svg"


export const Navbar = () => {
   return (
      <nav> 
         <div className="navLeft">
         <img src={logo} className='logo'/>

         <div className="navLinks">
            <Link to="/" className='links'>Data Museum</Link>
            <Link to="/Education" className='links'>Education</Link>
            <Link to="/Homelessness" className='links'>Homelessness</Link> 
            <Link to="/Municipal" className='links'>Municipal</Link>            
         </div>            
         </div>

             
         <div className='right'>
            <Link to="/page1" className='links'>Login</Link>  
            <button>Sign Up</button>
         </div>
      </nav>
   );
}