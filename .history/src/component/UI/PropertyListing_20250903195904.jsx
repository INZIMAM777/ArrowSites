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
        const propertiesData = await getLists();
        setProperties(propertiesData.slice(0, 6));
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
                <span><FaBed /> {property.bedrooms}</span>
                <span><FaBath /> {property.bathrooms}</span>
                <span><FaRulerCombined /> {property.area_sqft}</span>
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
          padding: 40px 16px;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .property-listings h2 {
          text-align: center;
          font-size: 24px;
          margin-bottom: 30px;
          color: #333;
        }
        
        .properties-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-bottom: 30px;
        }
        
        .property-card {
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .property-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
        
        .property-image {
          position: relative;
          height: 160px;
        }
        
        .property-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .favorite-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          background: white;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          cursor: pointer;
          color: #ff4757;
          font-size: 14px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.2);
        }
        
        .price-tag {
          position: absolute;
          bottom: 10px;
          left: 10px;
          background: #3b82f6;
          color: white;
          padding: 4px 8px;
          border-radius: 4px;
          font-weight: bold;
          font-size: 12px;
        }
        
        .property-details {
          padding: 12px;
        }
        
        .property-details h3 {
          font-size: 14px;
          margin-bottom: 8px;
          color: #333;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: normal;
        }

        .property-address {
          display: flex;
          align-items: center;
          color: #666;
          margin-bottom: 10px;
          font-size: 11px;
        }
        
        .property-address svg {
          margin-right: 4px;
          color: #3b82f6;
          font-size: 11px;
        }
        
        .property-features {
          display: flex;
          justify-content: space-between;
          padding: 10px 0;
          border-top: 1px solid #eee;
          margin-top: 10px;
        }
        
        .property-features span {
          display: flex;
          align-items: center;
          color: #555;
          font-size: 11px;
        }
        
        .property-features svg {
          margin-right: 3px;
          color: #3b82f6;
          font-size: 11px;
        }
        
        .view-details-btn {
          display: block;
          text-align: center;
          background: #3b82f6;
          color: white;
          padding: 8px;
          border-radius: 4px;
          text-decoration: none;
          font-weight: 500;
          font-size: 12px;
          transition: background 0.3s ease;
        }
        
        .view-details-btn:hover {
          background: #2563eb;
        }
        
        .view-all-container {
          text-align: center;
          margin-top: 30px;
        }
        
        .view-all-btn {
          display: inline-block;
          padding: 10px 20px;
          background: white;
          color: #3b82f6;
          border: 2px solid #3b82f6;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 500;
          font-size: 14px;
          transition: all 0.3s ease;
        }
        
        .view-all-btn:hover {
          background: #3b82f6;
          color: white;
        }
        
        .loading {
          text-align: center;
          padding: 30px;
          font-size: 16px;
          color: #666;
        }
        
        /* Tablet and larger screens */
        @media (min-width: 768px) {
          .property-listings {
            padding: 60px 20px;
          }
          
          .property-listings h2 {
            font-size: 32px;
            margin-bottom: 50px;
          }
          
          .properties-grid {
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 24px;
            margin-bottom: 40px;
          }
          
          .property-image {
            height: 200px;
          }
          
          .favorite-btn {
            top: 15px;
            right: 15px;
            width: 40px;
            height: 40px;
            font-size: 18px;
          }
          
          .price-tag {
            bottom: 15px;
            left: 15px;
            padding: 8px 16px;
            font-size: 16px;
          }
          
          .property-details {
            padding: 20px;
          }
          
          .property-details h3 {
            font-size: 18px;
          }
          
          .property-address {
            font-size: 14px;
          }
          
          .property-features span {
            font-size: 14px;
          }
          
          .view-details-btn {
            padding: 12px;
            font-size: 14px;
          }
        }

        /* Large screens */
        @media (min-width: 1024px) {
          .properties-grid {
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          }
          
          .property-image {
            height: 250px;
          }
        }
      `}</style>
    </section>
  );
};