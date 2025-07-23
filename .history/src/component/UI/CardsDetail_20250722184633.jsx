import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';
// import './CardsDetail.css'; // Optional

export const CardsDetail = () => {
  const { property, error } = useLoaderData();

  if (error) {
    return (
      <div className="card-detail">
        <h2>Error: {error}</h2>
        <Link to="/Cards">← Back to Listings</Link>
      </div>
    );
  }

  return (
    <div className="card-detail">
      <Link to="/Cards" className="back-link">← Back to Listings</Link>

      <div className="detail-header">
        <h1>{property.title}</h1>
        <p>{property.address}</p>
      </div>

      <div className="detail-body">
        <div className="detail-images">
          {property.images?.length > 0 ? (
            property.images.map((img, index) => (
              <img key={index} src={img} alt={`Property ${index}`} />
            ))
          ) : (
            <img
              src="https://via.placeholder.com/600x400?text=No+Image"
              alt="No image"
            />
          )}
        </div>

        <div className="detail-info">
          <p><strong>Type:</strong> {property.type}</p>
          <p><strong>Price:</strong> ₹{property.price} {property.price_units}</p>
          <p><strong>Bedrooms:</strong> {property.bedrooms || 'N/A'}</p>
          <p><strong>Bathrooms:</strong> {property.bathrooms || 'N/A'}</p>
          <p><strong>Area:</strong> {property.area_sqft?.toLocaleString('en-IN')} sq.ft.</p>
          <p><strong>Transaction Type:</strong> {property.transaction_type}</p>
          <p><strong>Furnishing:</strong> {property.furnishing}</p>
        </div>
      </div>
    </div>
  );
};

