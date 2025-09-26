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
      accent: "#3b82f6", // blue accent
    },
    border: {
      primary: "#334155",
      accent: "#3b82f6",
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
      primary: "#000000",
      secondary: "#475569",
      accent: "#7c3aed",
    },
    border: {
      primary: "#d8b4fe",
      accent: "#7c3aed",
    },
    button: {
      primary: "linear-gradient(135deg, #7c3aed, #6d28d9)",
      hover: "#6d28d9",
      text: "#ffffff",
    },
  },
};

// Sample testimonials
const testimonials = [
  {
    text: "PropertyPro helped us find our perfect family house in just two weeks. Their attention to our needs was exceptional.",
    author: "Sarah Johnson",
    role: "Homeowner",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    text: "As an investor, I appreciate their market knowledge and negotiation skills. They've helped me build a profitable portfolio.",
    author: "Michael Chen",
    role: "Real Estate Investor",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "The team went above and beyond to sell our property above asking price. Highly recommend their services!",
    author: "Emily Rodriguez",
    role: "Seller",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

export const About = () => {
  const { isDarkMode } = useOutletContext();
  const theme = isDarkMode ? colorTheme.dark : colorTheme.light;

  // ✅ Button colors
  const gradientPrimary = isDarkMode ? "#3b82f6" : "linear-gradient(135deg, #7c3aed, #6d28d9)";
  const gradientHover = isDarkMode ? "#2563eb" : "#6d28d9";

  const styles = {
    pageContainer: {
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      backgroundColor: theme.background.primary,
      color: theme.text.primary,
      fontFamily: "'Montserrat', sans-serif",
    },
    main: { flex: 1 },
    hero: {
      position: "relative",
      padding: "8rem 2rem",
      background: `linear-gradient(${isDarkMode ? "rgba(0,0,0,0.7)" : "rgba(0,0,0,0.6)"}, ${
        isDarkMode ? "rgba(0,0,0,0.8)" : "rgba(0,0,0,0.6)"
      }), url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "white",
      overflow: "hidden",
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    heroContent: { maxWidth: "800px", margin: "0 auto", position: "relative", zIndex: 2 },
    heroTitle: {
      fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
      marginBottom: "1.5rem",
      fontWeight: 700,
      textShadow: "0 2px 4px rgba(0,0,0,0.3)",
      fontFamily: "'Gilroy', 'Montserrat', sans-serif",
    },
    heroText: {
      fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
      opacity: 0.9,
      marginBottom: "2rem",
      textShadow: "0 1px 2px rgba(0,0,0,0.3)",
    },
    heroButton: {
      display: "inline-block",
      background: gradientPrimary,
      color: theme.button.text,
      border: "none",
      padding: "1rem 2.5rem",
      fontSize: "1.2rem",
      borderRadius: "8px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
      textDecoration: "none",
      fontWeight: 600,
    },
    statsSection: {
      display: "flex",
      justifyContent: "space-around",
      flexWrap: "wrap",
      padding: "4rem 2rem",
      backgroundColor: theme.background.secondary,
    },
    statItem: { textAlign: "center", padding: "1rem", minWidth: "200px" },
    statNumber: {
      fontSize: "3rem",
      fontWeight: 700,
      color: theme.text.accent,
      marginBottom: "0.5rem",
      fontFamily: "'Gilroy', 'Montserrat', sans-serif",
    },
    statLabel: { fontSize: "1.1rem", color: theme.text.secondary },
    section: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      maxWidth: "1200px",
      margin: "4rem auto",
      padding: "0 2rem",
      flexWrap: "wrap",
    },
    sectionContent: { flex: "1 1 50%", minWidth: "300px", padding: "2rem" },
    sectionTitle: {
      fontSize: "clamp(2rem, 4vw, 2.5rem)",
      color: theme.text.accent,
      marginBottom: "1.5rem",
      fontFamily: "'Gilroy', 'Montserrat', sans-serif",
    },
    sectionText: {
      fontSize: "1.1rem",
      lineHeight: "1.6",
      color: theme.text.primary,
      marginBottom: "1.5rem",
    },
    sectionImage: {
      flex: "1 1 40%",
      minWidth: "300px",
      height: "400px",
      backgroundImage:
        "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      borderRadius: "16px",
      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
    },
    testimonialsSection: {
      padding: "6rem 2rem",
      backgroundColor: theme.background.secondary,
      textAlign: "center",
    },
    testimonialGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "2rem",
      maxWidth: "1400px",
      margin: "3rem auto 0",
    },
    testimonialCard: {
      backgroundColor: theme.background.primary,
      borderRadius: "16px",
      padding: "2rem",
      boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
      transition: "all 0.3s ease",
      textAlign: "left",
      border: `1px solid ${theme.border.primary}`,
    },
    testimonialText: {
      fontStyle: "italic",
      color: theme.text.primary,
      lineHeight: "1.6",
      marginBottom: "1.5rem",
    },
    testimonialAuthor: { display: "flex", alignItems: "center" },
    testimonialAuthorImage: {
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      backgroundColor: theme.background.tertiary,
      marginRight: "1rem",
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    testimonialAuthorName: {
      color: theme.text.accent,
      marginBottom: "0.2rem",
      fontFamily: "'Gilroy', 'Montserrat', sans-serif",
    },
    testimonialAuthorRole: { color: theme.text.secondary, fontSize: "0.9rem" },
    ctaSection: {
      textAlign: "center",
      padding: "6rem 2rem",
      background: `linear-gradient(${isDarkMode ? "rgba(0,0,0,0.8)" : "rgba(0,0,0,0.7)"}, ${
        isDarkMode ? "rgba(0,0,0,0.9)" : "rgba(0,0,0,0.7)"
      }), url('https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "white",
    },
    ctaTitle: {
      fontSize: "clamp(2rem, 4vw, 2.5rem)",
      marginBottom: "1.5rem",
      fontFamily: "'Gilroy', 'Montserrat', sans-serif",
    },
    ctaText: {
      fontSize: "1.2rem",
      maxWidth: "700px",
      margin: "0 auto 2.5rem",
      opacity: 0.9,
    },
    ctaButton: {
      display: "inline-block",
      background: gradientPrimary,
      color: theme.button.text,
      border: "none",
      padding: "1rem 2.5rem",
      fontSize: "1.2rem",
      borderRadius: "8px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
      textDecoration: "none",
      fontWeight: 600,
    },
  };

  return (
    <div style={styles.pageContainer}>
      <main style={styles.main}>
        {/* Hero Section */}
        <section style={styles.hero}>
          <div style={styles.heroContent}>
            <h1 style={styles.heroTitle}>Your Trusted Real Estate Partners</h1>
            <p style={styles.heroText}>
              With over 20 years of experience, we've helped thousands of families
              find their dream homes and investors build profitable portfolios.
            </p>
            <NavLink
              to="/contact"
              style={styles.heroButton}
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
              Get in Touch
            </NavLink>
          </div>
        </section>

        {/* Stats Section */}
        <section style={styles.statsSection}>
          {[
            { number: "20+", label: "Years Experience" },
            { number: "2,500+", label: "Happy Clients" },
            { number: "500 Cr", label: "Properties Sold" },
            { number: "98%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <div key={index} style={styles.statItem}>
              <div style={styles.statNumber}>{stat.number}</div>
              <div style={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </section>

        {/* Our Story Section */}
        <section style={styles.section}>
          <div style={styles.sectionContent}>
            <h2 style={styles.sectionTitle}>Our Story</h2>
            <p style={styles.sectionText}>
              Founded in 2002, PropertyPro began as a small family business with
              a passion for connecting people with properties they love. What started as
              a local agency has grown into one of the region's most trusted real estate
              firms.
            </p>
            <p style={styles.sectionText}>
              Our success comes from our client-first approach, deep market knowledge,
              and commitment to ethical practices. We believe buying or selling a home
              should be an exciting journey, not a stressful ordeal.
            </p>
          </div>
          <div style={styles.sectionImage}></div>
        </section>

        {/* Testimonials Section */}
        <section style={styles.testimonialsSection}>
          <h2 style={styles.sectionTitle}>What Our Clients Say</h2>
          <div style={styles.testimonialGrid}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                style={styles.testimonialCard}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 15px 40px rgba(0,0,0,0.1)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.05)";
                }}
              >
                <p style={styles.testimonialText}>"{testimonial.text}"</p>
                <div style={styles.testimonialAuthor}>
                  <div
                    style={{
                      ...styles.testimonialAuthorImage,
                      backgroundImage: `url(${testimonial.image})`,
                    }}
                  ></div>
                  <div>
                    <h4 style={styles.testimonialAuthorName}>{testimonial.author}</h4>
                    <p style={styles.testimonialAuthorRole}>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section style={styles.ctaSection}>
          <h2 style={styles.ctaTitle}>Ready to Find Your Dream Home?</h2>
          <p style={styles.ctaText}>
            Our team of expert agents is ready to guide you through every step of
            the home buying or selling process. Contact us today to get started.
          </p>
          <NavLink
            to="/contact"
            style={styles.ctaButton}
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
