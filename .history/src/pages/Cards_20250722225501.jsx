import React from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import "./Cards.css"; // Optional for custom external styles

export const Cards = () => {
  const { properties, city, state } = useLoaderData();

  const formatPrice = (price, units) => {
    if (!price || !units) return "Price Not Available";
    switch (units) {
      case "crore":
        return `₹${price} Cr`;
      case "lakh/month":
        return `₹${price} Lakh/mo`;
      case "month":
        return `₹${price.toLocaleString("en-IN")}/mo`;
      default:
        return `₹${price}`;
    }
  };

  return (
    <div className="cards-container" style={{ backgroundColor: "#1a1a1a", minHeight: "100vh", color: "#f0f0f0", padding: "2rem" }}>
      <header style={{ marginBottom: "2rem", textAlign: "center" }}>
        <h1 style={{ fontSize: "2rem" }}>
          Properties in {city}, {state}
        </h1>
        <p style={{ color: "#cccccc" }}>{properties.length} properties available</p>
      </header>

      <div className="properties-grid" style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
        {properties.map((property) => (
          <div key={property.id} className="property-card" style={{
            backgroundColor: "#2a2a2a",
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}>
            <div className="property-image-container">
              <img
                src={property.image || "https://via.placeholder.com/400x300?text=No+Image"}
                alt={property.title}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.co/400x300?text=No+Image";
                }}
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <span style={{
                position: "absolute",
                top: "10px",
                left: "10px",
                backgroundColor: "#ffcc00",
                color: "#000",
                padding: "5px 10px",
                borderRadius: "5px",
                fontWeight: "bold",
              }}>
                {property.type}
              </span>
            </div>

            <div style={{ padding: "1rem" }}>
              <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>{property.title}</h3>
              <p style={{ color: "#aaa", marginBottom: "0.5rem" }}>{property.address}</p>

              <div style={{ fontWeight: "bold", color: "#4caf50", marginBottom: "0.5rem" }}>
                {formatPrice(property.price, property.price_units)}
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", fontSize: "0.9rem", color: "#ccc" }}>
                {property.bedrooms && <span>🛏 {property.bedrooms} Beds</span>}
                {property.bathrooms && <span>🛁 {property.bathrooms} Baths</span>}
                {property.area_sqft && <span>📐 {property.area_sqft.toLocaleString("en-IN")} sq.ft.</span>}
              </div>

              <div style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "1rem",
                fontSize: "0.85rem",
                color: "#bbb"
              }}>
                <span style={{ textTransform: "capitalize" }}>{property.transaction_type}</span>
                <span>{property.furnishing || "Unfurnished"}</span>
              </div>

              <NavLink to={`/Cards/${property.id}`}>
                <button style={{
                  marginTop: "1rem",
                  width: "100%",
                  padding: "0.6rem 1rem",
                  backgroundColor: "#4caf50",
                  color: "#fff",
                  border: "none",
                  borderRadius: "6px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  transition: "background 0.3s"
                }}
                  onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
                  onMouseOut={(e) => (e.target.style.backgroundColor = "#4caf50")}
                >
                  View Details
                </button>
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
