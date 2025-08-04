import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import logo from "../../assets/assets_frontend/logo.svg";
import "./header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const isLoggedIn = false; //local storage needed. 
  return (
    <nav className="header">
      <div className="header-container">
        <img src={logo} alt="Logo" className="header-logo" />

        <div className="mobile-toggle">
          <button onClick={() => setIsOpen(!isOpen)} className="menu-button">
            <svg
              className="menu-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/all-doctors">All Doctors</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>

          {!isLoggedIn && (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>

        {isLoggedIn ? (
          <div className="simple-profile-dropdown">
            <FaUserCircle className="plain-profile-icon" />
            <span onClick={() => setDropdownOpen(!dropdownOpen)}>
              <IoIosArrowDown className="plain-arrow-icon" />
            </span>

            {dropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/profile">My Profile</Link>
                <Link to="/appointments">My Appointment</Link>
                <button onClick={() => console.log("Logout")}>Logout</button>
              </div>
            )}
          </div>
        ) : (
          <div className="create-account-desktop">
            <Link to="/login" className="create-account-btn">
              Create account
            </Link>
          </div>
        )}
      </div>

      {isOpen && (
        <div className="mobile-menu">
          <ul className="mobile-nav-links">
            <li>
              <Link to="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/all-doctors" onClick={() => setIsOpen(false)}>
                All Doctors
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>

            {!isLoggedIn && (
              <li>
                <Link to="/login" onClick={() => setIsOpen(false)}>
                  Login
                </Link>
              </li>
            )}
          </ul>

          {!isLoggedIn && (
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="create-account-btn full-width"
            >
              Create account
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Header;
