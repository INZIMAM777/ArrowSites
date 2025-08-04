import { NavLink } from "react-router-dom";

const styles = {
  footer: {
    backgroundColor: "#0a0a0a",
    background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
    color: "#fff",
    padding: "4rem 1rem 0",
    marginTop: "4rem",
    position: "relative",
    overflow: "hidden",
    '&::before': {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "4px",
      background: "linear-gradient(90deg, #4361ee, #f72585)",
    }
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    maxWidth: "1200px",
    margin: "0 auto",
    position: "relative",
    zIndex: 1,
    gap: "2rem",
    '@media (max-width: 768px)': {
      flexDirection: "column",
      gap: "3rem"
    }
  },
  section: {
    flex: "1 1 250px",
    minWidth: "200px",
    padding: "0 1rem",
    animation: "fadeIn 0.5s ease forwards",
    opacity: 0,
    '&:nth-child(1)': { animationDelay: "0.1s" },
    '&:nth-child(2)': { animationDelay: "0.2s" },
    '&:nth-child(3)': { animationDelay: "0.3s" }
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: "1.5rem",
    fontSize: "2rem",
    fontWeight: "bold",
    transition: "transform 0.3s ease",
    '&:hover': {
      transform: "scale(1.05)"
    }
  },
  logoFirst: {
    color: "#fff",
    textShadow: "0 0 10px rgba(67, 97, 238, 0.5)"
  },
  logoSecond: {
    color: "#f72585",
    textShadow: "0 0 10px rgba(247, 37, 133, 0.5)"
  },
  text: {
    fontSize: "1rem",
    color: "rgba(255,255,255,0.8)",
    lineHeight: "1.6",
    marginBottom: "1.5rem",
    textAlign: "justify"
  },
  heading: {
    fontSize: "1.4rem",
    marginBottom: "1.8rem",
    color: "#fff",
    position: "relative",
    paddingBottom: "0.8rem",
    '&::after': {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "50px",
      height: "3px",
      background: "linear-gradient(90deg, #4361ee, #f72585)",
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
    color: "rgba(255,255,255,0.8)",
    marginBottom: "1rem",
    transition: "all 0.3s ease",
    padding: "0.5rem 0.5rem 0.5rem 0",
    position: "relative",
    overflow: "hidden",
    '&::before': {
      content: '""',
      position: "absolute",
      left: 0,
      bottom: 0,
      width: "0",
      height: "1px",
      background: "#f72585",
      transition: "width 0.3s ease"
    },
    '&:hover': {
      color: "#fff",
      transform: "translateX(8px)",
      '&::before': {
        width: "100%"
      }
    }
  },
  contactItem: {
    display: "flex",
    alignItems: "flex-start",
    marginBottom: "1.5rem",
    color: "rgba(255,255,255,0.8)",
    lineHeight: "1.6"
  },
  contactIcon: {
    marginRight: "1rem",
    fontSize: "1.3rem",
    color: "#f72585",
    minWidth: "20px"
  },
  socialIcons: {
    display: "flex",
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
    backgroundColor: "rgba(255,255,255,0.08)",
    color: "#fff",
    borderRadius: "50px",
    transition: "all 0.3s ease",
    fontSize: "0.9rem",
    '&:hover': {
      backgroundColor: "#f72585",
      transform: "translateY(-3px)",
      boxShadow: "0 5px 15px rgba(247, 37, 133, 0.3)"
    }
  },
  bottom: {
    textAlign: "center",
    marginTop: "4rem",
    padding: "2rem 0",
    borderTop: "1px solid rgba(255,255,255,0.1)",
    position: "relative",
    zIndex: 1,
    background: "rgba(0,0,0,0.2)"
  },
  bottomText: {
    fontSize: "0.9rem",
    color: "rgba(255,255,255,0.7)",
    margin: "0.5rem 0",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "0.5rem"
  },
  bottomLink: {
    color: "rgba(255,255,255,0.7)",
    textDecoration: "none",
    transition: "all 0.3s ease",
    position: "relative",
    '&::after': {
      content: '""',
      position: "absolute",
      bottom: "-2px",
      left: 0,
      width: "0",
      height: "1px",
      background: "#f72585",
      transition: "width 0.3s ease"
    },
    '&:hover': {
      color: "#fff",
      '&::after': {
        width: "100%"
      }
    }
  },
  footerDecoration: {
    position: "absolute",
    width: "500px",
    height: "500px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(67,97,238,0.15) 0%, transparent 70%)",
    top: "-150px",
    right: "-150px",
    zIndex: 0,
    '@media (max-width: 768px)': {
      width: "300px",
      height: "300px",
      top: "-50px",
      right: "-50px"
    }
  },
  footerDecoration2: {
    position: "absolute",
    width: "400px",
    height: "400px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(247,37,133,0.1) 0%, transparent 70%)",
    bottom: "-100px",
    left: "-100px",
    zIndex: 0,
    '@media (max-width: 768px)': {
      width: "200px",
      height: "200px",
      bottom: "-50px",
      left: "-50px"
    }
  },
  // Animation keyframes
  '@keyframes fadeIn': {
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" }
  }
};

export const Footer = () => {
  return (
    <footer style={styles.footer}>
      {/* Decorative elements */}
      <div style={styles.footerDecoration}></div>
      <div style={styles.footerDecoration2}></div>
      
      <div style={styles.container}>
        {/* Footer Branding */}
        <div style={styles.section}>
          <div style={styles.logoContainer}>
            <span style={styles.logoFirst}>Arrow</span>
            <span style={styles.logoSecond}>Sites</span>
          </div>
          <p style={styles.text}>Building modern web experiences with colorful solutions.</p>
          <div style={styles.socialIcons}>
            <a href="https://github.com/INZIMAM777" target="_blank" rel="noreferrer" style={styles.iconLink}>
              <span style={styles.icon}>GitHub</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={styles.iconLink}>
              <span style={styles.icon}>LinkedIn</span>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" style={styles.iconLink}>
              <span style={styles.icon}>Twitter</span>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div style={styles.section}>
          <h4 style={styles.heading}>Quick Links</h4>
          <ul style={styles.list}>
            <li><NavLink to="/" style={({ isActive }) => 
              isActive ? { ...styles.link, color: "#fff", '&::before': { width: "100%" } } : styles.link
            }>Home</NavLink></li>
            <li><NavLink to="/about" style={({ isActive }) => 
              isActive ? { ...styles.link, color: "#fff", '&::before': { width: "100%" } } : styles.link
            }>About</NavLink></li>
            <li><NavLink to="/contact" style={({ isActive }) => 
              isActive ? { ...styles.link, color: "#fff", '&::before': { width: "100%" } } : styles.link
            }>Contact</NavLink></li>
            <li><NavLink to="/Cards" style={({ isActive }) => 
              isActive ? { ...styles.link, color: "#fff", '&::before': { width: "100%" } } : styles.link
            }>Properties</NavLink></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div style={styles.section}>
          <h4 style={styles.heading}>Get In Touch</h4>
          <ul style={styles.list}>
            <li style={styles.contactItem}>
              <span style={styles.contactIcon}>📧</span> hello@arrowsites.com
            </li>
            <li style={styles.contactItem}>
              <span style={styles.contactIcon}>📱</span> +1 (555) 123-4567
            </li>
            <li style={styles.contactItem}>
              <span style={styles.contactIcon}>📍</span> San Francisco, CA
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div style={styles.bottom}>
        <p style={styles.bottomText}>
          © {new Date().getFullYear()} InzimamDev. All rights reserved. | 
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
      `}</style>
    </footer>
  );
};