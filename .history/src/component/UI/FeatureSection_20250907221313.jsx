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

const FeatureSection = ({ isDarkMode }) => {
  // Get current theme based on isDarkMode prop
  const theme = isDarkMode ? colorTheme.dark : colorTheme.light;

  const features = [
    {
      title: "Premium Properties",
      description: "Discover luxury homes and premium investment opportunities with verified listings and detailed information.",
      icon: "🏠"
    },
    {
      title: "Smart Search",
      description: "Find your perfect property with advanced filters, location-based search, and personalized recommendations.",
      icon: "🔍"
    },
    {
      title: "Secure Transactions",
      description: "Enjoy peace of mind with verified listings, secure payment processing, and professional guidance.",
      icon: "🔒"
    }
  ];

  // Component styles using the theme
  const styles = {
    features: {
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
    featuresGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "1rem",
      maxWidth: "1400px",
      margin: "0 auto",
    },
    featureCard: {
      backgroundColor: theme.background.secondary,
      borderRadius: "16px",
      padding: "2rem",
      textAlign: "center",
      boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
      transition: "all 0.3s ease",
      border: `1px solid ${theme.border.primary}`,
    },
    featureIcon: {
      fontSize: "3.5rem",
      marginBottom: "1.5rem",
      display: "flex",
      justifyContent: "center",
    },
    featureTitle: {
      fontSize: "1.4rem",
      fontWeight: 600,
      marginBottom: "1rem",
      color: theme.text.primary,
      fontFamily: "'Gilroy', 'Montserrat', sans-serif",
    },
    featureDescription: {
      fontSize: "1rem",
      lineHeight: "1.6",
      color: theme.text.secondary,
      fontFamily: "'Montserrat', sans-serif",
    }
  };

  return (
    <section style={styles.features}>
      <h2 style={styles.title}>Our Key Features</h2>
      <div style={styles.featuresGrid}>
        {features.map((feature, index) => (
          <div 
            key={index} 
            style={styles.featureCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
            }}
          >
            <div style={styles.featureIcon}>{feature.icon}</div>
            <h3 style={styles.featureTitle}>{feature.title}</h3>
            <p style={styles.featureDescription}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;