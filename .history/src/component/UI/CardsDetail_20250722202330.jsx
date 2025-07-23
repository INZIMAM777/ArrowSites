import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';

export const CardsDetail = () => {
  const { property, error } = useLoaderData();
  console.log(

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
      lineHeight: '1.5',
    },
    label: {
      color: '#ffcc00',
      fontWeight: 'bold',
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
        <h1 style={cardDetailStyles.title}>{property.title}</h1>
        <p style={cardDetailStyles.address}>{property.address}</p>
      </div>

      <div style={cardDetailStyles.body}>
        <div style={cardDetailStyles.imagesGrid}>
          {property.images?.length > 0 ? (
            property.images.map((img, index) => (
              <img key={index} src={img} alt={`Property ${index}`} style={cardDetailStyles.image} />
            ))
          ) : (
            <img
              src="https://via.placeholder.com/600x400?text=No+Image"
              alt="No image"
              style={cardDetailStyles.image}
            />
          )}
        </div>

        <div style={cardDetailStyles.info}>
          <p><span style={cardDetailStyles.label}>Type:</span> {property.type}</p>
          <p><span style={cardDetailStyles.label}>Price:</span> ₹{property.price} {property.price_units}</p>
          <p><span style={cardDetailStyles.label}>Bedrooms:</span> {property.bedrooms || 'N/A'}</p>
          <p><span style={cardDetailStyles.label}>Bathrooms:</span> {property.bathrooms || 'N/A'}</p>
          <p><span style={cardDetailStyles.label}>Area:</span> {property.area_sqft?.toLocaleString('en-IN')} sq.ft.</p>
          <p><span style={cardDetailStyles.label}>Transaction Type:</span> {property.transaction_type}</p>
          <p><span style={cardDetailStyles.label}>Furnishing:</span> {property.furnishing}</p>
        </div>
      </div>
    </div>
  );
};
