import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
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
import { useState } from 'react';

export const PCard = ({ property, isLoggedIn }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const defaultPropertyImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300' width='400' height='300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Cpath d='M200 100 L250 70 L300 100 L300 250 L100 250 L100 100 Z' fill='%233b82f6' opacity='0.2' stroke='%233b82f6' stroke-width='2'/%3E%3Ccircle cx='200' cy='120' r='40' fill='%233b82f6' opacity='0.3'/%3E%3Ctext x='200' y='125' font-family='Arial' font-size='14' fill='%233b82f6' text-anchor='middle'%3E%3Ctspan x='200' dy='-5'%3EProperty%3C/tspan%3E%3Ctspan x='200' dy='15'%3EImage%3C/tspan%3E%3C/text%3E%3C/svg%3E";
  const imageURL = property.image || defaultPropertyImage;
  const rating = property.rating || 4.5;
  
  const stars = Array(5).fill(0).map((_, i) => (
    <FaStar
      key={i}
      className={i < Math.floor(rating) ? 'star active' : 'star'}
    />
  ));

  return (
    <Card className="property-card">
      {/* Image Section */}
      <div className="image-wrapper">
        <Card.Img
          variant="top"
          src={imageURL}
          alt={property.title}
          className="property-image"
          onError={(e) => {
            e.target.src = defaultPropertyImage;
          }}
        />

        {/* Badges */}
        <div className="badges">
          {property.isFeatured && (
            <Badge pill bg="danger" className="badge-featured">
              FEATURED
            </Badge>
          )}
          <Badge pill className={`badge-transaction ${property.transaction_type === 'Rent' ? 'rent' : 'sale'}`}>
            {property.transaction_type?.toUpperCase() || 'SALE'}
          </Badge>
        </div>

        {/* Favorite Icon */}
        {isLoggedIn && (
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className="favorite-btn"
          >
            <FaHeart color={isFavorite ? '#ff4757' : '#555'} />
          </button>
        )}

        {/* Price Tag */}
        <div className="price-tag">
          <FaRupeeSign className="rupee-icon" />
          {Number(property.price).toLocaleString('en-IN')}
          {property.price_units && `/${property.price_units}`}
        </div>
      </div>

      {/* Card Body */}
      <Card.Body className="card-body">
        {/* Title Row */}
        <div className="title-row">
          <h3 className="property-title">{property.title}</h3>
          <button className="share-btn">
            <FaShareAlt />
          </button>
        </div>

        {/* Address */}
        <div className="address-row">
          <FaMapMarkerAlt className="address-icon" />
          <p className="address">{property.address || "Address not specified"}</p>
        </div>

        {/* Rating */}
        <div className="rating-row">
          <div className="stars">{stars}</div>
          <span className="rating-text">
            {rating.toFixed(1)} ({property.reviews || 12} reviews)
          </span>
        </div>

        {/* Features */}
        <div className="features">
          {[ 
            { icon: <FaBed />, value: property.bedrooms || 3, label: 'Beds' },
            { icon: <FaBath />, value: property.bathrooms || 2, label: 'Baths' },
            { icon: <FaRulerCombined />, value: property.area_sqft || 1200, label: 'Sqft' },
            { icon: <FaHome />, value: property.year_built || 2020, label: 'Built' }
          ].map((item, idx) => (
            <div key={idx} className="feature-item">
              <div className="feature-value">{item.icon}<span>{item.value}</span></div>
              <div className="feature-label">{item.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <NavLink to={`/Cards/${property.id}`} className="nav-link">
          <Button variant="primary" className="view-details-btn">
            View Details
          </Button>
        </NavLink>
      </Card.Body>

     <style jsx>{`
  /* ===== Card Wrapper ===== */
  .property-card {
    width: 100%;
    max-width: 350px;
    margin: 0.75rem auto;
    border: none;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
    font-family: 'Inter', sans-serif;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .property-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(0,0,0,0.12);
  }

  /* ===== Image Section ===== */
  .image-wrapper { position: relative; }
  .property-image {
    height: 220px;
    width: 100%;
    object-fit: cover;
  }

  /* ===== Badges ===== */
  .badges {
    position: absolute;
    top: 12px;
    left: 12px;
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
  }
  .badge-featured,
  .badge-transaction {
    font-size: 0.7rem;
    font-weight: 700;
    padding: 4px 10px;
    border-radius: 50px;
  }
  .badge-transaction.rent { background-color: #00b894; color:#fff; }
  .badge-transaction.sale { background-color: #0984e3; color:#fff; }

  /* ===== Favorite Button ===== */
  .favorite-btn {
    position: absolute;
    top: 12px;
    right: 12px;
    background: rgba(255,255,255,0.95);
    border: none;
    border-radius: 50%;
    width: 34px;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 2px 6px rgba(0,0,0,0.12);
    z-index: 2;
    transition: transform 0.2s ease, background 0.2s ease;
  }
  .favorite-btn:hover {
    background: rgba(255,255,255,0.98);
    transform: scale(1.05);
  }

  /* ===== Price Tag ===== */
  .price-tag {
    position: absolute;
    bottom: 12px;
    left: 12px;
    background: #3b82f6;
    color: #fff;
    padding: 4px 10px;
    border-radius: 4px;
    font-weight: bold;
    font-size: 14px;
    z-index: 2;
  }
  .rupee-icon {
    font-size: 0.8rem;
    margin-right: 2px;
  }

  /* ===== Card Body ===== */
  .card-body { padding: 1rem; }

  /* Title Row */
  .title-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 0.75rem;
  }
  .property-title {
    font-size: 1.1rem;
    font-weight: 700;
    color: #222;
    margin: 0;
    line-height: 1.4;
    flex: 1;
    padding-right: 0.5rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .share-btn {
    background: none;
    border: none;
    color: #666;
    padding: 4px;
    border-radius: 50%;
    cursor: pointer;
    flex-shrink: 0;
  }

  /* Address */
  .address-row {
    display: flex;
    align-items: center;
    margin-bottom: 0.75rem;
  }
  .address-icon {
    color: #e84393;
    font-size: 0.85rem;
    margin-right: 0.4rem;
    flex-shrink: 0;
  }
  .address {
    font-size: 0.85rem;
    color: #555;
    margin: 0;
    line-height: 1.4;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* Rating */
  .rating-row {
    display: flex;
    align-items: center;
    margin-bottom: 0.9rem;
  }
  .stars {
    display: flex;
    margin-right: 0.4rem;
  }
  .star {
    font-size: 0.85rem;
    margin-right: 1px;
    color: #ccc;
  }
  .star.active { color: #fbc02d; }
  .rating-text {
    font-size: 0.8rem;
    color: #666;
    font-weight: 500;
  }

  /* Features */
  .features {
    display: flex;
    justify-content: space-between;
    padding: 0.75rem 0;
    border-top: 1px solid #f0f0f0;
    margin-bottom: 0.75rem;
  }
  .feature-item {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .feature-value {
    display: flex;
    align-items: center;
    margin-bottom: 4px;
    color: #3b82f6;
    font-size: 0.9rem;
  }
  .feature-value span {
    margin-left: 4px;
    font-size: 0.95rem;
    font-weight: 700;
    color: #0984e3;
  }
  .feature-label {
    font-size: 0.7rem;
    color: #666;
    font-weight: 600;
    text-transform: uppercase;
  }

  /* CTA Button */
  .nav-link {
    text-decoration: none;
    display: block;
  }
  .view-details-btn {
    width: 100%;
    font-weight: 600;
    background: #3b82f6;
    border: none;
    padding: 0.5rem;
    font-size: 0.9rem;
    border-radius: 6px;
    color: #fff;
    box-shadow: 0 2px 6px rgba(59, 130, 246, 0.25);
    transition: background 0.3s ease;
  }
  .view-details-btn:hover {
    background: #2563eb;
  }

  /* ===== Grid Wrapper ===== */
  .card-grid {
    display: grid;
    grid-template-columns: 1fr; /* default: 1 card */
    gap: 1.5rem;
  }

  /* Tablet and up: 2 cards */
  @media (min-width: 486px) {
    .card-grid {
      grid-template-columns: repeat(2, 1fr);
    }
      
  }

  /* Mobile optimizations */
@media (max-width: 485px) {
.property-card {
      margin: 0.5rem auto;
      border-radius: 10px;
    }
    .property-image { height: 140px; }   /* smaller image */
    .card-body { padding: 0.5rem; }      /* less padding */
    .property-title { font-size: 0.9rem; }
    .address { font-size: 0.75rem; }
    .rating-row { margin-bottom: 0.5rem; }
    .features { padding: 0.4rem 0; margin-bottom: 0.4rem; }
    .feature-value { font-size: 0.7rem; }
    .feature-value span { font-size: 0.75rem; }
    .feature-label { font-size: 0.55rem; }
    .view-details-btn { font-size: 0.75rem; padding: 0.35rem; }
}


  /* Desktop: 3 cards */
  @media (min-width: 992px) {
    .card-grid {
      grid-template-columns: repeat(3, 1fr);
    }
    .property-image {
      height: 250px; /* a bit larger on desktop */
    }
  }

  /* Mobile optimizations */
  @media (max-width: 485px) {
    .property-image { height: 180px; }
    .property-title { font-size: 1rem; }
    .address { font-size: 0.8rem; }
    .view-details-btn { font-size: 0.85rem; padding: 0.45rem; }
  }
`}</style>


    </Card>
  );
};
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