import React from 'react';
import data from "../../api/property.json";
import { Link, useLoaderData } from 'react-router-dom';

export const CardsDetail = () => {
  const dataId = useLoaderData();
  const { properties, error, city, state, country } = data;

  const property = properties.find((p) => p.id === dataId);

  const styles = {
    page: {
      minHeight: '100vh',
      backgroundColor: '#f9f9f9',
      padding: '2rem',
      fontFamily: 'Segoe UI, sans-serif',
    },
    container: {
      maxWidth: '1100px',
      margin: '0 auto',
      backgroundColor: '#fff',
      padding: '2rem',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    },
    backLink: {
      display: 'inline-block',
      marginBottom: '1rem',
      color: '#007bff',
      textDecoration: 'none',
      fontWeight: '600',
    },
    header: {
      borderBottom: '1px solid #ddd',
      paddingBottom: '1rem',
      marginBottom: '2rem',
    },
    title: {
      fontSize: '2rem',
      fontWeight: '700',
      color: '#333',
    },
    location: {
      fontSize: '1rem',
      color: '#777',
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
    },
    imageGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '1rem',
    },
    image: {
      width: '100%',
      height: '250px',
      objectFit: 'cover',
      borderRadius: '8px',
      border: '1px solid #eee',
    },
    info: {
      lineHeight: '1.6',
      color: '#444',
    },
    label: {
      fontWeight: 'bold',
      color: '#555',
    },
    amenities: {
      marginTop: '1rem',
    },
    amenitiesList: {
      paddingLeft: '1.2rem',
      listStyle: 'circle',
      color: '#444',
    },
    error: {
      color: '#d32f2f',
      backgroundColor: '#ffe6e6',
      padding: '1rem',
      borderRadius: '8px',
      marginBottom: '2rem',
      textAlign: 'center',
    }
  };

  if (error) {
    return (
      <div style={styles.page}>
        <div style={styles.container}>
          <div style={styles.error}>Error: {error}</div>
          <Link to="/Cards" style={styles.backLink}>← Back to Listings</Link>
        </div>
      </div>
    );
  }

  if (!property) {
    return (
      <div style={styles.page}>
        <div style={styles.container}>
          <div style={styles.error}>No property found with ID: {dataId}</div>
          <Link to="/Cards" style={styles.backLink}>← Back to Listings</Link>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <Link to="/Cards" style={styles.backLink}>← Back to Listings</Link>

        <div style={styles.header}>
          <h1 style={styles.title}>{property.title}</h1>
          <p style={styles.location}>{property.address}, {city}, {state}, {country}</p>
        </div>

        <div style={styles.content}>
          <div style={styles.imageGrid}>
            <img
              src={property.image || "https://via.placeholder.com/600x400?text=No+Image"}
              alt={property.title}
              style={styles.image}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/600x400?text=No+Image";
              }}
            />
          </div>

          <div style={styles.info}>
            <p><span style={styles.label}>Type:</span> {property.type}</p>
            <p><span style={styles.label}>Price:</span> ₹{property.price} {property.price_units}</p>
            {property.bedrooms && (
              <p><span style={styles.label}>Bedrooms:</span> {property.bedrooms}</p>
            )}
            {property.bathrooms && (
              <p><span style={styles.label}>Bathrooms:</span> {property.bathrooms}</p>
            )}
            <p><span style={styles.label}>Area:</span> {property.area_sqft?.toLocaleString('en-IN')} sq.ft.</p>
            <p><span style={styles.label}>Transaction Type:</span> {property.transaction_type}</p>
            <p><span style={styles.label}>Furnishing:</span> {property.furnishing || 'N/A'}</p>
            {property.builder && (
              <p><span style={styles.label}>Builder:</span> {property.builder}</p>
            )}
            {property.year_built && (
              <p><span style={styles.label}>Year Built:</span> {property.year_built}</p>
            )}

            {property.amenities?.length > 0 && (
              <div style={styles.amenities}>
                <p><span style={styles.label}>Amenities:</span></p>
                <ul style={styles.amenitiesList}>
                  {property.amenities.map((amenity, i) => (
                    <li key={i}>{amenity}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
