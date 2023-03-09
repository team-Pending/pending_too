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
				{user != null && (
				<li>|</li>)}
				{user != null && (
					<li>
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
				<li>
					<Search />
					{/* <section className='main-search'>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                        <input
                            type="text"
                            placeholder='Search'
                            className='main-search'
                        />
                    </section> */}
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
