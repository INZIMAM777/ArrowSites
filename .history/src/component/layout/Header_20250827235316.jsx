import { NavLink } from "react-router-dom";
import { useFirebase } from "../context/ArrowContext";

export const Header = () => {
  const { isLoggedIn, removeSign } = useFirebase();

  return (
    <>
      <header className="header">
        <div className="logo">
          <NavLink to="/">🏠 Arrow Sites</NavLink>
        </div>

        <nav className="nav-links">
          <ul>
            {/* Buyers */}
            <li className="dropdown">
              <span>For Buyers ▾</span>
              <ul className="dropdown-menu">
                <li><NavLink to="/buy/residential">Residential</NavLink>
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
          .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: #003580;
            padding: 12px 40px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            position: sticky;
            top: 0;
            z-index: 1000;
          }
          .logo a {
            font-size: 22px;
            font-weight: bold;
            color: #fff;
            text-decoration: none;
          }
          .nav-links ul {
            list-style: none;
            display: flex;
            margin: 0;
            padding: 0;
            gap: 20px;
            align-items: center;
          }
          .nav-links li {
            position: relative;
          }
          .nav-links a, .nav-links span {
            text-decoration: none;
            font-size: 15px;
            font-weight: 500;
            color: #f1f1f1;
            transition: color 0.3s ease;
            cursor: pointer;
          }
          .nav-links a:hover,
          .nav-links a.active,
          .nav-links span:hover {
            color: #ffcc00;
          }

          /* Dropdown menu */
          .dropdown-menu {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            background: #fff;
            color: #333;
            min-width: 180px;
            border-radius: 4px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.2);
            padding: 8px 0;
            z-index: 100;
          }
          .dropdown-menu li {
            padding: 8px 15px;
            white-space: nowrap;
          }
          .dropdown-menu li a {
            color: #333;
            font-size: 14px;
            display: block;
          }
          .dropdown-menu li:hover {
            background: #f5f5f5;
          }

          /* Show on hover */
          .dropdown:hover .dropdown-menu {
            display: block;
          }

          /* Submenu */
          .submenu {
            display: none;
            position: absolute;
            top: 0;
            left: 100%;
            background: #fff;
            border-radius: 4px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.2);
            min-width: 160px;
            padding: 8px 0;
          }
          .dropdown-menu li:hover .submenu {
            display: block;
          }

          .btn {
            padding: 6px 14px;
            border-radius: 5px;
            border: none;
            cursor: pointer;
            background: #ffcc00;
            color: #003580;
            font-weight: 600;
            text-decoration: none;
          }
          .btn.logout {
            background: #ff4d4d;
            color: #fff;
          }
          .btn:hover {
            opacity: 0.9;
          }
          @media (max-width: 768px) {
            .header {
              flex-direction: column;
              align-items: flex-start;
              padding: 10px 20px;
            }
            .nav-links ul {
              flex-direction: column;
              gap: 10px;
              margin-top: 10px;
              align-items: flex-start;
            }
            .dropdown-menu, .submenu {
              position: static;
              box-shadow: none;
              background: transparent;
            }
            .dropdown-menu li, .submenu li {
              padding: 5px 0;
            }
          }
        `}
      </style>
    </>
  );
};
