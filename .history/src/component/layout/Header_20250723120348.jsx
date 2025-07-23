import { NavLink } from "react-router-dom";

export const Header = () => {
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
    <header style={styles.header}>
      <div style={styles.logo}>
        <NavLink 
          to="/" 
          style={styles.logoLink}
        >
          <span style={styles.logoFirst}>Arrow</span>
          <span style={styles.logoSecond}>Sites</span>
        </NavLink>
      </div>
      <nav style={styles.nav}>
        <NavLink to="/" style={getActiveStyle}>Home</NavLink>
        <NavLink to="/about" style={getActiveStyle}>About</NavLink>
        <NavLink to="/contact" style={getActiveStyle}>Contact</NavLink>
        <NavLink to="/Cards" style={getActiveStyle}>Properties</NavLink>
        <NavLink to="/AddPropr"><button>Add property</button></NavLink>
      </nav>
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
    boxShadow: "0 2px 15px rgba(0, 0, 0, 0.1)",
    position: "sticky",
    top: 0,
    zIndex: 100
  },
  logo: {
    fontSize: "1.8rem",
    fontWeight: "bold",
  },
  logoLink: {
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: "0.25rem"
  },
  logoFirst: {
    color: "#4361ee",
    fontWeight: "700"
  },
  logoSecond: {
    color: "#f72585",
    fontWeight: "700"
  },
  nav: {
    display: "flex",
    gap: "1rem",
    alignItems: "center"
  },
  
  // For the NavLink styles, we're using the getActiveStyle function
};