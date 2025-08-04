import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  // Close the menu when clicking outside or scrolling
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      closeMenu();
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Responsive behavior - close menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        closeMenu();
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

  return (
    <header style={{
      ...styles.header,
      boxShadow: isScrolled ? "0 4px 12px rgba(0, 0, 0, 0.1)" : "0 2px 15px rgba(0, 0, 0, 0.1)",
      padding: isScrolled ? "0.75rem 2rem" : "1rem 2rem"
    }}>
      <div style={styles.logo}>
        <NavLink 
          to="/" 
          style={styles.logoLink} 
          onClick={closeMenu}
          aria-label="Home"
        >
          <span style={styles.logoFirst}>Arrow</span>
          <span style={styles.logoSecond}>Sites</span>
        </NavLink>
      </div>

      <button 
        onClick={toggleMenu} 
        style={styles.mobileMenuButton}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        {isMenuOpen ? "✕" : "☰"}
      </button>

      <nav
        style={{
          ...styles.nav,
          display: window.innerWidth <= 768 ? "none" : "flex",
        }}
      >
        <NavLink to="/" style={getActiveStyle}>Home</NavLink>
        <NavLink to="/about" style={getActiveStyle}>About</NavLink>
        <NavLink to="/contact" style={getActiveStyle}>Contact</NavLink>
        <NavLink to="/Cards" style={getActiveStyle}>Properties</NavLink>
        <NavLink to="/AddPropr">
          <button style={styles.button}>Add property</button>
        </NavLink>
      </nav>

      {isMenuOpen && (
        <div 
          ref={menuRef} 
          style={styles.mobileMenu}
          aria-modal="true"
        >
          <NavLink to="/" style={getActiveStyle} onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about" style={getActiveStyle} onClick={closeMenu}>About</NavLink>
          <NavLink to="/contact" style={getActiveStyle} onClick={closeMenu}>Contact</NavLink>
          <NavLink to="/Cards" style={getActiveStyle} onClick={closeMenu}>Properties</NavLink>
          <NavLink to="/AddPropr" onClick={closeMenu}>
            <button style={styles.button}>Add property</button>
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
    backgroundColor: "rgba(255, 255, 255, 0.98)",
    position: "sticky",
    top: 0,
    zIndex: 100,
    flexWrap: "wrap",
    transition: "all 0.3s ease",
  },
  logo: {
    fontSize: "1.8rem",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    transition: "transform 0.3s ease",
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
    zIndex: 99,
  },
};