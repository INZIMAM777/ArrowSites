import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-Types";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef();
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the menu when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // Responsive design - hide desktop nav on mobile
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getActiveStyle = ({ isActive }) => ({
    textDecoration: "none",
    color: isActive ? "#f72585" : "#3a0ca3",
    fontWeight: isActive ? "bold" : "600",
    padding: "0.5rem 1rem",
    borderRadius: "50px",
    background: isActive ? "rgba(247, 37, 133, 0.1)" : "transparent",
    transition: "all 0.3s ease",
    ":hover": {
      color: "#f72585",
      background: "rgba(247, 37, 133, 0.1)",
    },
  });

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
    { path: "/Cards", label: "Properties" },
  ];

  return (
    <header
      style={{
        ...styles.header,
        ...(isScrolled && styles.scrolledHeader),
      }}
    >
      <div style={styles.logo}>
        <NavLink to="/" style={styles.logoLink}>
          <span style={styles.logoFirst}>Arrow</span>
          <span style={styles.logoSecond}>Sites</span>
        </NavLink>
      </div>

      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        style={styles.mobileMenuButton}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        {isMenuOpen ? (
          <span style={styles.menuIcon}>✕</span>
        ) : (
          <span style={styles.menuIcon}>☰</span>
        )}
      </button>

      <nav
        style={{
          ...styles.nav,
          display: windowWidth <= 768 ? "none" : "flex",
        }}
        aria-label="Main navigation"
      >
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            style={getActiveStyle}
            aria-current={location.pathname === item.path ? "page" : undefined}
          >
            {item.label}
          </NavLink>
        ))}
        <NavLink to="/AddPropr">
          <button style={styles.button} aria-label="Add property">
            Add property
          </button>
        </NavLink>
      </nav>

      {isMenuOpen && (
        <div
          ref={menuRef}
          style={styles.mobileMenu}
          role="dialog"
          aria-modal="true"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              style={getActiveStyle}
              aria-current={location.pathname === item.path ? "page" : undefined}
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink to="/AddPropr">
            <button style={styles.button} aria-label="Add property">
              Add property
            </button>
          </NavLink>
        </div>
      )}
    </header>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "rgba(255, 255, 255, 0.98)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    flexWrap: "wrap",
    transition: "all 0.3s ease",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
  },
  scrolledHeader: {
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    padding: "0.75rem 2rem",
  },
  logo: {
    fontSize: "1.8rem",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    transition: "transform 0.3s ease",
    ":hover": {
      transform: "scale(1.03)",
    },
  },
  logoLink: {
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: "0.25rem",
    position: "relative",
    ":focus": {
      outline: "2px dashed #f72585",
      outlineOffset: "4px",
      borderRadius: "4px",
    },
  },
  logoFirst: {
    color: "#4361ee",
    fontWeight: "700",
    textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
  },
  logoSecond: {
    color: "#f72585",
    fontWeight: "700",
    textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
  },
  nav: {
    display: "flex",
    gap: "1.5rem",
    alignItems: "center",
    "@media (max-width: 768px)": {
      display: "none",
    },
  },
  button: {
    padding: "0.75rem 1.5rem",
    backgroundColor: "#f72585",
    color: "white",
    border: "none",
    borderRadius: "50px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    position: "relative",
    overflow: "hidden",
    ":hover": {
      backgroundColor: "#e51775",
      transform: "translateY(-2px)",
      boxShadow: "0 6px 8px rgba(0, 0, 0, 0.15)",
    },
    ":active": {
      transform: "translateY(0)",
    },
    ":focus": {
      outline: "2px dashed white",
      outlineOffset: "2px",
    },
  },
  mobileMenuButton: {
    backgroundColor: "transparent",
    border: "none",
    fontSize: "1.8rem",
    cursor: "pointer",
    color: "#4361ee",
    display: "none",
    padding: "0.5rem",
    borderRadius: "4px",
    ":hover": {
      backgroundColor: "rgba(67, 97, 238, 0.1)",
    },
    ":focus": {
      outline: "2px dashed #f72585",
      outlineOffset: "2px",
    },
    "@media (max-width: 768px)": {
      display: "block",
    },
  },
  menuIcon: {
    display: "block",
    width: "24px",
    height: "24px",
    lineHeight: "24px",
  },
  mobileMenu: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    width: "100%",
    padding: "2rem",
    backgroundColor: "white",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    alignItems: "center",
    position: "absolute",
    top: "100%",
    left: 0,
    zIndex: 999,
    animation: "slideDown 0.3s ease-out",
  },
};

// Add PropTypes for better type checking in development
Header.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};

// Add keyframes for animation
const sheet = new CSSStyleSheet();
sheet.replaceSync(`
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`);
document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet];