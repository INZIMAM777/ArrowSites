import React, { useEffect, useState } from 'react';
import { FaBed, FaBath, FaRulerCombined, FaHeart, FaMapMarkerAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useFirebase } from '../../context/FirebaseContext';

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

export const PropertyListings = ({ title, isDarkMode }) => {
  const { getLists, isLoggedIn } = useFirebase();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  // Get current theme based on isDarkMode prop
  const theme = isDarkMode ? colorTheme.dark : colorTheme.light;

  // Default property image
  const defaultPropertyImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300' width='400' height='300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Cpath d='M200 100 L250 70 L300 100 L300 250 L100 250 L100 100 Z' fill='%233b82f6' opacity='0.2' stroke='%233b82f6' stroke-width='2'/%3E%3Ccircle cx='200' cy='120' r='40' fill='%233b82f6' opacity='0.3'/%3E%3Ctext x='200' y='125' font-family='Arial' font-size='14' fill='%233b82f6' text-anchor='middle'%3E%3Ctspan x='200' dy='-5'%3EProperty%3C/tspan%3E%3Ctspan x='200' dy='15'%3EImage%3C/tspan%3E%3C/text%3E%3C/svg%3E";

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const propertiesData = await getLists();
        setProperties(propertiesData.slice(0, 6));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching properties: ", error);
        setLoading(false);
      }
    };

    fetchProperties();
  }, [getLists]);

  // Component styles using the theme
  const styles = {
    propertyListings: {
      padding: "3rem 1rem",
      maxWidth: "1400px",
      margin: "0 auto",
      backgroundColor: theme.background.primary,
      fontFamily: "'Montserrat', sans-serif",
    },
    title: {
      textAlign: "center",
      fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
      fontWeight: 700,
      marginBottom: "2.5rem",
      color: theme.text.primary,
      fontFamily: "'Gilroy', 'Montserrat', sans-serif",
    },
    propertiesGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
      gap: "1.5rem",
      marginBottom: "2.5rem",
    },
    propertyCard: {
      backgroundColor: theme.background.secondary,
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
      transition: "all 0.3s ease",
      border: `1px solid ${theme.border.primary}`,
    },
    propertyImage: {
      position: "relative",
      height: "200px",
      backgroundColor: theme.background.tertiary,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
    },
    propertyImageImg: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform 0.3s ease",
    },
    favoriteBtn: {
      position: "absolute",
      top: "12px",
      right: "12px",
      backgroundColor: theme.background.primary,
      width: "36px",
      height: "36px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "none",
      cursor: "pointer",
      color: "#ff4757",
      fontSize: "16px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
      zIndex: 2,
      transition: "all 0.2s ease",
    },
    priceTag: {
      position: "absolute",
      bottom: "12px",
      left: "12px",
      background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
      color: "white",
      padding: "6px 12px",
      borderRadius: "6px",
      fontWeight: 600,
      fontSize: "14px",
      zIndex: 2,
    },
    propertyDetails: {
      padding: "1.2rem",
    },
    propertyTitle: {
      fontSize: "1.1rem",
      fontWeight: 600,
      marginBottom: "0.8rem",
      color: theme.text.primary,
      display: "-webkit-box",
      WebkitLineClamp: 1,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    propertyAddress: {
      display: "flex",
      alignItems: "center",
      color: theme.text.secondary,
      marginBottom: "1rem",
      fontSize: "0.9rem",
    },
    propertyFeatures: {
      display: "flex",
      justifyContent: "space-between",
      padding: "0.8rem 0",
      borderTop: `1px solid ${theme.border.primary}`,
      marginTop: "0.8rem",
    },
    feature: {
      display: "flex",
      alignItems: "center",
      color: theme.text.secondary,
      fontSize: "0.85rem",
    },
    viewDetailsBtn: {
      display: "block",
      textAlign: "center",
      background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
      color: "white",
      padding: "0.8rem",
      borderRadius: "8px",
      textDecoration: "none",
      fontWeight: 500,
      fontSize: "0.9rem",
      transition: "all 0.3s ease",
      marginTop: "1rem",
    },
    viewAllContainer: {
      textAlign: "center",
      marginTop: "2.5rem",
    },
    viewAllBtn: {
      display: "inline-block",
      padding: "0.8rem 1.8rem",
      backgroundColor: theme.background.secondary,
      color: theme.text.accent,
      border: `2px solid ${theme.border.accent}`,
      borderRadius: "8px",
      textDecoration: "none",
      fontWeight: 500,
      fontSize: "0.95rem",
      transition: "all 0.3s ease",
    },
    loading: {
      textAlign: "center",
      padding: "2rem",
      fontSize: "1rem",
      color: theme.text.secondary,
    }
  };

  if (loading) {
    return <div style={styles.loading}>Loading properties...</div>;
  }

  return (
    <section style={styles.propertyListings}>
      <h2 style={styles.title}>{title}</h2>

      <div style={styles.propertiesGrid}>
        {properties.map(property => (
          <div key={property.id} style={styles.propertyCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.15)";
              const img = e.currentTarget.querySelector('img');
              if (img) img.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
              const img = e.currentTarget.querySelector('img');
              if (img) img.style.transform = "none";
            }}
          >
            <div style={styles.propertyImage}>
              <img 
                src={property.image || defaultPropertyImage} 
                alt={property.title}
                style={styles.propertyImageImg}
                onError={(e) => {
                  e.target.src = defaultPropertyImage;
                }}
              />
              {isLoggedIn && (
                <button style={styles.favoriteBtn}
                  onMouseOver={(e) => {
                    e.target.style.transform = "scale(1.1)";
                    e.target.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = "none";
                    e.target.style.boxShadow = "0 2px 8px rgba(0,0,0,0.15)";
                  }}
                >
                  <FaHeart />
                </button>
              )}
              <div style={styles.priceTag}>
                {property.price} {property.price_units}
              </div>
            </div>

            <div style={styles.propertyDetails}>
              <h3 style={styles.propertyTitle}>{property.title}</h3>
              <div style={styles.propertyAddress}>
                <FaMapMarkerAlt style={{marginRight: "6px", color: theme.text.accent}} /> 
                {property.address || "Address not specified"}
              </div>

              <div style={styles.propertyFeatures}>
                <span style={styles.feature}><FaBed style={{marginRight: "4px", color: theme.text.accent}} /> {property.bedrooms}</span>
                <span style={styles.feature}><FaBath style={{marginRight: "4px", color: theme.text.accent}} /> {property.bathrooms}</span>
                <span style={styles.feature}><FaRulerCombined style={{marginRight: "4px", color: theme.text.accent}} /> {property.area_sqft}</span>
              </div>

              <NavLink 
                to={`/Cards/${property.id}`} 
                style={styles.viewDetailsBtn}
                onMouseOver={(e) => {
                  e.target.style.background = theme.button.primaryHover;
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseOut={(e) => {
                  e.target.style.background = "linear-gradient(135deg, #3b82f6, #1d4ed8)";
                  e.target.style.transform = "none";
                }}
              >
                View Details
              </NavLink>
            </div>
          </div>
        ))}
      </div>

      <div style={styles.viewAllContainer}>
        <NavLink 
          to="/properties" 
          style={styles.viewAllBtn}
          onMouseOver={(e) => {
            e.target.style.background = theme.button.primary;
            e.target.style.color = "white";
          }}
          onMouseOut={(e) => {
            e.target.style.background = theme.background.secondary;
            e.target.style.color = theme.text.accent;
          }}
        >
          View All Properties
        </NavLink>
      </div>
    </section>
    s
  );
};