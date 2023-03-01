import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

import './nav.css'

function Navbar() {
    return (
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
                    <Link>
                        Account
                    </Link>
                </li>
            </ul>

            <section className='main-search'>                
            <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input
                    type="text" 
                    placeholder='Search'
                    className='main-search'
                />
            </section>
        </nav>
    );
}

export default Navbar;