import { NavLink } from "react-router-dom";
import { useFirebase } from "../../context/FirebaseContext";
import { useState, useRef, useEffect } from "react";

export const Header = () => {
  const { isLoggedIn, removeSign } = useFirebase();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (dropdownName) => {
    if (activeDropdown === dropdownName) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdownName);
    }
  };

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <NavLink to="/" onClick={closeAllDropdowns}>
              <span className="logo-icon">🏠</span>
              <span className="logo-text">Arrow Sites</span>
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <button
            className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`nav-links ${mobileMenuOpen ? 'nav-open' : ''}`} ref={dropdownRef}>
            <ul>
              {/* Buyers */}
              <li className={`dropdown ${activeDropdown === 'buyers' ? 'active' : ''}`}>
                <span onClick={() => toggleDropdown('buyers')}>
                  For Buyers
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div className="dropdown-menu">
                  <div className="dropdown-content">
                    <div className="dropdown-section">
                      <h4>Residential</h4>
                      <ul>
                        <li><NavLink to="/buy/apartments" onClick={closeAllDropdowns}>Apartments</NavLink></li>
                        <li><NavLink to="/buy/villas" onClick={closeAllDropdowns}>Villas</NavLink></li>
                        <li><NavLink to="/buy/plots" onClick={closeAllDropdowns}>Plots</NavLink></li>
                      </ul>
                    </div>
                    <div className="dropdown-section">
                      <h4>Commercial</h4>
                      <ul>
                        <li><NavLink to="/buy/offices" onClick={closeAllDropdowns}>Office Spaces</NavLink></li>
                        <li><NavLink to="/buy/retail" onClick={closeAllDropdowns}>Retail</NavLink></li>
                        <li><NavLink to="/buy/industrial" onClick={closeAllDropdowns}>Industrial</NavLink></li>
                      </ul>
                    </div>
                    <div className="dropdown-section">
                      <h4>New Projects</h4>
                      <ul>
                        <li><NavLink to="/buy/luxury" onClick={closeAllDropdowns}>Luxury</NavLink></li>
                        <li><NavLink to="/buy/affordable" onClick={closeAllDropdowns}>Affordable</NavLink></li>
                        <li><NavLink to="/buy/upcoming" onClick={closeAllDropdowns}>Upcoming</NavLink></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              {/* Tenants */}
              <li className={`dropdown ${activeDropdown === 'tenants' ? 'active' : ''}`}>
                <span onClick={() => toggleDropdown('tenants')}>
                  For Tenants
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div className="dropdown-menu">
                  <div className="dropdown-content">
                    <div className="dropdown-section">
                      <h4>Residential Rentals</h4>
                      <ul>
                        <li><NavLink to="/rent/flats" onClick={closeAllDropdowns}>Flats</NavLink></li>
                        <li><NavLink to="/rent/houses" onClick={closeAllDropdowns}>Independent Houses</NavLink></li>
                        <li><NavLink to="/rent/pg" onClick={closeAllDropdowns}>PG & Co-living</NavLink></li>
                      </ul>
                    </div>
                    <div className="dropdown-section">
                      <h4>Commercial Rentals</h4>
                      <ul>
                        <li><NavLink to="/rent/offices" onClick={closeAllDropdowns}>Office Spaces</NavLink></li>
                        <li><NavLink to="/rent/retail" onClick={closeAllDropdowns}>Retail Spaces</NavLink></li>
                        <li><NavLink to="/rent/warehouses" onClick={closeAllDropdowns}>Warehouses</NavLink></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              {/* Owners */}
              <li className={`dropdown ${activeDropdown === 'owners' ? 'active' : ''}`}>
                <span onClick={() => toggleDropdown('owners')}>
                  For Owners
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div className="dropdown-menu">
                  <div className="dropdown-content">
                    <div className="dropdown-section">
                      <h4>List Properties</h4>
                      <ul>
                        <li><NavLink to="/AddProp" onClick={closeAllDropdowns}>Post Property</NavLink></li>
                        <li><NavLink to="/owner/pricing" onClick={closeAllDropdowns}>Pricing Plans</NavLink></li>
                        <li><NavLink to="/owner/success" onClick={closeAllDropdowns}>Success Stories</NavLink></li>
                      </ul>
                    </div>
                    <div className="dropdown-section">
                      <h4>Manage Properties</h4>
                      <ul>
                        <li><NavLink to="/owner/manage" onClick={closeAllDropdowns}>Manage Listings</NavLink></li>
                        <li><NavLink to="/owner/performance" onClick={closeAllDropdowns}>Performance</NavLink></li>
                        <li><NavLink to="/owner/payments" onClick={closeAllDropdowns}>Payments</NavLink></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              {/* Static Links */}
              <li><NavLink to="/about" onClick={closeAllDropdowns}>About</NavLink></li>
              <li><NavLink to="/contact" onClick={closeAllDropdowns}>Contact</NavLink></li>
              <li><NavLink to="/Cards" onClick={closeAllDropdowns}>Properties</NavLink></li>
              <button className="btn btn-secondary" ><NavLink to="/AddProps" className="btn btn-primary">
                PO
              </NavLink></button>

              {!isLoggedIn ? (
                <li className="auth-link">
                  <NavLink to="/Register" className="btn btn-primary" onClick={closeAllDropdowns}>
                    Register / Login
                  </NavLink>
                </li>
              ) : (
                <li className="auth-link">
                  <button className="btn btn-secondary" onClick={removeSign}>Logout</button>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </header>

      {/* Inline CSS */}
      <style>
        {`
          :root {
            --primary-color: #0061ff;
            --primary-dark: #004ac7;
            --secondary-color: #ff3366;
            --text-dark: #2d3748;
            --text-light: #f8fafc;
            --gray-100: #f7fafc;
            --gray-200: #edf2f7;
            --gray-300: #e2e8f0;
            --gray-400: #cbd5e0;
            --gray-500: #a0aec0;
            --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
            --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
            --radius: 8px;
            --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          .header {
            background: #fff;
            box-shadow: var(--shadow);
            position: sticky;
            top: 0;
            z-index: 1000;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          }
          
          .header-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1.5rem;
            height: 70px;
          }
          
          .logo a {
            display: flex;
            align-items: center;
            text-decoration: none;
            font-weight: 700;
            font-size: 1.5rem;
            color: var(--primary-color);
          }
          
          .logo-icon {
            margin-right: 0.5rem;
            font-size: 1.8rem;
          }
          
          .logo-text {
            background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          .nav-links ul {
            display: flex;
            list-style: none;
            align-items: center;
            gap: 1.5rem;
          }
          
          .nav-links a,
          .nav-links span {
            text-decoration: none;
            color: var(--text-dark);
            font-weight: 500;
            font-size: 0.95rem;
            transition: var(--transition);
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 0.25rem;
          }
          
          .nav-links span {
            user-select: none;
          }
          
          .nav-links a:hover,
          .nav-links span:hover {
            color: var(--primary-color);
          }
          
          .nav-links a.active {
            color: var(--primary-color);
            font-weight: 600;
          }
          
          /* Dropdown styles */
          .dropdown {
            position: relative;
          }
          
          .dropdown-menu {
            position: absolute;
            top: 100%;
            left: 0;
            width: 600px;
            background: #fff;
            border-radius: var(--radius);
            box-shadow: var(--shadow-lg);
            opacity: 0;
            visibility: hidden;
            transform: translateY(10px);
            transition: var(--transition);
            z-index: 100;
            padding: 1.5rem;
          }
          
          .dropdown.active .dropdown-menu {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
          }
          
          .dropdown-content {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
          }
          
          .dropdown-section {
            display: flex;
            flex-direction: column;
          }
          
          .dropdown-section h4 {
            font-size: 0.9rem;
            color: var(--primary-color);
            margin-bottom: 0.75rem;
            font-weight: 600;
          }
          
          .dropdown-section ul {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
          }
          
          .dropdown-section a {
            padding: 0.5rem 0;
            font-size: 0.9rem;
            color: var(--text-dark);
            transition: var(--transition);
          }
          
          .dropdown-section a:hover {
            color: var(--primary-color);
            padding-left: 0.5rem;
          }
          
          /* Button styles */
          .btn {
            padding: 0.6rem 1.25rem;
            border-radius: var(--radius);
            font-weight: 600;
            font-size: 0.9rem;
            transition: var(--transition);
            cursor: pointer;
            border: none;
          }
          
          .btn-primary {
            background: var(--primary-color);
            color: white;
          }
          
          .btn-primary:hover {
            background: var(--primary-dark);
            transform: translateY(-2px);
            box-shadow: var(--shadow);
          }
          
          .btn-secondary {
            background: var(--secondary-color);
            color: white;
          }
          
          .btn-secondary:hover {
            opacity: 0.9;
            transform: translateY(-2px);
            box-shadow: var(--shadow);
          }
          
          /* Mobile menu toggle */
          .mobile-menu-toggle {
            display: none;
            flex-direction: column;
            justify-content: space-between;
            width: 30px;
            height: 21px;
            background: transparent;
            border: none;
            cursor: pointer;
            padding: 0;
            z-index: 10;
          }
          
          .mobile-menu-toggle span {
            width: 100%;
            height: 3px;
            background: var(--primary-color);
            border-radius: 3px;
            transition: var(--transition);
            transform-origin: left;
          }
          
          .mobile-menu-toggle.active span:nth-child(1) {
            transform: rotate(45deg);
          }
          
          .mobile-menu-toggle.active span:nth-child(2) {
            opacity: 0;
          }
          
          .mobile-menu-toggle.active span:nth-child(3) {
            transform: rotate(-45deg);
          }
          
          /* Mobile styles */
          @media (max-width: 968px) {
            .header-container {
              padding: 0 1rem;
            }
            
            .dropdown-menu {
              width: 300px;
            }
            
            .dropdown-content {
              grid-template-columns: 1fr;
            }
          }
          
          @media (max-width: 768px) {
            .mobile-menu-toggle {
              display: flex;
            }
            
            .nav-links {
              position: fixed;
              top: 70px;
              left: 0;
              width: 100%;
              height: calc(100vh - 70px);
              background: white;
              padding: 1.5rem;
              transform: translateX(-100%);
              transition: var(--transition);
              overflow-y: auto;
            }
            
            .nav-links.nav-open {
              transform: translateX(0);
            }
            
            .nav-links ul {
              flex-direction: column;
              align-items: flex-start;
              gap: 1rem;
            }
            
            .dropdown-menu {
              position: static;
              width: 100%;
              box-shadow: none;
              margin-top: 0.5rem;
              margin-left: 1rem;
              display: none;
              opacity: 1;
              visibility: visible;
              transform: none;
              padding: 1rem;
            }
            
            .dropdown.active .dropdown-menu {
              display: block;
            }
            
            .auth-link {
              margin-top: 1rem;
            }
          }
        `}
      </style>
    </>
  );
};