import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import {
  FaRupeeSign,
  FaMapMarkerAlt,
  FaHeart,
  FaShareAlt,
  FaStar,
  FaBed,
  FaBath,
  FaRulerCombined,
  FaCalendarAlt,
  FaExpand
} from 'react-icons/fa';
import { useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

export const PCard = ({ property }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  const imageURL = property.image || '/property.jpg';
  const rating = property.rating || 4.5;
  
  // Generate stars based on rating
  const stars = Array(5).fill(0).map((_, i) => (
    <FaStar
      key={i}
      className={i < Math.floor(rating) ? 'text-warning' : 'text-muted'}
      style={{
        fontSize: '0.95rem',
        marginRight: '2px'
      }}
    />
  ));

  // Format price with proper units
  const formatPrice = () => {
    if (!property.price) return 'Price on request';
    
    const price = Number(property.price);
    const units = property.price_units || '';
    
    if (units === 'crore') {
      return `${price} Cr`;
    } else if (units === 'lakh') {
      return `${price} Lakh`;
    } else {
      return `₹${price.toLocaleString('en-IN')}${units ? `/${units}` : ''}`;
    }
  };

  // Handle image load and error
  const handleImageLoad = () => {
    setImageLoaded(true);
    setImageError(false);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  return (
    <Card
      className="property-card"
      style={{
        width: '100%',
        maxWidth: '380px',
        margin: '1rem auto',
        border: 'none',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0 12px 30px rgba(0, 0, 0, 0.08)',
        fontFamily: "'Inter', 'SF Pro Display', -apple-system, sans-serif",
        transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
        background: 'linear-gradient(145deg, #ffffff, #f8f9fa)',
        position: 'relative',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.12)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.08)';
      }}
    >
      {/* Image Section with Overlay */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Image Skeleton Loader */}
        {!imageLoaded && (
          <div 
            style={{
              height: '280px',
              background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
              backgroundSize: '200% 100%',
              animation: 'loading 1.5s infinite'
            }}
          />
        )}
        
        <Card.Img
          variant="top"
          src={imageError ? '/property-placeholder.jpg' : imageURL}
          alt={property.title}
          style={{
            height: '280px',
            objectFit: 'cover',
            width: '100%',
            display: imageLoaded ? 'block' : 'none',
            transition: 'transform 0.5s ease'
          }}
          onLoad={handleImageLoad}
          onError={handleImageError}
          className="property-image"
        />
        
        {/* Image Overlay Gradient */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '50%',
          background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)',
          opacity: imageLoaded ? 1 : 0,
          transition: 'opacity 0.3s ease'
        }} />

        {/* Badges */}
        <div style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          display: 'flex',
          gap: '8px',
          flexWrap: 'wrap',
          zIndex: 2
        }}>
          {property.isFeatured && (
            <Badge pill style={{
              fontSize: '0.75rem',
              fontWeight: '700',
              padding: '8px 14px',
              background: 'linear-gradient(135deg, #ff6b6b, #ff3838)',
              border: 'none'
            }}>
              ⭐ FEATURED
            </Badge>
          )}
          <Badge pill style={{
            fontSize: '0.75rem',
            fontWeight: '700',
            padding: '8px 14px',
            background: property.transaction_type === 'Rent' ? 
              'linear-gradient(135deg, #00b894, #00a085)' : 
              'linear-gradient(135deg, #0984e3, #086cc3)',
            border: 'none'
          }}>
            {property.transaction_type?.toUpperCase() || 'SALE'}
          </Badge>
        </div>

        {/* Action Buttons */}
        <div style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          display: 'flex',
          gap: '10px',
          zIndex: 2
        }}>
          {/* Share Button with Tooltip */}
          <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip>Share this property</Tooltip>}
          >
            <button
              style={{
                background: 'rgba(255, 255, 255, 0.95)',
                border: 'none',
                borderRadius: '50%',
                width: '42px',
                height: '42px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.1)';
                e.target.style.background = 'rgba(255, 255, 255, 1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.background = 'rgba(255, 255, 255, 0.95)';
              }}
            >
              <FaShareAlt style={{ fontSize: '1rem', color: '#555' }} />
            </button>
          </OverlayTrigger>

          {/* Favorite Button with Tooltip */}
          <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip>{isFavorite ? 'Remove from favorites' : 'Add to favorites'}</Tooltip>}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsFavorite(!isFavorite);
              }}
              style={{
                background: 'rgba(255, 255, 255, 0.95)',
                border: 'none',
                borderRadius: '50%',
                width: '42px',
                height: '42px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.1)';
                e.target.style.background = 'rgba(255, 255, 255, 1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.background = 'rgba(255, 255, 255, 0.95)';
              }}
            >
              <FaHeart
                color={isFavorite ? '#ff4757' : '#555'}
                style={{ fontSize: '1.1rem' }}
              />
            </button>
          </OverlayTrigger>
        </div>

        {/* Quick View Button */}
        <div style={{
          position: 'absolute',
          bottom: '20px',
          right: '20px',
          zIndex: 2
        }}>
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip>Quick view</Tooltip>}
          >
            <button
              style={{
                background: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '50%',
                width: '44px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.3)';
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                e.target.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                e.target.style.transform = 'scale(1)';
              }}
            >
              <FaExpand style={{ fontSize: '1rem', color: 'white' }} />
            </button>
          </OverlayTrigger>
        </div>
      </div>

      {/* Card Body */}
      <Card.Body style={{ padding: '1.75rem' }}>
        {/* Title Row */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '1rem'
        }}>
          <h3 style={{
            fontSize: '1.35rem',
            fontWeight: '700',
            color: '#1a1a1a',
            margin: 0,
            lineHeight: '1.4',
            flex: 1,
            paddingRight: '1rem',
            background: 'linear-gradient(135deg, #1a1a1a, #333)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            {property.title}
          </h3>
        </div>

        {/* Address */}
        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          marginBottom: '1.1rem'
        }}>
          <FaMapMarkerAlt style={{
            color: '#e84393',
            fontSize: '1rem',
            marginRight: '0.6rem',
            marginTop: '2px',
            flexShrink: 0
          }} />
          <p style={{
            fontSize: '0.95rem',
            color: '#666',
            margin: 0,
            lineHeight: '1.5'
          }}>
            {property.address}
          </p>
        </div>

        {/* Rating */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '1.5rem'
        }}>
          <div style={{ display: 'flex', marginRight: '0.6rem' }}>{stars}</div>
          <span style={{
            fontSize: '0.9rem',
            color: '#666',
            fontWeight: '600'
          }}>
            {rating.toFixed(1)} ({property.reviews || 12} reviews)
          </span>
        </div>

        {/* Features Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1rem',
          padding: '1.25rem',
          margin: '0 -0.5rem 1.5rem',
          background: 'linear-gradient(135deg, #f8f9fa, #f1f3f5)',
          borderRadius: '16px',
          border: '1px solid rgba(0, 0, 0, 0.05)'
        }}>
          {[
            { value: property.bedrooms || 3, label: 'Beds', icon: <FaBed /> },
            { value: property.bathrooms || 2, label: 'Baths', icon: <FaBath /> },
            { value: `${property.area_sqft || 1200} sqft`, label: 'Area', icon: <FaRulerCombined /> },
            { value: property.year_built || 2020, label: 'Year', icon: <FaCalendarAlt /> }
          ].map((item, idx) => (
            <div key={idx} style={{ 
              textAlign: 'center',
              padding: '0.5rem'
            }}>
              <div style={{
                fontSize: '1.1rem',
                color: '#0984e3',
                marginBottom: '0.4rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '0.3rem'
              }}>
                {item.icon}
                <span style={{
                  fontWeight: '700',
                }}>{item.value}</span>
              </div>
              <div style={{
                fontSize: '0.8rem',
                color: '#666',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>{item.label}</div>
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
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <FaRupeeSign style={{ 
              color: '#00b894', 
              marginRight: '0.3rem', 
              fontSize: '1.2rem',
              fontWeight: 'bold'
            }} />
            <div style={{ 
              fontSize: '1.5rem', 
              fontWeight: '800', 
              color: '#00b894',
              background: 'linear-gradient(135deg, #00b894, #009975)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              {formatPrice()}
            </div>
          </div>

          <NavLink to={`/Cards/${property.id}`} style={{ textDecoration: 'none' }}>
            <Button
              variant="primary"
              style={{
                fontWeight: '700',
                background: 'linear-gradient(135deg, #6c5ce7, #8c7ae6)',
                border: 'none',
                padding: '0.75rem 1.5rem',
                fontSize: '0.95rem',
                borderRadius: '12px',
                boxShadow: '0 6px 16px rgba(108, 92, 231, 0.3)',
                transition: 'all 0.3s ease',
                letterSpacing: '0.5px'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 8px 20px rgba(108, 92, 231, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 6px 16px rgba(108, 92, 231, 0.3)';
              }}
            >
              View Details
            </Button>
          </NavLink>
        </div>
      </Card.Body>

      {/* CSS Animation Keyframes */}
      <style>
        {`
          @keyframes loading {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }
          
          .property-card:hover .property-image {
            transform: scale(1.05);
          }
        `}
      </style>
    </Card>
  );
};