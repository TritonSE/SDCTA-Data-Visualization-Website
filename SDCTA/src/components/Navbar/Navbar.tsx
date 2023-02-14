import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { NavbarLogin } from './NavbarLogin';
import { NavbarSubscribe } from './NavbarSubscribe';
import { NavbarNoButton } from './NavbarNoButton';
import './Navbar.css';
import logo from "./SDTEF Logo Transparent Background 1.svg";
import { selectLogin } from "../../slices/loginSlice"
import { selectSubscribe } from '../../slices/subscribeSlice';
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
      },
      {
         name: "Municipal",
         route: "/Municipal"
      }
   ]
   return (
      <nav>
         <a href="https://sdtef.org/">
            <img src={logo} className='logo' />
         </a>

         <div className="navLinks">
            {links.map((link, index) => (
               <NavLink style={({ isActive }) =>
                  isActive ? { color: "#7F1922", fontWeight: 1000 } : undefined
               } to={link.route} className='links' key={index}>{link.name}</NavLink>
            ))}
         </div>

         <div className='right'>
            {!isLoggedIn && !isSubscribed && <NavbarLogin />}
            {isLoggedIn && !isSubscribed && <NavbarSubscribe />}
            {isSubscribed && isLoggedIn && <NavbarNoButton />}
         </div>
      </nav>
   );
}