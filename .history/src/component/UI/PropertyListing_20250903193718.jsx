import React, { useEffect, useState } from 'react';
import { FaBed, FaBath, FaRulerCombined, FaHeart, FaMapMarkerAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useFirebase } from '../../context/FirebaseContext';

export const PropertyListings = ({ title }) => {
  const { getLists, isLoggedIn } = useFirebase();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        // getLists() returns an array of properties, not QuerySnapshot
        const propertiesData = await getLists();
        setProperties(propertiesData.slice(0, 6)); // Only take first 6 properties
        // console.log("Properties loaded:", propertiesData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching properties: ", error);
        setLoading(false);
      }
    };

    fetchProperties();
  }, [getLists]);

  if (loading) {
    return <div className="loading">Loading properties...</div>;
  }

  return (
    <section className="property-listings">
      <h2>{title}</h2>

      <div className="properties-grid">
        {properties.map(property => (
          <div key={property.id} className="property-card">
            <div className="property-image">
              <img src={property.image} alt={property.title} />
              {isLoggedIn && (
                <button className="favorite-btn">
                  <FaHeart />
                </button>
              )}
              <div className="price-tag">
                {property.price} {property.price_units}
              </div>
            </div>

            <div className="property-details">
              <h3>{property.title}</h3>
              <div className="property-address">
                <FaMapMarkerAlt /> {property.address}
              </div>

              <div className="property-features">
                <span><FaBed /> {property.bedrooms} beds</span>
                <span><FaBath /> {property.bathrooms} baths</span>
                <span><FaRulerCombined /> {property.area_sqft} sqft</span>
              </div>

              <NavLink to={`/Cards/${property.id}`} className="view-details-btn">
                View Details
              </NavLink>
            </div>
          </div>
        ))}
      </div>

      <div className="view-all-container">
        <NavLink to="/properties" className="view-all-btn">
          View All Properties
        </NavLink>
      </div>

      <style jsx>{`
        .property-listings {
          padding: 60px 20px;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .property-listings h2 {
          text-align: center;
          font-size: 32px;
          margin-bottom: 50px;
          color: #333;
        }
        
        .properties-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 30px;
          margin-bottom: 40px;
        }
        
        .property-card {
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .property-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        }
        
        .property-image {
          position: relative;
          height: 250px;
        }
        
        .property-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .favorite-btn {
          position: absolute;
          top: 15px;
          right: 15px;
          background: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          cursor: pointer;
          color: #ff4757;
          font-size: 18px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        }
        
        .price-tag {
          position: absolute;
          bottom: 15px;
          left: 15px;
          background: #3b82f6;
          color: white;
          padding: 8px 16px;
          border-radius: 4px;
          font-weight: bold;
          font-size: 18px;
        }
        
        .property-details {
          padding: 20px;
          
        }
        
        .property-details h3 {
          font-size: 20px;
          margin-bottom: 10px;
          color: #333;
          line-clamp:;
        }
        
        .property-address {
          display: flex;
          align-items: center;
          color: #666;
          margin-bottom: 15px;
          font-size: 14px;
        }
        
        .property-address svg {
          margin-right: 5px;
          color: #3b82f6;
        }
        
        .property-features {
          display: flex;
          justify-content: space-between;
          padding: 15px 0;
          border-top: 1px solid #eee;
          margin-top: 15px;
        }
        
        .property-features span {
          display: flex;
          align-items: center;
          color: #555;
          font-size: 14px;
        }
        
        .property-features svg {
          margin-right: 5px;
          color: #3b82f6;
        }
        
        .view-details-btn {
          display: block;
          text-align: center;
          background: #3b82f6;
          color: white;
          padding: 12px;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 500;
          transition: background 0.3s ease;
        }
        
        .view-details-btn:hover {
          background: #2563eb;
        }
        
        .view-all-container {
          text-align: center;
          margin-top: 40px;
        }
        
        .view-all-btn {
          display: inline-block;
          padding: 12px 30px;
          background: white;
          color: #3b82f6;
          border: 2px solid #3b82f6;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
        }
        
        .view-all-btn:hover {
          background: #3b82f6;
          color: white;
        }
        
        .loading {
          text-align: center;
          padding: 50px;
          font-size: 18px;
          color: #666;
        }
        
        @media (max-width: 768px) {
          .properties-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};