import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
      background: "rgba(247, 37, 133, 0.1)"
    }
  });

  return (
    <header style={{
      ...styles.header,
      backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.95)" : "white",
      boxShadow: isScrolled ? "0 2px 15px rgba(0, 0, 0, 0.1)" : "none"
    }}>
      <div style={styles.logo}>
        <NavLink 
          to="/" 
          style={styles.logoLink}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <span style={styles.logoFirst}>Arrow</span>
          <span style={styles.logoSecond}>Sites</span>
        </NavLink>
      </div>
      
      {/* Hamburger Button - Visible only on mobile */}
      <button 
        style={styles.mobileMenuButton} 
        onClick={toggleMobileMenu}
        aria-label="Toggle navigation menu"
      >
        {isMobileMenuOpen ? (
          <svg style={styles.hamburgerIcon} viewBox="0 0 24 24">
            <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
          </svg>
        ) : (
          <svg style={styles.hamburgerIcon} viewBox="0 0 24 24">
            <path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
          </svg>
        )}
      </button>
      
      {/* Desktop Navigation - Hidden on mobile */}
      <nav style={styles.nav}>
        <NavLink to="/" style={getActiveStyle}>Home</NavLink>
        <NavLink to="/about" style={getActiveStyle}>About</NavLink>
        <NavLink to="/contact" style={getActiveStyle}>Contact</NavLink>
        <NavLink to="/Cards" style={getActiveStyle}>Properties</NavLink>
        <NavLink to="/AddPropr"><button style={styles.button}>Add property</button></NavLink>
      </nav>
      
      {/* Mobile Navigation - Only visible when menu is open */}
      {isMobileMenuOpen && (
        <nav style={styles.mobileMenu}>
          <NavLink 
            to="/" 
            style={getActiveStyle}
            onClick={toggleMobileMenu}
          >Home</NavLink>
          <NavLink 
            to="/about" 
            style={getActiveStyle}
            onClick={toggleMobileMenu}
          >About</NavLink>
          <NavLink 
            to="/contact" 
            style={getActiveStyle}
            onClick={toggleMobileMenu}
          >Contact</NavLink>
          <NavLink 
            to="/Cards" 
            style={getActiveStyle}
            onClick={toggleMobileMenu}
          >Properties</NavLink>
          <NavLink 
            to="/AddPropr"
            onClick={toggleMobileMenu}
          >
            <button style={styles.button}>Add property</button>
          </NavLink>
        </nav>
      )}
    </header>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 3rem",
    backgroundColor: "white",
    position: "sticky",
    top: 0,
    zIndex: 100,
    transition: "all 0.3s ease",
    "@media (max-width: 768px)": {
      padding: "1rem 1.5rem",
      flexDirection: "row",
      alignItems: "center"
    }
  },
  logo: {
    fontSize: "1.8rem",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    transition: "transform 0.3s ease",
    zIndex: 101,
    ":hover": {
      transform: "scale(1.05)"
    },
    "@media (max-width: 768px)": {
      fontSize: "1.5rem"
    }
  },
  logoLink: {
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: "0.25rem",
    position: "relative",
    "::after": {
      content: '""',
      position: "absolute",
      bottom: "-5px",
      left: 0,
      width: "0",
      height: "2px",
      backgroundColor: "#f72585",
      transition: "width 0.3s ease"
    },
    ":hover::after": {
      width: "100%"
    }
  },
  logoFirst: {
    color: "#4361ee",
    fontWeight: "700",
    textShadow: "1px 1px 2px rgba(0,0,0,0.1)"
  },
  logoSecond: {
    color: "#f72585",
    fontWeight: "700",
    textShadow: "1px 1px 2px rgba(0,0,0,0.1)"
  },
  nav: {
    display: "flex",
    gap: "1.5rem",
    alignItems: "center",
    "@media (max-width: 768px)": {
      display: "none"
    }
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
      backgroundColor: "#d91a6d",
      transform: "translateY(-2px)",
      boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)"
    },
    ":active": {
      transform: "translateY(0)"
    },
    "::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: "-100%",
      width: "100%",
      height: "100%",
      background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
      transition: "0.5s"
    },
    ":hover::before": {
      left: "100%"
    },
    "@media (max-width: 768px)": {
      padding: "0.6rem 1.2rem",
      fontSize: "0.9rem",
      width: "100%",
      textAlign: "center"
    }
  },
  mobileMenuButton: {
    display: "none",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    padding: "0.5rem",
    borderRadius: "4px",
    transition: "all 0.3s ease",
    ":hover": {
      backgroundColor: "rgba(0, 0, 0, 0.05)"
    },
    "@media (max-width: 768px)": {
      display: "block",
      zIndex: 101
    }
  },
  hamburgerIcon: {
    width: "1.8rem",
    height: "1.8rem",
    display: "block"
  },
  mobileMenu: {
    display: "none",
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    backgroundColor: "white",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    padding: "1.5rem",
    flexDirection: "column",
    gap: "1rem",
    zIndex: 100,
    "@media (max-width: 768px)": {
      display: "flex"
    }
  }
};