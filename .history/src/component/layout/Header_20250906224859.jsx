import { useNavigate } from "react-router-dom";
import { useCallback, useState, useMemo, useRef, useEffect } from "react";
import { useFirebase } from "../../context/FirebaseContext";
import { NavLink } from "react-router-dom";

// Dark theme color palette
const darkTheme = {
  background: {
    primary: "#0f172a", // Dark blue-gray
    secondary: "#1e293b", // Slightly lighter dark blue
    tertiary: "#334155", // Medium dark blue
    overlay: "rgba(0, 0, 0, 0.7)",
  },
  text: {
    primary: "#f8fafc", // Almost white
    secondary: "#cbd5e1", // Light gray
    accent: "#60a5fa", // Light blue
  },
  border: {
    primary: "#334155",
    accent: "#60a5fa",
  },
  button: {
    primary: "#3b82f6", // Blue
    primaryHover: "#2563eb", // Darker blue
    secondary: "#1e293b", // Dark background
    secondaryHover: "#334155", // Lighter dark
  }
};

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

  const handleKeyDown = (event, dropdownName) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleDropdown(dropdownName);
    }
  };

  return (
    <>
      <header className="header" style={headerStyles.header}>
        <div className="header-container" style={headerStyles.headerContainer}>
          <div className="logo">
            <NavLink to="/" onClick={closeAllDropdowns} style={headerStyles.logoLink}>
              <span className="logo-icon" style={headerStyles.logoIcon}>🏠</span>
              <span className="logo-text" style={headerStyles.logoText}>Arrow Sites</span>
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <button 
            className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            style={headerStyles.mobileMenuToggle}
          >
            <span style={{...headerStyles.mobileMenuSpan, ...(mobileMenuOpen ? headerStyles.mobileMenuSpanActive1 : {})}}></span>
            <span style={{...headerStyles.mobileMenuSpan, ...(mobileMenuOpen ? headerStyles.mobileMenuSpanActive2 : {})}}></span>
            <span style={{...headerStyles.mobileMenuSpan, ...(mobileMenuOpen ? headerStyles.mobileMenuSpanActive3 : {})}}></span>
          </button>

          <nav 
            className={`nav-links ${mobileMenuOpen ? 'nav-open' : ''}`} 
            ref={dropdownRef}
            aria-label="Main navigation"
            style={{...headerStyles.navLinks, ...(mobileMenuOpen ? headerStyles.navOpen : {})}}
          >
            <ul style={headerStyles.navList}>
              {/* Buyers */}
              <li 
                className={`dropdown ${activeDropdown === 'buyers' ? 'active' : ''}`}
                onMouseEnter={() => handleHoverOpen('buyers')}
                onMouseLeave={handleHoverClose}
                style={headerStyles.dropdown}
              >
                <span 
                  onClick={() => toggleDropdown('buyers')}
                  onKeyDown={(e) => handleKeyDown(e, 'buyers')}
                  tabIndex="0"
                  aria-haspopup="true"
                  aria-expanded={activeDropdown === 'buyers'}
                  style={headerStyles.navItem}
                >
                  For Buyers 
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={headerStyles.dropdownIcon}>
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <div className="dropdown-menu" role="menu" style={{...headerStyles.dropdownMenu, ...(activeDropdown === 'buyers' ? headerStyles.dropdownMenuActive : {})}}>
                  <div className="dropdown-content" style={headerStyles.dropdownContent}>
                    <div className="dropdown-section" style={headerStyles.dropdownSection}>
                      <h4 style={headerStyles.dropdownSectionTitle}>Residential Properties</h4>
                      <ul role="group" style={headerStyles.dropdownList}>
                        <li role="none" style={headerStyles.dropdownListItem}>
                          <button 
                            onClick={() => handlePropertyTypeSelect("Residential Flat")} 
                            role="menuitem"
                            className="dropdown-link"
                            style={headerStyles.dropdownLink}
                          >
                            Flats
                          </button>
                        </li>
                        <li role="none" style={headerStyles.dropdownListItem}>
                          <button 
                            onClick={() => handlePropertyTypeSelect("Residential Floors")} 
                            role="menuitem"
                            className="dropdown-link"
                            style={headerStyles.dropdownLink}
                          >
                            Floors
                          </button>
                        </li>
                        {/* Other property types... */}
                      </ul>
                    </div>
                    {/* Other dropdown sections... */}
                  </div>
                </div>
              </li>

              {/* Other navigation items... */}

              {!isLoggedIn ? (
                <li className="auth-link" style={headerStyles.authLink}>
                  <NavLink to="/Register" className="btn btn-primary" onClick={closeAllDropdowns} style={headerStyles.authButton}>
                    Register / Login
                  </NavLink>
                </li>
              ) : (
                <li className="auth-link" style={headerStyles.authLink}>
                  <button className="btn btn-secondary" onClick={removeSign} style={headerStyles.authButtonSecondary}>Logout</button>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};