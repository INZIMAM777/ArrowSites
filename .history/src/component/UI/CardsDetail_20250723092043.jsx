import React from 'react';
// import { useLoaderData, Link } from 'react-router-dom';
import data from "../../api/property.json";
import { Link } from 'react-router-dom';


export const CardsDetail = () => {
const data = useLoaderData();
console.log(data);
  const { properties, error, city, state, country } = data;
//    const { city, state, properties } = data;

  const cardDetailStyles = {
    container: {
      padding: '2rem',
      maxWidth: '1100px',
      margin: '0 auto',
      backgroundColor: '#121212',
      color: '#f0f0f0',
      fontFamily: 'Segoe UI, sans-serif',
    },
    backLink: {
      display: 'inline-block',
      marginBottom: '1.5rem',
      color: '#4caf50',
      textDecoration: 'none',
      fontWeight: 'bold',
    },
    header: {
      marginBottom: '1rem',
    },
    title: {
      fontSize: '2rem',
      marginBottom: '0.5rem',
    },
    address: {
      fontSize: '1rem',
      color: '#b0b0b0',
    },
    body: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
    },
    imagesGrid: {
      display: 'grid',
      gap: '1rem',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    },
    image: {
      width: '100%',
      height: '250px',
      objectFit: 'cover',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    },
    info: {
      fontSize: '1rem',
      lineHeight: '1.6',
    },
    label: {
      color: '#ffcc00',
      fontWeight: 'bold',
    },
    amenitiesList: {
      margin: '0.5rem 0',
      paddingLeft: '1rem',
      listStyleType: 'circle',
    },
    error: {
      color: '#ff4d4d',
      padding: '2rem',
      textAlign: 'center',
    }
  };

  if (error) {
    return (
      <div style={cardDetailStyles.container}>
        <h2 style={cardDetailStyles.error}>Error: {error}</h2>
        <Link to="/Cards" style={cardDetailStyles.backLink}>← Back to Listings</Link>
      </div>
    );
  }

  return (
    <div style={cardDetailStyles.container}>
      <Link to="/Cards" style={cardDetailStyles.backLink}>← Back to Listings</Link>

      <div style={cardDetailStyles.header}>
        <h1 style={cardDetailStyles.title}>{properties.title}</h1>
        <p style={cardDetailStyles.address}>{properties.address}</p>
      </div>

      <div style={cardDetailStyles.body}>
        <div style={cardDetailStyles.imagesGrid}>
          <img
            src={properties.image || "https://via.placeholder.com/600x400?text=No+Image"}
            alt={properties.title}
            style={cardDetailStyles.image}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/600x400?text=No+Image";
            }}
          />
        </div>

        <div style={cardDetailStyles.info}>
          <p><span style={cardDetailStyles.label}>Type:</span> {properties.type}</p>
          <p><span style={cardDetailStyles.label}>Price:</span> ₹{properties.price} {properties.price_units}</p>
          {properties.bedrooms && (
            <p><span style={cardDetailStyles.label}>Bedrooms:</span> {properties.bedrooms}</p>
          )}
          {properties.bathrooms && (
            <p><span style={cardDetailStyles.label}>Bathrooms:</span> {properties.bathrooms}</p>
          )}
          <p>
            <span style={cardDetailStyles.label}>Area:</span> {properties.area_sqft?.toLocaleString('en-IN')} sq.ft.
          </p>
          <p><span style={cardDetailStyles.label}>Transaction Type:</span> {properties.transaction_type}</p>
          <p><span style={cardDetailStyles.label}>Furnishing:</span> {properties.furnishing || 'N/A'}</p>
          {properties.builder && (
            <p><span style={cardDetailStyles.label}>Builder:</span> {properties.builder}</p>
          )}
          {properties.year_built && (
            <p><span style={cardDetailStyles.label}>Year Built:</span> {properties.year_built}</p>
          )}

          {properties.amenities?.length > 0 && (
            <div>
              <p><span style={cardDetailStyles.label}>Amenities:</span></p>
              <ul style={cardDetailStyles.amenitiesList}>
                {properties.amenities.map((amenity, i) => (
                  <li key={i}>{amenity}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
