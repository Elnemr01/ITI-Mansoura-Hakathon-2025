import { useContext, useState } from "react";
import { assets } from "../../assets/assets_frontend/assets";
import './header.css'
import { Link, NavLink } from "react-router-dom";
import { OurContext } from "../../contextAPI/FilterName";
import Account from "../account/Account";
const Header = () => {
  // added by elnemr
  const { setFilter, login } = useContext(OurContext);

  // ----------------------------------------------
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { to: '/', link: 'Home' },
    { to: '/allDocutors', link: 'ALL DOCTORS' },
    { to: '/about', link: 'ABOUT' },
    { to: '/contact', link: 'CONTACT' },
  ]
  // added by elnemr
  const showAll = (to) => {
    if (to === '/allDocutors')
      setFilter('');
  }
  // ----------------------------------------------
  return (
    <header className="header">
      <div className="header_desktop">
        {/* Logo */}
        <img src={assets.logo} alt="Logo" className="w-40" />

        {/* Desktop Menu */}
        <ul className="header_desktop_ul">
          {
            links.map((link, idx) => (
              <li key={idx} className="header_links" onClick={() => showAll(link.to)}>
                <NavLink to={link.to}>{link.link}
                  <hr className="link_active" />
                </NavLink>
              </li>
            ))
          }
        </ul>

        {/* Button */}
        {
          login ? '' : <Link to={'/login'}>
            <button className="header_desktop_btn btn_primary">
              Create Account
            </button>
          </Link>
        }


        {/* Mobile Menu Button */}
        {
          login ? (
            <div className="flex gap-3">
              <Account />
              <button
                className={`${menuOpen ? 'hidden' : ""} lg:hidden p-2 z-50`}
                onClick={() => setMenuOpen(true)}
              >
                <img src={assets.menu_icon} alt="menu" className="h-4" />
              </button>
            </div>
          ) :
            <button
              className={`${menuOpen ? 'hidden' : ""} lg:hidden p-2 z-50`}
              onClick={() => setMenuOpen(true)}
            >
              <img src={assets.menu_icon} alt="menu" className="h-4" />
            </button>
        }
      </div>

      {/* Mobile Menu */}
      <div
        className={`mobile_menu ${menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="mobile_header">
          <img src={assets.logo} alt="logo" className="w-28" />
          <button onClick={() => setMenuOpen(false)}>
            <img src={assets.cross_icon} className="h-7" alt="close icon" />
          </button>
        </div>
        <ul className="header_mobile_ul">
          {
            links.map((link, idx) => (
              <li key={idx} className="header_links mobile-links">
                <NavLink to={link.to} onClick={() => setMenuOpen(false)}>{link.link}
                  <hr className="link_active" />
                </NavLink>
              </li>
            ))
          }
        </ul>
        <div className="px-4 flex justify-center">
          {
            login ? (
              ''
            ) :
              (
                <Link to={'/login'}>
                  <button className="btn_primary">
                    Create Account
                  </button>
                </Link>
              )
          }
        </div>
      </div>
    </header>
  );
};

export default Header;
