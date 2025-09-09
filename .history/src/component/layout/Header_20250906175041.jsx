import { NavLink } from "react-router-dom";
import { useFirebase } from "../../context/FirebaseContext";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const { isLoggedIn, removeSign } = useFirebase();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
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

  const handleKeyDown = (event, dropdownName) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleDropdown(dropdownName);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/Cards?search=${encodeURIComponent(searchQuery.trim())}`);
      closeAllDropdowns();
    }
  };

  return (
    <>
      <header className="header">
        {/* Top banner */}
        <div className="top-banner">
          <div className="container">
            <span>Are you a Property Owner? <strong>Sell / Rent for FREE</strong></span>
          </div>
        </div>
        
        <div className="header-container">
          <div className="logo">
            <NavLink to="/" onClick={closeAllDropdowns}>
              <span className="logo-icon">🏠</span>
              <span className="logo-text">Arrow Sites</span>
            </NavLink>
          </div>

          {/* Search bar for larger screens */}
          <div className="search-container">
            <form onSubmit={handleSearch} className="search-form">
              <div className="search-input-wrapper">
                <span className="search-icon">🔍</span>
                <input 
                  type="text" 
                  placeholder="Search for locality, landmark, project, or builder" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button type="submit" className="search-button">Search</button>
            </form>
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
            {/* Mobile search */}
            <div className="mobile-search">
              <form onSubmit={handleSearch} className="search-form">
                <div className="search-input-wrapper">
                  <span className="search-icon">🔍</span>
                  <input 
                    type="text" 
                    placeholder="Search for locality, landmark..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <button type="submit" className="search-button">Search</button>
              </form>
            </div>

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
                  <span className="nav-icon">💰</span>
                  Buy
                  <span className="dropdown-chevron">▼</span>
                </span>
                <div className="dropdown-menu" role="menu">
                  <div className="dropdown-content">
                    <div className="dropdown-section">
                      <h4><span className="section-icon">🏠</span> Residential Properties</h4>
                      <ul role="group">
                        <li role="none">
                          <button 
                            onClick={() => handlePropertyTypeSelect("Residential Flat")} 
                            role="menuitem"
                            className="dropdown-link"
                          >
                            <span className="link-icon">🏢</span>
                            Flats
                          </button>
                        </li>
                        <li role="none">
                          <button 
                            onClick={() => handlePropertyTypeSelect("Residential Floors")} 
                            role="menuitem"
                            className="dropdown-link"
                          >
                            <span className="link-icon">🏢</span>
                            Floors
                          </button>
                        </li>
                        <li role="none">
                          <button 
                            onClick={() => handlePropertyTypeSelect("Residential plot")} 
                            role="menuitem"
                            className="dropdown-link"
                          >
                            <span className="link-icon">📍</span>
                            Plots
                          </button>
                        </li>
                        <li role="none">
                          <button 
                            onClick={() => handlePropertyTypeSelect("Residential Villa")} 
                            role="menuitem"
                            className="dropdown-link"
                          >
                            <span className="link-icon">🏡</span>
                            Villas
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdown-section">
                      <h4><span className="section-icon">🏢</span> Commercial Properties</h4>
                      <ul role="group">
                        <li role="none">
                          <button 
                            onClick={() => handlePropertyTypeSelect("Commercial Shop")} 
                            role="menuitem"
                            className="dropdown-link"
                          >
                            <span className="link-icon">🛒</span>
                            Shops
                          </button>
                        </li>
                        <li role="none">
                          <button 
                            onClick={() => handlePropertyTypeSelect("Commercial Office Space")} 
                            role="menuitem"
                            className="dropdown-link"
                          >
                            <span className="link-icon">💼</span>
                            Office Space
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
                  <span className="nav-icon">🔑</span>
                  Rent
                  <span className="dropdown-chevron">▼</span>
                </span>
                <div className="dropdown-menu" role="menu">
                  <div className="dropdown-content">
                    <div className="dropdown-section">
                      <h4><span className="section-icon">🏠</span> Residential Properties</h4>
                      <ul role="group">
                        <li role="none">
                          <button 
                            onClick={() => handlePropertyTypeSelect("Residential Flat", "rent")} 
                            role="menuitem"
                            className="dropdown-link"
                          >
                            <span className="link-icon">🏢</span>
                            Flats
                          </button>
                        </li>
                        <li role="none">
                          <button 
                            onClick={() => handlePropertyTypeSelect("Residential Villa", "rent")} 
                            role="menuitem"
                            className="dropdown-link"
                          >
                            <span className="link-icon">🏡</span>
                            Villas
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
                  <span className="nav-icon">👤</span>
                  For Owners
                  <span className="dropdown-chevron">▼</span>
                </span>
                <div className="dropdown-menu" role="menu">
                  <div className="dropdown-content">
                    <div className="dropdown-section">
                      <h4><span className="section-icon">📈</span> List Properties</h4>
                      <ul role="group">
                        <li role="none"><NavLink to="/AddPropr" onClick={closeAllDropdowns} role="menuitem"><span className="link-icon">🏠</span> Post Property</NavLink></li>
                        <li role="none"><NavLink to="/owner/pricing" onClick={closeAllDropdowns} role="menuitem"><span className="link-icon">💵</span> Pricing Plans</NavLink></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              {/* Static Links */}
              <li><NavLink to="/about" onClick={closeAllDropdowns}><span className="nav-icon">ℹ️</span>About</NavLink></li>
              <li><NavLink to="/contact" onClick={closeAllDropdowns}><span className="nav-icon">📞</span>Contact</NavLink></li>
              <li><NavLink to="/Cards" onClick={closeAllDropdowns}><span className="nav-icon">🏠</span>Properties</NavLink></li>

              {!isLoggedIn ? (
                <li className="auth-link">
                  <NavLink to="/Register" className="btn btn-primary" onClick={closeAllDropdowns}>
                    <span className="nav-icon">🔐</span>
                    Register / Login
                  </NavLink>
                </li>
              ) : (
                <li className="auth-link">
                  <button className="btn btn-secondary" onClick={removeSign}>
                    <span className="nav-icon">🚪</span>
                    Logout
                  </button>
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
            --primary-color: #4a90e2;
            --primary-dark: #3a70b2;
            --secondary-color: #ff6b6b;
            --accent-color: #00c2a8;
            --dark-bg: #1a1d28;
            --dark-secondary: #252a3f;
            --text-light: #f8fafc;
            --text-muted: #a0aec0;
            --gray-50: #2d3748;
            --gray-100: #4a5568;
            --gray-200: #718096;
            --gray-300: #e2e8f0;
            --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
            --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.12);
            --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.25), 0 4px 6px -2px rgba(0, 0, 0, 0.15);
            --radius: 8px;
            --radius-lg: 12px;
            --transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          }
          
          .header {
            background: var(--dark-bg);
            box-shadow: var(--shadow);
            position: sticky;
            top: 0;
            z-index: 1000;
          }
          
          .top-banner {
            background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
            color: white;
            padding: 0.5rem 0;
            font-size: 0.9rem;
            text-align: center;
          }
          
          .top-banner .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1.5rem;
          }
          
          .header-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0.75rem 1.5rem;
          }
          
          .logo a {
            display: flex;
            align-items: center;
            text-decoration: none;
            font-weight: 700;
            font-size: 1.5rem;
            color: var(--text-light);
          }
          
          .logo-icon {
            margin-right: 0.5rem;
            font-size: 1.8rem;
          }
          
          .logo-text {
            background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          .search-container {
            flex: 1;
            max-width: 500px;
            margin: 0 2rem;
          }
          
          .mobile-search {
            display: none;
            margin-bottom: 1.5rem;
          }
          
          .search-form {
            display: flex;
            width: 100%;
          }
          
          .search-input-wrapper {
            position: relative;
            flex: 1;
          }
          
          .search-icon {
            position: absolute;
            left: 1rem;
            top: 50%;
            transform: translateY(-50%);
            color: var(--gray-200);
          }
          
          .search-input-wrapper input {
            width: 100%;
            padding: 0.75rem 1rem 0.75rem 3rem;
            border: 1px solid var(--gray-50);
            border-radius: var(--radius) 0 0 var(--radius);
            background: var(--dark-secondary);
            color: var(--text-light);
            font-size: 0.95rem;
            outline: none;
          }
          
          .search-input-wrapper input:focus {
            border-color: var(--primary-color);
            box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.2);
          }
          
          .search-button {
            padding: 0 1.5rem;
            background: var(--primary-color);
            color: white;
            border: none;
            border-radius: 0 var(--radius) var(--radius) 0;
            font-weight: 600;
            cursor: pointer;
            transition: var(--transition);
          }
          
          .search-button:hover {
            background: var(--primary-dark);
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
            color: var(--text-light);
            font-weight: 500;
            font-size: 0.95rem;
            transition: var(--transition);
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            position: relative;
            padding: 0.5rem 0.75rem;
            border-radius: var(--radius);
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
            background: var(--dark-secondary);
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
          
          .nav-icon {
            font-size: 1.1rem;
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
            background: var(--dark-secondary);
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-lg);
            opacity: 0;
            visibility: hidden;
            transform: translateY(10px);
            transition: var(--transition);
            z-index: 100;
            padding: 1.5rem;
            border: 1px solid var(--gray-50);
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
            border-bottom: 1px solid var(--gray-50);
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }
          
          .section-icon {
            font-size: 0.9rem;
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
            padding: 0.5rem 0.75rem;
            font-size: 0.9rem;
            color: var(--text-light);
            transition: var(--transition);
            border-radius: 4px;
            text-decoration: none;
            background: none;
            border: none;
            text-align: left;
            width: 100%;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }
          
          .dropdown-section a:hover,
          .dropdown-section a:focus,
          .dropdown-section .dropdown-link:hover,
          .dropdown-section .dropdown-link:focus {
            color: var(--primary-color);
            background: var(--dark-bg);
          }
          
          .link-icon {
            font-size: 0.9rem;
            color: var(--text-muted);
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
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }
          
          .btn:focus {
            box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.2);
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
            box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.2);
            border-radius: 4px;
          }
          
          .mobile-menu-toggle span {
            width: 100%;
            height: 3px;
            background: var(--text-light);
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
            
            .search-container {
              display: none;
            }
            
            .mobile-search {
              display: block;
            }
            
            .mobile-menu-toggle {
              display: flex;
            }
            
            .nav-links {
              position: fixed;
              top: 100%;
              left: 0;
              width: 100%;
              height: calc(100vh - 100%);
              background: var(--dark-bg);
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
            
            .top-banner {
              font-size: 0.8rem;
              padding: 0.4rem 0;
            }
          }
        `}
      </style>
    </>
  );
};