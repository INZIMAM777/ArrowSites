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
        padding: '0 1px' // Added star padding
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
    >
      {/* Image Section */}
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
        
        {/* Badges */}
        <div style={{
          position: 'absolute',
          top: '16px',
          left: '16px',
          display: 'flex',
          gap: '10px'
        }}>
          {property.isFeatured && (
            <Badge pill bg="danger" style={{ 
              fontSize: '0.72rem',
              fontWeight: '700',
              padding: '6px 12px',
              letterSpacing: '0.5px'
            }}>
              FEATURED
            </Badge>
          )}
          <Badge pill style={{ 
            fontSize: '0.72rem',
            fontWeight: '700',
            padding: '6px 12px',
            backgroundColor: property.transaction_type === 'Rent' ? '#00b894' : '#0984e3'
          }}>
            {property.transaction_type?.toUpperCase() || 'SALE'}
          </Badge>
        </div>
        
        {/* Favorite Button */}
        <button 
          onClick={() => setIsFavorite(!isFavorite)}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'rgba(255,255,255,0.95)',
            border: 'none',
            borderRadius: '50%',
            width: '38px',
            height: '38px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 3px 8px rgba(0,0,0,0.15)'
          }}
        >
          <FaHeart 
            color={isFavorite ? '#ff4757' : '#555'} 
            style={{ fontSize: '1.05rem' }}
          />
        </button>
      </div>

      {/* Content Section */}
      <Card.Body style={{ 
        padding: '1.5rem 1.75rem 1.75rem',
      }}>
        {/* Title Row */}
        <div style={{ 
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '1rem'
        }}>
          <h3 style={{ 
            fontSize: '1.3rem',
            fontWeight: '700',
            color: '#222',
            margin: '0',
            paddingRight: '1rem',
            lineHeight: '1.4'
          }}>
            {property.title}
          </h3>
          <button
            style={{ 
              background: 'none',
              border: 'none',
              color: '#666',
              padding: '6px',
              borderRadius: '50%',
              cursor: 'pointer',
              flexShrink: 0
            }}
          >
            <FaShareAlt style={{ fontSize: '1rem' }} />
          </button>
        </div>

        {/* Address */}
        <div style={{ 
          display: 'flex',
          alignItems: 'center',
          marginBottom: '0.9rem'
        }}>
          <FaMapMarkerAlt style={{ 
            color: '#e84393', 
            fontSize: '0.95rem',
            marginRight: '0.5rem',
            flexShrink: 0
          }} />
          <p style={{ 
            fontSize: '0.92rem',
            color: '#555',
            margin: '0',
            lineHeight: '1.5'
          }}>
            {property.address}
          </p>
        </div>

        {/* Rating */}
        <div style={{ 
          display: 'flex',
          alignItems: 'center',
          marginBottom: '1.25rem'
        }}>
          <div style={{ 
            display: 'flex',
            marginRight: '0.75rem'
          }}>
            {stars}
          </div>
          <span style={{ 
            fontSize: '0.88rem',
            color: '#666',
            fontWeight: '500'
          }}>
            {rating.toFixed(1)} ({property.reviews || 12} reviews)
          </span>
        </div>

        {/* Features Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '0.75rem',
          margin: '1.5rem 0',
          padding: '1.25rem 0',
          borderTop: '1px solid #f0f0f0',
          borderBottom: '1px solid #f0f0f0'
        }}>
          {[
            { value: property.bedrooms || 3, label: 'Beds' },
            { value: property.bathrooms || 2, label: 'Baths' },
            { value: property.area_sqft || 1200, label: 'Sqft' },
            { value: property.year_built || 2020, label: 'Built' }
          ].map((item, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '1.15rem',
                fontWeight: '700',
                color: '#0984e3',
                marginBottom: '0.25rem'
              }}>
                {item.value}
              </div>
              <div style={{ 
                fontSize: '0.78rem',
                color: '#666',
                fontWeight: '600',
                letterSpacing: '0.4px',
                textTransform: 'uppercase'
              }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Price & CTA */}
        <div style={{ 
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '0.5rem'
        }}>
          <div>
            <div style={{ 
              fontSize: '1.4rem',
              fontWeight: '700',
              color: '#00b894',
              display: 'flex',
              alignItems: 'center'
            }}>
              <FaRupeeSign style={{ 
                fontSize: '1rem',
                marginRight: '0.3rem'
              }} />
              {Number(property.price).toLocaleString('en-IN')}
              <span style={{ 
                fontSize: '0.88rem',
                color: '#666',
                fontWeight: '500',
                marginLeft: '0.5rem'
              }}>
                {property.price_units ? `/${property.price_units}` : ''}
              </span>
            </div>
          </div>
          
          <NavLink to={`/Cards/${property.id}`} style={{ textDecoration: 'none' }}>
            <Button
              variant="primary"
              style={{ 
                fontWeight: '600',
                background: 'linear-gradient(135deg, #6c5ce7, #8c7ae6)',
                border: 'none',
                padding: '0.65rem 1.5rem',
                fontSize: '0.92rem',
                borderRadius: '50px',
                boxShadow: '0 4px 12px rgba(108, 92, 231, 0.25)'
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