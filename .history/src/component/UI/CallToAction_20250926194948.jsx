import { NavLink } from "react-router-dom";

// Color palettes for light and dark modes
const colorTheme = {
  dark: {
    background: {
      primary: "#0f172a",
      secondary: "#1e293b",
      tertiary: "#334155",
      overlay: "rgba(0, 0, 0, 0.7)",
    },
    text: {
      primary: "#f8fafc",
      secondary: "#cbd5e1",
      accent: "#7c3aed", // purple accent
    },
    border: {
      primary: "#334155",
      accent: "#7c3aed", // purple border
    },
    button: {
      primary: "#7c3aed",      // main purple button
      primaryHover: "#6d28d9", // hover purple
      secondary: "#1e293b",
      secondaryHover: "#334155",
    }
  },
  light: {
    background: {
      primary: "#ffffff",
      secondary: "#f8fafc",
      tertiary: "#e2e8f0",

      // gradient overlays for better text visibility
      overlayStrong: "linear-gradient(rgba(124,58,237,0.55), rgba(124,58,237,0.55))",
      overlayMedium: "linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.3))",
      overlayPattern: "repeating-linear-gradient(45deg, rgba(124,58,237,0.15), rgba(124,58,237,0.15) 10px, transparent 10px, transparent 20px)"
    },
    text: {
      primary: "#4c1d95",        // deep purple
      secondary: "#6b21a8",      // medium purple
      accent: "#7c3aed",         // vibrant purple accent
    },
    border: {
      primary: "#d8b4fe",
      accent: "#7c3aed",
    },
    button: {
      primary: "#7c3aed",
      primaryHover: "#6d28d9",
      secondary: "#f1f5f9",
      secondaryHover: "#e2e8f0",
    }
  }
};

export const CallToAction = ({ isDarkMode }) => {
  const theme = isDarkMode ? colorTheme.lig: colorTheme.dark;

  const styles = {
    ctaSection: {
      padding: "5rem 1.5rem",
      backgroundImage: "linear-gradient(rgba(101, 17, 247, 0.55), rgba(103, 20, 245, 0.55))",
      textAlign: "center",
      color: "white",
      fontFamily: "'Montserrat', sans-serif",
    },
    title: {
      fontSize: "clamp(2rem, 5vw, 3rem)",
      fontWeight: 700,
      marginBottom: "1rem",
      fontFamily: "'Gilroy', 'Montserrat', sans-serif",
    },
    subtitle: {
      fontSize: "1.2rem",
      marginBottom: "2.5rem",
      opacity: 0.9,
      maxWidth: "600px",
      marginLeft: "auto",
      marginRight: "auto",
      fontFamily: "'Montserrat', sans-serif",
    },
    ctaButtons: {
      display: "flex",
      justifyContent: "center",
      gap: "1.5rem",
      flexWrap: "wrap",
    },
    primaryCta: {
      padding: "1rem 2rem",
      borderRadius: "8px",
      fontWeight: 600,
      fontSize: "1rem",
      cursor: "pointer",
      border: "none",
      backgroundColor: "white",
      color: "#3b82f6",
      transition: "all 0.3s ease",
      minWidth: "160px",
      fontFamily: "'Montserrat', sans-serif",
    },
    secondaryCta: {
      padding: "1rem 2rem",
      borderRadius: "8px",
      fontWeight: 600,
      fontSize: "1rem",
      cursor: "pointer",
      border: "2px solid white",
      backgroundColor: "transparent",
      color: "white",
      transition: "all 0.3s ease",
      minWidth: "160px",
      fontFamily: "'Montserrat', sans-serif",
    }
  };

  return (
    <section style={styles.ctaSection}>
      <h2 style={styles.title}>Find Your Dream Property Today</h2>
      <p style={styles.subtitle}>
        Join thousands of satisfied customers who found their perfect home through our platform
      </p>
      <div style={styles.ctaButtons}>
        <NavLink to='/Register'>
          <button 
            style={styles.primaryCta}
            onMouseOver={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 6px 20px rgba(255,255,255,0.3)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "none";
              e.target.style.boxShadow = "none";
            }}
          >
            Get Started
          </button>
        </NavLink>
        <NavLink to='/Contact'>
          <button 
            style={styles.secondaryCta}
            onMouseOver={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.backgroundColor = "white";
              e.target.style.color = "#3b82f6";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "none";
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "white";
            }}
          >
            Contact Us
          </button>
        </NavLink>
      </div>
    </section>
  );
};
