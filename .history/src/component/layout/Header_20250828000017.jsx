import { NavLink } from "react-router-dom";
import { useFirebase } from "../../context/FirebaseContext";
import { useState } from "react";

export const Header = () => {
  const { isLoggedIn, removeSign } = useFirebase();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="logo">
          <NavLink to="/">🏠 Arrow Sites</NavLink>
        </div>

        {/* Mobile menu button */}
        <button 
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-links ${mobileMenuOpen ? 'nav-open' : ''}`}>
          <ul>
            {/* Buyers */}
            <li className="dropdown">
              <span>For Buyers ▾</span>
              <ul className="dropdown-menu">
                <li className="has-submenu">
                  <NavLink to="/buy/residential">Residential</NavLink>
                  <ul className="submenu">
                    <li><NavLink to="/buy/apartments">Apartments</NavLink></li>
                    <li><NavLink to="/buy/villas">Villas</NavLink></li>
                    <li><NavLink to="/buy/plots">Plots</NavLink></li>
                  </ul>
                </li>
                <li><NavLink to="/buy/commercial">Commercial</NavLink></li>
                <li><NavLink to="/buy/new-projects">New Projects</NavLink></li>
              </ul>
            </li>

            {/* Tenants */}
            <li className="dropdown">
              <span>For Tenants ▾</span>
              <ul className="dropdown-menu">
                <li><NavLink to="/rent/flats">Flats</NavLink></li>
                <li><NavLink to="/rent/houses">Independent Houses</NavLink></li>
                <li><NavLink to="/rent/pg">PG & Co-living</NavLink></li>
                <li><NavLink to="/rent/commercial">Commercial</NavLink></li>
              </ul>
            </li>

            {/* Owners */}
            <li className="dropdown">
              <span>For Owners ▾</span>
              <ul className="dropdown-menu">
                <li><NavLink to="/AddProp">Post Property</NavLink></li>
                <li><NavLink to="/owner/manage">Manage Listings</NavLink></li>
                <li><NavLink to="/owner/services">Owner Services</NavLink></li>
              </ul>
            </li>

            {/* Static Links */}
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/Cards">Properties</NavLink></li>

            {!isLoggedIn ? (
              <li><NavLink to="/Register" className="btn">Register / Login</NavLink></li>
            ) : (
              <li><button className="btn logout" onClick={removeSign}>Logout</button></li>
            )}
          </ul>
        </nav>
      </header>

      {/* 🔽 Inline CSS */}
      <style>
        {`
          :root {
            --primary-color: #003580;
            --secondary-color: #ffcc00;
            --accent-color: #ff4d4d;
            --text-light: #f1f1f1;
            --text-dark: #333;
            --shadow: 0 2px 8px rgba(0,0,0,0.15);
            --transition: all 0.3s ease;
          }
          
          .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: var(--primary-color);
            padding: 0.75rem 2.5rem;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            position: sticky;
            top: 0;
            z-index: 1000;
          }
          
          .logo a {
            font-size: 1.4rem;
            font-weight: bold;
            color: var(--text-light);
            text-decoration: none;
            transition: var(--transition);
          }
          
          .logo a:hover {
            color: var(--secondary-color);
          }
          
          .mobile-menu-toggle {
            display: none;
            flex-direction: column;
            justify-content: space-around;
            width: 30px;
            height: 25px;
            background: transparent;
            border: none;
            cursor: pointer;
            padding: 0;
            z-index: 10;
          }
          
          .mobile-menu-toggle span {
            width: 30px;
            height: 3px;
            background: var(--text-light);
            border-radius: 5px;
            transition: var(--transition);
            transform-origin: center;
          }
          
          .nav-links ul {
            list-style: none;
            display: flex;
            margin: 0;
            padding: 0;
            gap: 1.5rem;
            align-items: center;
          }
          
          .nav-links li {
            position: relative;
          }
          
          .nav-links a, 
          .nav-links span {
            text-decoration: none;
            font-size: 0.95rem;
            font-weight: 500;
            color: var(--text-light);
            transition: var(--transition);
            cursor: pointer;
            padding: 0.5rem 0;
            display: inline-block;
          }
          
          .nav-links a:hover,
          .nav-links a.active,
          .nav-links span:hover {
            color: var(--secondary-color);
          }
          
          /* Dropdown menu */
          .dropdown-menu {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            background: #fff;
            min-width: 200px;
            border-radius: 4px;
            box-shadow: var(--shadow);
            padding: 0.5rem 0;
            z-index: 100;
          }
          
          .dropdown-menu li {
            padding: 0;
          }
          
          .dropdown-menu li a {
            color: var(--text-dark);
            font-size: 0.9rem;
            display: block;
            padding: 0.6rem 1rem;
          }
          
          .dropdown-menu li:hover {
            background: #f5f5f5;
          }
          
          .has-submenu {
            position: relative;
          }
          
          /* Submenu */
          .submenu {
            display: none;
            position: absolute;
            top: 0;
            left: 100%;
            background: #fff;
            border-radius: 4px;
            box-shadow: var(--shadow);
            min-width: 160px;
            padding: 0.5rem 0;
          }
          
          .has-submenu:hover .submenu {
            display: block;
          }
          
          /* Show on hover */
          .dropdown:hover .dropdown-menu {
            display: block;
          }
          
          .btn {
            padding: 0.5rem 1rem;
            border-radius: 5px;
            border: none;
            cursor: pointer;
            background: var(--secondary-color);
            color: var(--primary-color);
            font-weight: 600;
            text-decoration: none;
            transition: var(--transition);
          }
          
          .btn.logout {
            background: var(--accent-color);
            color: #fff;
          }
          
          .btn:hover {
            opacity: 0.9;
            transform: translateY(-2px);
          }
          
          /* Mobile styles */
          @media (max-width: 768px) {
            .header {
              padding: 0.75rem 1.25rem;
            }
            
            .mobile-menu-toggle {
              display: flex;
            }
            
            .nav-links {
              position: absolute;
              top: 100%;
              left: 0;
              width: 100%;
              background: var(--primary-color);
              padding: 1rem;
              box-shadow: 0 5px 10px rgba(0,0,0,0.1);
              transform: translateY(-10px);
              opacity: 0;
              visibility: hidden;
              transition: var(--transition);
            }
            
            .nav-open {
              transform: translateY(0);
              opacity: 1;
              visibility: visible;
            }
            
            .nav-links ul {
              flex-direction: column;
              gap: 0.5rem;
              align-items: flex-start;
            }
            
            .dropdown-menu, 
            .submenu {
              position: static;
              box-shadow: none;
              background: rgba(255,255,255,0.1);
              display: none;
              margin-left: 1rem;
              width: calc(100% - 2rem);
            }
            
            .dropdown:hover .dropdown-menu,
            .has-submenu:hover .submenu {
              display: block;
            }
            
            .dropdown-menu li, 
            .submenu li {
              padding: 0.25rem 0;
            }
            
            .dropdown-menu li a, 
            .submenu li a {
              color: var(--text-light);
              padding: 0.5rem 1rem;
            }
          }
        `}
      </style>
    </>
  );
};