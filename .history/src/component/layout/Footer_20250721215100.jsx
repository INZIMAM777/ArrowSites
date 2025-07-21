import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer style={styles.footer}>
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
            <li><NavLink to="/" style={styles.link}>Home</NavLink></li>
            <li><NavLink to="/about" style={styles.link}>About</NavLink></li>
            <li><NavLink to="/contact" style={styles.link}>Contact</NavLink></li>
            <li><NavLink to="/portfolio" style={styles.link}>Portfolio</NavLink></li>
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
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#3a0ca3",
    // background: "linear-gradient(135deg, #3a0ca3 0%, #4361ee 100%)",
    color: "#fff",
    padding: "3rem 1rem 0",
    marginTop: "4rem",
    position: "relative",
    overflow: "hidden"
  },
  container: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    maxWidth: "1200px",
    margin: "0 auto",
    position: "relative",
    zIndex: 1
  },
  section: {
    flex: "1 1 250px",
    margin: "1rem",
    minWidth: "200px"
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: "1rem",
    fontSize: "1.8rem",
    fontWeight: "bold"
  },
  logoFirst: {
    color: "#fff"
  },
  logoSecond: {
    color: "#f72585"
  },
  text: {
    fontSize: "1rem",
    color: "rgba(255,255,255,0.8)",
    lineHeight: "1.6",
    marginBottom: "1.5rem"
  },
  heading: {
    fontSize: "1.3rem",
    marginBottom: "1.5rem",
    color: "#fff",
    position: "relative",
    paddingBottom: "0.5rem"
  },
  headingAfter: {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "50px",
    height: "3px",
    backgroundColor: "#f72585"
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0
  },
  link: {
    display: "block",
    textDecoration: "none",
    color: "rgba(255,255,255,0.8)",
    marginBottom: "0.8rem",
    transition: "all 0.3s ease",
    padding: "0.3rem 0",
    ":hover": {
      color: "#fff",
      transform: "translateX(5px)"
    }
  },
  contactItem: {
    display: "flex",
    alignItems: "center",
    marginBottom: "1rem",
    color: "rgba(255,255,255,0.8)"
  },
  contactIcon: {
    marginRight: "0.8rem",
    fontSize: "1.2rem"
  },
  socialIcons: {
    display: "flex",
    gap: "1rem",
    marginTop: "1.5rem"
  },
  iconLink: {
    textDecoration: "none"
  },
  icon: {
    display: "inline-block",
    padding: "0.5rem 1rem",
    backgroundColor: "rgba(255,255,255,0.1)",
    color: "#fff",
    borderRadius: "50px",
    transition: "all 0.3s ease",
    ":hover": {
      backgroundColor: "rgba(247, 37, 133, 0.3)",
      transform: "translateY(-3px)"
    }
  },
  bottom: {
    textAlign: "center",
    marginTop: "3rem",
    padding: "1.5rem 0",
    borderTop: "1px solid rgba(255,255,255,0.1)",
    position: "relative",
    zIndex: 1
  },
  bottomText: {
    fontSize: "0.9rem",
    color: "rgba(255,255,255,0.7)",
    margin: 0
  },
  bottomLink: {
    color: "rgba(255,255,255,0.7)",
    textDecoration: "none",
    margin: "0 0.5rem",
    ":hover": {
      color: "#fff",
      textDecoration: "underline"
    }
  },
  // Decorative elements
  footerDecoration: {
    position: "absolute",
    width: "300px",
    height: "300px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(247,37,133,0.1) 0%, transparent 70%)",
    top: "-100px",
    right: "-100px"
  }
};