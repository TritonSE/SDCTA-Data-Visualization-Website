
import Nav from 'react-bootstrap/Nav';
import Companylogo from '../Images/SDTEF Logo Transparent Background 1.jpg';

export const NavBar = () => {
	return (
		<div>
			<nav className="navbar">
				<img src={Companylogo} alt="Company Logo" className="logo" />
				<div className="nav-items">
					<Nav.Link to="/" className="nav-item active-page">Data Museum</Nav.Link>
					<Nav.Link to="#education" className="nav-item">Education</Nav.Link>
					<Nav.Link to="#homelessness" className="nav-item">Homelessness</Nav.Link>
					<Nav.Link to="#municipal" className="nav-item">Municipal</Nav.Link>
				</div>
				<div className="nav-actions">
					<Nav.Link to="/login" className="login">Login</Nav.Link>
					<Nav.Link to="/signup" className="sign-up">Sign Up</Nav.Link>
				</div>
			</nav>
		</div>
	);
}