import { useState } from 'react';
import { NavLink } from "react-router-dom";


export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
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
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset submission status after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div style={styles.pageContainer}>
      <Header />
      
      <main style={styles.main}>
        {/* Hero Section */}
        <section style={styles.hero}>
          <div style={styles.heroContent}>
            <h1 style={styles.heroTitle}>Get In Touch</h1>
            <p style={styles.heroText}>We'd love to hear from you! Send us a message and we'll respond as soon as possible.</p>
          </div>
          <div style={styles.heroDecoration}></div>
        </section>

        {/* Contact Content */}
        <div style={styles.contactContainer}>
          {/* Contact Form */}
          <section style={styles.formSection}>
            <h2 style={styles.sectionTitle}>Send Us a Message</h2>
            
            {submitted ? (
              <div style={styles.successMessage}>
                <div style={styles.successIcon}>✓</div>
                <h3 style={styles.successTitle}>Thank You!</h3>
                <p style={styles.successText}>Your message has been sent successfully. We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={styles.form}>
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
                    rows="6"
                    style={styles.textarea}
                  ></textarea>
                </div>
                
                <button type="submit" style={styles.submitButton}>
                  Send Message
                </button>
              </form>
            )}
          </section>

          {/* Contact Info */}
          <section style={styles.infoSection}>
            <h2 style={styles.sectionTitle}>Contact Information</h2>
            
            <div style={styles.infoCard}>
              <div style={styles.infoItem}>
                <div style={styles.infoIcon}>📧</div>
                <div>
                  <h3 style={styles.infoTitle}>Email</h3>
                  <a href="mailto:hello@arrowsites.com" style={styles.infoLink}>
                    hello@arrowsites.com
                  </a>
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
                <div style={styles.infoIcon}>📍</div>
                <div>
                  <h3 style={styles.infoTitle}>Location</h3>
                  <p style={styles.infoText}>
                    123 Web Street<br />
                    San Francisco, CA 94107
                  </p>
                </div>
              </div>
            </div>
            
            <div style={styles.socialCard}>
              <h3 style={styles.socialTitle}>Follow Us</h3>
              <div style={styles.socialLinks}>
                <a href="https://github.com/INZIMAM777" target="_blank" rel="noreferrer" style={styles.socialLink}>
                  GitHub
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={styles.socialLink}>
                  LinkedIn
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" style={styles.socialLink}>
                  Twitter
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* Map Section */}
        <section style={styles.mapSection}>
          <iframe 
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.538315496854!2d-122.4194155846826!3d37.77492997975939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
            style={styles.map}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </section>
      </main>

      <Footer />
    </div>
  );
};

// Styles
const styles = {
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: "#f8f9fa"
  },
  main: {
    flex: 1
  },
  hero: {
    position: "relative",
    padding: "6rem 2rem",
    background: "linear-gradient(135deg, #3a0ca3 0%, #4361ee 100%)",
    color: "white",
    overflow: "hidden",
    textAlign: "center"
  },
  heroContent: {
    maxWidth: "800px",
    margin: "0 auto",
    position: "relative",
    zIndex: 2
  },
  heroTitle: {
    fontSize: "3rem",
    marginBottom: "1.5rem",
    fontWeight: "700"
  },
  heroText: {
    fontSize: "1.5rem",
    opacity: "0.9",
    marginBottom: "2rem"
  },
  heroDecoration: {
    position: "absolute",
    top: "-100px",
    right: "-100px",
    width: "300px",
    height: "300px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(247,37,133,0.1) 0%, transparent 70%)",
    zIndex: 1
  },
  contactContainer: {
    display: "flex",
    maxWidth: "1200px",
    margin: "4rem auto",
    padding: "0 2rem",
    flexWrap: "wrap",
    gap: "3rem"
  },
  formSection: {
    flex: "1 1 60%",
    minWidth: "300px"
  },
  infoSection: {
    flex: "1 1 30%",
    minWidth: "300px"
  },
  sectionTitle: {
    fontSize: "2rem",
    color: "#3a0ca3",
    marginBottom: "2rem",
    position: "relative",
    paddingBottom: "0.5rem"
  },
  sectionTitleAfter: {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "80px",
    height: "4px",
    backgroundColor: "#f72585"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem"
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem"
  },
  label: {
    fontSize: "1rem",
    fontWeight: "600",
    color: "#333"
  },
  input: {
    padding: "0.8rem 1rem",
    border: "1px solid #ddd",
    borderRadius: "8px",
    fontSize: "1rem",
    transition: "all 0.3s ease",
    ":focus": {
      borderColor: "#4361ee",
      boxShadow: "0 0 0 3px rgba(67, 97, 238, 0.2)",
      outline: "none"
    }
  },
  textarea: {
    padding: "0.8rem 1rem",
    border: "1px solid #ddd",
    borderRadius: "8px",
    fontSize: "1rem",
    resize: "vertical",
    transition: "all 0.3s ease",
    ":focus": {
      borderColor: "#4361ee",
      boxShadow: "0 0 0 3px rgba(67, 97, 238, 0.2)",
      outline: "none"
    }
  },
  submitButton: {
    padding: "1rem 2rem",
    backgroundColor: "#f72585",
    color: "white",
    border: "none",
    borderRadius: "50px",
    fontSize: "1.1rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    alignSelf: "flex-start",
    ":hover": {
      backgroundColor: "#e5177b",
      transform: "translateY(-2px)",
      boxShadow: "0 4px 15px rgba(247, 37, 133, 0.3)"
    }
  },
  successMessage: {
    backgroundColor: "rgba(76, 201, 240, 0.1)",
    border: "1px solid rgba(76, 201, 240, 0.3)",
    borderRadius: "12px",
    padding: "2rem",
    textAlign: "center"
  },
  successIcon: {
    fontSize: "3rem",
    color: "#4cc9f0",
    marginBottom: "1rem"
  },
  successTitle: {
    fontSize: "1.5rem",
    color: "#3a0ca3",
    marginBottom: "0.5rem"
  },
  successText: {
    color: "#666",
    lineHeight: "1.6"
  },
  infoCard: {
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "2rem",
    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
    marginBottom: "2rem"
  },
  infoItem: {
    display: "flex",
    gap: "1rem",
    marginBottom: "1.5rem",
    ":last-child": {
      marginBottom: "0"
    }
  },
  infoIcon: {
    fontSize: "1.5rem",
    color: "#f72585"
  },
  infoTitle: {
    fontSize: "1.1rem",
    color: "#3a0ca3",
    marginBottom: "0.3rem"
  },
  infoLink: {
    color: "#4361ee",
    textDecoration: "none",
    transition: "all 0.3s ease",
    ":hover": {
      color: "#f72585",
      textDecoration: "underline"
    }
  },
  infoText: {
    color: "#666",
    lineHeight: "1.6"
  },
  socialCard: {
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "2rem",
    boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
  },
  socialTitle: {
    fontSize: "1.1rem",
    color: "#3a0ca3",
    marginBottom: "1rem"
  },
  socialLinks: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.8rem"
  },
  socialLink: {
    padding: "0.6rem 1.2rem",
    backgroundColor: "rgba(67, 97, 238, 0.1)",
    color: "#4361ee",
    borderRadius: "50px",
    textDecoration: "none",
    fontWeight: "500",
    transition: "all 0.3s ease",
    ":hover": {
      backgroundColor: "#4361ee",
      color: "white"
    }
  },
  mapSection: {
    width: "100%",
    padding: "0 2rem",
    margin: "4rem 0"
  },
  map: {
    width: "100%",
    height: "400px",
    border: "none",
    borderRadius: "12px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
  }
};