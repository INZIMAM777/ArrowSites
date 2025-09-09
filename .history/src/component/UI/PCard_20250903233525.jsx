import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import {
  FaRupeeSign,
  FaMapMarkerAlt,
  FaHeart,
  FaShareAlt,
  FaStar,
  FaBed,
  FaBath,
  FaRulerCombined,
  FaHome
} from 'react-icons/fa';
import { useState } from 'react';

export const PCard = ({ property, isLoggedIn }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const defaultPropertyImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300' width='400' height='300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Cpath d='M200 100 L250 70 L300 100 L300 250 L100 250 L100 100 Z' fill='%233b82f6' opacity='0.2' stroke='%233b82f6' stroke-width='2'/%3E%3Ccircle cx='200' cy='120' r='40' fill='%233b82f6' opacity='0.3'/%3E%3Ctext x='200' y='125' font-family='Arial' font-size='14' fill='%233b82f6' text-anchor='middle'%3E%3Ctspan x='200' dy='-5'%3EProperty%3C/tspan%3E%3Ctspan x='200' dy='15'%3EImage%3C/tspan%3E%3C/text%3E%3C/svg%3E";
  const imageURL = property.image || defaultPropertyImage;
  const rating = property.rating || 4.5;
  
  const stars = Array(5).fill(0).map((_, i) => (
    <FaStar
      key={i}
      className={i < Math.floor(rating) ? 'star active' : 'star'}
    />
  ));

  return (
    <Card className="property-card">
      {/* Image Section */}
      <div className="image-wrapper">
        <Card.Img
          variant="top"
          src={imageURL}
          alt={property.title}
          className="property-image"
          onError={(e) => {
            e.target.src = defaultPropertyImage;
          }}
        />

        {/* Badges */}
        <div className="badges">
          {property.isFeatured && (
            <Badge pill bg="danger" className="badge-featured">
              FEATURED
            </Badge>
          )}
          <Badge pill className={`badge-transaction ${property.transaction_type === 'Rent' ? 'rent' : 'sale'}`}>
            {property.transaction_type?.toUpperCase() || 'SALE'}
          </Badge>
        </div>

        {/* Favorite Icon */}
        {isLoggedIn && (
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className="favorite-btn"
          >
            <FaHeart color={isFavorite ? '#ff4757' : '#555'} />
          </button>
        )}

        {/* Price Tag */}
        <div className="price-tag">
          <FaRupeeSign className="rupee-icon" />
          {Number(property.price).toLocaleString('en-IN')}
          {property.price_units && `/${property.price_units}`}
        </div>
      </div>

      {/* Card Body */}
      <Card.Body className="card-body">
        {/* Title Row */}
        <div className="title-row">
          <h3 className="property-title">{property.title}</h3>
          <button className="share-btn">
            <FaShareAlt />
          </button>
        </div>

        {/* Address */}
        <div className="address-row">
          <FaMapMarkerAlt className="address-icon" />
          <p className="address">{property.address || "Address not specified"}</p>
        </div>

        {/* Rating */}
        <div className="rating-row">
          <div className="stars">{stars}</div>
          <span className="rating-text">
            {rating.toFixed(1)} ({property.reviews || 12} reviews)
          </span>
        </div>

        {/* Features */}
        <div className="features">
          {[ 
            { icon: <FaBed />, value: property.bedrooms || 3, label: 'Beds' },
            { icon: <FaBath />, value: property.bathrooms || 2, label: 'Baths' },
            { icon: <FaRulerCombined />, value: property.area_sqft || 1200, label: 'Sqft' },
            { icon: <FaHome />, value: property.year_built || 2020, label: 'Built' }
          ].map((item, idx) => (
            <div key={idx} className="feature-item">
              <div className="feature-value">{item.icon}<span>{item.value}</span></div>
              <div className="feature-label">{item.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <NavLink to={`/Cards/${property.id}`} className="nav-link">
          <Button variant="primary" className="view-details-btn">
            View Details
          </Button>
        </NavLink>
      </Card.Body>

      <style jsx>{`
        .property-card {
          width: 100%;
          max-width: 350px;
          margin: 0.75rem auto;
          border: none;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          font-family: 'Inter', sans-serif;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .property-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 16px rgba(0,0,0,0.12);
        }
        .image-wrapper { position: relative; }
        .property-image {
          height: 220px;
          object-fit: cover;
          width: 100%;
        }
        .badges {
          position: absolute;
          top: 12px;
          left: 12px;
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
        }
        .badge-featured {
          font-size: 0.7rem;
          font-weight: 700;
          padding: 4px 10px;
        }
        .badge-transaction {
          font-size: 0.7rem;
          font-weight: 700;
          padding: 4px 10px;
        }
        .badge-transaction.rent { background-color: #00b894; }
        .badge-transaction.sale { background-color: #0984e3; }
        .favorite-btn {
          position: absolute;
          top: 12px;
          right: 12px;
          background: rgba(255,255,255,0.95);
          border: none;
          border-radius: 50%;
          width: 34px;
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0,0,0,0.12);
          z-index: 2;
        }
        .favorite-btn:hover {
          background: rgba(255,255,255,0.98) !important;
          transform: scale(1.05);
        }
        .price-tag {
          position: absolute;
          bottom: 12px;
          left: 12px;
          background: #3b82f6;
          color: white;
          padding: 4px 10px;
          border-radius: 4px;
          font-weight: bold;
          font-size: 14px;
          z-index: 2;
        }
        .rupee-icon { font-size: 0.8rem; margin-right: 2px; }
        .card-body { padding: 1rem; }
        .title-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.75rem;
        }
        .property-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #222;
          margin: 0;
          line-height: 1.4;
          flex: 1;
          padding-right: 0.5rem;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .share-btn {
          background: none;
          border: none;
          color: #666;
          padding: 4px;
          border-radius: 50%;
          cursor: pointer;
          flex-shrink: 0;
        }
        .address-row {
          display: flex;
          align-items: center;
          margin-bottom: 0.75rem;
        }
        .address-icon {
          color: #e84393;
          font-size: 0.85rem;
          margin-right: 0.4rem;
          flex-shrink: 0;
        }
        .address {
          font-size: 0.85rem;
          color: #555;
          margin: 0;
          line-height: 1.4;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .rating-row {
          display: flex;
          align-items: center;
          margin-bottom: 0.9rem;
        }
        .stars { display: flex; margin-right: 0.4rem; }
        .star { font-size: 0.85rem; margin-right: 1px; color: #ccc; }
        .star.active { color: #fbc02d; }
        .rating-text {
          font-size: 0.8rem;
          color: #666;
          font-weight: 500;
        }
        .features {
          display: flex;
          justify-content: space-between;
          padding: 0.75rem 0;
          border-top: 1px solid #f0f0f0;
          margin-bottom: 0.75rem;
        }
        .feature-item {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .feature-value {
          display: flex;
          align-items: center;
          margin-bottom: 4px;
          color: #3b82f6;
          font-size: 0.9rem;
        }
        .feature-value span {
          margin-left: 4px;
          font-size: 0.95rem;
          font-weight: 700;
          color: #0984e3;
        }
        .feature-label {
          font-size: 0.7rem;
          color: #666;
          font-weight: 600;
          text-transform: uppercase;
        }
        .nav-link { text-decoration: none; display: block; }
        .view-details-btn {
          width: 100%;
          font-weight: 600;
          background: #3b82f6;
          border: none;
          padding: 0.5rem;
          font-size: 0.9rem;
          border-radius: 6px;
          box-shadow: 0 2px 6px rgba(59, 130, 246, 0.25);
          transition: background 0.3s ease;
        }
        .view-details-btn:hover {
          background: #2563eb !important;
        }
        
            display: gridgrid-template-columns: repeat(2, 1fr);
      `}</style>
    </Card>
  );
};
