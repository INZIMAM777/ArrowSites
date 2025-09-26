import { useState } from 'react';
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

export const Contact = () => {
  const { isDarkMode } = useOutletContext();
  const theme = isDarkMode ? colorTheme.dark : colorTheme.light;

  // Button gradients
  const gradientPrimary = isDarkMode
    ? "#3b82f6" // solid blue in dark mode
    : "linear-gradient(135deg, #7c3aed, #6d28d9)"; // purple gradient in light mode

  const gradientHover = isDarkMode
    ? "#2563eb" // darker blue
    : "#6d28d9"; // darker purple

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    propertyInterest: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '', propertyInterest: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const isMobile = window.innerWidth <= 480;

  // Styles
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
      background: `linear-gradient(${isDarkMode ? 'rgba(0,0,0,0.7)' : 'rgba(0,0,0,0.6)'}, ${isDarkMode ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0.6)'}), url('https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "white",
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    heroContent: { maxWidth: "800px", margin: "0 auto", zIndex: 2 },
    heroTitle: {
      fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
      marginBottom: "1.5rem",
      fontWeight: 700,
      textShadow: "0 2px 4px rgba(0,0,0,0.3)",
      fontFamily: "'Gilroy','Montserrat',sans-serif",
    },
    heroText: {
      fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
      opacity: 0.9,
      marginBottom: "2rem",
      textShadow: "0 1px 2px rgba(0,0,0,0.3)",
    },
    contactContainer: {
      display: "flex",
      maxWidth: "1430px",
      margin: "4rem auto",
      padding: "0 2rem",
      flexWrap: "wrap",
      gap: "3rem",
    },
    formSection: {
      flex: "1 1 40%",
      minWidth: "300px",
      backgroundColor: theme.background.secondary,
      borderRadius: "16px",
      padding: "2.5rem",
      boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
      border: `1px solid ${theme.border.primary}`,
    },
    infoSection: { flex: "1 1 30%", minWidth: "300px" },
    sectionTitle: {
      fontSize: "clamp(1.8rem, 4vw, 2rem)",
      color: theme.text.accent,
      marginBottom: "2rem",
      paddingBottom: "0.5rem",
      fontFamily: "'Gilroy','Montserrat',sans-serif",
    },
    form: { display: "flex", flexDirection: "column", gap: "1.5rem" },
    formGroup: { display: "flex", flexDirection: "column", gap: "0.5rem" },
    label: { fontSize: "1rem", fontWeight: 600, color: theme.text.primary },
    input: {
      padding: "0.8rem 1rem",
      border: `1px solid ${theme.border.primary}`,
      borderRadius: "8px",
      fontSize: "1rem",
      transition: "all 0.3s ease",
      backgroundColor: theme.background.primary,
      color: theme.text.primary,
    },
    textarea: {
      padding: "0.8rem 1rem",
      border: `1px solid ${theme.border.primary}`,
      borderRadius: "8px",
      fontSize: "1rem",
      resize: "vertical",
      minHeight: "150px",
      transition: "all 0.3s ease",
      backgroundColor: theme.background.primary,
      color: theme.text.primary,
    },
    submitButton: {
      padding: "1rem 2rem",
      background: gradientPrimary,
      color: "white",
      border: "none",
      borderRadius: "8px",
      fontSize: "1.1rem",
      fontWeight: 600,
      cursor: "pointer",
      transition: "all 0.3s ease",
      alignSelf: "flex-start",
    },
    successMessage: {
      backgroundColor: theme.background.secondary,
      border: `1px solid ${theme.border.accent}`,
      borderRadius: "16px",
      padding: "2rem",
      textAlign: "center",
    },
    successIcon: { fontSize: "3rem", color: theme.text.accent, marginBottom: "1rem" },
    successTitle: { fontSize: "1.5rem", color: theme.text.accent, marginBottom: "0.5rem" },
    successText: { color: theme.text.secondary, lineHeight: "1.6" },
    infoCard: {
      backgroundColor: theme.background.secondary,
      borderRadius: "16px",
      padding: "2rem",
      boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
      marginBottom: "2rem",
      border: `1px solid ${theme.border.primary}`,
    },
    infoItem: { display: "flex", gap: "1rem", marginBottom: "1.5rem" },
    infoIcon: { fontSize: "1.5rem", color: theme.text.accent },
    infoTitle: { fontSize: "1.1rem", color: theme.text.accent, marginBottom: "0.3rem" },
    infoLink: { color: theme.text.accent, textDecoration: "none", transition: "all 0.3s ease" },
    infoText: { color: theme.text.secondary, lineHeight: "1.6" },
    socialCard: {
      backgroundColor: theme.background.secondary,
      borderRadius: "16px",
      padding: "2rem",
      boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
      border: `1px solid ${theme.border.primary}`,
    },
    socialTitle: { fontSize: "1.1rem", color: theme.text.accent, marginBottom: "1rem" },
    socialLinks: { display: "flex", flexWrap: "wrap", gap: "0.8rem" },
    socialLink: {
      padding: "0.6rem 1.2rem",
      backgroundColor: theme.background.primary,
      color: theme.text.primary,
      borderRadius: "8px",
      textDecoration: "none",
      fontWeight: 500,
      transition: "all 0.3s ease",
      border: `1px solid ${theme.border.primary}`,
    },
    mapSection: { width: isMobile ? "100%" : "85%", padding: "0 2rem", margin: "4rem auto" },
    map: {
      width: "100%",
      height: "400px",
      border: "none",
      borderRadius: "16px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    },
  };

  return (
    <div style={styles.pageContainer}>
      <main style={styles.main}>
        {/* Hero */}
        <section style={styles.hero}>
          <div style={styles.heroContent}>
            <h1 style={styles.heroTitle}>Contact Our Real Estate Team</h1>
            <p style={styles.heroText}>
              Whether you're buying, selling, or just exploring options, our experts are here to help.
            </p>
          </div>
        </section>

        {/* Contact Form + Info */}
        <div style={styles.contactContainer}>
          {/* Contact Form */}
          <section style={styles.formSection}>
            <h2 style={styles.sectionTitle}>Schedule a Consultation</h2>

            {submitted ? (
              <div style={styles.successMessage}>
                <div style={styles.successIcon}>✓</div>
                <h3 style={styles.successTitle}>Thank You!</h3>
                <p style={styles.successText}>
                  Your message has been sent successfully. One of our agents will contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form style={styles.form} onSubmit={handleSubmit}>
                {["name","email","phone","propertyInterest"].map((field, idx) => (
                  <div style={styles.formGroup} key={idx}>
                    <label htmlFor={field} style={styles.label}>
                      {field === "propertyInterest" ? "Property Interest" : field.charAt(0).toUpperCase() + field.slice(1)}
                    </label>
                    <input
                      type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                      id={field}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      required={field !== "propertyInterest"}
                      placeholder={field === "propertyInterest" ? "e.g., 3-bedroom home in Downtown" : ""}
                      style={styles.input}
                      onFocus={(e) => {
                        e.target.style.borderColor = theme.border.accent;
                        e.target.style.boxShadow = `0 0 0 3px ${theme.border.accent}20`;
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = theme.border.primary;
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>
                ))}
                <div style={styles.formGroup}>
                  <label htmlFor="message" style={styles.label}>Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    style={styles.textarea}
                    onFocus={(e) => {
                      e.target.style.borderColor = theme.border.accent;
                      e.target.style.boxShadow = `0 0 0 3px ${theme.border.accent}20`;
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = theme.border.primary;
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>
                <button
                  type="submit"
                  style={styles.submitButton}
                  onMouseOver={(e) => {
                    e.target.style.background = gradientHover;
                    e.target.style.transform = "translateY(-2px)";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.background = gradientPrimary;
                    e.target.style.transform = "none";
                  }}
                >
                  Send Message
                </button>
              </form>
            )}
          </section>

          {/* Info Section */}
          <section style={styles.infoSection}>
            <h2 style={styles.sectionTitle}>Our Offices</h2>
            {/* Main Office */}
            <div style={styles.infoCard}>
              <div style={styles.infoItem}>
                <div style={styles.infoIcon}>📍</div>
                <div>
                  <h3 style={styles.infoTitle}>Main Office</h3>
                  <p style={styles.infoText}>
                    123 Property Avenue<br/>San Francisco, CA 94107<br/>Open Mon-Fri: 9am-6pm
                  </p>
                </div>
              </div>
              <div style={styles.infoItem}>
                <div style={styles.infoIcon}>📱</div>
                <div>
                  <h3 style={styles.infoTitle}>Phone</h3>
                  <a href="tel:+15551234567" style={styles.infoLink}>+1 (555) 123-4567</a>
                </div>
              </div>
              <div style={styles.infoItem}>
                <div style={styles.infoIcon}>📧</div>
                <div>
                  <h3 style={styles.infoTitle}>Email</h3>
                  <a href="mailto:info@propertypro.com" style={styles.infoLink}>info@propertypro.com</a>
                </div>
              </div>
            </div>
            {/* Downtown Office */}
            <div style={styles.infoCard}>
              <div style={styles.infoItem}>
                <div style={styles.infoIcon}>📍</div>
                <div>
                  <h3 style={styles.infoTitle}>Downtown Office</h3>
                  <p style={styles.infoText}>
                    456 Urban Street<br/>San Francisco, CA 94105<br/>Open Mon-Fri: 10am-7pm
                  </p>
                </div>
              </div>
              <div style={styles.infoItem}>
                <div style={styles.infoIcon}>📱</div>
                <div>
                  <h3 style={styles.infoTitle}>Phone</h3>
                  <a href="tel:+15559876543" style={styles.infoLink}>+1 (555) 987-6543</a>
                </div>
              </div>
            </div>
            {/* Social Links */}
            <div style={styles.socialCard}>
              <h3 style={styles.socialTitle}>Follow Us</h3>
              <div style={styles.socialLinks}>
                {["Facebook","Instagram","LinkedIn","Twitter"].map((social, i) => (
                  <a
                    key={i}
                    href={`https://${social.toLowerCase()}.com`}
                    target="_blank"
                    rel="noreferrer"
                    style={styles.socialLink}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = gradientPrimary;
                      e.target.style.color = "white";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = theme.background.primary;
                      e.target.style.color = theme.text.primary;
                    }}
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Map */}
        <section style={styles.mapSection}>
          <iframe
            title="Office Locations"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.538315496854!2d-122.4194155846826!3d37.77492997975939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
            style={styles.map}
            allowFullScreen=""
            loading="lazy"
          />
        </section>
      </main>
    </div>
  );
};
