import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu';
import Search from '../Search';
import { useAuth } from '../../utils/auth';
import './nav.css';
import DropDown from './DropDown';
import Mediaphile from '../Mediaphile';

function Navbar() {
	const { user, handleLogout } = useAuth();
	// Laura added for auth requirement
	// const { authData, logout } = useAuth();

	return (
		// Laura Adding Auth requirement to nav bar.
		// <nav>
		//     <ul>
		//         {authData ? (
		//         <>
		//             <li>
		//                 Welcome, {authData.username}!
		//             </li>
		//             <li>
		//                 <button onClick={logout}>Log Out</button>
		//             </li>
		//         </>
		//     ) : (
		//         <>
		//             <li>
		//                 <a href="/login">Log In</a>
		//             </li>
		//             <li>
		//                 <a href="/signup">Sign Up</a>
		//             </li>
		//         </>
		//     )}

		//     </ul>
		// </nav>,
		// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

		<nav className="navbar">
			<Mediaphile />{' '}
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>|</li>
				<li>
					<Link to="about">About</Link>
				</li>
				<li>|</li>
				<li>
					<Link to="account">{user ? `${user.email}` : 'Account'}</Link>
				</li>
				<li>
					<Link to="cart">Cart</Link>
				</li>
				{user != null && (
				<li>|</li>)}
				{user != null && (
					<li>1
						<button onClick={handleLogout}>Logout"</button>
					</li>
				)}
			</ul>
			<ul className="hamburger">
				<li>
					<HamburgerMenu>
						<DropDown />
					</HamburgerMenu>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
