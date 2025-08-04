import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import {
  FaRupeeSign,
  FaMapMarkerAlt,
  FaBed,
  FaBath,
  FaRulerCombined,
  FaHeart,
  FaShareAlt,
  FaStar
} from 'react-icons/fa';
import { useState } from 'react';
import Badge from 'react-bootstrap/Badge';

export const PCard = ({ property }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const imageURL = property.image || '/property.jpg';

  // Calculate rating stars
  const rating = property.rating || 4.5;
  const stars = Array(5).fill(0).map((_, i) => (
    <FaStar key={i} className={i < Math.floor(rating) ? 'text-warning' : 'text-secondary'} />
  ));

  return (
    <Card
      style={{ 
        width: '100%', 
        maxWidth: '22rem', 
        margin: '1rem',
        transition: 'all 0.3s ease',
        border: 'none',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
      }}
      className="property-card"
      onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
    >
      <div style={{ position: 'relative' }}>
        <Card.Img
          variant="top"
          src={imageURL}
          alt={property.title}
          style={{
            height: '220px',
            objectFit: 'cover',
            width: '100%'
          }}
        />
        <div style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          display: 'flex',
          gap: '8px'
        }}>
          {property.isFeatured && (
            <Badge pill bg="danger" style={{ fontSize: '0.7rem' }}>
              Featured
            </Badge>
          )}
          <Badge pill bg="success" style={{ fontSize: '0.7rem' }}>
            {property.transaction_type}
          </Badge>
        </div>
        <button 
          onClick={() => setIsFavorite(!isFavorite)}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'rgba(255,255,255,0.8)',
            border: 'none',
            borderRadius: '50%',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
        >
          <FaHeart color={isFavorite ? '#ff4757' : '#666'} />
        </button>
      </div>

      <Card.Body className="p-4">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <Card.Title className="fw-bold fs-5 text-dark mb-1" style={{ lineHeight: '1.3' }}>
            {property.title}
          </Card.Title>
          <div style={{ fontSize: '0.9rem', color: '#666' }}>
            <FaShareAlt style={{ cursor: 'pointer' }} />
          </div>
        </div>

        <div className="d-flex align-items-center mb-2">
          <FaMapMarkerAlt className="me-2" style={{ color: '#ff6b81', fontSize: '0.8rem' }} />
          <span style={{ fontSize: '0.9rem', color: '#666' }}>{property.address}</span>
        </div>

        <div className="d-flex align-items-center mb-3">
          <div className="me-2" style={{ display: 'flex', gap: '2px' }}>
            {stars}
          </div>
          <span style={{ fontSize: '0.8rem', color: '#666' }}>
            {rating} ({property.reviews || 12} reviews)
          </span>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '8px',
          margin: '12px 0',
          padding: '12px 0',
          borderTop: '1px solid #eee',
          borderBottom: '1px solid #eee'
        }}>
          <div className="text-center">
            <div className="text-primary fw-bold">{property.bedrooms || 3}</div>
            <div style={{ fontSize: '0.7rem', color: '#666' }}>Beds</div>
          </div>
          <div className="text-center">
            <div className="text-primary fw-bold">{property.bathrooms || 2}</div>
            <div style={{ fontSize: '0.7rem', color: '#666' }}>Baths</div>
          </div>
          <div className="text-center">
            <div className="text-primary fw-bold">{property.area_sqft || 1200}</div>
            <div style={{ fontSize: '0.7rem', color: '#666' }}>Sqft</div>
          </div>
          <div className="text-center">
            <div className="text-primary fw-bold">{property.year_built || 2020}</div>
            <div style={{ fontSize: '0.7rem', color: '#666' }}>Built</div>
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-center mt-3">
          <div>
            <div className="fw-bold text-success" style={{ fontSize: '1.2rem' }}>
              <FaRupeeSign className="me-1" />
              {Number(property.price).toLocaleString()} 
              <span style={{ fontSize: '0.9rem', color: '#666', fontWeight: 'normal' }}>
                {property.price_units ? `/${property.price_units}` : ''}
              </span>
            </div>
          </div>
          
          <NavLink to={`/Cards/${property.id}`} style={{ textDecoration: 'none' }}>
            <Button
              variant="primary"
              className="rounded-pill px-3"
              style={{ 
                fontWeight: 500,
                background: 'linear-gradient(135deg, #3a7bd5, #00d2ff)',
                border: 'none',
                padding: '8px 16px'
              }}
            >
              View Details
            </Button>
          </NavLink>
        </div>
      </Card.Body>
    </Card>
  );
};