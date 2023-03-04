import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { Twirl as Hamburger } from 'hamburger-react';
import Search from '../Search';
<<<<<<< Updated upstream
// import { useAuth } from "../../custom-hooks/useAuth";
=======
import ModalButton from '../modal/ModalButton';

>>>>>>> Stashed changes

import './nav.css'

function Navbar() {
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
            <h1>Media<span className='phile'>phile</span></h1>
            <ul>
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
                    <Hamburger size={30} />
                </li>
                <li>
                    <ModalButton />
                </li>
                <li>
<<<<<<< Updated upstream
                    <Search />
=======
                    <ModalButton />
                </li>
                <li>
                <Search/>
>>>>>>> Stashed changes
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