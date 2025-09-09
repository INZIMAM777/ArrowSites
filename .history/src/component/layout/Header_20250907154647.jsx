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
              {/* <span className="logo-icon" style={headerStyles.logoIcon}>🏠</span> */}
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
            <span style={{ ...headerStyles.mobileMenuSpan, ...(mobileMenuOpen ? headerStyles.mobileMenuSpanActive1 : {}) }}></span>
            <span style={{ ...headerStyles.mobileMenuSpan, ...(mobileMenuOpen ? headerStyles.mobileMenuSpanActive2 : {}) }}></span>
            <span style={{ ...headerStyles.mobileMenuSpan, ...(mobileMenuOpen ? headerStyles.mobileMenuSpanActive3 : {}) }}></span>
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
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                              <rect x="3" y="7" width="18" height="14" rx="1"></rect>
                              <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                              <line x1="8" y1="12" x2="16" y2="12"></line>
                              <line x1="8" y1="16" x2="16" y2="16"></line>
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
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                              <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                              <line x1="3" y1="9" x2="21" y2="9"></line>
                              <line x1="3" y1="15" x2="21" y2="15"></line>
                              <line x1="9" y1="3" x2="9" y2="21"></line>
                              <line x1="15" y1="3" x2="15" y2="21"></line>
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
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                              <rect x="3" y="3" width="18" height="18" rx="2" stroke-dasharray="4 2"></rect>
                              <circle cx="12" cy="12" r="2"></circle>
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
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                              <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                              <path d="M2 17l10 5 10-5"></path>
                              <path d="M2 12l10 5 10-5"></path>
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
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                              <polyline points="9 22 9 12 15 12 15 22"></polyline>
                              <circle cx="12" cy="7" r="1"></circle>
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
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                              <polyline points="9 22 9 12 15 12 15 22"></polyline>
                              <circle cx="18" cy="5" r="1"></circle>
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
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                              <rect x="3" y="7" width="18" height="14" rx="1"></rect>
                              <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                              <line x1="8" y1="12" x2="16" y2="12"></line>
                              <line x1="8" y1="16" x2="16" y2="16"></line>
                              <circle cx="12" cy="19" r="1"></circle>
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
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                              <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                              <path d="M3 9h18"></path>
                              <path d="M9 21V9"></path>
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
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                              <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                              <line x1="9" y1="9" x2="15" y2="9"></line>
                              <line x1="9" y1="12" x2="15" y2="12"></line>
                              <line x1="9" y1="15" x2="15" y2="15"></line>
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
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"  stroke="currentColor" stroke-width="2">
                              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                              <polyline points="9 22 9 12 15 12 15 22"></polyline>
                              <circle cx="18" cy="8" r="1"></circle>
                              
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
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                              <rect x="3" y="7" width="18" height="14" rx="1"></rect>
                              <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                              <line x1="8" y1="12" x2="16" y2="12"></line>
                              <line x1="8" y1="16" x2="16" y2="16"></line>
                              <circle cx="19" cy="5" r="1"></circle>
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
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                              <path d="M10 21V11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v10"></path>
                              <path d="M18 21V9.5a1.5 1.5 0 0 0-1.5-1.5H15"></path>
                              <path d="M6 21V9.5A1.5 1.5 0 0 1 7.5 8H9"></path>
                              <rect x="3" y="3" width="18" height="18" rx="2"></rect>
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
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                              <rect x="3" y="3" width="18" height="18" rx="2" stroke-dasharray="4 2"></rect>
                              <circle cx="12" cy="12" r="2"></circle>
                              <line x1="7" y1="7" x2="17" y2="17"></line>
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
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                              <rect x="3" y="3" width="18" height="18" rx="2" stroke-dasharray="4 2"></rect>
                              <rect x="7" y="7" width="10" height="10" rx="1"></rect>
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
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                              <rect x="9" y="12" width="6" height="6"></rect>
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
                            <svg width="16" height="16" viewBox="0 0 24 24"  style={{ marginRight: "8px", verticalAlign: "middle" }} fill="none" stroke="currentColor" stroke-width="2">
                              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                              <path d="M9 12l3-3 3 3"></path>
                              <path d="M12 9v6"></path>
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
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ marginRight: "8px", verticalAlign: "middle" }}  stroke="currentColor" stroke-width="2">
                              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                              <circle cx="9" cy="16" r="1"></circle>
                              <circle cx="15" cy="16" r="1"></circle>
                              <path d="M9 16V9h6v7"></path>
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
                            <svg width="16" height="16" viewBox="0 0 24 24" style={{ marginRight: "8px", verticalAlign: "middle" }}  fill="none" stroke="currentColor" stroke-width="2">
                              <rect x="3" y="3" width="18" height="18" rx="2" stroke-dasharray="4 2"></rect>
                              <path d="M12 8v8"></path>
                              <path d="M8 12h8"></path>
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
                            <svg width="16" height="16" viewBox="0 0 24 24" style={{ marginRight: "8px", verticalAlign: "middle" }}  fill="none" stroke="currentColor" stroke-width="2">
                              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                              <path d="M9 22V12h6v10"></path>
                              <path d="M9 12h6"></path>
                              <circle cx="12" cy="7" r="1"></circle>
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
                            <svg width="16" height="16" viewBox="0 0 24 24" style={{ marginRight: "8px", verticalAlign: "middle" }}  fill="none" stroke="currentColor" stroke-width="2">
                              <rect x="3" y="3" width="18" height="18" rx="2" stroke-dasharray="4 2"></rect>
                              <path d="M12 8v8"></path>
                              <path d="M16 12H8"></path>
                              <circle cx="12" cy="12" r="1"></circle>
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
                    fill="none"
                    aria-hidden="true"
                    style={{
                      ...headerStyles.dropdownIcon,
                      ...(activeDropdown === 'tenants' && mobileMenuOpen ? { transform: 'rotate(180deg)' } : {})
                    }}
                  >
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
                            <svg width="16" height="16" viewBox="0 0 24 24" style={{ marginRight: "8px", verticalAlign: "middle" }}  fill="none" stroke="currentColor" stroke-width="2">
                              <rect x="3" y="7" width="18" height="14" rx="1"></rect>
                              <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                              <line x1="8" y1="12" x2="16" y2="12"></line>
                              <line x1="8" y1="16" x2="16" y2="16"></line>
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
                            <svg width="16" height="16" viewBox="0 0 24 24" style={{ marginRight: "8px", verticalAlign: "middle" }}  fill="none" stroke="currentColor" stroke-width="2">
                              <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                              <line x1="3" y1="9" x2="21" y2="9"></line>
                              <line x1="3" y1="15" x2="21" y2="15"></line>
                              <line x1="9" y1="3" x2="9" y2="21"></line>
                              <line x1="15" y1="3" x2="15" y2="21"></line>
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
                            <svg width="16" height="16" viewBox="0 0 24 24" style={{ marginRight: "8px", verticalAlign: "middle" }}  fill="none" stroke="currentColor" stroke-width="2">
                              <rect x="3" y="3" width="18" height="18" rx="2" stroke-dasharray="4 2"></rect>
                              <circle cx="12" cy="12" r="2"></circle>
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
                            <svg width="16" height="16" viewBox="0 0 24 24" style={{ marginRight: "8px", verticalAlign: "middle" }}  fill="none" stroke="currentColor" stroke-width="2">
                              <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                              <path d="M2 17l10 5 10-5"></path>
                              <path d="M2 12l10 5 10-5"></path>
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
                            <svg width="16" height="16" viewBox="0 0 24 24" style={{ marginRight: "8px", verticalAlign: "middle" }}  fill="none" stroke="currentColor" stroke-width="2">
                              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                              <polyline points="9 22 9 12 15 12 15 22"></polyline>
                              <circle cx="12" cy="7" r="1"></circle>
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
                            <svg width="16" height="16" viewBox="0 0 24 24" style={{ marginRight: "8px", verticalAlign: "middle" }}  fill="none" stroke="currentColor" stroke-width="2">
                              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                              <polyline points="9 22 9 12 15 12 15 22"></polyline>
                              <circle cx="18" cy="5" r="1"></circle>
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
                            <svg width="16" height="16" viewBox="0 0 24 24" style={{ marginRight: "8px", verticalAlign: "middle" }}  fill="none" stroke="currentColor" stroke-width="2">
                              <rect x="3" y="7" width="18" height="14" rx="1"></rect>
                              <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                              <line x1="8" y1="12" x2="16" y2="12"></line>
                              <line x1="8" y1="16" x2="16" y2="16"></line>
                              <circle cx="12" cy="19" r="1"></circle>
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
                            <svg width="16" height="16" viewBox="0 0 24 24" style={{ marginRight: "8px", verticalAlign: "middle" }}  fill="none" stroke="currentColor" stroke-width="2">
                              <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                              <path d="M3 9h18"></path>
                              <path d="M9 21V9"></path>
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
                            <svg width="16" height="16" viewBox="0 0 24 24" style={{ marginRight: "8px", verticalAlign: "middle" }}  fill="none" stroke="currentColor" stroke-width="2">
                              <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                              <line x1="9" y1="9" x2="15" y2="9"></line>
                              <line x1="9" y1="12" x2="15" y2="12"></line>
                              <line x1="9" y1="15" x2="15" y2="15"></line>
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
                            <svg width="16" height="16" viewBox="0 0 24 24" style={{ marginRight: "8px", verticalAlign: "middle" }}  fill="none" stroke="currentColor" stroke-width="2">
                              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                              <polyline points="9 22 9 12 15 12 15 22"></polyline>
                              <circle cx="18" cy="8" r="1"></circle>
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
                            <svg width="16" height="16" viewBox="0 0 24 24" style={{ marginRight: "8px", verticalAlign: "middle" }}  fill="none" stroke="currentColor" stroke-width="2">
                              <rect x="3" y="7" width="18" height="14" rx="1"></rect>
                              <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                              <line x1="8" y1="12" x2="16" y2="12"></line>
                              <line x1="8" y1="16" x2="16" y2="16"></line>
                              <circle cx="19" cy="5" r="1"></circle>
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
                            <svg width="16" height="16" viewBox="0 0 24 24" style={{ marginRight: "8px", verticalAlign: "middle" }}  fill="none" stroke="currentColor" stroke-width="2">
                              <path d="M10 21V11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v10"></path>
                              <path d="M18 21V9.5a1.5 1.5 0 0 0-1.5-1.5H15"></path>
                              <path d="M6 21V9.5A1.5 1.5 0 0 1 7.5 8H9"></path>
                              <rect x="3" y="3" width="18" height="18" rx="2"></rect>
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
                            <svg width="16" height="16" viewBox="0 0 24 24"  style={{ marginRight: "8px", verticalAlign: "middle" }} fill="none" stroke="currentColor" stroke-width="2">
                              <rect x="3" y="3" width="18" height="18" rx="2" stroke-dasharray="4 2"></rect>
                              <circle cx="12" cy="12" r="2"></circle>
                              <line x1="7" y1="7" x2="17" y2="17"></line>
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
                            <svg width="16" height="16" viewBox="0 0 24 24" style={{ marginRight: "8px", verticalAlign: "middle" }}  fill="none" stroke="currentColor" stroke-width="2">
                              <rect x="3" y="3" width="18" height="18" rx="2" stroke-dasharray="4 2"></rect>
                              <rect x="7" y="7" width="10" height="10" rx="1"></rect>
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
                            <svg width="16" height="16" viewBox="0 0 24 24" style={{ marginRight: "8px", verticalAlign: "middle" }}  fill="none" stroke="currentColor" stroke-width="2">
                              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                              <rect x="9" y="12" width="6" height="6"></rect>
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
                            <svg width="16" height="16" viewBox="0 0 24 24"  style={{ marginRight: "8px", verticalAlign: "middle" }} fill="none" stroke="currentColor" stroke-width="2">
                              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                              <path d="M9 12l3-3 3 3"></path>
                              <path d="M12 9v6"></path>
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
                            <svg width="16" height="16" viewBox="0 0 24 24" style={{ marginRight: "8px", verticalAlign: "middle" }}  fill="none" stroke="currentColor" stroke-width="2">
                              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                              <circle cx="9" cy="16" r="1"></circle>
                              <circle cx="15" cy="16" r="1"></circle>
                              <path d="M9 16V9h6v7"></path>
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
                            <svg width="16" height="16" viewBox="0 0 24 24" style={{ marginRight: "8px", verticalAlign: "middle" }}  fill="none" stroke="currentColor" stroke-width="2">
                              <rect x="3" y="3" width="18" height="18" rx="2" stroke-dasharray="4 2"></rect>
                              <path d="M12 8v8"></path>
                              <path d="M8 12h8"></path>
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
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ marginRight: "8px", verticalAlign: "middle" }}  stroke="currentColor" stroke-width="2">
                              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                              <path d="M9 22V12h6v10"></path>
                              <path d="M9 12h6"></path>
                              <circle cx="12" cy="7" r="1"></circle>
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
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ marginRight: "8px", verticalAlign: "middle" }} stroke="currentColor" stroke-width="2">
                              <rect x="3" y="3" width="18" height="18" rx="2" stroke-dasharray="4 2"></rect>
                              <path d="M12 8v8"></path>
                              <path d="M16 12H8"></path>
                              <circle cx="12" cy="12" r="1"></circle>
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
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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