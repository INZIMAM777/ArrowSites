import { NavLink } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

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
      accent: "#60a5fa",
    },
    border: {
      primary: "#334155",
      accent: "#60a5fa",
    },
    button: {
      primary: "#3b82f6",
      hover: "#2563eb",
      text: "#ffffff",
    },
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
      accent: "#7c3aed",
    },
    border: {
      primary: "#e2e8f0",
      accent: "#7c3aed",
    },
    button: {
      primary: "linear-gradient(135deg, #7c3aed, #6d28d9)",
      hover: "#6d28d9",
      text: "#ffffff",
    },
  },
};

export const About = () => {
  const { isDarkMode } = useOutletContext();
  const theme = isDarkMode ? colorTheme.dark : colorTheme.light;

  // Button color logic
  const gradientPrimary = isDarkMode
    ? "#3b82f6" // solid blue in dark mode
    : "linear-gradient(135deg, #7c3aed, #6d28d9)"; // gradient in light mode

  const gradientHover = isDarkMode ? "#2563eb" : "#6d28d9";

  const styles = {
    page: {
      fontFamily: "'Gilroy', sans-serif",
      background: theme.background.primary,
      color: theme.text.primary,
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "40px 20px",
      flex: 1,
    },
    section: {
      marginBottom: "60px",
      textAlign: "center",
    },
    title: {
      fontSize: "clamp(2rem, 5vw, 3rem)",
      fontWeight: "bold",
      marginBottom: "20px",
      color: theme.text.primary,
    },
    subtitle: {
      fontSize: "1.25rem",
      color: theme.text.secondary,
      maxWidth: "700px",
      margin: "0 auto",
    },
    heroSection: {
      background: theme.background.secondary,
      padding: "60px 20px",
      borderRadius: "16px",
      textAlign: "center",
      marginBottom: "60px",
      boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    },
    heroTitle: {
      fontSize: "clamp(2.5rem, 6vw, 4rem)",
      fontWeight: "bold",
      marginBottom: "20px",
      color: theme.text.primary,
      fontFamily: "'Montserrat', sans-serif",
    },
    heroText: {
      fontSize: "1.25rem",
      marginBottom: "30px",
      color: theme.text.secondary,
      maxWidth: "800px",
      margin: "0 auto 30px auto",
    },
    heroButton: {
      display: "inline-block",
      padding: "12px 24px",
      borderRadius: "8px",
      textDecoration: "none",
      color: theme.button.text,
      fontWeight: "600",
      fontSize: "1rem",
      transition: "all 0.3s ease",
      boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
    },
    testimonialGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "24px",
      marginTop: "40px",
    },
    testimonialCard: {
      background: theme.background.secondary,
      padding: "24px",
      borderRadius: "16px",
      boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
      textAlign: "left",
      border: `1px solid ${theme.border.primary}`,
      transition: "all 0.3s ease",
    },
    testimonialQuote: {
      fontSize: "1.1rem",
      fontStyle: "italic",
      marginBottom: "16px",
      color: theme.text.secondary,
    },
    testimonialAuthor: {
      fontWeight: "bold",
      color: theme.text.primary,
    },
    ctaSection: {
      background: theme.background.secondary,
      padding: "40px 20px",
      borderRadius: "16px",
      textAlign: "center",
      boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    },
    ctaTitle: {
      fontSize: "2rem",
      fontWeight: "bold",
      marginBottom: "20px",
      color: theme.text.primary,
    },
    ctaText: {
      fontSize: "1.1rem",
      marginBottom: "30px",
      color: theme.text.secondary,
      maxWidth: "700px",
      margin: "0 auto 30px auto",
    },
    ctaButton: {
      display: "inline-block",
      padding: "12px 24px",
      borderRadius: "8px",
      textDecoration: "none",
      color: theme.button.text,
      fontWeight: "600",
      fontSize: "1rem",
      transition: "all 0.3s ease",
      boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
    },
  };

  return (
    <div style={styles.page}>
      <main style={styles.container}>
        {/* Hero Section */}
        <section style={styles.heroSection}>
          <h1 style={styles.heroTitle}>About Us</h1>
          <p style={styles.heroText}>
            At Elite Estates, we believe in more than just selling properties. We believe in building lasting
            relationships, crafting dream homes, and helping families find their perfect place to grow.
          </p>
          <NavLink
            to="/properties"
            style={{ ...styles.heroButton, background: gradientPrimary }}
            onMouseOver={(e) => {
              e.target.style.background = gradientHover;
              e.target.style.transform = "translateY(-3px)";
              e.target.style.boxShadow = "0 6px 20px rgba(0,0,0,0.3)";
            }}
            onMouseOut={(e) => {
              e.target.style.background = gradientPrimary;
              e.target.style.transform = "none";
              e.target.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";
            }}
          >
            Browse Properties
          </NavLink>
        </section>

        {/* Testimonials Section */}
        <section style={styles.section}>
          <h2 style={styles.title}>What Our Clients Say</h2>
          <div style={styles.testimonialGrid}>
            <div
              style={styles.testimonialCard}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.3)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
              }}
            >
              <p style={styles.testimonialQuote}>
                "Elite Estates helped us find the perfect home. The process was seamless and the team was incredibly
                supportive."
              </p>
              <p style={styles.testimonialAuthor}>- Sarah & Michael</p>
            </div>
            <div
              style={styles.testimonialCard}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.3)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
              }}
            >
              <p style={styles.testimonialQuote}>
                "Professional, reliable, and truly caring. We couldn’t be happier with our experience."
              </p>
              <p style={styles.testimonialAuthor}>- James & Emily</p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section style={styles.ctaSection}>
          <h2 style={styles.ctaTitle}>Ready to Find Your Dream Home?</h2>
          <p style={styles.ctaText}>
            Let us guide you through every step of your real estate journey. Explore our listings and discover your
            future today.
          </p>
          <NavLink
            to="/contact"
            style={{ ...styles.ctaButton, background: gradientPrimary }}
            onMouseOver={(e) => {
              e.target.style.background = gradientHover;
              e.target.style.transform = "translateY(-3px)";
              e.target.style.boxShadow = "0 6px 20px rgba(0,0,0,0.3)";
            }}
            onMouseOut={(e) => {
              e.target.style.background = gradientPrimary;
              e.target.style.transform = "none";
              e.target.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";
            }}
          >
            Schedule a Consultation
          </NavLink>
        </section>
      </main>
    </div>
  );
};
