    import React, { useState } from "react";
    import { Link } from "react-router-dom";
    import logo from "../../assets/assets_frontend/logo.svg";

    const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="flex items-center justify-between px-6 py-4">
            <img src={logo} alt="Logo" className="w-40 h-auto" />

            <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
                <svg
                className="w-6 h-6"
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

            <ul className="hidden md:flex gap-8 text-gray-700 font-bold items-center">
            <li>
                <Link to="/" className="hover:text-blue-600 transition">
                Home
                </Link>
            </li>
            <li>
                <Link to="/allDoctors" className="hover:text-blue-600 transition">
                All Doctors
                </Link>
            </li>
            <li>
                <Link to="/about" className="hover:text-blue-600 transition">
                About
                </Link>
            </li>
            <li>
                <Link to="/contact" className="hover:text-blue-600 transition">
                Contact
                </Link>
            </li>
            </ul>

            <div className="hidden md:block">
            <Link to={'/login'} className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-5 py-2 rounded-full hover:opacity-90 transition">
                Create account
            </Link>
            </div>
        </div>

        {isOpen && (
            <div className="md:hidden px-6 pb-4">
            <ul className="flex flex-col items-center gap-4 md:flex-row md:gap-8 text-gray-700 font-bold mx-auto">
                {" "}
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
                <li>
                </li>
            </ul>

            <Link to={'/login'}
                onClick={() => setIsOpen(false)}
                className="mt-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-5 py-2 rounded-full w-full"
            >
                Create account
            </Link>
            </div>
        )}
        </nav>
    );
    };

    export default Header;