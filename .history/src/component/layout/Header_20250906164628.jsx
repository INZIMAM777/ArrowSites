import { NavLink } from "react-router-dom";
import { useFirebase } from "../../context/FirebaseContext";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const { isLoggedIn, removeSign } = useFirebase();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);
  const navigate = useNavigate();

  // Close dropdown when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const toggleDropdown = (dropdownName) => {
    if (activeDropdown === dropdownName) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdownName);
    }
  };

  const handleHoverOpen = (dropdownName) => {
    if (window.innerWidth > 968) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setActiveDropdown(dropdownName);
    }
  };

  const handleHoverClose = () => {
    if (window.innerWidth > 968) {
      timeoutRef.current = setTimeout(() => {
        setActiveDropdown(null);
      }, 300);
    }
  };

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  const handlePropertyTypeSelect = (propertyType) => {
    navigate(`/Cards?propertyType=${propertyType}`);
    closeAllDropdowns();
  };

  // Handle keyboard navigation
  const handleKeyDown = (event, dropdownName) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleDropdown(dropdownName);
    }
  };

  return (
    <>
      <header className="header housing-header">
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
            aria-expanded={mobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav 
            className={`nav-links ${mobileMenuOpen ? 'nav-open' : ''}`} 
            ref={dropdownRef}
            aria-label="Main navigation"
          >
            <ul>
              {/* Buyers */}
              <li 
                className={`dropdown ${activeDropdown === 'buyers' ? 'active' : ''}`}
                onMouseEnter={() => handleHoverOpen('buyers')}
                onMouseLeave={handleHoverClose}
              >
                <span 
                  onClick={() => toggleDropdown('buyers')}
                  onKeyDown={(e) => handleKeyDown(e, 'buyers')}
                  tabIndex="0"
                  aria-haspopup="true"
                  aria-expanded={activeDropdown === 'buyers'}
                >
                  Buy
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <div className="dropdown-menu" role="menu">
                  <div className="dropdown-content">
                    <div className="dropdown-section">
                      <h4>Residential Properties</h4>
                      <ul role="group">
                        <li role="none">
                          <button 
                            onClick={() => handlePropertyTypeSelect("Residential Flat")} 
                            role="menuitem"
                            className="dropdown-link"
                          >
                            Flats
                          </button>
                        </li>
                        <li role="none">
                          <button 
                            onClick={() => handlePropertyTypeSelect("Residential Floors")} 
                            role="menuitem"
                            className="dropdown-link"
                          >
                            Floors
                          </button>
                        </li>
                        <li role="none">
                          <button 
                            onClick={() => handlePropertyTypeSelect("Residential plot")} 
                            role="menuitem"
                            className="dropdown-link"
                          >
                            Plots
                          </button>
                        </li>
                        <li role="none">
                          <button 
                            onClick={() => handlePropertyTypeSelect("Residential Land")} 
                            role="menuitem"
                            className="dropdown-link"
                          >
                            Lands
                          </button>
                        </li>
                        <li role="none">
                          <button 
                            onClick={() => handlePropertyTypeSelect("Residential Villa")} 
                            role="menuitem"
                            className="dropdown-link"
                          >
                            Villas
                          </button>
                        </li>
                        <li role="none">
                          <button 
                            onClick={() => handlePropertyTypeSelect("Residential Penthouse")} 
                            role="menuitem"
                            className="dropdown-link"
                          >
                            Penthouse
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdown-section">
                      <h4>Commercial Properties</h4>
                      <ul role="group">
                        <li role="none">
                          <button 
                            onClick={() => handlePropertyTypeSelect("Commercial Shop")} 
                            role="menuitem"
                            className="dropdown-link"
                          >
                            Shops
                          </button>
                        </li>
                        <li role="none">
                          <button 
                            onClick={() => handlePropertyTypeSelect("Commercial Office Space")} 
                            role="menuitem"
                            className="dropdown-link"
                          >
                            Office Space
                          </button>
                        </li>
                        <li role="none">
                          <button 
                            onClick={() => handlePropertyTypeSelect("Commercial Guest House")} 
                            role="menuitem"
                            className="dropdown-link"
                          >
                            Guest House
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              {/* Tenants */}
              <li 
                className={`dropdown ${activeDropdown === 'tenants' ? 'active' : ''}`}
                onMouseEnter={() => handleHoverOpen('tenants')}
                onMouseLeave={handleHoverClose}
              >
                <span 
                  onClick={() => toggleDropdown('tenants')}
                  onKeyDown={(e) => handleKeyDown(e, 'tenants')}
                  tabIndex="0"
                  aria-haspopup="true"
                  aria-expanded={activeDropdown === 'tenants'}
                >
                  Rent
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <div className="dropdown-menu" role="menu">
                  <div className="dropdown-content">
                    <div className="dropdown-section">
                      <h4>Residential Properties</h4>
                      <ul role="group">
                        <li role="none">
                          <button 
                            onClick={() => handlePropertyTypeSelect("Residential Flat")} 
                            role="menuitem"
                            className="dropdown-link"
                          >
                            Flats
                          </button>
                        </li>
                        <li role="none">
                          <button 
                            onClick={() => handlePropertyTypeSelect("Residential Floors")} 
                            role="menuitem"
                            className="dropdown-link"
                          >
                            Floors
                          </button>
                        </li>
                        <li role="none">
                          <button 
                            onClick={() => handlePropertyTypeSelect("Residential Villa")} 
                            role="menuitem"
                            className="dropdown-link"
                          >
                            Villas
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdown-section">
                      <h4>Commercial Properties</h4>
                      <ul role="group">
                        <li role="none">
                          <button 
                            onClick={() => handlePropertyTypeSelect("Commercial Office Space")} 
                            role="menuitem"
                            className="dropdown-link"
                          >
                            Office Space
                          </button>
                        </li>
                        <li role="none">
                          <button 
                            onClick={() => handlePropertyTypeSelect("Commercial Shop")} 
                            role="menuitem"
                            className="dropdown-link"
                          >
                            Shops
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              {/* Owners */}
              <li 
                className={`dropdown ${activeDropdown === 'owners' ? 'active' : ''}`}
                onMouseEnter={() => handleHoverOpen('owners')}
                onMouseLeave={handleHoverClose}
              >
                <span 
                  onClick={() => toggleDropdown('owners')}
                  onKeyDown={(e) => handleKeyDown(e, 'owners')}
                  tabIndex="0"
                  aria-haspopup="true"
                  aria-expanded={activeDropdown === 'owners'}
                >
                  Sell
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <div className="dropdown-menu" role="menu">
                  <div className="dropdown-content">
                    <div className="dropdown-section">
                      <h4>List Properties</h4>
                      <ul role="group">
                        <li role="none"><NavLink to="/AddPropr" onClick={closeAllDropdowns} role="menuitem">Post Property</NavLink></li>
                        <li role="none"><NavLink to="/owner/pricing" onClick={closeAllDropdowns} role="menuitem">Pricing Plans</NavLink></li>
                      </ul>
                    </div>
                    <div className="dropdown-section">
                      <h4>Manage Properties</h4>
                      <ul role="group">
                        <li role="none"><NavLink to="/owner/manage" onClick={closeAllDropdowns} role="menuitem">Manage Listings</NavLink></li>
                        <li role="none"><NavLink to="/owner/performance" onClick={closeAllDropdowns} role="menuitem">Performance</NavLink></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              {/* Static Links */}
              <li><NavLink to="/about" onClick={closeAllDropdowns}>About</NavLink></li>
              <li><NavLink to="/contact" onClick={closeAllDropdowns}>Contact</NavLink></li>
              <li><NavLink to="/Cards" onClick={closeAllDropdowns}>Properties</NavLink></li>
              <li><NavLink to="/Admin" onClick={closeAllDropdowns}>Admin</NavLink></li>

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
          .housing-header {
            background: #fff;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            position: sticky;
            top: 0;
            z-index: 1000;
            font-family: 'Poppins', sans-serif;
          }
          
          .header-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
            height: 72px;
          }
          
          .logo a {
            display: flex;
            align-items: center;
            text-decoration: none;
            font-weight: 700;
            font-size: 24px;
            color: #00c2a9;
          }
          
          .logo-icon {
            margin-right: 8px;
            font-size: 28px;
          }
          
          .logo-text {
            color: #00c2a9;
            font-weight: bold;
          }
          
          .nav-links ul {
            display: flex;
            list-style: none;
            align-items: center;
            gap: 28px;
            margin: 0;
            padding: 0;
          }
          
          .nav-links a,
          .nav-links span {
            text-decoration: none;
            color: #2d3958;
            font-weight: 500;
            font-size: 15px;
            transition: all 0.2s ease;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 4px;
            position: relative;
            padding: 10px 0;
          }
          
          .nav-links span {
            user-select: none;
            outline: none;
          }
          
          .nav-links a:hover,
          .nav-links span:hover,
          .nav-links a:focus,
          .nav-links span:focus {
            color: #00c2a9;
          }
          
          .nav-links a.active {
            color: #00c2a9;
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
            border-radius: 8px;
            box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
            opacity: 0;
            visibility: hidden;
            transform: translateY(10px);
            transition: all 0.2s ease;
            z-index: 100;
            padding: 20px;
            border: 1px solid #e6e9ef;
          }
          
          .dropdown.active .dropdown-menu {
            opacity: 1;
            visibility: visible;
            transform: translateY(8px);
          }
          
          .dropdown-content {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          
          .dropdown-section {
            display: flex;
            flex-direction: column;
          }
          
          .dropdown-section h4 {
            font-size: 14px;
            color: #2d3958;
            margin-bottom: 12px;
            font-weight: 600;
            padding-bottom: 8px;
            border-bottom: 1px solid #e6e9ef;
          }
          
          .dropdown-section ul {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 8px;
            margin: 0;
            padding: 0;
          }
          
          .dropdown-section a,
          .dropdown-section .dropdown-link {
            padding: 8px 0;
            font-size: 14px;
            color: #5f677d;
            transition: all 0.2s ease;
            border-radius: 4px;
            text-decoration: none;
            background: none;
            border: none;
            text-align: left;
            width: 100%;
            cursor: pointer;
          }
          
          .dropdown-section a:hover,
          .dropdown-section a:focus,
          .dropdown-section .dropdown-link:hover,
          .dropdown-section .dropdown-link:focus {
            color: #00c2a9;
            padding-left: 8px;
            background: #f5f7fc;
          }
          
          /* Button styles */
          .btn {
            padding: 10px 20px;
            border-radius: 4px;
            font-weight: 600;
            font-size: 14px;
            transition: all 0.2s ease;
            cursor: pointer;
            border: none;
            outline: none;
          }
          
          .btn:focus {
            box-shadow: 0 0 0 3px rgba(0, 194, 169, 0.2);
          }
          
          .btn-primary {
            background: #00c2a9;
            color: white;
          }
          
          .btn-primary:hover,
          .btn-primary:focus {
            background: #00a892;
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0, 194, 169, 0.2);
          }
          
          .btn-secondary {
            background: #ff5e63;
            color: white;
          }
          
          .btn-secondary:hover,
          .btn-secondary:focus {
            background: #e74c50;
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(255, 94, 99, 0.2);
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
            outline: none;
            position: relative;
          }
          
          .mobile-menu-toggle:focus {
            box-shadow: 0 0 0 3px rgba(0, 194, 169, 0.2);
            border-radius: 4px;
          }
          
          .mobile-menu-toggle span {
            width: 100%;
            height: 3px;
            background: #00c2a9;
            border-radius: 3px;
            transition: all 0.3s ease;
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
          
          /* Tablet styles (768px - 1024px) */
          @media (max-width: 1024px) {
            .header-container {
              padding: 0 16px;
            }
            
            .nav-links ul {
              gap: 20px;
            }
            
            .dropdown-menu {
              width: 500px;
            }
          }
          
          /* Mobile styles (below 768px) */
          @media (max-width: 768px) {
            .header-container {
              padding: 0 16px;
            }
            
            .mobile-menu-toggle {
              display: flex;
            }
            
            .nav-links {
              position: fixed;
              top: 72px;
              left: 0;
              width: 100%;
              height: calc(100vh - 72px);
              background: white;
              padding: 20px;
              transform: translateX(-100%);
              transition: transform 0.3s ease-in-out;
              overflow-y: auto;
            }
            
            .nav-links.nav-open {
              transform: translateX(0);
            }
            
            .nav-links ul {
              flex-direction: column;
              align-items: flex-start;
              gap: 20px;
            }
            
            .dropdown-menu {
              position: static;
              width: 100%;
              box-shadow: none;
              margin-top: 10px;
              margin-left: 15px;
              display: none;
              opacity: 1;
              visibility: visible;
              transform: none;
              padding: 15px;
              border: none;
              border-left: 3px solid #00c2a9;
            }
            
            .dropdown.active .dropdown-menu {
              display: block;
              transform: none;
            }
            
            .dropdown-content {
              grid-template-columns: 1fr;
              gap: 15px;
            }
            
            .auth-link {
              margin-top: 20px;
            }
          }
          
          /* Small mobile devices */
          @media (max-width: 480px) {
            .logo-text {
              font-size: 20px;
            }
            
            .nav-links {
              padding: 15px;
            }
          }
        `}
      </style>
    </>
  );
};