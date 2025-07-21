export const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Footer Logo or Title */}
        <div style={styles.section}>
          <h3 style={styles.logo}>Arrow</h3>
          <p style={styles.text}>Building modern web experiences.</p>
        </div>

        {/* Quick Links */}
        <div style={styles.section}>
          <h4 style={styles.heading}>Quick Links</h4>
          <ul style={styles.list}>
            <li><a href="/" style={styles.link}>Home</a></li>
            <li><a href="/About" style={styles.link}>About</a></li>
            <li><a href="/Contact" style={styles.link}>Contact</a></li>
          </ul>
        </div>

        {/* Social Media (optional) */}
        <div style={styles.section}>
          <h4 style={styles.heading}>Follow Me</h4>
          <ul style={styles.list}>
            <li><a href="https://github.com/INZIMAM777" target="_blank" rel="noreferrer" style={styles.link}>GitHub</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" style={styles.link}>LinkedIn</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noreferrer" style={styles.link}>Twitter</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div style={styles.bottom}>
        <p style={styles.bottomText}>© {new Date().getFullYear()} InzimamDev. All rights reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#1a1a1a",
    color: "#fff",
    paddingTop: "40px",
    paddingBottom: "20px",
    marginTop: "50px"
  },
  container: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    padding: "0 20px"
  },
  section: {
    flex: "1 1 200px",
    margin: "10px 0"
  },
  logo: {
    fontSize: "1.5rem",
    marginBottom: "10px"
  },
  heading: {
    fontSize: "1.1rem",
    marginBottom: "10px"
  },
  text: {
    fontSize: "0.95rem",
    color: "#ccc"
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0
  },
  link: {
    display: "block",
    textDecoration: "none",
    color: "#ccc",
    marginBottom: "6px",
    transition: "color 0.2s",
    fontSize: "0.95rem"
  },
  bottom: {
    textAlign: "center",
    marginTop: "30px",
    borderTop: "1px solid #333",
    paddingTop: "15px"
  },
  bottomText: {
    fontSize: "0.85rem",
    color: "#999"
  }
};
