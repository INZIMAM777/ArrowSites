import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

// Color palettes for light and dark modes (same as Hero component)
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
      overlay: "rgba(255, 255, 255, 0.7)",
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

export const Footer = ({ isDarkMode }) => {
  const theme = isDarkMode ? colorTheme.dark : colorTheme.light;
  const [currentYear] = useState(new Date().getFullYear());

  // Component styles using the theme
  const getStyles = () => {
    const isMobile = window.innerWidth <= 480;
    
    return {
      footer: {
        backgroundColor: theme.background.primary,
        color: theme.text.primary,
        padding: "4rem 1rem 0",
        marginTop: "2rem",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Montserrat', sans-serif",
        borderTop: `1px solid ${theme.border.primary}`,
      },
      container: {
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        maxWidth: "1200px",
        margin: "0 auto",
        position: "relative",
        zIndex: 1,
        gap: isMobile ? "3rem" : "2rem",
        flexDirection: isMobile ? "column" : "row",
      },
      section: {
        flex: "1 1 250px",
        minWidth: "200px",
        padding: "0 1rem",
        animation: "fadeIn 0.5s ease forwards",
        opacity: 0,
      },
      logoContainer: {
        display: "flex",
        alignItems: "center",
        marginBottom: "1.5rem",
        fontSize: "2rem",
        fontWeight: "bold",
        transition: "transform 0.3s ease",
      },
      logoFirst: {
        color: theme.text.primary,
      },
      logoSecond: {
        color: theme.text.accent,
      },
      text: {
        fontSize: "1rem",
        color: theme.text.secondary,
        lineHeight: "1.6",
        marginBottom: "1.5rem",
      },
      heading: {
        fontSize: "1.4rem",
        marginBottom: "1.8rem",
        color: theme.text.primary,
        position: "relative",
        paddingBottom: "0.8rem",
        fontFamily: "'Gilroy', 'Montserrat', sans-serif",
        '&::after': {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "50px",
          height: "3px",
          background: `linear-gradient(90deg, ${theme.text.accent}, ${theme.button.primaryHover})`,
          borderRadius: "3px"
        }
      },
      list: {
        listStyle: "none",
        padding: 0,
        margin: 0
      },
      link: {
        display: "flex",
        alignItems: "center",
        textDecoration: "none",
        color: theme.text.secondary,
        marginBottom: "1rem",
        transition: "all 0.3s ease",
        padding: "0.5rem 0.5rem 0.5rem 0",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Montserrat', sans-serif",
        '&::before': {
          content: '""',
          position: "absolute",
          left: 0,
          bottom: 0,
          width: "0",
          height: "1px",
          background: theme.text.accent,
          transition: "width 0.3s ease"
        },
      },
      contactItem: {
        display: "flex",
        alignItems: "flex-start",
        marginBottom: "1.5rem",
        color: theme.text.secondary,
        lineHeight: "1.6",
        fontFamily: "'Montserrat', sans-serif",
      },
      contactIcon: {
        marginRight: "1rem",
        fontSize: "1.3rem",
        color: theme.text.accent,
        minWidth: "20px"
      },
      socialIcons: {
        display: "flex",
        justifyContent: isMobile ?"center",
        gap: "1rem",
        marginTop: "2rem",
        flexWrap: "wrap"
      },
      iconLink: {
        textDecoration: "none",
        transition: "all 0.3s ease"
      },
      icon: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0.5rem 1rem",
        backgroundColor: theme.background.secondary,
        color: theme.text.primary,
        borderRadius: "8px",
        transition: "all 0.3s ease",
        fontSize: "0.9rem",
        fontFamily: "'Montserrat', sans-serif",
        border: `1px solid ${theme.border.primary}`,
      },
      bottom: {
        textAlign: "center",
        marginTop: "4rem",
        padding: "2rem 0",
        borderTop: `1px solid ${theme.border.primary}`,
        position: "relative",
        zIndex: 1,
        backgroundColor: theme.background.secondary,
      },
      bottomText: {
        fontSize: "0.9rem",
        color: theme.text.secondary,
        margin: "0.5rem 0",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "0.5rem",
        fontFamily: "'Montserrat', sans-serif",
      },
      bottomLink: {
        color: theme.text.secondary,
        textDecoration: "none",
        transition: "all 0.3s ease",
        fontFamily: "'Montserrat', sans-serif",
        '&::after': {
          content: '""',
          position: "absolute",
          bottom: "-2px",
          left: 0,
          width: "0",
          height: "1px",
          background: theme.text.accent,
          transition: "width 0.3s ease"
        },
      },
    };
  };

  const [styles, setStyles] = useState(getStyles());

  useEffect(() => {
    const handleResize = () => {
      setStyles(getStyles());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Footer Branding */}
        <div style={{...styles.section, animationDelay: "0.1s"}}>
          <div 
            style={styles.logoContainer}
            onMouseOver={(e) => {
              e.target.style.transform = "scale(1.05)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "none";
            }}
          >
            <span style={styles.logoFirst}>Arrow</span>
            <span style={styles.logoSecond}>Sites</span>
          </div>
          <p style={styles.text}>
            Discover your dream property with our comprehensive real estate platform. 
            Find luxury homes, modern apartments, and premium investment opportunities.
          </p>
          <div style={styles.socialIcons}>
            {[
              { name: "GitHub", url: "https://github.com" },
              { name: "LinkedIn", url: "https://linkedin.com" },
              { name: "Twitter", url: "https://twitter.com" }
            ].map((social, index) => (
              <a key={index} href={social.url} target="_blank" rel="noreferrer" style={styles.iconLink}>
                <span 
                  style={styles.icon}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = theme.button.primary;
                    e.target.style.color = "white";
                    e.target.style.transform = "translateY(-2px)";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = theme.background.secondary;
                    e.target.style.color = theme.text.primary;
                    e.target.style.transform = "none";
                  }}
                >
                  {social.name}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div style={{...styles.section, animationDelay: "0.2s"}}>
          <h4 style={styles.heading}>Quick Links</h4>
          <ul style={styles.list}>
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About" },
              { path: "/contact", label: "Contact" },
              { path: "/Cards", label: "Properties" },
              { path: "/AddPropr", label: "Add Property" }
            ].map((item, index) => (
              <li key={index}>
                <NavLink 
                  to={item.path} 
                  style={({ isActive }) => ({
                    ...styles.link,
                    color: isActive ? theme.text.accent : theme.text.secondary,
                    fontWeight: isActive ? '600' : 'normal',
                  })}
                  onMouseOver={(e) => {
                    e.target.style.color = theme.text.accent;
                    e.target.style.transform = "translateX(8px)";
                    e.target.style.before = { width: "100%" };
                  }}
                  onMouseOut={(e) => {
                    e.target.style.color = theme.text.secondary;
                    e.target.style.transform = "none";
                    e.target.style.before = { width: "0" };
                  }}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div style={{...styles.section, animationDelay: "0.3s"}}>
          <h4 style={styles.heading}>Get In Touch</h4>
          <ul style={styles.list}>
            <li style={styles.contactItem}>
              <span style={styles.contactIcon}>📧</span> info@propertypro.com
            </li>
            <li style={styles.contactItem}>
              <span style={styles.contactIcon}>📱</span> +1 (555) 123-4567
            </li>
            <li style={styles.contactItem}>
              <span style={styles.contactIcon}>📍</span> 123 Property St, Real Estate City
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div style={styles.bottom}>
        <p style={styles.bottomText}>
          © {currentYear} PropertyPro. All rights reserved. | 
          <a href="/privacy" style={styles.bottomLink}> Privacy Policy</a> | 
          <a href="/terms" style={styles.bottomLink}> Terms of Service</a>
        </p>
      </div>

      {/* Animation styles */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .fade-in {
          animation: fadeIn 0.5s ease forwards;
        }
        
        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.2s; }
        .delay-3 { animation-delay: 0.3s; }
      `}</style>
    </footer>
  );
};