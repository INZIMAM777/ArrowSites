import React from 'react';
import data from '../api/property.json';
import './Cards.css'; // We'll create this CSS file

export const Cards = () => {
  // Destructure city and properties from the imported data
  const { city, state, properties } = data;
  
  // Format price based on units
  const formatPrice = (price, units) => {
    if (units === 'crore') return `₹${price} Crore`;
    if (units === 'lakh/month') return `₹${price} Lakh/month`;
    if (units === 'month') return `₹${price.toLocaleString('en-IN')}/month`;
    return `₹${price}`;
  };

  return (
    <div className="cards-container">
      <header className="cards-header">
        <h1>Properties in {city}, {state}</h1>
        <p className="properties-count">{properties.length} properties available</p>
      </header>

      <div className="properties-grid">
        {properties.map((property) => (
          <div key={property.id} className="property-card">
            <div className="property-image-container">
              {property.images?.length > 0 ? (
                <img
                  src={property.images[0]}
                  alt={property.title}
                  className="property-image"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x300?text=Property+Image';
                  }}
                />
              ) : (
                <div className="property-image-placeholder">
                  No Image Available
                </div>
              )}
              <span className="property-type">{property.type}</span>
            </div>

            <div className="property-details">
              <h3 className="property-title">{property.title}</h3>
              <p className="property-address">{property.address}</p>
              
              <div className="property-price">
                {formatPrice(property.price, property.price_units)}
              </div>
              
              <div className="property-features">
                {property.bedrooms && (
                  <span>
                    <i className="fas fa-bed"></i> {property.bedrooms} Beds
                  </span>
                )}
                {property.bathrooms && (
                  <span>
                    <i className="fas fa-bath"></i> {property.bathrooms} Baths
                  </span>
                )}
                {property.area_sqft && (
                  <span>
                    <i className="fas fa-ruler-combined"></i> {property.area_sqft.toLocaleString('en-IN')} sq.ft.
                  </span>
                )}
              </div>

              <div className="property-footer">
                <span className={`transaction-type ${property.transaction_type.toLowerCase()}`}>
                  {property.transaction_type}
                </span>
                <span className="furnishing-type">
                  {property.furnishing}
                </span>
              </div>
            </div>
            <NALink to={`/Cards/${property.id}`} className="detail-link">
            <button className='detail-btn'>View Detail</button>
          </div>
        ))}
      </div>
    </div>
  );
};