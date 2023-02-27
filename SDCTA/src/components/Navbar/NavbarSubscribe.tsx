import { NavLink, useNavigate } from 'react-router-dom'
import './Navbar.css'
import pfp from './Profile Picture.svg'

export const NavbarSubscribe: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div className="pfp-subscribe-class">
      <button
        className="navbar-button"
        id="subscribe"
        onClick={() => { navigate('/Subscribe') }}
      >
        Subscribe
      </button>
      <NavLink to="/Profile">
        <img src={pfp} className="pfp" id="pfp-subscribe" />
      </NavLink>
    </div>
  )
}
