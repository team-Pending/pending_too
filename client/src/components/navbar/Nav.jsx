import React from 'react';
import { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { Twirl as Hamburger } from 'hamburger-react';
import Search from '../Search';
// import { useAuth } from "../../custom-hooks/useAuth";
import ModalButton from '../modal/ModalButton';


import './nav.css'
import DropDown from './DropDown';
import Mediaphile from '../Mediaphile';

function Navbar() {
    const [isOpen, setOpen]=useState(false)
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

        <nav className='navbar'>
<Mediaphile />            <ul>
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li>|</li>
                <li>
                    <Link to="about">
                        About
                    </Link>
                </li>
                <li>|</li>
                <li>
                    <Link to='account'>
                        Account
                    </Link>
                </li>
            </ul>
            <ul className='hamburger'>
                <li>
                    {/* https://hamburger-react.netlify.app/ */}
                    <Hamburger size={30} toggled={isOpen} toggle={setOpen} />
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
            {isOpen && <DropDown />}
        </nav>
    );
}

export default Navbar;