import { useState } from 'react';
import { useOutletContext } from "react-router-dom";

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

export const Contact = () => {
  const { isDarkMode } = useOutletContext();
  const theme = isDarkMode ? colorTheme.dark : colorTheme.light;
  
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
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ 
      name: '', 
      email: '', 
      phone: '', 
      message: '',
      propertyInterest: '' 
    });
    
    setTimeout(() => setSubmitted(false), 5000);
  };
  isMobile

  // Component styles using the theme
  const styles = {
    pageContainer: {
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      backgroundColor: theme.background.primary,
      color: theme.text.primary,
      fontFamily: "'Montserrat', sans-serif",
    },
    main: {
      flex: 1,
    },
    hero: {
      position: "relative",
      padding: "8rem 2rem",
      background: `linear-gradient(${isDarkMode ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.6)'}, ${isDarkMode ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.6)'}), url('https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "white",
      overflow: "hidden",
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    heroContent: {
      maxWidth: "800px",
      margin: "0 auto",
      position: "relative",
      zIndex: 2,
    },
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
      fontFamily: "'Montserrat', sans-serif",
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
    infoSection: {
      flex: "1 1 30%",
      minWidth: "300px",
    },
    sectionTitle: {
      fontSize: "clamp(1.8rem, 4vw, 2rem)",
      color: theme.text.accent,
      marginBottom: "2rem",
      position: "relative",
      paddingBottom: "0.5rem",
      fontFamily: "'Gilroy', 'Montserrat', sans-serif",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "1.5rem",
    },
    formGroup: {
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
    },
    label: {
      fontSize: "1rem",
      fontWeight: 600,
      color: theme.text.primary,
      fontFamily: "'Montserrat', sans-serif",
    },
    input: {
      padding: "0.8rem 1rem",
      border: `1px solid ${theme.border.primary}`,
      borderRadius: "8px",
      fontSize: "1rem",
      transition: "all 0.3s ease",
      backgroundColor: theme.background.primary,
      color: theme.text.primary,
      fontFamily: "'Montserrat', sans-serif",
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
      fontFamily: "'Montserrat', sans-serif",
    },
    submitButton: {
      padding: "1rem 2rem",
      background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
      color: "white",
      border: "none",
      borderRadius: "8px",
      fontSize: "1.1rem",
      fontWeight: 600,
      cursor: "pointer",
      transition: "all 0.3s ease",
      alignSelf: "flex-start",
      fontFamily: "'Montserrat', sans-serif",
    },
    successMessage: {
      backgroundColor: theme.background.secondary,
      border: `1px solid ${theme.border.accent}`,
      borderRadius: "16px",
      padding: "2rem",
      textAlign: "center",
    },
    successIcon: {
      fontSize: "3rem",
      color: theme.text.accent,
      marginBottom: "1rem",
    },
    successTitle: {
      fontSize: "1.5rem",
      color: theme.text.accent,
      marginBottom: "0.5rem",
      fontFamily: "'Gilroy', 'Montserrat', sans-serif",
    },
    successText: {
      color: theme.text.secondary,
      lineHeight: "1.6",
      fontFamily: "'Montserrat', sans-serif",
    },
    infoCard: {
      backgroundColor: theme.background.secondary,
      borderRadius: "16px",
      padding: "2rem",
      boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
      marginBottom: "2rem",
      border: `1px solid ${theme.border.primary}`,
    },
    infoItem: {
      display: "flex",
      gap: "1rem",
      marginBottom: "1.5rem",
    },
    infoIcon: {
      fontSize: "1.5rem",
      color: theme.text.accent,
      minWidth: "24px",
    },
    infoTitle: {
      fontSize: "1.1rem",
      color: theme.text.accent,
      marginBottom: "0.3rem",
      fontFamily: "'Gilroy', 'Montserrat', sans-serif",
    },
    infoLink: {
      color: theme.text.accent,
      textDecoration: "none",
      transition: "all 0.3s ease",
      fontFamily: "'Montserrat', sans-serif",
    },
    infoText: {
      color: theme.text.secondary,
      lineHeight: "1.6",
      fontFamily: "'Montserrat', sans-serif",
    },
    socialCard: {
      backgroundColor: theme.background.secondary,
      borderRadius: "16px",
      padding: "2rem",
      boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
      border: `1px solid ${theme.border.primary}`,
    },
    socialTitle: {
      fontSize: "1.1rem",
      color: theme.text.accent,
      marginBottom: "1rem",
      fontFamily: "'Gilroy', 'Montserrat', sans-serif",
    },
    socialLinks: {
      display: "flex",
      flexWrap: "wrap",
      gap: "0.8rem",
    },
    socialLink: {
      padding: "0.6rem 1.2rem",
      backgroundColor: theme.background.primary,
      color: theme.text.primary,
      borderRadius: "8px",
      textDecoration: "none",
      fontWeight: 500,
      transition: "all 0.3s ease",
      border: `1px solid ${theme.border.primary}`,
      fontFamily: "'Montserrat', sans-serif",
    },
    mapSection: {
      width: "85%",
      padding: "0 2rem",
      margin: "4rem auto",
    },
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
        {/* Hero Section */}
        <section style={styles.hero}>
          <div style={styles.heroContent}>
            <h1 style={styles.heroTitle}>Contact Our Real Estate Team</h1>
            <p style={styles.heroText}>
              Whether you're buying, selling, or just exploring options, our experts are here to help.
            </p>
          </div>
        </section>

        {/* Contact Content */}
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
                <div style={styles.formGroup}>
                  <label htmlFor="name" style={styles.label}>Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
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
                
                <div style={styles.formGroup}>
                  <label htmlFor="email" style={styles.label}>Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
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
                
                <div style={styles.formGroup}>
                  <label htmlFor="phone" style={styles.label}>Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
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
                
                <div style={styles.formGroup}>
                  <label htmlFor="propertyInterest" style={styles.label}>Property Interest</label>
                  <input
                    type="text"
                    id="propertyInterest"
                    name="propertyInterest"
                    value={formData.propertyInterest}
                    onChange={handleChange}
                    placeholder="e.g., 3-bedroom home in Downtown"
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
                    e.target.style.background = theme.button.primaryHover;
                    e.target.style.transform = "translateY(-2px)";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.background = "linear-gradient(135deg, #3b82f6, #1d4ed8)";
                    e.target.style.transform = "none";
                  }}
                >
                  Send Message
                </button>
              </form>
            )}
          </section>

          {/* Contact Info */}
          <section style={styles.infoSection}>
            <h2 style={styles.sectionTitle}>Our Offices</h2>
            
            <div style={styles.infoCard}>
              <div style={styles.infoItem}>
                <div style={styles.infoIcon}>📍</div>
                <div>
                  <h3 style={styles.infoTitle}>Main Office</h3>
                  <p style={styles.infoText}>
                    123 Property Avenue<br />
                    San Francisco, CA 94107<br />
                    Open Mon-Fri: 9am-6pm
                  </p>
                </div>
              </div>
              
              <div style={styles.infoItem}>
                <div style={styles.infoIcon}>📱</div>
                <div>
                  <h3 style={styles.infoTitle}>Phone</h3>
                  <a href="tel:+15551234567" style={styles.infoLink}>
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>
              
              <div style={styles.infoItem}>
                <div style={styles.infoIcon}>📧</div>
                <div>
                  <h3 style={styles.infoTitle}>Email</h3>
                  <a href="mailto:info@propertypro.com" style={styles.infoLink}>
                    info@propertypro.com
                  </a>
                </div>
              </div>
            </div>
            
            <div style={styles.infoCard}>
              <div style={styles.infoItem}>
                <div style={styles.infoIcon}>📍</div>
                <div>
                  <h3 style={styles.infoTitle}>Downtown Office</h3>
                  <p style={styles.infoText}>
                    456 Urban Street<br />
                    San Francisco, CA 94105<br />
                    Open Mon-Fri: 10am-7pm
                  </p>
                </div>
              </div>
              
              <div style={styles.infoItem}>
                <div style={styles.infoIcon}>📱</div>
                <div>
                  <h3 style={styles.infoTitle}>Phone</h3>
                  <a href="tel:+15559876543" style={styles.infoLink}>
                    +1 (555) 987-6543
                  </a>
                </div>
              </div>
            </div>
            
            <div style={styles.socialCard}>
              <h3 style={styles.socialTitle}>Follow Us</h3>
              <div style={styles.socialLinks}>
                {[
                  { name: "Facebook", url: "https://facebook.com" },
                  { name: "Instagram", url: "https://instagram.com" },
                  { name: "LinkedIn", url: "https://linkedin.com" },
                  { name: "Twitter", url: "https://twitter.com" }
                ].map((social, index) => (
                  <a 
                    key={index}
                    href={social.url} 
                    target="_blank" 
                    rel="noreferrer" 
                    style={styles.socialLink}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = theme.button.primary;
                      e.target.style.color = "white";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = theme.background.primary;
                      e.target.style.color = theme.text.primary;
                    }}
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Map Section */}
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