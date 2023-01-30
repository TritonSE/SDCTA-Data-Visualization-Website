import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { NavbarLogin } from './NavbarLogin';
import { NavbarSubscribe } from './NavbarSubscribe';
import { NavbarNoButton } from './NavbarNoButton';
import './Navbar.css';
import logo from "./SDTEF Logo Transparent Background 1.svg";

export const Navbar = () => {
   const [isFree, setIsFree] = useState(false);
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   const [isSubscribed, setIsSubscribed] = useState(true);

   return (
      <nav> 
         <a href="https://sdtef.org/"  target="_blank"> 
            <img src={logo} className='logo'/>
         </a>

         <div className="navLinks">
         <NavLink style={({ isActive }) =>
              isActive ? {color:"#7F1922"} : undefined
            } to="/" className='links' id='data-museum'>Data Museum</NavLink>
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
            {isFree && <NavbarLogin />}
            {isLoggedIn && <NavbarSubscribe />}
            {isSubscribed && <NavbarNoButton />}
         </div>
      </nav>
   );
}