import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { NavbarLogin } from './NavbarLogin';
import { NavbarSubscribe } from './NavbarSubscribe';
import { NavbarNoButton } from './NavbarNoButton';
import './Navbar.css';
import logo from "./SDTEF Logo Transparent Background 1.svg";
import {selectLogin} from "./loginSlice"
import { selectSubscribe } from './subscribeSlice';
export const Navbar = () => {
   // const [isFree, setIsFree] = useState(false);
   const isLoggedIn = useAppSelector(selectLogin);
   const isSubscribed = useAppSelector(selectSubscribe);

   return (
      <nav> 
         <a href="https://sdtef.org/"> 
            <img src={logo} className='logo'/>
         </a>

         <div className="navLinks">
         <NavLink style={({ isActive }) =>
              isActive ? {color:"#7F1922", fontWeight:1000} : undefined
            } to="/" className='links' id='data-museum'>Data Museum</NavLink>
            <NavLink style={({ isActive }) =>
              isActive ? {color:"#7F1922", fontWeight:1000} : undefined
            } to="/Education" className='links'>Education</NavLink>
            <NavLink style={({ isActive }) =>
              isActive ? {color:"#7F1922", fontWeight:1000} : undefined
            } to="/Homelessness" className='links'>Homelessness</NavLink> 
            <NavLink style={({ isActive }) =>
              isActive ? {color:"#7F1922", fontWeight:1000} : undefined
            } to="/Municipal" className='links'>Municipal</NavLink>            
         </div>            
             
         <div className='right'>
            {!isLoggedIn && !isSubscribed && <NavbarLogin />}
            {isLoggedIn && !isSubscribed && <NavbarSubscribe />}
            {isSubscribed && isLoggedIn && <NavbarNoButton />}
         </div>
      </nav>
   );
}