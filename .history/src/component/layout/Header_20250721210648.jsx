import { NavLink } from "react-router-dom";

export const Header = () => {
    
    const getActiveStyle = ({ isActive }) => {
    return {
      textDecoration: "none",
      color: isActive ? "blue" : "#333",
      fontWeight: isActive ? "bold" : "normal"
    };
  };
  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <NavLink to="/" style={styles.link}>ArrowSite</NavLink>
      </div>
     <nav style={styles.nav}>
        <NavLink to="/" style={getActiveStyle}>Home</NavLink>
        <NavLink to="/About" style={getActiveStyle}>About</NavLink>
        <NavLink to="/Movie" style={getActiveStyle}>Movie</NavLink>
        <NavLink to="/Contact" style={getActiveStyle}>Contact</NavLink>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 30px",
    backgroundColor: "#f0f0f0",
    borderBottom: "1px solid #ccc"
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    textDecoration:'none'
  },
  nav: {
    display: "flex",
    gap: "20px"
  },
};
