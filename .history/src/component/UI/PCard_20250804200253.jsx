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
    <FaStar 
      key={i} 
      className={i < Math.floor(rating) ? 'text-warning' : 'text-muted'} 
      style={{ fontSize: '0.9rem' }}
    />
  ));

  return (
    <Card
      style={{ 
        width: '100%', 
        maxWidth: '22rem', 
        margin: '0.75rem',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        border: 'none',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
        fontFamily: "'Segoe UI', 'Helvetica Neue', sans-serif"
      }}
      className="property-card"
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
      }}
    >
      <div style={{ position: 'relative' }}>
        <Card.Img
          variant="top"
          src={imageURL}
          alt={property.title}
          style={{
            height: '240px',
            objectFit: 'cover',
            width: '100%'
          }}
        />
        <div style={{
          position: 'absolute',
          top: '12px',
          left: '12px',
          display: 'flex',
          gap: '8px'
        }}>
          {property.isFeatured && (
            <Badge pill bg="danger" style={{ 
              fontSize: '0.65rem',
              fontWeight: '600',
              letterSpacing: '0.5px',
              padding: '4px 8px'
            }}>
              Featured
            </Badge>
          )}
          <Badge pill bg="success" style={{ 
            fontSize: '0.65rem',
            fontWeight: '600',
            letterSpacing: '0.5px',
            padding: '4px 8px'
          }}>
            {property.transaction_type}
          </Badge>
        </div>
        <button 
          onClick={() => setIsFavorite(!isFavorite)}
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            background: 'rgba(255,255,255,0.9)',
            border: 'none',
            borderRadius: '50%',
            width: '34px',
            height: '34px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s',
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
          }}
        >
          <FaHeart 
            color={isFavorite ? '#ff4757' : '#666'} 
            style={{ fontSize: '0.9rem' }}
          />
        </button>
      </div>

      <Card.Body className="p-4" style={{ paddingBottom: '1.25rem' }}>
        <div className="d-flex justify-content-between p- align-items-start mb-3">
          <Card.Title 
            className="fw-bold mb-1" 
            style={{ 
              fontSize: '1.15rem',
              lineHeight: '1.4',
              color: '#2d3436',
              letterSpacing: '-0.2px'
            }}
          >
            {property.title}
          </Card.Title>
          <div style={{ 
            fontSize: '0.9rem', 
            color: '#636e72',
            cursor: 'pointer',
            padding: '4px',
            borderRadius: '50%',
            transition: 'all 0.2s',
            ':hover': {
              background: '#f1f1f1'
            }
          }}>
            <FaShareAlt />
          </div>
        </div>

        <div className="d-flex align-items-center mb-3">
          <FaMapMarkerAlt className="me-2" style={{ 
            color: '#e84393', 
            fontSize: '0.85rem',
            minWidth: '12px'
          }} />
          <span style={{ 
            fontSize: '0.85rem', 
            color: '#636e72',
            lineHeight: '1.4',
            fontWeight: '400'
          }}>
            {property.address}
          </span>
        </div>

        <div className="d-flex align-items-center mb-3">
          <div className="me-2" style={{ display: 'flex', gap: '3px' }}>
            {stars}
          </div>
          <span style={{ 
            fontSize: '0.8rem', 
            color: '#636e72',
            fontWeight: '400'
          }}>
            {rating} ({property.reviews || 12} reviews)
          </span>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '8px',
          margin: '16px 0',
          padding: '14px 0',
          borderTop: '1px solid #f1f1f1',
          borderBottom: '1px solid #f1f1f1'
        }}>
          <div className="text-center">
            <div style={{ 
              fontSize: '1rem',
              fontWeight: '700',
              color: '#0984e3'
            }}>
              {property.bedrooms || 3}
            </div>
            <div style={{ 
              fontSize: '0.7rem', 
              color: '#636e72',
              fontWeight: '500',
              letterSpacing: '0.3px',
              textTransform: 'uppercase'
            }}>
              Beds
            </div>
          </div>
          <div className="text-center">
            <div style={{ 
              fontSize: '1rem',
              fontWeight: '700',
              color: '#0984e3'
            }}>
              {property.bathrooms || 2}
            </div>
            <div style={{ 
              fontSize: '0.7rem', 
              color: '#636e72',
              fontWeight: '500',
              letterSpacing: '0.3px',
              textTransform: 'uppercase'
            }}>
              Baths
            </div>
          </div>
          <div className="text-center">
            <div style={{ 
              fontSize: '1rem',
              fontWeight: '700',
              color: '#0984e3'
            }}>
              {property.area_sqft || 1200}
            </div>
            <div style={{ 
              fontSize: '0.7rem', 
              color: '#636e72',
              fontWeight: '500',
              letterSpacing: '0.3px',
              textTransform: 'uppercase'
            }}>
              Sqft
            </div>
          </div>
          <div className="text-center">
            <div style={{ 
              fontSize: '1rem',
              fontWeight: '700',
              color: '#0984e3'
            }}>
              {property.year_built || 2020}
            </div>
            <div style={{ 
              fontSize: '0.7rem', 
              color: '#636e72',
              fontWeight: '500',
              letterSpacing: '0.3px',
              textTransform: 'uppercase'
            }}>
              Built
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-center mt-2">
          <div>
            <div className="fw-bold" style={{ 
              fontSize: '1.25rem',
              color: '#00b894',
              display: 'flex',
              alignItems: 'center'
            }}>
              <FaRupeeSign className="me-1" style={{ fontSize: '0.9em' }} />
              {Number(property.price).toLocaleString()} 
              <span style={{ 
                fontSize: '0.8rem', 
                color: '#636e72', 
                fontWeight: '400',
                marginLeft: '4px'
              }}>
                {property.price_units ? `/${property.price_units}` : ''}
              </span>
            </div>
          </div>
          
          <NavLink to={`/Cards/${property.id}`} style={{ textDecoration: 'none' }}>
            <Button
              variant="primary"
              className="rounded-pill"
              style={{ 
                fontWeight: '600',
                background: 'linear-gradient(135deg, #6c5ce7, #a29bfe)',
                border: 'none',
                padding: '8px 18px',
                fontSize: '0.85rem',
                letterSpacing: '0.3px',
                boxShadow: 'none',
                transition: 'all 0.2s',
                ':hover': {
                  transform: 'translateY(-1px)',
                  boxShadow: '0 4px 8px rgba(108, 92, 231, 0.3)'
                }
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