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
      className={i < Math.floor(rating) ? 'text-warning' : 'text-muted'}
      style={{
        fontSize: '0.85rem',
        marginRight: '1px'
      }}
    />
  ));

  return (
    <Card
      style={{
        width: '100%',
        maxWidth: '350px',
        margin: '0.75rem auto',
        border: 'none',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
        fontFamily: "'Inter', sans-serif",
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
      className="property-card"
    >
      {/* Image Section */}
      <div style={{ position: 'relative' }}>
        <Card.Img
          variant="top"
          src={imageURL}
          alt={property.title}
          style={{
            height: '220px',
            objectFit: 'cover',
            width: '100%',
          }}
          onError={(e) => {
            e.target.src = defaultPropertyImage;
          }}
        />

        {/* Badges */}
        <div style={{
          position: 'absolute',
          top: '12px',
          left: '12px',
          display: 'flex',
          gap: '6px',
          flexWrap: 'wrap'
        }}>
          {property.isFeatured && (
            <Badge pill bg="danger" style={{
              fontSize: '0.7rem',
              fontWeight: '700',
              padding: '4px 10px'
            }}>
              FEATURED
            </Badge>
          )}
          <Badge pill style={{
            fontSize: '0.7rem',
            fontWeight: '700',
            padding: '4px 10px',
            backgroundColor: property.transaction_type === 'Rent' ? '#00b894' : '#0984e3'
          }}>
            {property.transaction_type?.toUpperCase() || 'SALE'}
          </Badge>
        </div>

        {/* Favorite Icon */}
        {isLoggedIn && (
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            style={{
              position: 'absolute',
              top: '12px',
              right: '12px',
              background: 'rgba(255,255,255,0.95)',
              border: 'none',
              borderRadius: '50%',
              width: '34px',
              height: '34px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 2px 6px rgba(0,0,0,0.12)',
              zIndex: 2
            }}
            className="favorite-btn"
          >
            <FaHeart
              color={isFavorite ? '#ff4757' : '#555'}
              style={{ fontSize: '1rem' }}
            />
          </button>
        )}

        {/* Price Tag */}
        <div style={{
          position: 'absolute',
          bottom: '12px',
          left: '12px',
          background: '#3b82f6',
          color: 'white',
          padding: '4px 10px',
          borderRadius: '4px',
          fontWeight: 'bold',
          fontSize: '14px',
          zIndex: 2
        }} className="price-tag">
          <FaRupeeSign style={{ fontSize: '0.8rem', marginRight: '2px' }} />
          {Number(property.price).toLocaleString('en-IN')}
          {property.price_units && `/${property.price_units}`}
        </div>
      </div>

      {/* Card Body */}
      <Card.Body style={{ padding: '1rem' }}>
        {/* Title Row */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '0.75rem'
        }}>
          <h3 style={{
            fontSize: '1.1rem',
            fontWeight: '700',
            color: '#222',
            margin: 0,
            lineHeight: '1.4',
            flex: 1,
            paddingRight: '0.5rem',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 1,
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}>
            {property.title}
          </h3>
          <button
            style={{
              background: 'none',
              border: 'none',
              color: '#666',
              padding: '4px',
              borderRadius: '50%',
              cursor: 'pointer',
              flexShrink: 0
            }}
          >
            <FaShareAlt style={{ fontSize: '0.9rem' }} />
          </button>
        </div>

        {/* Address */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '0.75rem'
        }}>
          <FaMapMarkerAlt style={{
            color: '#e84393',
            fontSize: '0.85rem',
            marginRight: '0.4rem',
            flexShrink: 0
          }} />
          <p style={{
            fontSize: '0.85rem',
            color: '#555',
            margin: 0,
            lineHeight: '1.4',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 1,
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}>
            {property.address || "Address not specified"}
          </p>
        </div>

        {/* Rating */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '0.9rem'
        }}>
          <div style={{ display: 'flex', marginRight: '0.4rem' }}>{stars}</div>
          <span style={{
            fontSize: '0.8rem',
            color: '#666',
            fontWeight: '500'
          }}>
            {rating.toFixed(1)} ({property.reviews || 12} reviews)
          </span>
        </div>

        {/* Features */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0.75rem 0',
          borderTop: '1px solid #f0f0f0',
          marginBottom: '0.75rem'
        }}>
          {[
            { icon: <FaBed />, value: property.bedrooms || 3, label: 'Beds' },
            { icon: <FaBath />, value: property.bathrooms || 2, label: 'Baths' },
            { icon: <FaRulerCombined />, value: property.area_sqft || 1200, label: 'Sqft' },
            { icon: <FaHome />, value: property.year_built || 2020, label: 'Built' }
          ].map((item, idx) => (
            <div key={idx} style={{ 
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '4px',
                color: '#3b82f6',
                fontSize: '0.9rem'
              }}>
                {item.icon}
                <span style={{
                  marginLeft: '4px',
                  fontSize: '0.95rem',
                  fontWeight: '700',
                  color: '#0984e3'
                }}>{item.value}</span>
              </div>
              <div style={{
                fontSize: '0.7rem',
                color: '#666',
                fontWeight: '600',
                textTransform: 'uppercase'
              }}>{item.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <NavLink to={`/Cards/${property.id}`} style={{ textDecoration: 'none', display: 'block' }}>
          <Button
            variant="primary"
            style={{
              width: '100%',
              fontWeight: '600',
              background: '#3b82f6',
              border: 'none',
              padding: '0.5rem',
              fontSize: '0.9rem',
              borderRadius: '6px',
              boxShadow: '0 2px 6px rgba(59, 130, 246, 0.25)',
              transition: 'background 0.3s ease'
            }}
            className="view-details-btn"
          >
            View Details
          </Button>
        </NavLink>
      </Card.Body>

      <style jsx>{`
        .property-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 16px rgba(0,0,0,0.12);
        }
        
        .favorite-btn:hover {
          background: rgba(255,255,255,0.98) !important;
          transform: scale(1.05);
        }
        
        .view-details-btn:hover {
          background: #2563eb !important;
        }

        
      `}</style>
    </Card>
  );
};