import React from 'react';

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

const Testimonials = ({ isDarkMode }) => {
  const theme = isDarkMode ? colorTheme.dark : colorTheme.light;

  const testimonials = [
    {
      quote: "PropertyPro helped us find our dream home in just two weeks! The virtual tours and detailed listings made the process so smooth.",
      author: "Sarah Johnson",
      role: "Home Owner",
      rating: 5
    },
    {
      quote: "As a real estate investor, I appreciate the comprehensive property details and accurate pricing information. Saved me countless hours of research!",
      author: "Michael Chen",
      role: "Real Estate Investor",
      rating: 5
    },
    {
      quote: "The customer service was exceptional throughout our home buying journey. The team was always available to answer our questions.",
      author: "Emily Rodriguez",
      role: "First-time Buyer",
      rating: 5
    }
  ];

  // Component styles using the theme
  const styles = {
    testimonials: {
      padding: "4rem 1.5rem",
      backgroundColor: theme.background.primary,
      fontFamily: "'Montserrat', sans-serif",
    },
    title: {
      textAlign: "center",
      fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
      fontWeight: 700,
      marginBottom: "3rem",
      color: theme.text.primary,
      fontFamily: "'Gilroy', 'Montserrat', sans-serif",
    },
    testimonialContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "2rem",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    testimonial: {
      backgroundColor: theme.background.secondary,
      borderRadius: "16px",
      padding: "2.5rem 2rem",
      textAlign: "center",
      boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
      transition: "all 0.3s ease",
      border: `1px solid ${theme.border.primary}`,
      position: "relative",
    },
    quote: {
      fontSize: "1.1rem",
      lineHeight: "1.6",
      color: theme.text.primary,
      marginBottom: "1.5rem",
      fontStyle: "italic",
      fontFamily: "'Montserrat', sans-serif",
      position: "relative",
    },
    quoteMark: {
      position: "absolute",
      top: "-10px",
      left: "-15px",
      fontSize: "4rem",
      color: theme.text.accent,
      opacity: "0.2",
      fontFamily: "Georgia, serif",
    },
    authorInfo: {
      marginTop: "1.5rem",
    },
    authorName: {
      fontSize: "1.1rem",
      fontWeight: 600,
      color: theme.text.primary,
      marginBottom: "0.3rem",
      fontFamily: "'Gilroy', 'Montserrat', sans-serif",
    },
    authorRole: {
      fontSize: "0.9rem",
      color: theme.text.secondary,
      fontFamily: "'Montserrat', sans-serif",
    },
    rating: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "1rem",
      color: "#fbbf24", // Amber color for stars
    },
    star: {
      margin: "0 2px",
    }
  };

  // Function to render star ratings
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} style={styles.star}>
        {index < rating ? "★" : "☆"}
      </span>
    ));
  };

  return (
    <section style={styles.testimonials}>
      <h2 style={styles.title}>What Our Customers Say</h2>
      <div style={styles.testimonialContainer}>
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            style={styles.testimonial}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
            }}
          >
            <blockquote style={styles.quote}>
              <span style={styles.quoteMark}>"</span>
              {testimonial.quote}
            </blockquote>
            <div style={styles.rating}>
              {renderStars(testimonial.rating)}
            </div>
            <div style={styles.authorInfo}>
              <p style={styles.authorName}>{testimonial.author}</p>
              <p style={styles.authorRole}>{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;