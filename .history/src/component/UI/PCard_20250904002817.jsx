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
  /* ===== Card Wrapper ===== */
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

  /* ===== Image Section ===== */
  .image-wrapper { position: relative; }
  .property-image {
    height: 220px;
    width: 100%;
    object-fit: cover;
  }

  /* ===== Badges ===== */
  .badges {
    position: absolute;
    top: 10px;
    left: 10px;
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
  }
  .badge-transaction.rent { background-color: #00b894; color:#fff; }
  .badge-transaction.sale { background-color: #0984e3; color:#fff; }

  /* ===== Favorite Button ===== */
  .favorite-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background: rgba(255,255,255,0.95);
    border: none;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 2px 6px rgba(0,0,0,0.12);
    z-index: 2;
  }

  /* ===== Price Tag ===== */
  .price-tag {
    position: absolute;
    bottom: 10px;
    left: 10px;
    background: #3b82f6;
    color: #fff;
    padding: 3px 8px;
    border-radius: 4px;
    font-weight: bold;
    font-size: 13px;
  }

  /* ===== Card Body ===== */
  .card-body { padding: 1rem; }

  .title-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 0.6rem;
  }
  .property-title {
    font-size: 1rem;
    font-weight: 700;
    color: #222;
    margin: 0;
    line-height: 1.3;
    flex: 1;
    padding-right: 0.5rem;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }

  /* Address */
  .address-row { display: flex; align-items: center; margin-bottom: 0.6rem; }
  .address { font-size: 0.85rem; color: #555; }

  /* Rating */
  .rating-row { margin-bottom: 0.7rem; }
  .rating-text { font-size: 0.75rem; }

  /* Features */
  .features {
    display: flex;
    justify-content: space-between;
    padding: 0.6rem 0;
    border-top: 1px solid #f0f0f0;
    margin-bottom: 0.6rem;
  }
  .feature-value span { font-size: 0.85rem; }
  .feature-label { font-size: 0.65rem; }

  /* CTA */
  .view-details-btn {
    width: 100%;
    font-weight: 600;
    background: #3b82f6;
    border: none;
    padding: 0.5rem;
    font-size: 0.85rem;
    border-radius: 6px;
    color: #fff;
  }

  /* ===== Grid ===== */
  .card-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }

  /* Tablet */
  @media (min-width: 486px) {
    .card-grid { grid-template-columns: repeat(2, 1fr); }
  }

  /* Desktop */
  @media (min-width: 992px) {
    .card-grid { grid-template-columns: repeat(3, 1fr); }
    .property-image { height: 250px; }
  }

  /* ===== Mobile Compact Version ===== */
  @media (max-width: 485px) {
    .property-card {
      margin: 0.5rem auto;
      border-radius: 10px;
    }
    .property-image { height: 140px; }   /* smaller image */
    .card-body { padding: 0.5rem; }      /* less padding */
    .property-title { font-size: 0.9rem; }
    .address { font-size: 0.75rem; }
    .rating-row { margin-bottom: 0.5rem; }
    .features { padding: 0.4rem 0; margin-bottom: 0.4rem; }
    .feature-value { font-size: 0.7rem; }
    .feature-value span { font-size: 0.75rem; }
    .feature-label { font-size: 0.55rem; }
    .view-details-btn { font-size: 0.75rem; padding: 0.35rem; }
  }
`}</style>



    </Card>
  );
};
