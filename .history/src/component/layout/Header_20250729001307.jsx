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
        <NavLink to="/AddPropr"><button style={styles.button}>Add property</button></NavLink>
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
    zIndex: 100,
    transition: "all 0.3s ease",
    '@media (max-width: 768px)': {
      padding: "1rem",
      flexDirection: "column",
      gap: "1rem"
    }
  },
  logo: {
    fontSize: "1.8rem",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    transition: "transform 0.3s ease",
    ':hover': {
      transform: "scale(1.05)"
    }
  },
  logoLink: {
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: "0.25rem",
    position: "relative",
    '::after': {
      content: '""',
      position: "absolute",
      bottom: "-5px",
      left: 0,
      width: "0",
      height: "2px",
      backgroundColor: "#f72585",
      transition: "width 0.3s ease"
    },
    ':hover::after': {
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
    gap: "2rem",
    alignItems: "center",
    '@media (max-width: 768px)': {
      width: "100%",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "1rem"
    }
  },
  navLink: {
    textDecoration: "none",
    color: "#333",
    fontWeight: "500",
    position: "relative",
    padding: "0.5rem 0",
    transition: "all 0.3s ease",
    '::after': {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "0",
      height: "2px",
      backgroundColor: "#4361ee",
      transition: "width 0.3s ease"
    },
    ':hover': {
      color: "#4361ee"
    },
    ':hover::after': {
      width: "100%"
    }
  },
  activeNavLink: {
    color: "#4361ee",
    fontWeight: "600",
    '::after': {
      width: "100%"
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
    ':hover': {
      backgroundColor: "#d91a6d",
      transform: "translateY(-2px)",
      boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)"
    },
    ':active': {
      transform: "translateY(0)"
    },
    '::before': {
      content: '""',
      position: "absolute",
      top: 0,
      left: "-100%",
      width: "100%",
      height: "100%",
      background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
      transition: "0.5s"
    },
    ':hover::before': {
      left: "100%"
    },
    '@media (max-width: 768px)': {
      padding: "0.6rem 1.2rem",
      fontSize: "0.9rem"
    }
  },
  mobileMenuButton: {
    display: "none",
    backgroundColor: "transparent",
    border: "none",
    fontSize: "1.5rem",
    cursor: "pointer",
    color: "#4361ee",
    '@media (max-width: 768px)': {
      display: "block",
      position: "absolute",
      top: "1rem",
      right: "1rem"
    }
  },
  mobileMenu: {
    display: "none",
    width: "100%",
    padding: "1rem",
    backgroundColor: "white",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    '@media (max-width: 768px)': {
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      alignItems: "center"
    }
  }
};