import { NavLink } from "react-router-dom";
import { useFirebase } from "../../context/FirebaseContext";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const { isLoggedIn, removeSign } = useFirebase();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);
  const navigate = useNavigate();

  // Color palettes for light and dark modes
  const colorTheme = {
    dark: {
      background: {
        primary: "#0f172a",
        secondary: "#1e293b",
        tertiary: "#334155",
      },
      text: {
        primary: "#f8fafc",
        secondary: "#cbd5e1",
        accent: "#60a5fa",
      },
      border: {
        primary: "#334155",
        accent: "#60a5fa",
      },
      button: {
        primary: "#3b82f6",
        primaryHover: "#2563eb",
        secondary: "#1e293b",
        secondaryHover: "#334155",
      }
    },
    light: {
      background: {
        primary: "#ffffff",
        secondary: "#f8fafc",
        tertiary: "#e2e8f0",
      },
      text: {
        primary: "#1e293b",
        secondary: "#475569",
        accent: "#3b82f6",
      },
      border: {
        primary: "#e2e8f0",
        accent: "#3b82f6",
      },
      button: {
        primary: "#3b82f6",
        primaryHover: "#2563eb",
        secondary: "#f1f5f9",
        secondaryHover: "#e2e8f0",
      }
    }
  };

  const theme = isDarkMode ? colorTheme.dark : colorTheme.light;

  // Toggle between light and dark mode
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

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

  // Header Styles
  const headerStyles = {
    header: {
      background: theme.background.primary,
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      position: "sticky",
      top: 0,
      zIndex: 1000,
      fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    },
    headerContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      maxWidth: "1400px",
      margin: "0 auto",
      padding: "0 1.5rem",
      height: "70px",
    },
    logoLink: {
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      fontWeight: 700,
      fontSize: "1.5rem",
      fontFamily: "'Gilroy', 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    },
    logoIcon: {
      marginRight: "0.5rem",
      fontSize: "1.8rem",
    },
    logoText: {
      background: "linear-gradient(90deg, #60a5fa, #3b82f6)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      fontFamily: "'Gilroy', 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    },
    mobileMenuToggle: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      width: "30px",
      height: "21px",
      background: "transparent",
      border: "none",
      cursor: "pointer",
      padding: 0,
      zIndex: 1001,
      outline: "none",
      position: "relative",
    },
    mobileMenuSpan: {
      width: "100%",
      height: "3px",
      background: theme.text.primary,
      borderRadius: "3px",
      transition: "all 0.3s ease",
      transformOrigin: "left",
    },
    mobileMenuSpanActive1: {
      transform: "rotate(45deg)",
    },
    mobileMenuSpanActive2: {
      opacity: 0,
    },
    mobileMenuSpanActive3: {
      transform: "rotate(-45deg)",
    },
    navLinks: {
      display: "flex",
      alignItems: "center",
    },
    navList: {
      display: "flex",
      listStyle: "none",
      alignItems: "center",
      gap: "1.5rem",
      margin: 0,
      padding: 0,
    },
    navItem: {
      textDecoration: "none",
      color: theme.text.primary,
      fontWeight: 600,
      fontSize: "0.95rem",
      transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "0.25rem",
      position: "relative",
      background: "none",
      border: "none",
      fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    },
    navLink: {
      textDecoration: "none",
      color: theme.text.primary,
      fontWeight: 600,
      fontSize: "0.95rem",
      transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
      position: "relative",
      padding: "0.5rem 0",
      fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    },
    navLinkActive: {
      color: theme.text.accent,
    },
    dropdownIcon: {
      transition: "transform 0.2s ease",
    },
    dropdown: {
      position: "relative",
    },
    dropdownMenu: {
      position: "absolute",
      top: "100%",
      left: 0,
      width: "480px",
      background: theme.background.secondary,
      borderRadius: "12px",
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      opacity: 0,
      visibility: "hidden",
      transform: "translateY(10px)",
      transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
      zIndex: 100,
      padding: "1.5rem",
      border: `1px solid ${theme.border.primary}`,
      marginTop: "20px",
    },
    dropdownMenuActive: {
      opacity: 1,
      visibility: "visible",
      transform: "translateY(8px)",
    },
    dropdownContent: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "1.5rem",
    },
    dropdownSection: {
      display: "flex",
      flexDirection: "column",
    },
    dropdownSectionTitle: {
      fontSize: "0.85rem",
      color: theme.text.accent,
      marginBottom: "0.75rem",
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "0.5px",
      paddingBottom: "0.5rem",
      borderBottom: `1px solid ${theme.border.primary}`,
      fontFamily: "'Gilroy', 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    },
    dropdownList: {
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
      margin: 0,
      padding: 0,
    },
    dropdownLink: {
      padding: "0.5rem 0",
      fontSize: "0.9rem",
      color: theme.text.primary,
      transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
      borderRadius: "4px",
      textDecoration: "none",
      background: "none",
      border: "none",
      textAlign: "left",
      width: "100%",
      cursor: "pointer",
      fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      display: "block",
    },
    authButton: {
      padding: "0.6rem 1.25rem",
      borderRadius: "8px",
      fontWeight: 600,
      fontSize: "0.9rem",
      transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
      cursor: "pointer",
      border: "none",
      outline: "none",
      background: theme.button.primary,
      color: "white",
      textDecoration: "none",
      display: "inline-block",
      fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    },
    authButtonSecondary: {
      padding: "0.6rem 1.25rem",
      borderRadius: "8px",
      fontWeight: 600,
      fontSize: "0.9rem",
      transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
      cursor: "pointer",
      border: "none",
      outline: "none",
      background: theme.button.secondary,
      color: theme.text.primary,
      textDecoration: "none",
      display: "inline-block",
      fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    },
    themeToggle: {
      background: "none",
      border: "none",
      cursor: "pointer",
      fontSize: "1.2rem",
      marginLeft: "1rem",
      color: theme.text.primary,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    // Mobile-specific styles
    mobileNavList: {
      display: "flex",
      flexDirection: "column",
      listStyle: "none",
      alignItems: "flex-start",
      gap: "1.5rem",
      margin: 0,
      padding: 0,
      width: "100%",
    },
    mobileDropdownMenu: {
      position: "static",
      width: "100%",
      boxShadow: "none",
      marginTop: "0.75rem",
      marginLeft: "1rem",
      display: "none",
      opacity: 1,
      visibility: "visible",
      transform: "none",
      padding: "1rem",
      border: "none",
      borderLeft: `3px solid ${theme.text.accent}`,
      background: theme.background.tertiary,
      borderRadius: "8px",
    },
    mobileDropdownContent: {
      display: "grid",
      gridTemplateColumns: "1fr",
      gap: "1rem",
    },
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
            style={{
              ...headerStyles.navLinks,
              ...(mobileMenuOpen ? {
                display: 'block',
                position: 'fixed',
                top: '70px',
                left: 0,
                width: '100%',
                height: 'calc(100vh - 70px)',
                background: theme.background.primary,
                padding: '1.5rem',
                transform: 'translateX(0)',
                transition: 'transform 0.3s ease-in-out',
                overflowY: 'auto',
              } : {
                display: 'none'
              })
            }}
          >
            <ul style={mobileMenuOpen ? headerStyles.mobileNavList : headerStyles.navList}>
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
      <svg 
        width="12" 
        height="12" 
        viewBox="0 0 24 24" 
        fill="none" 
        aria-hidden="true" 
        style={{
          ...headerStyles.dropdownIcon,
          ...(activeDropdown === 'buyers' && mobileMenuOpen ? { transform: 'rotate(180deg)' } : {})
        }}
      >
        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
    <div 
      className="dropdown-menu" 
      role="menu" 
      style={{
        ...headerStyles.dropdownMenu,
        ...(activeDropdown === 'buyers' ? headerStyles.dropdownMenuActive : {}),
        ...(mobileMenuOpen ? headerStyles.mobileDropdownMenu : {}),
        ...(mobileMenuOpen && activeDropdown === 'buyers' ? { display: 'block' } : {})
      }}
    >
      <div className="dropdown-content" style={mobileMenuOpen ? headerStyles.mobileDropdownContent : headerStyles.dropdownContent}>
        <div className="dropdown-section" style={headerStyles.dropdownSection}>
          <h4 style={headerStyles.dropdownSectionTitle}>Residential Properties</h4>
          <ul role="group" style={headerStyles.dropdownList}>
            <li role="none">
              <button 
                onClick={() => handlePropertyTypeSelect("Residential Flat")} 
                role="menuitem"
                className="dropdown-link"
                style={headerStyles.dropdownLink}
              >
                {/* Building icon for Flats */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: "8px", verticalAlign: "middle" }}>
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                </svg>
                Flats
              </button>
            </li>
            <li role="none">
              <button 
                onClick={() => handlePropertyTypeSelect("Residential Floors")} 
                role="menuitem"
                className="dropdown-link"
                style={headerStyles.dropdownLink}
              >
                {/* Layers icon for Floors */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: "8px", verticalAlign: "middle" }}>
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
                Floors
              </button>
            </li>
            <li role="none">
              <button 
                onClick={() => handlePropertyTypeSelect("Residential plot")} 
                role="menuitem"
                className="dropdown-link"
                style={headerStyles.dropdownLink}
              >
                {/* Map icon for Plots */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: "8px", verticalAlign: "middle" }}>
                  <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
                  <line x1="8" y1="2" x2="8" y2="18"></line>
                  <line x1="16" y1="6" x2="16" y2="22"></line>
                </svg>
                Plots
              </button>
            </li>
            <li role="none">
              <button 
                onClick={() => handlePropertyTypeSelect("Residential Land")} 
                role="menuitem"
                className="dropdown-link"
                style={headerStyles.dropdownLink}
              >
                {/* Square icon for Lands */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: "8px", verticalAlign: "middle" }}>
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                </svg>
                Lands
              </button>
            </li>
            <li role="none">
              <button 
                onClick={() => handlePropertyTypeSelect("Residential Villa")} 
                role="menuitem"
                className="dropdown-link"
                style={headerStyles.dropdownLink}
              >
                {/* Home icon for Villas */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: "8px", verticalAlign: "middle" }}>
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                Villas
              </button>
            </li>
            <li role="none">
              <button 
                onClick={() => handlePropertyTypeSelect("Residential Penthouse")} 
                role="menuitem"
                className="dropdown-link"
                style={headerStyles.dropdownLink}
              >
                {/* Award icon for Penthouse */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: "8px", verticalAlign: "middle" }}>
                  <circle cx="12" cy="8" r="7"></circle>
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                </svg>
                Penthouse
              </button>
            </li>
            <li role="none">
              <button 
                onClick={() => handlePropertyTypeSelect("Residential Service Apartment")} 
                role="menuitem"
                className="dropdown-link"
                style={headerStyles.dropdownLink}
              >
                {/* Key icon for Service Apartment */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: "8px", verticalAlign: "middle" }}>
                  <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1 7.778 7.778"></path>
                  <path d="M15 7l3 3"></path>
                  <path d="M5 10l-3 3"></path>
                  <path d="M5 21l3-3"></path>
                </svg>
                Service Apartment
              </button>
            </li>
          </ul>
        </div>
        <div className="dropdown-section" style={headerStyles.dropdownSection}>
          <h4 style={headerStyles.dropdownSectionTitle}>Commercial Properties</h4>
          <ul role="group" style={headerStyles.dropdownList}>
            <li role="none">
              <button 
                onClick={() => handlePropertyTypeSelect("Commercial Shop")} 
                role="menuitem"
                className="dropdown-link"
                style={headerStyles.dropdownLink}
              >
                {/* Shopping Bag icon for Shops */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: "8px", verticalAlign: "middle" }}>
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
                Shops
              </button>
            </li>
            <li role="none">
              <button 
                onClick={() => handlePropertyTypeSelect("Commercial Office Space")} 
                role="menuitem"
                className="dropdown-link"
                style={headerStyles.dropdownLink}
              >
                {/* Briefcase icon for Office Space */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: "8px", verticalAlign: "middle" }}>
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
                Office Space
              </button>
            </li>
            <li role="none">
              <button 
                onClick={() => handlePropertyTypeSelect("Commercial Guest House")} 
                role="menuitem"
                className="dropdown-link"
                style={headerStyles.dropdownLink}
              >
                {/* Users icon for Guest House */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: "8px", verticalAlign: "middle" }}>
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                Guest House
              </button>
            </li>
            <li role="none">
              <button 
                onClick={() => handlePropertyTypeSelect("Commercial Service Apartment")} 
                role="menuitem"
                className="dropdown-link"
                style={headerStyles.dropdownLink}
              >
                {/* Building icon for Service Apartment */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: "8px", verticalAlign: "middle" }}>
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                </svg>
                Service Apartment
              </button>
            </li>
          </ul>
        </div>
        <div className="dropdown-section" style={headerStyles.dropdownSection}>
          <h4 style={headerStyles.dropdownSectionTitle}>Industrial</h4>
          <ul role="group" style={headerStyles.dropdownList}>
            <li role="none">
              <button 
                onClick={() => handlePropertyTypeSelect("Industrial Factory")} 
                role="menuitem"
                className="dropdown-link"
                style={headerStyles.dropdownLink}
              >
                {/* Settings icon for Factory */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: "8px", verticalAlign: "middle" }}>
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 极速2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 极速0 0 0-1.51 1z"></path>
                </svg>
                Factory
              </button>
            </li>
            <li role="none">
              <button 
                onClick={() => handlePropertyTypeSelect("Industrial Plot")} 
                role="menuitem"
                className="dropdown-link"
                style={headerStyles.dropdownLink}
              >
                {/* Map Pin icon for Industrial Plot */}
                <svg width="16" height="16" view极速0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: "8px", verticalAlign: "middle" }}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Industrial Plot
              </button>
            </li>
            <li role="none">
              <button 
                onClick={() => handlePropertyTypeSelect("Industrial Land for Warehouse/Industry")} 
                role="menuitem"
                className="dropdown-link"
                style={headerStyles.dropdownLink}
              >
                {/* Package icon for Warehouse/Industry */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: "8px", verticalAlign: "middle" }}>
                  <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line>
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 极速1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 极速.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
                Warehouse/Industry
              </button>
            </li>
          </ul>
        </div>
        <div className="dropdown-section" style={headerStyles.dropdownSection}>
          <h4 style={headerStyles.dropdownSectionTitle}>Warehouse</h4>
          <ul role="group" style={headerStyles.dropdownList}>
            <li role="none">
              <button 
                onClick={() => handlePropertyTypeSelect("Warehouse - Commercial")} 
                role="menuitem"
                className="dropdown-link"
                style={headerStyles.dropdownLink}
              >
                {/* Warehouse icon for commercial warehouse */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: "8px", verticalAlign: "middle" }}>
                  <path d="M22 9l-10-4L2 9l10 4 10-4z"></path>
                  <path d="M22 9v6l-10 4-10-4V9"></path>
                  <path d="M12 13v9"></path>
                  <path d="M12 13L2 9l10-4 10 4-10 4z"></path>
                </svg>
                commercial warehouse
              </button>
            </li>
            <li role="none">
              <button 
                onClick={()极速 handlePropertyTypeSelect("Warehouse - Agro")} 
                role="menuitem"
                className="dropdown-link"
                style={headerStyles.dropdownLink}
              >
                {/* Leaf icon for Agro */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: "8px", verticalAlign: "middle" }}>
                  <path d="M11 18H3a4 4 0 0 1 0-8h2"></path>
                  <path d="M13 6h8a4 4 0 0 1 0 8h-2"></path>
                  <path d="M3 10h18"></path>
                </svg>
                Agro
              </button>
            </li>
            <li role="none">
              <button 
                onClick={() => handlePropertyTypeSelect("Warehouse - Transport")} 
                role="menuitem"
                className="dropdown-link"
                style={headerStyles.dropdownLink}
              >
                {/* Truck icon for Transport & Logistic */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: "8px", verticalAlign: "middle" }}>
                  <rect x="1" y="3" width="15" height="13"></rect>
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                  <circle cx="5.5" cy="18.5" r="2.5"></circle>
                  <circle cx="18.5" cy="18.5" r="2.5"></circle>
                </svg>
                Transport & Logistic
              </button>
            </li>
            <li role="none">
              <button 
                onClick={() => handlePropertyTypeSelect("Warehouse Land / Industrial Land")} 
                role="menuitem"
                className="dropdown-link"
                styleheaderStyles.dropdownLink}
              >
                {/* Map icon for Warehouse Land */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: "8px", verticalAlign: "middle" }}>
                  <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
                  <line x1="8" y1="2" x2="8" y2="18"></line>
                  <line x1="16" y1="6" x2="16" y2极速22"></line>
                </svg>
                Warehouse Land
              </button>
            </li>
          </ul>
        </div>
        <div className="dropdown-section" style={headerStyles.dropdownSection}>
          <h4 style={headerStyles.dropdownSectionTitle}>Farm House</h4>
          <ul role="group" style={headerStyles.dropdownList}>
            <li role="none">
              <button 
                onClick={() => handlePropertyTypeSelect("Farm House - Ready")} 
                role="menuitem"
                className="dropdown-link"
                style={headerStyles.dropdownLink}
              >
                {/* Home icon for Ready Farm House */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: "8px", verticalAlign: "middle" }}>
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                Ready Farm House
              </button>
            </li>
            <li role="none">
              <button 
                onClick={() => handlePropertyTypeSelect("Farm House Land")} 
                role="menuitem"
                className="dropdown-link"
                style={headerStyles.dropdownLink}
              >
                {/* Tree icon for Farm House Land */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: "8px", verticalAlign: "middle" }}>
                  <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"></path>
                  <path d="M12 22V8"></path>
                  <path d="M15.5 10.5l-3.5-2-3.5 2"></path>
                  <path d="M12 8l2-4h-4l2 4z"></path>
                </svg>
                Farm House Land
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
    style={headerStyles.dropdown}
  >
    <span 
      onClick={() => toggleDropdown('tenants')}
      onKeyDown={(e) => handleKeyDown(e, 'tenants')}
      tabIndex="0"
      aria-haspopup="true"
      aria-expanded={activeDropdown === 'tenants'}
      style={headerStyles.navItem}
    >
      For Tenants
      <svg 
        width="12" 
        height="12" 
        viewBox="0 0 24 24" 
        fill极速none" 
        aria-hidden="true" 
        style={{
          ...headerStyles.dropdownIcon,
          ...(activeDropdown === 'tenants' && mobileMenuOpen ? { transform: 'rotate(180deg)' } : {})
        }}
      >
        <path d="M6 极速L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
    <div 
      className="dropdown-menu" 
      role="menu" 
      style={{
        ...headerStyles.dropdownMenu,
        ...(activeDropdown === 'tenants' ? headerStyles.dropdownMenuActive : {}),
        ...(mobileMenuOpen ? headerStyles.mobileDropdownMenu : {}),
        ...(mobileMenuOpen && activeDropdown === 'tenants' ? { display: 'block' } : {})
      }}
    >
      <div className="dropdown-content" style={mobileMenuOpen ? headerStyles.mobileDropdownContent : headerStyles.dropdownContent}>
        <div className="dropdown-section" style={headerStyles.dropdownSection}>
          <h4 style={headerStyles.dropdownSectionTitle}>Residential Properties</h4>
          <ul role="group" style={headerStyles.dropdownList}>
            <li role="none">
              <button 
                onClick={() => handlePropertyTypeSelect("Residential Flat")} 
                role="menuitem"
                className="dropdown-link"
                style={headerStyles.dropdownLink}
              >
                {/* Building icon for Flats */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: "8px", verticalAlign: "middle" }}>
                  <path d="M19 21l-7-5-7 5V5a2 2 极速0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                </svg>
                Flats
              </button>
            </li>
            <li role="none">
              <button 
                onClick={() => handlePropertyTypeSelect("Residential Floors")} 
                role="menuitem"
                className="dropdown-link"
                style={headerStyles.dropdownLink}
              >
                {/* Layers icon for Floors */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: "8px", verticalAlign: "middle" }}>
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
                Floors
              </button>
            </li>
            <li role="none">
              <button 
                onClick={() => handlePropertyTypeSelect("Residential plot")} 
                role="menuitem"
                className="dropdown-link"
                style={headerStyles.dropdownLink}
              >
                {/* Map icon for Plots */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke极速currentColor" strokeWidth="2" style={{ marginRight: "8px", verticalAlign: "middle" }}>
                  <polygon points="1 6 极速22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
                  <line x1="8" y1="2" x2="8" y2="18"></line>
                  <line x1="16" y1="6" x2="16" y2="22"></line>
                </svg>
                Plots
              </button>
            </li>
            <li role="none">
              <button 
                onClick={() => handlePropertyTypeSelect("Residential Land")} 
                role="menuitem"
                className="dropdown-link"
                style={headerStyles.dropdownLink}
              >
                {/* Square icon for Lands */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: "8px", verticalAlign: "middle" }}>
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                </极速>
                Lands
              </button>
            </li>
            <li role="none">
              <button 
                onClick={() => handlePropertyTypeSelect("Residential Villa")} 
                role="menuitem"
                className="dropdown-link"
                style={headerStyles.dropdownLink}
              >
                {/* Home icon for Villas */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: "8px", verticalAlign: "middle" }}>
                  <path d="M3 9l9-7 9 7极速11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                Villas
              </button>
            </li>
            <li role="none">
              <button 
                onClick={() => handlePropertyTypeSelect("Residential Penthouse")} 
                role="menuitem"
                className="dropdown-link"
                style={headerStyles.dropdownLink}
              >
                {/* Award icon for Penthouse */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: "8px", verticalAlign: "middle" }}>
                  <circle cx="12" cy="8" r="7"></circle>
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                </svg>
                Penthouse
              </button>
            </li>
            <li role="none">
              <button 
                onClick={() => handlePropertyTypeSelect("Residential Service Apartment")} 
                role="menuitem"
                className="dropdown-link"
                style={headerStyles.dropdownLink}
              >
                {/* Key icon for Service Apartment */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: "8px", verticalAlign: "middle" }}>
                  <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1 7.778 极速.778"></path>
                  <极速 d="M15 7l3 3"></path>
                  <path d="M5 10l-3 3"></path>
                  <path d="M5 21l3-3"></path>
                </svg>
                Service Apartment
              </button>
            </li>
          </ul>
        </div>
        <div className="dropdown-section" style={headerStyles.dropdownSection}>
          <h4 style={headerStyles.dropdownSectionTitle}>Commercial Properties</h4>
          <ul role="group" style={headerStyles.dropdownList}>
            <li role="none">
              <button 
                onClick={() => handlePropertyTypeSelect("Commercial Shop")} 
                role="menuitem"
                className="dropdown-link"
                style={headerStyles.dropdownLink}
              >
                {/* Shopping Bag icon for Shops */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: "8px", verticalAlign: "middle" }}>
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></极速>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
                Shops
              </button>
            </li>
            <li role="none">
              <button 
                onClick={() => handlePropertyTypeSelect("Commercial Office Space")} 
                role="menuitem"
                className="dropdown-link"
                style={headerStyles.dropdownLink}
              >
                {/* Briefcase icon for Office Space */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: "8px", verticalAlign: "middle" }}>
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
                Office Space
              </button>
            </li>
            <li role="none">
              <button 
                onClick={() => handlePropertyTypeSelect("Commercial Guest House")} 
                role="menuitem"
                className="dropdown-link"
                style={headerStyles.dropdownLink}
              >
                {/* Users icon for Guest House */}
                <svg width="极速" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: "8px", verticalAlign: "middle" }}>
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21极速2a4 4 极速0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                Guest House
              </button>
            </li>
            <li role="none">
              <button 
                onClick={() => handlePropertyTypeSelect("Commercial Service Apartment")} 
                role="menuitem"
                className="dropdown-link"
                style={headerStyles.dropdownLink}
              >
                {/* Building icon for Service Apartment */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: "8px", verticalAlign: "middle" }}>
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                </svg>
                Service Apartment
              </button>
            </li>
          </ul>
        </div>
        <div className="dropdown-section" style={headerStyles.dropdownSection}>
          <h4 style={headerStyles.dropdownSectionTitle}>Industrial</h4>
          <ul role="group" style={headerStyles.dropdownList}>
            <li role="none">
              <button 
                onClick={() => handlePropertyTypeSelect("Industrial Factory")} 
                role="menuitem"
                className="dropdown-link"
                style={headerStyles.dropdownLink}
              >
                {/* Settings icon for Factory */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: "8px", verticalAlign: "middle" }}>
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 极速0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 极速2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 极速2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
                Factory
              </button>
            </li>
            <li role="none">
              <button 
                onClick={() => handlePropertyTypeSelect("Industrial Plot")} 
                role="menuitem"
                className="dropdown-link"
                style={headerStyles.dropdownLink}
              >
                {/* Map Pin icon for Industrial Plot */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: "8px", verticalAlign: "middle" }}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 极速z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Industrial Plot
              </button>
            </li>
            <li role="none">
              <button 
                onClick={() => handlePropertyTypeSelect("Industrial Land for Warehouse/Industry")} 
                role="menuitem"
                className="dropdown-link"
                style={headerStyles.dropdownLink}
              >
                {/* Package icon for Warehouse/Industry */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="极速Color" strokeWidth="2" style={{ marginRight: "8px", verticalAlign: "middle" }}>
                  <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line>
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0极速7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
                Warehouse/Industry
              </button>
            </li>
          </ul>
        </div>
        <div className="dropdown-section" style={headerStyles.dropdownSection}>
          <h4 style={headerStyles.dropdownSectionTitle}>Warehouse</h4>
          <ul role="group" style={headerStyles.dropdownList}>
            <li role="none">
              <button 
                onClick={() => handlePropertyTypeSelect("Warehouse - Commercial")} 
                role="menuitem"
                className="dropdown-link"
                style={headerStyles.dropdownLink}
              >
                {/* Warehouse icon for commercial warehouse */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: "8px", verticalAlign: "middle" }}>
                  <path d="M22 9l-10-4L2 9l10 4 10-4z"></path>
                  <path d="M22 9v6l-10 4-10-4V9"></path>
                  <path d="M12 13v9"></path>
                  <path d="M极速13L2 9l10-4 10 4-10 4z"></path>
                </svg>
                commercial warehouse
              </button>
            </li>
            <li role="none">
              <button 
                onClick={() => handlePropertyTypeSelect("Warehouse - Agro")} 
                role="menuitem"
                className="dropdown-link"
                style={headerStyles.dropdownLink}
              >
                {/* Leaf icon for Agro */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: "8px", verticalAlign: "middle" }}>
                  <path d="M11 18H3a4 4 0 0 1 0-8h2"></极速>
                  <path d="M13 6h8a4 4 0 0 1 极速8h-2"></path>
                  <path d="M3 10h18"></path>
                </svg>
                Agro
              </button>
            </li>
            <li role="none">
              <button 
                onClick={() => handlePropertyTypeSelect("Warehouse - Transport")} 
                role="menuitem"
                className="dropdown-link"
                style={headerStyles.dropdownLink}
              >
                {/* Truck icon for Transport & Logistic */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: "8px", verticalAlign: "middle" }}>
                  <rect x="1" y="3" width="15" height="13"></rect>
                  <polygon points="16 8 20 8 23 11 23 16 16 16 极速8"></polygon>
                  <circle cx="5.5" cy="18.5" r="2.5"></circle>
                  <circle cx="18.5" cy="18.5" r="2.5"></circle>
                </svg>
                Transport & Logistic
              </button>
            </li>
            <li role="none">
              <button 
                onClick={() => handlePropertyTypeSelect("Warehouse Land / Industrial Land")} 
                role="menuitem"
                className="dropdown-link"
                style={headerStyles.dropdownLink}
              >
                {/* Map icon for Warehouse Land */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: "8px", verticalAlign: "middle" }}>
                  <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
                  <line x1="8" y1="2" x2="8" y2="18"></line>
                  <line x1="16" y1="6" x2="16" y2="22"></line>
                </svg>
                Warehouse Land
              </button>
            </li>
          </ul>
        </div>
        <div className="dropdown-section" style={headerStyles.dropdownSection}>
          <h4 style={headerStyles.dropdownSectionTitle}>Farm House</h4>
          <ul role="group" style极速headerStyles.dropdownList}>
            <li role="none">
              <button 
                onClick={() => handlePropertyTypeSelect("Farm House - Ready")} 
                role="menuitem"
                className="dropdown-link"
                style={headerStyles.dropdownLink}
              >
                {/* Home icon for Ready Farm House */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: "8px", verticalAlign: "middle" }}>
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                Ready Farm House
              </button>
            </li>
            <li role="none">
              <button 
                onClick={() => handlePropertyTypeSelect("Farm House Land")} 
                role="menuitem"
                className="dropdown-link"
                style={headerStyles.dropdownLink}
              >
                {/* Tree icon for Farm House Land */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="极速" stroke="currentColor" strokeWidth="2" style={{ marginRight: "8px", verticalAlign: "middle" }}>
                  <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"></path>
                  <path d="M12 22V8"></path>
                  <path d="M15.5 10.5l-3.5-2-3.5 2"></path>
                  <path d="M12 8l2-4h-4l2 4z"></path>
                </svg>
                Farm House Land
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
                style={headerStyles.dropdown}
              >
                <span 
                  onClick={() => toggleDropdown('owners')}
                  onKeyDown={(e) => handleKeyDown(e, 'owners')}
                  tabIndex="0"
                  aria-haspopup="true"
                  aria-expanded={activeDropdown === 'owners'}
                  style={headerStyles.navItem}
                >
                  For Owners
                  <svg 
                    width="12" 
                    height="12" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    aria-hidden="true" 
                    style={{
                      ...headerStyles.dropdownIcon,
                      ...(activeDropdown === 'owners' && mobileMenuOpen ? { transform: 'rotate(180deg)' } : {})
                    }}
                  >
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <div 
                  className="dropdown-menu" 
                  role="menu" 
                  style={{
                    ...headerStyles.dropdownMenu,
                    ...(activeDropdown === 'owners' ? headerStyles.dropdownMenuActive : {}),
                    ...(mobileMenuOpen ? headerStyles.mobileDropdownMenu : {}),
                    ...(mobileMenuOpen && activeDropdown === 'owners' ? { display: 'block' } : {})
                  }}
                >
                  <div className="dropdown-content" style={mobileMenuOpen ? headerStyles.mobileDropdownContent : headerStyles.dropdownContent}>
                    <div className="dropdown-section" style={headerStyles.dropdownSection}>
                      <h4 style={headerStyles.dropdownSectionTitle}>List Properties</h4>
                      <ul role="group" style={headerStyles.dropdownList}>
                        <li role="none">
                          <NavLink 
                            to="/AddPropr" 
                            onClick={closeAllDropdowns} 
                            role="menuitem"
                            style={headerStyles.dropdownLink}
                          >
                            {/* Home icon for Post Property */}
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: "8px", verticalAlign: "middle" }}>
                              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                              <polyline points="9 22 9 12 15 12 15 22"></polyline>
                            </svg>
                            Post Property
                          </NavLink>
                        </li>
                        <li role="none">
                          <NavLink 
                            to="/owner/pricing" 
                            onClick={closeAllDropdowns} 
                            role="menuitem"
                            style={headerStyles.dropdownLink}
                          >
                            {/* Box icon for Pricing Plans */}
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: "8px", verticalAlign: "middle" }}>
                              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                              <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                              <line x1="12" y1="22.08" x2="12" y2="12"></line>
                            </svg>
                            Pricing Plans
                          </NavLink>
                        </li>
                        <li role="none">
                          <NavLink 
                            to="/owner/success" 
                            onClick={closeAllDropdowns} 
                            role="menuitem"
                            style={headerStyles.dropdownLink}
                          >
                            {/* Heart icon for Success Stories */}
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: "8px", verticalAlign: "middle" }}>
                              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                            Success Stories
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdown-section" style={headerStyles.dropdownSection}>
                      <h4 style={headerStyles.dropdownSectionTitle}>Manage Properties</h4>
                      <ul role="group" style={headerStyles.dropdownList}>
                        <li role="none">
                          <NavLink 
                            to="/owner/manage" 
                            onClick={closeAllDropdowns} 
                            role="menuitem"
                            style={headerStyles.dropdownLink}
                          >
                            {/* Credit Card icon for Manage Listings */}
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: "8px", verticalAlign: "middle" }}>
                              <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                              <line x1="1" y1="10" x2="23" y2="10"></line>
                            </svg>
                            Manage Listings
                          </NavLink>
                        </li>
                        <li role="none">
                          <NavLink 
                            to="/owner/performance" 
                            onClick={closeAllDropdowns} 
                            role="menuitem"
                            style={headerStyles.dropdownLink}
                          >
                            {/* Download icon for Performance */}
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: "8px", verticalAlign: "middle" }}>
                              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                              <polyline points="7 10 12 15 17 10"></polyline>
                              <line x1="12" y1="15" x2="12" y2="3"></line>
                            </svg>
                            Performance
                          </NavLink>
                        </li>
                        <li role="none">
                          <NavLink 
                            to="/owner/payments" 
                            onClick={closeAllDropdowns} 
                            role="menuitem"
                            style={headerStyles.dropdownLink}
                          >
                            {/* Wallet icon for Payments */}
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: "8px", verticalAlign: "middle" }}>
                              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                            </svg>
                            Payments
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              {/* Static Links */}
              <li>
                <NavLink 
                  to="/about" 
                  onClick={closeAllDropdowns}
                  style={headerStyles.navLink}
                  activeStyle={headerStyles.navLinkActive}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/contact" 
                  onClick={closeAllDropdowns}
                  style={headerStyles.navLink}
                  activeStyle={headerStyles.navLinkActive}
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/Cards" 
                  onClick={closeAllDropdowns}
                  style={headerStyles.navLink}
                  activeStyle={headerStyles.navLinkActive}
                >
                  Properties
                </NavLink>
              </li>

              {!isLoggedIn ? (
                <li className="auth-link">
                  <NavLink 
                    to="/Register" 
                    className="btn btn-primary" 
                    onClick={closeAllDropdowns}
                    style={headerStyles.authButton}
                  >
                    Register / Login
                  </NavLink>
                </li>
              ) : (
                <li className="auth-link">
                  <button 
                    className="btn btn-secondary" 
                    onClick={removeSign}
                    style={headerStyles.authButtonSecondary}
                  >
                    Logout
                  </button>
                </li>
              )}

              {/* Theme Toggle Button */}
              <li>
                <button 
                  onClick={toggleTheme}
                  aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
                  style={headerStyles.themeToggle}
                >
                  {isDarkMode ? '☀️' : '🌙'}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Inline CSS for responsive design */}
      <style>
        {`
          /* Import fonts */
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');
          @import url('https://cdn.jsdelivr.net/npm/gilroy@1.0.9/css/gilroy.css');
          
          /* Mobile menu toggle */
          @media (min-width: 769px) {
            .mobile-menu-toggle {
              display: none !important;
            }
            
            .nav-links {
              display: flex !important;
            }
          }
          
          @media (max-width: 768px) {
            .header-container {
              padding: 0 1rem;
            }
            
            .nav-links {
              position: fixed;
              top: 70px;
              left: 0;
              width: 100%;
              height: calc(100vh - 70px);
              background: ${theme.background.primary};
              padding: 1.5rem;
              transform: translateX(-100%);
              transition: transform 0.3s ease-in-out;
              overflow-y: auto;
              display: none;
              flex-direction: column;
            }
            
            .nav-links.nav-open {
              transform: translateX(0);
              display: block;
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
              border-left: 3px solid ${theme.text.accent};
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
          }
          
          /* Small mobile devices */
          @media (max-width: 480px) {
            .logo-text {
              font-size: 1.3rem;
            }
            
            .nav-links {
              padding: 1rem;
            }
            
            .dropdown-menu {
              width: 100%;
              left: 0;
            }
          }
          
          /* Hover effects for desktop */
          @media (min-width: 769px) {
            .nav-link:hover {
              color: ${theme.text.accent};
            }
            
            .dropdown-link:hover {
              color: ${theme.text.accent};
              background: ${theme.background.tertiary};
            }
            
            .auth-button:hover {
              background: ${theme.button.primaryHover};
            }
            
            .auth-button-secondary:hover {
              background: ${theme.button.secondaryHover};
            }
          }
        `}
      </style>
    </>
  );
};