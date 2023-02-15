import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';

export const NavbarLogin = () => {
   const navigate = useNavigate();
   return ( 
        <div>
            <NavLink to="/Login" className='links' id='login'>Login</NavLink>  
            <button className='navbar-button' id='sign-up' onClick={() => navigate("/Signup")}>Sign Up</button>
        </div>
   );
}