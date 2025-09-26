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

  const defaultPropertyImage =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300' width='400' height='300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Cpath d='M200 100 L250 70 L300 100 L300 250 L100 250 L100 100 Z' fill='%233b82f6' opacity='0.2' stroke='%233b82f6' stroke-width='2'/%3E%3Ccircle cx='200' cy='120' r='40' fill='%233b82f6' opacity='0.3'/%3E%3Ctext x='200' y='125' font-family='Arial' font-size='14' fill='%233b82f6' text-anchor='middle'%3E%3Ctspan x='200' dy='-5'%3EProperty%3C/tspan%3E%3Ctspan x='200' dy='15'%3EImage%3C/tspan%3E%3C/text%3E%3C/svg%3E";
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

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "350px",
        margin: "0.75rem auto",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        backgroundColor: theme.background.secondary,
        color: theme.text.primary,
        fontFamily: "'Montserrat', sans-serif",
        transition: "transform 0.3s ease, box-shadow 0.3s ease"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "none";
        e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
      }}
    >
      {/* Image */}
      <div style={{ position: "relative" }}>
        <img
          src={imageURL}
          alt={property.title}
          style={{ height: "220px", width: "100%", objectFit: "cover" }}
          onError={(e) => {
            e.target.src = defaultPropertyImage;
          }}
        />

        {/* Badges */}
        <div style={{
          position: "absolute", top: "12px", left: "12px",
          display: "flex", gap: "6px", flexWrap: "wrap"
        }}>
          {property.isFeatured && (
            <span style={{
              backgroundColor: "#ef4444",
              color: "white",
              padding: "4px 10px",
              borderRadius: "50px",
              fontSize: "0.7rem",
              fontWeight: "700"
            }}>
              FEATURED
            </span>
          )}
          <span style={{
            padding: "4px 10px",
            borderRadius: "50px",
            fontSize: "0.7rem",
            fontWeight: "700",
            backgroundColor: property.transaction_type === 'Rent' ? '#10b981' : '#3b82f6',
            color: "white"
          }}>
            {property.transaction_type?.toUpperCase() || 'SALE'}
          </span>
        </div>

        {/* Favorite */}
        {isLoggedIn && (
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            style={{
              position: "absolute",
              top: "12px",
              right: "12px",
              background: theme.background.overlay,
              border: "none",
              borderRadius: "50%",
              width: "34px",
              height: "34px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
            }}
          >
            <FaHeart color={isFavorite ? '#ff4757' : theme.text.secondary} />
          </button>
        )}

        {/* Price */}
        <div style={{
          position: "absolute",
          bottom: "12px",
          left: "12px",
          background: isDarkMode
            ? "linear-gradient(135deg, #3b82f6, #1d4ed8)"
            : theme.button.primary,
          color: "white",
          padding: "6px 12px",
          borderRadius: "8px",
          fontWeight: "600",
          fontSize: "14px",
          display: "flex",
          alignItems: "center"
        }}>
          <FaRupeeSign style={{ fontSize: "0.8rem", marginRight: "2px" }} />
          {Number(property.price).toLocaleString('en-IN')}
          {property.price_units && `/${property.price_units}`}
        </div>
      </div>

      {/* Card Body */}
      <div style={{ padding: "1.2rem" }}>
        {/* Title */}
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
          <h3 style={{
            fontSize: "1.1rem",
            fontWeight: "600",
            color: theme.text.primary,
            margin: 0,
            flex: 1,
            paddingRight: "0.5rem",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          }}>
            {property.title}
          </h3>
          <button style={{ background: "none", border: "none", color: theme.text.secondary }}>
            <FaShareAlt />
          </button>
        </div>

        {/* Address */}
        <div style={{ display: "flex", alignItems: "center", marginBottom: "0.75rem" }}>
          <FaMapMarkerAlt style={{ color: theme.text.accent, marginRight: "0.4rem" }} />
          <p style={{ fontSize: "0.85rem", color: theme.text.secondary, margin: 0 }}>
            {property.address || "Address not specified"}
          </p>
        </div>

        {/* Rating */}
        <div style={{ display: "flex", alignItems: "center", marginBottom: "0.9rem" }}>
          <div style={{ display: "flex", marginRight: "0.4rem" }}>{stars}</div>
          <span style={{ fontSize: "0.8rem", color: theme.text.secondary }}>
            {rating.toFixed(1)} ({property.reviews || 12} reviews)
          </span>
        </div>

        {/* Features */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0.75rem 0",
          borderTop: `1px solid ${theme.border.primary}`,
          marginBottom: "0.75rem"
        }}>
          {[
            { icon: <FaBed />, value: property.bedrooms || 3, label: 'Beds' },
            { icon: <FaBath />, value: property.bathrooms || 2, label: 'Baths' },
            { icon: <FaRulerCombined />, value: property.area_sqft || 1200, label: 'Sqft' },
            { icon: <FaHome />, value: property.year_built || 2020, label: 'Built' }
          ].map((item, idx) => (
            <div key={idx} style={{ textAlign: "center" }}>
              <div style={{ color: theme.text.accent, marginBottom: "4px" }}>
                {item.icon} <span style={{ marginLeft: 4, color: theme.text.primary }}>{item.value}</span>
              </div>
              <div style={{ fontSize: "0.7rem", color: theme.text.secondary }}>{item.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <NavLink to={`/Cards/${property.id}`} style={{ textDecoration: "none" }}>
          <button
            style={{
              width: "100%",
              fontWeight: "600",
              border: "none",
              padding: "0.7rem",
              fontSize: "0.9rem",
              borderRadius: "8px",
              color: "white",
              background: isDarkMode
                ? "linear-gradient(135deg, #3b82f6, #1d4ed8)"
                : theme.button.primary,
              cursor: "pointer",
              transition: "all 0.3s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = theme.button.primaryHover;
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = isDarkMode
                ? "linear-gradient(135deg, #3b82f6, #1d4ed8)"
                : theme.button.primary;
              e.currentTarget.style.transform = "none";
            }}
          >
            View Details
          </button>
        </NavLink>
      </div>
    </div>
  );
};
