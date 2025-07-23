import React from 'react';
// import { useLoaderData, Link } from 'react-router-dom';
import data from "../../api/property.json";
import { Link, useLoaderData } from 'react-router-dom';


export const CardsDetail = () => {
const dataId = useLoaderData();
console.log(dataId);
console.log(data);
  const { properties, error, city, state, country } = data;
  console.log(city  , state, country);
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
  {properties.filter((currEle)=>currEle.id=== dataId).map((properties)=>{

    
  })}
  
};
