import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import {
  FaRupeeSign,
  FaMapMarkerAlt,
  FaHeart,
  FaShareAlt,
  FaStar,
  FaBed,
  FaBath,
  FaRulerCombined,
  FaHome
} from 'react-icons/fa';

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

export const PCard = ({ property, isLoggedIn, isDarkMode }) => {
  const theme = isDarkMode ? colorTheme.dark : colorTheme.light;
  const [isFavorite, setIsFavorite] = useState(false);
  
  const defaultPropertyImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300' width='400' height='300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Cpath d='M200 100 L250 70 L300 100 L300 250 L100 250 L100 100 Z' fill='%233b82f6' opacity='0.2' stroke='%233b82f6' stroke-width='2'/%3E%3Ccircle cx='200' cy='120' r='40' fill='%233b82f6' opacity='0.3'/%3E%3Ctext x='200' y='125' font-family='Arial' font-size='14' fill='%233b82f6' text-anchor='middle'%3E%3Ctspan x='200' dy='-5'%3EProperty%3C/tspan%3E%3Ctspan x='200' dy='15'%3EImage%3C/tspan%3E%3C/text%3E%3C/svg%3E";
  const imageURL = property.image || defaultPropertyImage;
  const rating = property.rating || 4.5;
  
  const stars = Array(5).fill(0).map((_, i) => (
    <FaStar
      key={i}
      style={{
        color: i < Math.floor(rating) ? '#fbbf24' : theme.text.secondary,
        fontSize: "0.85rem",
        marginRight: "1px"
      }}
    />
  ));

  // Component styles using the theme
  const styles = {
    propertyCard: {
      width: "100%",
      maxWidth: "350px",
      margin: "0.75rem auto",
      border: "none",
      borderRadius: "16px",
      overflow: "hidden",
      boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
      fontFamily: "'Montserrat', sans-serif",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      backgroundColor: theme.background.secondary,
      color: theme.text.primary,
    },
    imageWrapper: {
      position: "relative",
    },
    propertyImage: {
      height: "220px",
      width: "100%",
      objectFit: "cover",
    },
    badges: {
      position: "absolute",
      top: "12px",
      left: "12px",
      display: "flex",
      gap: "6px",
      flexWrap: "wrap",
    },
    badgeFeatured: {
      backgroundColor: "#ef4444",
      color: "white",
      padding: "4px 10px",
      borderRadius: "50px",
      fontSize: "0.7rem",
      fontWeight: "700",
      fontFamily: "'Montserrat', sans-serif",
    },
    badgeTransaction: {
      padding: "4px 10px",
      borderRadius: "50px",
      fontSize: "0.7rem",
      fontWeight: "700",
      fontFamily: "'Montserrat', sans-serif",
    },
    favoriteBtn: {
      position: "absolute",
      top: "12px",
      right: "12px",
      background: theme.background.overlay || "rgba(255,255,255,0.95)",
      border: "none",
      borderRadius: "50%",
      width: "34px",
      height: "34px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
      zIndex: 2,
      transition: "transform 0.2s ease, background 0.2s ease",
    },
    priceTag: {
      position: "absolute",
      bottom: "12px",
      left: "12px",
      background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
      color: "white",
      padding: "6px 12px",
      borderRadius: "8px",
      fontWeight: "600",
      fontSize: "14px",
      zIndex: 2,
      display: "flex",
      alignItems: "center",
      fontFamily: "'Montserrat', sans-serif",
    },
    rupeeIcon: {
      fontSize: "0.8rem",
      marginRight: "2px",
    },
    cardBody: {
      padding: "1.2rem",
    },
    titleRow: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: "0.75rem",
    },
    propertyTitle: {
      fontSize: "1.1rem",
      fontWeight: "600",
      color: theme.text.primary,
      margin: 0,
      lineHeight: "1.4",
      flex: 1,
      paddingRight: "0.5rem",
      display: "-webkit-box",
      WebkitLineClamp: 1,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
      textOverflow: "ellipsis",
      fontFamily: "'Gilroy', 'Montserrat', sans-serif",
    },
    shareBtn: {
      background: "none",
      border: "none",
      color: theme.text.secondary,
      padding: "4px",
      borderRadius: "50%",
      cursor: "pointer",
      flexShrink: 0,
    },
    addressRow: {
      display: "flex",
      alignItems: "center",
      marginBottom: "0.75rem",
    },
    addressIcon: {
      color: theme.text.accent,
      fontSize: "0.85rem",
      marginRight: "0.4rem",
      flexShrink: 0,
    },
    address: {
      fontSize: "0.85rem",
      color: theme.text.secondary,
      margin: 0,
      lineHeight: "1.4",
      display: "-webkit-box",
      WebkitLineClamp: 1,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
      textOverflow: "ellipsis",
      fontFamily: "'Montserrat', sans-serif",
    },
    ratingRow: {
      display: "flex",
      alignItems: "center",
      marginBottom: "0.9rem",
    },
    stars: {
      display: "flex",
      marginRight: "0.4rem",
    },
    ratingText: {
      fontSize: "0.8rem",
      color: theme.text.secondary,
      fontWeight: "500",
      fontFamily: "'Montserrat', sans-serif",
    },
    features: {
      display: "flex",
      justifyContent: "space-between",
      padding: "0.75rem 0",
      borderTop: `1px solid ${theme.border.primary}`,
      marginBottom: "0.75rem",
    },
    featureItem: {
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    featureValue: {
      display: "flex",
      alignItems: "center",
      marginBottom: "4px",
      color: theme.text.accent,
      fontSize: "0.9rem",
      fontFamily: "'Montserrat', sans-serif",
    },
    featureLabel: {
      fontSize: "0.7rem",
      color: theme.text.secondary,
      fontWeight: "600",
      textTransform: "uppercase",
      fontFamily: "'Montserrat', sans-serif",
    },
    viewDetailsBtn: {
      width: "100%",
      fontWeight: "600",
      background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
      border: "none",
      padding: "0.7rem",
      fontSize: "0.9rem",
      borderRadius: "8px",
      color: "white",
      cursor: "pointer",
      transition: "all 0.3s ease",
      fontFamily: "'Montserrat', sans-serif",
    },
  };

  return (
    <div 
      style={styles.propertyCard}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "none";
        e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
      }}
    >
      {/* Image Section */}
      <div style={styles.imageWrapper}>
        <img
          src={imageURL}
          alt={property.title}
          style={styles.propertyImage}
          onError={(e) => {
            e.target.src = defaultPropertyImage;
          }}
        />

        {/* Badges */}
        <div style={styles.badges}>
          {property.isFeatured && (
            <span style={styles.badgeFeatured}>
              FEATURED
            </span>
          )}
          <span style={{
            ...styles.badgeTransaction,
            backgroundColor: property.transaction_type === 'Rent' ? '#10b981' : '#3b82f6',
            color: "white"
          }}>
            {property.transaction_type?.toUpperCase() || 'SALE'}
          </span>
        </div>

        {/* Favorite Icon */}
        {isLoggedIn && (
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            style={styles.favoriteBtn}
            onMouseOver={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.background = theme.background.primary;
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "none";
              e.target.style.background = theme.background.overlay || "rgba(255,255,255,0.95)";
            }}
          >
            <FaHeart color={isFavorite ? '#ff4757' : theme.text.secondary} />
          </button>
        )}

        {/* Price Tag */}
        <div style={styles.priceTag}>
          <FaRupeeSign style={styles.rupeeIcon} />
          {Number(property.price).toLocaleString('en-IN')}
          {property.price_units && `/${property.price_units}`}
        </div>
      </div>

      {/* Card Body */}
      <div style={styles.cardBody}>
        {/* Title Row */}
        <div style={styles.titleRow}>
          <h3 style={styles.propertyTitle}>{property.title}</h3>
          <button style={styles.shareBtn}>
            <FaShareAlt />
          </button>
        </div>

        {/* Address */}
        <div style={styles.addressRow}>
          <FaMapMarkerAlt style={styles.addressIcon} />
          <p style={styles.address}>{property.address || "Address not specified"}</p>
        </div>

        {/* Rating */}
        <div style={styles.ratingRow}>
          <div style={styles.stars}>{stars}</div>
          <span style={styles.ratingText}>
            {rating.toFixed(1)} ({property.reviews || 12} reviews)
          </span>
        </div>

        {/* Features */}
        <div style={styles.features}>
          {[ 
            { icon: <FaBed />, value: property.bedrooms || 3, label: 'Beds' },
            { icon: <FaBath />, value: property.bathrooms || 2, label: 'Baths' },
            { icon: <FaRulerCombined />, value: property.area_sqft || 1200, label: 'Sqft' },
            { icon: <FaHome />, value: property.year_built || 2020, label: 'Built' }
          ].map((item, idx) => (
            <div key={idx} style={styles.featureItem}>
              <div style={styles.featureValue}>
                {item.icon}
                <span style={{marginLeft: "4px", fontWeight: "600", color: theme.text.primary}}>
                  {item.value}
                </span>
              </div>
              <div style={styles.featureLabel}>{item.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <NavLink to={`/Cards/${property.id}`} style={{textDecoration: "none"}}>
          <button 
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
          </button>
        </NavLink>
      </div>
    </div>
  );
};