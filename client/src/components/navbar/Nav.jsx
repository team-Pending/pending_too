import React from "react";
import { useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import Search from "../Search";
import { useAuth } from "../../utils/auth";
import LoginModal from "../account/LoginModal";
import "./nav.css";
import DropDown from "./DropDown";
import Mediaphile from "../Mediaphile";
import { motion, AnimatePresence } from 'framer-motion';


function Navbar() {
  const { user, handleLogout } = useAuth();
  const [isModalVisible, setIsModalVisible] = useState(false)

	const handleLoginModalOpen = () => {
		setIsModalVisible(true);
	}

	const handleLoginModalClose = () => {
		setIsModalVisible(false);
	}

  return (
    <nav className="navbar">
      <Mediaphile />{" "}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>|</li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>|</li>
        <li>{user ? 
	<Link to="account"> {user.username} </Link>
	:
	<a onClick={handleLoginModalOpen}>Login</a>
}
				<AnimatePresence
				initial={false}
				wait={true}
				>
				{isModalVisible && <LoginModal onClose={handleLoginModalClose} />}
				</AnimatePresence>
        </li>
        {user != null && <li>|</li>}
        {user != null && (
          <li>
            <button className="noButton" onClick={
              handleLogout
              }>Logout</button>
          </li>
        )}
        {user?.isAdmin && <li>|</li>}
        {user?.isAdmin && <li><a href="/admin?page=dashboard&user=admin&password=123456">Admin Dashboard</a></li>}
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
