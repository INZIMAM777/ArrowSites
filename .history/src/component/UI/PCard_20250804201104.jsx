import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import {
  FaRupeeSign,
  FaMapMarkerAlt,
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
      style={{ 
        fontSize: '0.95rem',
        filter: i < Math.floor(rating) ? 'drop-shadow(0 1px 1px rgba(255,193,7,0.4))' : 'none'
      }}
    />
  ));

  return (
    <Card
      style={{ 
        width: '100%', 
        maxWidth: '24rem', 
        margin: '0.75rem',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        border: 'none',
        borderRadius: '14px',
        overflow: 'hidden',
        boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
        fontFamily: "'Inter', 'Segoe UI', sans-serif"
      }}
      className="property-card"
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.boxShadow = '0 12px 28px rgba(0,0,0,0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
      }}
    >
      <div style={{ position: 'relative' }}>
        <Card.Img
          variant="top"
          src={imageURL}
          alt={property.title}
          style={{
            height: '260px',
            objectFit: 'cover',
            width: '100%',
            borderBottom: '1px solid #f0f0f0'
          }}
        />
        <div style={{
          position: 'absolute',
          top: '14px',
          left: '14px',
          display: 'flex',
          gap: '8px'
        }}>
          {property.isFeatured && (
            <Badge pill bg="danger" style={{ 
              fontSize: '0.7rem',
              fontWeight: '700',
              letterSpacing: '0.5px',
              padding: '5px 10px',
              textShadow: '0 1px 1px rgba(0,0,0,0.1)',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
              FEATURED
            </Badge>
          )}
          <Badge pill style={{ 
            fontSize: '0.7rem',
            fontWeight: '700',
            letterSpacing: '0.5px',
            padding: '5px 10px',
            backgroundColor: property.transaction_type === 'Rent' ? '#00b894' : '#0984e3',
            textShadow: '0 1px 1px rgba(0,0,0,0.1)',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            {property.transaction_type?.toUpperCase() || 'SALE'}
          </Badge>
        </div>
        <button 
          onClick={() => setIsFavorite(!isFavorite)}
          style={{
            position: 'absolute',
            top: '14px',
            right: '14px',
            background: 'rgba(255,255,255,0.95)',
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s',
            boxShadow: '0 3px 8px rgba(0,0,0,0.15)',
            ':hover': {
              background: 'rgba(255,255,255,1)',
              transform: 'scale(1.1)'
            }
          }}
        >
          <FaHeart 
            color={isFavorite ? '#ff4757' : '#555'} 
            style={{ 
              fontSize: '1rem',
              transition: 'all 0.2s',
              transform: isFavorite ? 'scale(1.1)' : 'scale(1)'
            }}
          />
        </button>
      </div>

      <Card.Body className="p-4" style={{ paddingBottom: '1.5rem' }}>
        <div className="d-flex justify-content-between align-items-start mb-3">
          <Card.Title 
            className="fw-bold mb-1" 
            style={{ 
              fontSize: '1.25rem',
              lineHeight: '1.4',
              color: '#222',
              letterSpacing: '-0.3px',
              fontWeight: '700'
            }}
          >
            {property.title}
          </Card.Title>
          <button
            style={{ 
              fontSize: '0.95rem', 
              color: '#555',
              cursor: 'pointer',
              padding: '6px',
              borderRadius: '50%',
              border: 'none',
              background: 'rgba(0,0,0,0.03)',
              transition: 'all 0.2s',
              ':hover': {
                background: 'rgba(0,0,0,0.08)',
                color: '#333'
              }
            }}
          >
            <FaShareAlt />
          </button>
        </div>

        <div className="d-flex align-items-center mb-3">
          <FaMapMarkerAlt className="me-2" style={{ 
            color: '#e84393', 
            fontSize: '0.9rem',
            minWidth: '14px',
            opacity: 0.9
          }} />
          <span style={{ 
            fontSize: '0.9rem', 
            color: '#555',
            lineHeight: '1.4',
            fontWeight: '500'
          }}>
            {property.address}
          </span>
        </div>

        <div className="d-flex align-items-center mb-3">
          <div className="me-2" style={{ display: 'flex', gap: '4px' }}>
            {stars}
          </div>
          <span style={{ 
            fontSize: '0.85rem', 
            color: '#666',
            fontWeight: '500'
          }}>
            {rating.toFixed(1)} ({property.reviews || 12} reviews)
          </span>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '10px',
          margin: '18px 0',
          padding: '16px 0',
          borderTop: '1px solid #f0f0f0',
          borderBottom: '1px solid #f0f0f0'
        }}>
          <div className="text-center">
            <div style={{ 
              fontSize: '1.1rem',
              fontWeight: '700',
              color: '#0984e3',
              marginBottom: '2px'
            }}>
              {property.bedrooms || 3}
            </div>
            <div style={{ 
              fontSize: '0.75rem', 
              color: '#666',
              fontWeight: '600',
              letterSpacing: '0.4px',
              textTransform: 'uppercase'
            }}>
              Beds
            </div>
          </div>
          <div className="text-center">
            <div style={{ 
              fontSize: '1.1rem',
              fontWeight: '700',
              color: '#0984e3',
              marginBottom: '2px'
            }}>
              {property.bathrooms || 2}
            </div>
            <div style={{ 
              fontSize: '0.75rem', 
              color: '#666',
              fontWeight: '600',
              letterSpacing: '0.4px',
              textTransform: 'uppercase'
            }}>
              Baths
            </div>
          </div>
          <div className="text-center">
            <div style={{ 
              fontSize: '1.1rem',
              fontWeight: '700',
              color: '#0984e3',
              marginBottom: '2px'
            }}>
              {property.area_sqft || 1200}
            </div>
            <div style={{ 
              fontSize: '0.75rem', 
              color: '#666',
              fontWeight: '600',
              letterSpacing: '0.4px',
              textTransform: 'uppercase'
            }}>
              Sqft
            </div>
          </div>
          <div className="text-center">
            <div style={{ 
              fontSize: '1.1rem',
              fontWeight: '700',
              color: '#0984e3',
              marginBottom: '2px'
            }}>
              {property.year_built || 2020}
            </div>
            <div style={{ 
              fontSize: '0.75rem', 
              color: '#666',
              fontWeight: '600',
              letterSpacing: '0.4px',
              textTransform: 'uppercase'
            }}>
              Built
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-center mt-3">
          <div>
            <div className="fw-bold" style={{ 
              fontSize: '1.35rem',
              color: '#00b894',
              display: 'flex',
              alignItems: 'center',
              fontWeight: '700'
            }}>
              <FaRupeeSign className="me-1" style={{ fontSize: '0.95em' }} />
              {Number(property.price).toLocaleString('en-IN')} 
              <span style={{ 
                fontSize: '0.85rem', 
                color: '#666', 
                fontWeight: '500',
                marginLeft: '5px'
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
                background: 'linear-gradient(135deg, #6c5ce7, #8c7ae6)',
                border: 'none',
                padding: '9px 20px',
                fontSize: '0.9rem',
                letterSpacing: '0.4px',
                boxShadow: '0 4px 12px rgba(108, 92, 231, 0.25)',
                transition: 'all 0.2s',
                ':hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 16px rgba(108, 92, 231, 0.35)',
                  background: 'linear-gradient(135deg, #6c5ce7, #9c88ff)'
                },
                ':active': {
                  transform: 'translateY(0)'
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