import { NavLink } from "react-router-dom";
import "./Navbar.css";
import pfp from "./Profile Picture.svg";

export const NavbarNoButton = () => {
  return (
    <div>
      <NavLink to="/Profile">
        <img src={pfp} className="pfp" />
      </NavLink>
    </div>
  );
};
