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

  // Handle property type selection from dropdown
  // const handlePropertyTypeSelect = (propertyType, transactionType) => {
  //   // Navigate to Cards page with query parameters
  //   navigate(`/Cards?propertyType=${propertyType}&transaction_type=${transactionType}`);
  //   closeAllDropdowns();
  // };
  const handlePropertyTypeSelect = (propertyType) => {
    // Navigate to Cards page with query parameters
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
                  For Buyers 
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
                            onClick={() => handlePropertyTypeSelect("Residential Flat", "buy")} 
                            role="menuitem"
                            className="dropdown-link"
                          >
                            Flats
                          </button>
                        </li>
                        <li role="none">
                          <button 
                            onClick={() => handlePropertyTypeSelect("Residential Floors", "buy")} 
                            role="menuitem"
                            className="dropdown-link"
                          >
                            Floors
                          </button>
                        </li>
                        <li role="none">
                          <button 
                            onClick={() => handlePropertyTypeSelect("Residential plot", "buy")} 
                            role="menuitem"
                            className="dropdown-link"
                          >
                            Plots
                          </button>
                        </li>
                        <li role="none">
                          <button 
                            onClick={() => handlePropertyTypeSelect("Residential Land", "buy")} 
                            role="menuitem"
                            className="dropdown-link"
                          >
                            Lands
                          </button>
                        </li>
                        <li role="none">
                          <button 
                            onClick={() => handlePropertyTypeSelect("Residential Villa", "buy")} 
                            role="menuitem"
                            className="dropdown-link"
                          >
                            Villas
                          </button>
                        </li>
                        <li role="none">
                          <button 
                            onClick={() => handlePropertyTypeSelect("Residential Penthouse", "buy")} 
                            role="menuitem"
                            className="dropdown-link"
                          >
                            Penthouse
                          </button>
                        </li>
                        <li role="none">
                          <button 
                            onClick={() => handlePropertyTypeSelect("Residential Service Apartment", "buy")} 
                            role="menuitem"
                            className="dropdown-link"
                          >
                            Service Apartment
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdown-section">
                      <h4>Commercial Properties</h4>
                      <ul role="group">
                        <li role="none">
                          <button 
                            onClick={() => handlePropertyTypeSelect("Commercial Shop", "buy")} 
                            role="menuitem"
                            className="dropdown-link"
                          >
                            Shops
                          </button>
                        </li>
                        <li role="none">
                          <button 
                            onClick={() => handlePropertyTypeSelect("Commercial Office Space", "buy")} 
                            role="menuitem"
                            className="dropdown-link"
                          >
                            Office Space
                          </button>
                        </li>
                        <li role="none">
                          <button 
                            onClick={() => handlePropertyTypeSelect("Commercial Guest House", "buy")} 
                            role="menuitem"
                            className="dropdown-link"
                          >
                            Guest House
                          </button>
                        </li>
                        <li role="none">
                          <button 
                            onClick={() => handlePropertyTypeSelect("Commercial Service Apartment", "buy")} 
                            role="menuitem"
                            className="dropdown-link"
                          >
                            Service Apartment
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdown-section">
                      <h4>Industrial</h4>
                      <ul role="group">
                        <li role="none">
                          <button 
                            onClick={() => handlePropertyTypeSelect("Industrial Factory", "buy")} 
                            role="menuitem"
                            className="dropdown-link"
                          >
                            Factory
                          </button>
                        </li>
                        <li role="none">
                          <button 
                            onClick={() => handlePropertyTypeSelect("Industrial Plot", "buy")} 
                            role="menuitem"
                            className="dropdown-link"
                          >
                            Industrial Plot
                          </button>
                        </li>
                        <li role="none">
                          <button 
                            onClick={() => handlePropertyTypeSelect("Industrial Land for Warehouse/Industry", "buy")} 
                            role="menuitem"
                            className="dropdown-link"
                          >
                            Warehouse/Industry
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
                  For Tenants
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <div className="dropdown-menu" role="menu">
                  <div className="dropdown-content">
                    <div className="dropdown-section">
                      <h4>Residential Rentals</h4>
                      <ul role="group">
                        <li role="none">
                          <button 
                            onClick={() => handlePropertyTypeSelect("flat", "rent")} 
                            role="menuitem"
                            className="dropdown-link"
                          >
                            Flats
                          </button>
                        </li>
                        <li role="none">
                          <button 
                            onClick={() => handlePropertyTypeSelect("house", "rent")} 
                            role="menuitem"
                            className="dropdown-link"
                          >
                            Independent Houses
                          </button>
                        </li>
                        <li role="none">
                          <button 
                            onClick={() => handlePropertyTypeSelect("pg", "rent")} 
                            role="menuitem"
                            className="dropdown-link"
                          >
                            PG & Co-living
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdown-section">
                      <h4>Commercial Rentals</h4>
                      <ul role="group">
                        <li role="none">
                          <button 
                            onClick={() => handlePropertyTypeSelect("office", "rent")} 
                            role="menuitem"
                            className="dropdown-link"
                          >
                            Office Spaces
                          </button>
                        </li>
                        <li role="none">
                          <button 
                            onClick={() => handlePropertyTypeSelect("retail", "rent")} 
                            role="menuitem"
                            className="dropdown-link"
                          >
                            Retail Spaces
                          </button>
                        </li>
                        <li role="none">
                          <button 
                            onClick={() => handlePropertyTypeSelect("warehouse", "rent")} 
                            role="menuitem"
                            className="dropdown-link"
                          >
                            Warehouses
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
                  For Owners
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <div className="dropdown-menu" role="menu">
                  <div className="dropdown-content">
                    <div className="dropdown-section">
                      <h4>List Properties</h4>
                      <ul role="group">
                        <li role="none"><NavLink to="/AddProp" onClick={closeAllDropdowns} role="menuitem">Post Property</NavLink></li>
                        <li role="none"><NavLink to="/owner/pricing" onClick={closeAllDropdowns} role="menuitem">Pricing Plans</NavLink></li>
                        <li role="none"><NavLink to="/owner/success" onClick={closeAllDropdowns} role="menuitem">Success Stories</NavLink></li>
                      </ul>
                    </div>
                    <div className="dropdown-section">
                      <h4>Manage Properties</h4>
                      <ul role="group">
                        <li role="none"><NavLink to="/owner/manage" onClick={closeAllDropdowns} role="menuitem">Manage Listings</NavLink></li>
                        <li role="none"><NavLink to="/owner/performance" onClick={closeAllDropdowns} role="menuitem">Performance</NavLink></li>
                        <li role="none"><NavLink to="/owner/payments" onClick={closeAllDropdowns} role="menuitem">Payments</NavLink></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              {/* Static Links */}
              <li><NavLink to="/about" onClick={closeAllDropdowns}>About</NavLink></li>
              <li><NavLink to="/contact" onClick={closeAllDropdowns}>Contact</NavLink></li>
              <li><NavLink to="/Cards" onClick={closeAllDropdowns}>Properties</NavLink></li>

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
            --gray-50: #f9fafb;
            --gray-100: #f3f4f6;
            --gray-200: #e5e7eb;
            --gray-300: #d1d5db;
            --gray-400: #9ca3af;
            --gray-500: #6b7280;
            --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
            --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
            --radius: 8px;
            --radius-lg: 12px;
            --transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
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
            margin: 0;
            padding: 0;
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
            position: relative;
          }
          
          .nav-links span {
            user-select: none;
            outline: none;
          }
          
          .nav-links a:hover,
          .nav-links span:hover,
          .nav-links a:focus,
          .nav-links span:focus {
            color: var(--primary-color);
            outline: none;
            background: none;
          }
          
          .nav-links a::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background: var(--primary-color);
            transition: var(--transition);
          }
          
          .nav-links a:hover::after,
          .nav-links a:focus::after,
          .nav-links a.active::after {
            width: 100%;
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
            width: 480px;
            background: #fff;
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-lg);
            opacity: 0;
            visibility: hidden;
            transform: translateY(10px);
            transition: var(--transition);
            z-index: 100;
            padding: 1.5rem;
            border: 1px solid var(--gray-200);
          }
          
          .dropdown.active .dropdown-menu {
            opacity: 1;
            visibility: visible;
            transform: translateY(8px);
          }
          
          .dropdown-content {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
          
          .dropdown-section {
            display: flex;
            flex-direction: column;
          }
          
          .dropdown-section h4 {
            font-size: 0.85rem;
            color: var(--primary-color);
            margin-bottom: 0.75rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            padding-bottom: 0.5rem;
            border-bottom: 1px solid var(--gray-200);
          }
          
          .dropdown-section ul {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            margin: 0;
            padding: 0;
          }
          
          .dropdown-section a,
          .dropdown-section .dropdown-link {
            padding: 0.5rem 0;
            font-size: 0.9rem;
            color: var(--text-dark);
            transition: var(--transition);
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
            color: var(--primary-color);
            padding-left: 0.5rem;
            background: var(--gray-50);
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
            outline: none;
          }
          
          .btn:focus {
            box-shadow: 0 0 0 3px rgba(0, 97, 255, 0.2);
          }
          
          .btn-primary {
            background: var(--primary-color);
            color: white;
          }
          
          .btn-primary:hover,
          .btn-primary:focus {
            background: var(--primary-dark);
            transform: translateY(-2px);
            box-shadow: var(--shadow);
          }
          
          .btn-secondary {
            background: var(--secondary-color);
            color: white;
          }
          
          .btn-secondary:hover,
          .btn-secondary:focus {
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
            outline: none;
            position: relative;
          }
          
          .mobile-menu-toggle:focus {
            box-shadow: 0 0 0 3px rgba(0, 97, 255, 0.2);
            border-radius: 4px;
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
          
          /* Tablet styles (768px - 1024px) */
          @media (max-width: 1024px) {
            .header-container {
              padding: 0 1.25rem;
            }
            
            .nav-links ul {
              gap: 1.25rem;
            }
            
            .dropdown-menu {
              width: 420px;
            }
            
            .dropdown-content {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          
          /* Mobile styles (below 768px) */
          @media (max-width: 768px) {
            .header-container {
              padding: 0 1rem;
            }
            
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
              transition: transform 0.3s ease-in-out;
              overflow-y: auto;
            }
            
            .nav-links.nav-open {
              transform: translateX(0);
            }
            
            .nav-links ul {
              flex-direction: column;
              align-items: flex-start;
              gap: 1.5rem;
            }
            
            .dropdown-menu {
              position: static;
              width: 100%;
              box-shadow: none;
              margin-top: 0.75rem;
              margin-left: 1rem;
              display: none;
              opacity: 1;
              visibility: visible;
              transform: none;
              padding: 1rem;
              border: none;
              border-left: 3px solid var(--primary-color);
            }
            
            .dropdown.active .dropdown-menu {
              display: block;
              transform: none;
            }
            
            .dropdown-content {
              grid-template-columns: 1fr;
              gap: 1rem;
            }
            
            .auth-link {
              margin-top: 1.5rem;
            }
            
            .nav-links a::after {
              display: none;
            }
          }
          
          /* Small mobile devices */
          @media (max-width: 480px) {
            .logo-text {
              font-size: 1.3rem;
            }
            
            .nav-links {
              padding: 1rem;
            }
          }
        `}
      </style>
    </>
  );
};