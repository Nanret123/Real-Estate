import React, { useState } from 'react';
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";
import { useAuth0 } from "@auth0/auth0-react";
import UserProfile from "../UserProfile/UserProfile.jsx";
import AddPropertyModal from "../AddPropertyModal/AddPropertyModal.jsx";
import useAuthCheck from "../../hooks/useAuthCheck.jsx";

const Header = () => {
    const [navbar, setNavbar] = useState(false);
    const [navOpen, setNavOpen] = useState(false);
    const [modalOpened, setModalOpened] = useState(false);
    const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
    const { validateLogin } = useAuthCheck();

    const handleAddProperty = () => {
       if(validateLogin()){
        setModalOpened(true);
       }
    };
   
    const changeBackground = () => {
        if (window.scrollY > 80) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    };

    window.addEventListener("scroll", changeBackground);

    return (
        <header className={navbar ? "header active" : "header"}>
			<Link to="/">
				<h1>Homex</h1>
			</Link>
			<ul className={navOpen ? "navbar open" :"navbar"}>
				<li><NavLink to="/">Home</NavLink></li>
				<li><NavLink>About Us</NavLink></li>
        <li><NavLink to="/properties">Properties</NavLink></li>
        <li><NavLink to="/bookings">Bookings</NavLink></li>
        <li><NavLink to="/favorites">Favorites</NavLink></li>
        <li><div onClick={handleAddProperty}>Add Property</div></li>
        {/*<AddPropertyModal opened={modalOpened} setOpened={setModalOpened} />*/}
        <li><NavLink>Contact Us</NavLink></li>
			</ul>

			<div className="header-btn">
				{ !isAuthenticated ? 
          (<button className="h-btn1" onClick={loginWithRedirect}>Login</button>) : ( <UserProfile user={user} logout={logout} />  )
        }
				<Link className="h-btn2">Signup</Link>
				<div className="menu-icon" onClick={()=> setNavOpen(!navOpen)}>{navOpen ? <FaTimes />:<FaBars/> }</div>
			</div>
		</header>
    )
}

export default Header