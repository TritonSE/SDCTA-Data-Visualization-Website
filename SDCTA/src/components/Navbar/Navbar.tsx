import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { NavbarLogin } from './NavbarLogin';
import { NavbarSubscribe } from './NavbarSubscribe';
import { NavbarNoButton } from './NavbarNoButton';
import './Navbar.css';
import logo from "./SDTEF Logo Transparent Background 1.svg";
<<<<<<< HEAD
import {selectLogin} from "./loginSlice"
import { selectSubscribe } from './subscribeSlice';
=======
import { selectLogin } from "../../slices/loginSlice"
import { selectSubscribe } from '../../slices/subscribeSlice';
>>>>>>> main
export const Navbar = () => {
   const isLoggedIn = useAppSelector(selectLogin);
   const isSubscribed = useAppSelector(selectSubscribe);
   const links = [
      {
         name: "Data Museum",
         route: "/",
      },
      {
         name: "Education",
         route: "/Education",
      },
      {
         name: "Homelessness",
         route: "/Homelessness",
<<<<<<< HEAD
      }, 
=======
      },
>>>>>>> main
      {
         name: "Municipal",
         route: "/Municipal"
      }
   ]
   return (
<<<<<<< HEAD
      <nav> 
         <a href="https://sdtef.org/"> 
            <img src={logo} className='logo'/>
=======
      <nav>
         <a href="https://sdtef.org/">
            <img src={logo} className='logo' />
>>>>>>> main
         </a>

         <div className="navLinks">
            {links.map((link, index) => (
               <NavLink style={({ isActive }) =>
<<<<<<< HEAD
               isActive ? {color:"#7F1922", fontWeight:1000} : undefined
             } to={link.route} className='links' key={index}>{link.name}</NavLink>
            ))}
         </div>            
             
=======
                  isActive ? { color: "#7F1922", fontWeight: 1000 } : undefined
               } to={link.route} className='links' key={index}>{link.name}</NavLink>
            ))}
         </div>

>>>>>>> main
         <div className='right'>
            {!isLoggedIn && !isSubscribed && <NavbarLogin />}
            {isLoggedIn && !isSubscribed && <NavbarSubscribe />}
            {isSubscribed && isLoggedIn && <NavbarNoButton />}
         </div>
      </nav>
   );
}