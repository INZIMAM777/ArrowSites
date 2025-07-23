import React from "react";
import "./Cards.css"; // Optional: create this file for custom styles

export const Cards = ({ data }) => {
  if (!data || !Array.isArray(data)) {
    return <p>No property data available.</p>;
  }

  return (
    <div className="cards-container">
      {data.map((item) => (
        <div className="card" key={item.id}>
          <img
            src={item.image}
            alt={item.title}
            className="card-image"
            loading="lazy"
          />
          <div className="card-content">
            <h2 className="card-title">{item.title}</h2>
            <p><strong>Type:</strong> {item.type}</p>
            {item.bedrooms && <p><strong>Bedrooms:</strong> {item.bedrooms}</p>}
            {item.bathrooms && <p><strong>Bathrooms:</strong> {item.bathrooms}</p>}
            <p><strong>Area:</strong> {item.area_sqft} sqft</p>
            <p>
              <strong>Price:</strong> ₹{item.price} {item.price_units}
            </p>
            <p><strong>Furnishing:</strong> {item.furnishing || "N/A"}</p>
            <p><strong>Address:</strong> {item.address}</p>
            <p><strong>Year Built:</strong> {item.year_built}</p>
            {item.amenities && item.amenities.length > 0 && (
              <ul>
                {item.amenities.map((amenity, index) => (
                  <li key={index}>{amenity}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
