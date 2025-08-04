import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getActiveStyle = ({ isActive }) => ({
    textDecoration: "none",
    color: isActive ? "#f72585" : "#3a0ca3",
    fontWeight: isActive ? "bold" : "600",
    padding: "0.5rem 1rem",
    borderRadius: "50px",
    background: isActive ? "rgba(247, 37, 133, 0.1)" : "transparent",
    transition: "all 0.3s ease",
  });

  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <NavLink to="/" style={styles.logoLink} onClick={closeMenu}>
          <span style={styles.logoFirst}>Arrow</span>
          <span style={styles.logoSecond}>Sites</span>
        </NavLink>
      </div>

      <button onClick={toggleMenu} style={{ ...styles.mobileMenuButton, display: "block" }}>
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
        <NavLink to="/AddPropr"><button style={styles.button}>Add property</button></NavLink>
      </nav>

      {isMenuOpen && (
        <div ref={menuRef} style={styles.mobileMenu}>
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
    padding: "1rem 2rem",
    backgroundColor: "white",
    boxShadow: "0 2px 15px rgba(0, 0, 0, 0.1)",
    position: "sticky",
    top: 0,
    zIndex: 100,
    flexWrap: "wrap",
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
    gap: "2rem",
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
    position: "relative",
    overflow: "hidden",
  },
  mobileMenuButton: {
    backgroundColor: "transparent",
    border: "none",
    fontSize: "2rem",
    cursor: "pointer",
    color: "#4361ee",
    display: "none",
    '@media (max-width: 768px)': {
      display: "block",
    },
  },
  mobileMenu: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "100%",
    padding: "1rem 0",
    backgroundColor: "white",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    alignItems: "center",
  },
};