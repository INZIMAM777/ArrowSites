import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFirebase } from '../context/FirebaseContext';

export const DetailCard = () => {
  const { id } = useParams();
  const { getLists } = useFirebase();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [similarProperties, setSimilarProperties] = useState([]);

  useEffect(() => {
    const fetchPropertyData = async () => {
      try {
        setLoading(true);
        
        const propertiesData = await getLists();
        const foundProperty = propertiesData.find(prop => prop.id === id);
        
        if (!foundProperty) {
          setError('Property not found');
          setProperty(null);
        } else {
          setProperty(foundProperty);
          const similar = propertiesData.filter(prop => 
            prop.type === foundProperty.type && prop.id !== id
          ).slice(0, 4);
          setSimilarProperties(similar || []);
        }
        
      } catch (error) {
        console.error("Error fetching property:", error);
        setError('Failed to load property');
        setProperty(null);
        setSimilarProperties([]);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchPropertyData();
    }
  }, [id, getLists]);

  if (loading) {
    return <div className="loading">Loading property details...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!property) {
    return <div className="not-found">Property not found</div>;
  }

  return (
    <div className="detail-card">
      {/* Property Header */}
      <div className="property-header">
        <h1>{property?.title || 'No Title'}</h1>
        <p className="address">{property?.address || 'Address not available'}</p>
        <p className="price">{property?.price} {property?.price_units}</p>
      </div>

      {/* Property Image */}
      <div className="property-image">
        <img 
          src={property?.image} 
          alt={property?.title || 'Property'} 
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/600x400?text=Image+Not+Available';
          }}
        />
      </div>

      {/* Property Details */}
      <div className="property-details">
        <div className="detail-item">
          <strong>Bedrooms:</strong> {property?.bedrooms || 'N/A'}
        </div>
        <div className="detail-item">
          <strong>Bathrooms:</strong> {property?.bathrooms || 'N/A'}
        </div>
        <div className="detail-item">
          <strong>Area:</strong> {property?.area_sqft || 'N/A'} sqft
        </div>
        <div className="detail-item">
          <strong>Type:</strong> {property?.type || 'N/A'}
        </div>
        <div className="detail-item">
          <strong>Transaction Type:</strong> {property?.transaction_type || 'N/A'}
        </div>
      </div>

      {/* Amenities */}
      <div className="amenities-section">
        <h3>Amenities</h3>
        <div className="amenities-list">
          {property?.amenities?.map((amenity, index) => (
            <span key={index} className="amenity-tag">
              {amenity}
            </span>
          )) || <p>No amenities listed</p>}
        </div>
      </div>

      {/* Similar Properties */}
      <div className="similar-properties">
        <h3>Similar Properties</h3>
        <div className="similar-list">
          {(similarProperties || []).map(similarProp => (
            <div key={similarProp.id} className="similar-item">
              <h4>{similarProp.title}</h4>
              <p>{similarProp.price} {similarProp.price_units}</p>
            </div>
          ))}
        </div>
        
        {(!similarProperties || similarProperties.length === 0) && (
          <p>No similar properties found</p>
        )}
      </div>

      {/* Builder Info */}
      <div className="builder-info">
        <h3>Builder Information</h3>
        <p>{property?.builder || 'Builder information not available'}</p>
      </div>

      {/* Merged Style Tag */}
      <style>{`
        .detail-card {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
        }

        .property-header {
          text-align: center;
          margin-bottom: 30px;
          padding: 20px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-radius: 12px;
        }

        .property-header h1 {
          font-size: 2.5rem;
          margin: 0 0 10px 0;
          font-weight: 700;
        }

        .address {
          font-size: 1.1rem;
          margin: 5px 0;
          opacity: 0.9;
        }

        .price {
          font-size: 1.8rem;
          margin: 10px 0 0 0;
          font-weight: 600;
          color: #ffd700;
        }

        .property-image {
          margin: 30px 0;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        }

        .property-image img {
          width: 100%;
          height: 500px;
          object-fit: cover;
          display: block;
          transition: transform 0.3s ease;
        }

        .property-image img:hover {
          transform: scale(1.02);
        }

        .property-details {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin: 40px 0;
          padding: 30px;
          background: #f8f9fa;
          border-radius: 12px;
          border-left: 4px solid #3b82f6;
        }

        .detail-item {
          padding: 15px;
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          transition: transform 0.2s ease;
        }

        .detail-item:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }

        .detail-item strong {
          color: #3b82f6;
          display: block;
          margin-bottom: 5px;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .amenities-section {
          margin: 40px 0;
          padding: 30px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        }

        .amenities-section h3 {
          color: #2d3748;
          margin-bottom: 20px;
          font-size: 1.5rem;
          border-bottom: 2px solid #e2e8f0;
          padding-bottom: 10px;
        }

        .amenities-list {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .amenity-tag {
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          color: white;
          padding: 8px 20px;
          border-radius: 25px;
          font-size: 0.9rem;
          font-weight: 500;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .amenity-tag:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        }

        .similar-properties {
          margin: 40px 0;
          padding: 30px;
          background: #f7fafc;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
        }

        .similar-properties h3 {
          color: #2d3748;
          margin-bottom: 25px;
          font-size: 1.5rem;
        }

        .similar-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 25px;
        }

        .similar-item {
          padding: 25px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
          border: 1px solid #e2e8f0;
        }

        .similar-item:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.15);
          border-color: #3b82f6;
        }

        .similar-item h4 {
          color: #2d3748;
          margin: 0 0 12px 0;
          font-size: 1.2rem;
          font-weight: 600;
        }

        .similar-item p {
          color: #3b82f6;
          font-size: 1.1rem;
          font-weight: 700;
          margin: 0;
        }

        .builder-info {
          margin: 40px 0;
          padding: 30px;
          background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
          border-radius: 12px;
          text-align: center;
          border: 1px solid #cbd5e0;
        }

        .builder-info h3 {
          color: #2d3748;
          margin-bottom: 15px;
          font-size: 1.4rem;
        }

        .builder-info p {
          color: #4a5568;
          font-size: 1.1rem;
          margin: 0;
          font-style: italic;
        }

        .loading, .error, .not-found {
          text-align: center;
          padding: 60px 20px;
          font-size: 1.2rem;
          background: #f7fafc;
          border-radius: 12px;
          margin: 40px auto;
          max-width: 600px;
        }

        .error {
          color: #e53e3e;
          background: #fed7d7;
          border: 1px solid #feb2b2;
        }

        .not-found {
          color: #718096;
          background: #edf2f7;
          border: 1px solid #cbd5e0;
        }

        @media (max-width: 768px) {
          .detail-card {
            padding: 15px;
          }
          
          .property-header h1 {
            font-size: 2rem;
          }
          
          .property-image img {
            height: 300px;
          }
          
          .property-details {
            grid-template-columns: 1fr;
            padding: 20px;
          }
          
          .similar-list {
            grid-template-columns: 1fr;
          }
          
          .amenities-list {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .property-header {
            padding: 15px;
          }
          
          .property-header h1 {
            font-size: 1.8rem;
          }
          
          .price {
            font-size: 1.5rem;
          }
          
          .amenity-tag {
            padding: 6px 15px;
            font-size: 0.8rem;
          }
        }
      `}</style>
    </div>
  );
};