import React, { useEffect, useState } from 'react';
import { FaBed, FaBath, FaRulerCombined, FaHeart, FaMapMarkerAlt, FaRupeeSign, FaShareAlt, FaStar } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useFirebase } from '../../context/FirebaseContext';
import Badge from 'react-bootstrap/Badge';

export const PropertyListings = ({ title }) => {
  const { getLists, isLoggedIn } = useFirebase();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState({});

  // Default property image
  const defaultPropertyImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300' width='400' height='300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Cpath d='M200 100 L250 70 L300 100 L300 250 L100 250 L100 100 Z' fill='%233b82f6' opacity='0.2' stroke='%233b82f6' stroke-width='2'/%3E%3Ccircle cx='200' cy='120' r='40' fill='%233b82f6' opacity='0.3'/%3E%3Ctext x='200' y='125' font-family='Arial' font-size='14' fill='%233b82f6' text-anchor='middle'%3E%3Ctspan x='200' dy='-5'%3EProperty%3C/tspan%3E%3Ctspan x='200' dy='15'%3EImage%3C/tspan%3E%3C/text%3E%3C/svg%3E";

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

  const toggleFavorite = (id) => {
    setFavorites(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  if (loading) {
    return <div className="loading">Loading properties...</div>;
  }

  return (
    <section className="property-listings">
      <h2>{title}</h2>

      <div className="properties-grid">
        {properties.map(property => {
          const imageURL = property.image || defaultPropertyImage;
          const rating = property.rating || 4.5;
          const stars = Array(5).fill(0).map((_, i) => (
            <FaStar
              key={i}
              className={i < Math.floor(rating) ? 'text-warning' : 'text-muted'}
            />
          ));
          
          return (
            <div key={property.id} className="property-card">
              {/* Image Section */}
              <div className="property-image">
                <img 
                  src={imageURL} 
                  alt={property.title}
                  onError={(e) => {
                    e.target.src = defaultPropertyImage;
                  }}
                />

                {/* Badges */}
                <div className="property-badges">
                  {property.isFeatured && (
                    <Badge pill bg="danger" className="featured-badge">
                      FEATURED
                    </Badge>
                  )}
                  <Badge pill className="transaction-badge">
                    {(property.transaction_type || 'Sale').toUpperCase()}
                  </Badge>
                </div>

                {/* Favorite Icon */}
                {isLoggedIn && (
                  <button
                    onClick={() => toggleFavorite(property.id)}
                    className="favorite-btn"
                  >
                    <FaHeart color={favorites[property.id] ? '#ff4757' : '#555'} />
                  </button>
                )}
              </div>

              {/* Card Body */}
              <div className="property-body">
                {/* Title Row */}
                <div className="property-title-row">
                  <h3>{property.title}</h3>
                  <button className="share-btn">
                    <FaShareAlt />
                  </button>
                </div>

                {/* Address */}
                <div className="property-address">
                  <FaMapMarkerAlt />
                  <span>{property.address || "Address not specified"}</span>
                </div>

                {/* Rating */}
                <div className="property-rating">
                  <div className="stars">{stars}</div>
                  <span>{rating.toFixed(1)} ({property.reviews || 12} reviews)</span>
                </div>

                {/* Features */}
                <div className="property-features-grid">
                  <div className="feature">
                    <div className="feature-value">{property.bedrooms || 3}</div>
                    <div className="feature-label">Beds</div>
                  </div>
                  <div className="feature">
                    <div className="feature-value">{property.bathrooms || 2}</div>
                    <div className="feature-label">Baths</div>
                  </div>
                  <div className="feature">
                    <div className="feature-value">{property.area_sqft || 1200}</div>
                    <div className="feature-label">Sqft</div>
                  </div>
                  <div className="feature">
                    <div className="feature-value">{property.year_built || 2020}</div>
                    <div className="feature-label">Built</div>
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="property-footer">
                  <div className="property-price">
                    <FaRupeeSign />
                    <span>{Number(property.price || 0).toLocaleString('en-IN')}</span>
                    <span className="price-unit">{property.price_units ? `/${property.price_units}` : ''}</span>
                  </div>

                  <NavLink to={`/Cards/${property.id}`} className="view-details-btn">
                    View Details
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
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
          font-family: 'Inter', sans-serif;
        }
        
        .property-listings h2 {
          text-align: center;
          font-size: 32px;
          margin-bottom: 40px;
          color: #222;
          font-weight: 700;
        }
        
        .properties-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-bottom: 40px;
        }
        
        .property-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 5px 18px rgba(0,0,0,0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .property-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.12);
        }
        
        .property-image {
          position: relative;
          height: 200px;
          background-color: #f3f4f6;
        }
        
        .property-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .property-badges {
          position: absolute;
          top: 16px;
          left: 16px;
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        
        .featured-badge {
          font-size: 0.72rem;
          font-weight: 700;
          padding: 6px 12px;
        }
        
        .transaction-badge {
          font-size: 0.72rem;
          font-weight: 700;
          padding: 6px 12px;
          background-color: ${properties[0]?.transaction_type === 'Rent' ? '#00b894' : '#0984e3'} !important;
        }
        
        .favorite-btn {
          position: absolute;
          top: 16px;
          right: 16px;
          background: rgba(255,255,255,0.95);
          border: none;
          border-radius: 50%;
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 3px 8px rgba(0,0,0,0.15);
        }
        
        .property-body {
          padding: 24px;
        }
        
        .property-title-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 16px;
        }
        
        .property-title-row h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: #222;
          margin: 0;
          line-height: 1.4;
          flex: 1;
          padding-right: 12px;
        }
        
        .share-btn {
          background: none;
          border: none;
          color: #666;
          padding: 6px;
          border-radius: 50%;
          cursor: pointer;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .property-address {
          display: flex;
          align-items: center;
          margin-bottom: 16px;
          color: #555;
          font-size: 0.92rem;
        }
        
        .property-address svg {
          color: #e84393;
          font-size: 0.95rem;
          margin-right: 8px;
          flex-shrink: 0;
        }
        
        .property-rating {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
        }
        
        .stars {
          display: flex;
          margin-right: 8px;
        }
        
        .stars svg {
          font-size: 0.95rem;
          margin-right: 1px;
        }
        
        .property-rating span {
          font-size: 0.88rem;
          color: #666;
          font-weight: 500;
        }
        
        .property-features-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          padding: 16px 0;
          border-top: 1px solid #f0f0f0;
          border-bottom: 1px solid #f0f0f0;
          margin-bottom: 20px;
        }
        
        .feature {
          text-align: center;
        }
        
        .feature-value {
          font-size: 1.15rem;
          font-weight: 700;
          color: #0984e3;
          margin-bottom: 4px;
        }
        
        .feature-label {
          font-size: 0.78rem;
          color: #666;
          font-weight: 600;
          text-transform: uppercase;
        }
        
        .property-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .property-price {
          display: flex;
          align-items: center;
          color: #00b894;
        }
        
        .property-price svg {
          margin-right: 4px;
          font-size: 1rem;
        }
        
        .property-price span:first-of-type {
          font-size: 1.35rem;
          font-weight: 700;
        }
        
        .price-unit {
          font-size: 0.88rem;
          color: #666;
          font-weight: 500;
          margin-left: 6px;
        }
        
        .view-details-btn {
          display: inline-block;
          background: linear-gradient(135deg, #6c5ce7, #8c7ae6);
          color: white;
          padding: 10px 20px;
          border-radius: 30px;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.92rem;
          border: none;
          box-shadow: 0 4px 12px rgba(108, 92, 231, 0.25);
          transition: all 0.3s ease;
        }
        
        .view-details-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(108, 92, 231, 0.35);
        }
        
        .view-all-container {
          text-align: center;
          margin-top: 40px;
        }
        
        .view-all-btn {
          display: inline-block;
          padding: 12px 30px;
          background: white;
          color: #6c5ce7;
          border: 2px solid #6c5ce7;
          border-radius: 30px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        
        .view-all-btn:hover {
          background: #6c5ce7;
          color: white;
        }
        
        .loading {
          text-align: center;
          padding: 50px;
          font-size: 18px;
          color: #666;
        }
        
        /* Tablet and larger screens */
        @media (min-width: 768px) {
          .property-listings {
            padding: 60px 20px;
          }
          
          .properties-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
          }
          
          .property-image {
            height: 240px;
          }
        }

        /* Large screens */
        @media (min-width: 1024px) {
          .properties-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        
        /* Small mobile screens */
        @media (max-width: 480px) {
          .properties-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          
          .property-features-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
          
          .property-footer {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }
          
          .view-details-btn {
            align-self: stretch;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
};