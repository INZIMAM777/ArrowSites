import React from "react";
import data from "../api/property.json";
import "./Cards.css";
import { NavLink } from "react-router-dom";
import { FaBed, FaBath, FaRulerCombined, FaHeart, FaRegHeart, FaMapMarkerAlt, FaBuilding, FaCalendarAlt } from "react-icons/fa";

export const Cards = () => {
  const { city, state, properties } = data;

  const formatPrice = (price, units) => {
    if (units === "crore") return `₹${price} Crore`;
    if (units === "lakh/month") return `₹${price} Lakh/month`;
    if (units === "month") return `₹${price.toLocaleString("en-IN")}/month`;
    return `₹${price}`;
  };

  const [favorites, setFavorites] = React.useState([]);

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(favId => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  return (
    <div className="cards-container">
      <header className="cards-header">
        <h1>
          Properties in {city}, {state}
        </h1>
        <p className="properties-count">
          {properties.length} {properties.length === 1 ? "property" : "properties"} available
        </p>
      </header>

      <div className="properties-grid">
        {properties.map((property) => (
          <div key={property.id} className="property-card">
            <div className="property-image-container">
              {property.image ? (
                <img
                  src={property.image}
                  alt={property.title}
                  className="property-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/400x300?text=No+Image";
                  }}
                />
              ) : (
                <div className="property-image-placeholder">
                  No Image Available
                </div>
              )}

              <div className="property-image-overlay">
                <span className="property-type">{property.type}</span>
                <button 
                  className="favorite-btn"
                  onClick={() => toggleFavorite(property.id)}
                >
                  {favorites.includes(property.id) ? (
                    <FaHeart className="favorite-icon" />
                  ) : (
                    <FaRegHeart className="favorite-icon" />
                  )}
                </button>
              </div>
            </div>

            <div className="property-details">
              <h3 className="property-title">{property.title}</h3>
              
              <div className="property-location">
                <FaMapMarkerAlt className="location-icon" />
                <p className="property-address">{property.address}</p>
              </div>

              <div className="property-price">
                {formatPrice(property.price, property.price_units)}
                {property.transaction_type === "Rent" && (
                  <span className="price-period">/month</span>
                )}
              </div>

              <div className="property-features">
                {property.bedrooms && (
                  <span className="feature">
                    <FaBed className="feature-icon" />
                    {property.bedrooms} Beds
                  </span>
                )}
                {property.bathrooms && (
                  <span className="feature">
                    <FaBath className="feature-icon" />
                    {property.bathrooms} Baths
                  </span>
                )}
                {property.area_sqft && (
                  <span className="feature">
                    <FaRulerCombined className="feature-icon" />
                    {property.area_sqft.toLocaleString("en-IN")} sq.ft.
                  </span>
                )}
              </div>

              <div className="property-meta">
                {property.year_built && (
                  <span className="meta-item">
                    <FaCalendarAlt className="meta-icon" />
                    Built: {property.year_built}
                  </span>
                )}
                <span className="meta-item">
                  <FaBuilding className="meta-icon" />
                  {property.furnishing}
                </span>
              </div>

              <div className="property-footer">
                <span
                  className={`transaction-type ${property.transaction_type.toLowerCase()}`}
                >
                  {property.transaction_type}
                </span>
                
                <NavLink to={`/Cards/${property.id}`} className="detail-link">
                  <button className="detail-btn">View Details</button>
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};