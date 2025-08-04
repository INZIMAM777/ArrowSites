import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import { 
  FaMapMarkerAlt, 
  FaBed, 
  FaBath, 
  FaRulerCombined,
  FaHeart,
  FaStar
} from 'react-icons/fa';
import { useState } from 'react';
import Badge from 'react-bootstrap/Badge';

export const PCard = ({ property }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const imageURL = property.image || '/property.jpg';
  
  // Rating stars calculation
  const rating = property.rating || 4.2;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  
  return (
    <Card className="property-card h-100 border-0 shadow-sm overflow-hidden" 
      style={{
        borderRadius: '12px',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
      }}
    >
      {/* Property Image with Badges */}
      <div className="position-relative">
        <Card.Img
          variant="top"
          src={imageURL}
          alt={property.title}
          className="object-fit-cover"
          style={{ height: '200px' }}
        />
        
        {/* Top left badges */}
        <div className="position-absolute top-0 start-0 p-2 d-flex gap-2">
          {property.isFeatured && (
            <Badge pill bg="danger" className="fw-normal">
              Featured
            </Badge>
          )}
          <Badge pill bg="dark" className="fw-normal">
            {property.type}
          </Badge>
        </div>
        
        {/* Favorite button */}
        <button 
          className="position-absolute top-0 end-0 m-2 bg-white rounded-circle border-0"
          style={{
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
          onClick={() => setIsFavorite(!isFavorite)}
        >
          <FaHeart color={isFavorite ? '#ff4757' : '#adb5bd'} />
        </button>
        
        {/* Price tag */}
        <div className="position-absolute bottom-0 start-0 m-2">
          <div className="bg-primary text-white px-3 py-1 rounded-pill fw-semibold">
            ₹{Number(property.price).toLocaleString()}
            {property.price_units && <span className="fs-7">/{property.price_units}</span>}
          </div>
        </div>
      </div>

      {/* Card Body */}
      <Card.Body className="p-3 d-flex flex-column">
        {/* Title and Location */}
        <div className="mb-2">
          <Card.Title className="fs-5 fw-bold text-dark mb-1 text-truncate">
            {property.title}
          </Card.Title>
          <div className="d-flex align-items-center text-muted">
            <FaMapMarkerAlt className="me-1" size={12} />
            <small className="text-truncate">{property.address}</small>
          </div>
        </div>

        {/* Rating */}
        <div className="d-flex align-items-center mb-2">
          <div className="d-flex me-2">
            {[...Array(5)].map((_, i) => (
              <FaStar 
                key={i}
                size={14}
                className={
                  i < fullStars ? 'text-warning' : 
                  (i === fullStars && hasHalfStar ? 'text-warning opacity-75' : 'text-secondary opacity-25')
                }
              />
            ))}
          </div>
          <small className="text-muted">{rating} ({property.reviews || 8} reviews)</small>
        </div>

        {/* Property Features */}
        <div className="d-flex justify-content-between border-top border-bottom py-2 my-2">
          <div className="text-center">
            <FaBed className="text-primary mb-1" />
            <div className="fs-7 fw-semibold">{property.bedrooms || 2}</div>
            <small className="text-muted">Beds</small>
          </div>
          <div className="text-center">
            <FaBath className="text-primary mb-1" />
            <div className="fs-7 fw-semibold">{property.bathrooms || 2}</div>
            <small className="text-muted">Baths</small>
          </div>
          <div className="text-center">
            <FaRulerCombined className="text-primary mb-1" />
            <div className="fs-7 fw-semibold">{property.area_sqft || 1200}</div>
            <small className="text-muted">Sq.ft</small>
          </div>
          <div className="text-center">
            <svg width="1em" height="1em" viewBox="0 0 24 24" className="text-primary mb-1">
              <path fill="currentColor" d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14L6 17h12l-3.86-5.14z"/>
            </svg>
            <div className="fs-7 fw-semibold">{property.year_built || 2020}</div>
            <small className="text-muted">Built</small>
          </div>
        </div>

        {/* Footer with CTA */}
        <div className="mt-auto d-flex justify-content-between align-items-center">
          <div>
            <small className="text-muted d-block">Status</small>
            <span className="badge bg-success bg-opacity-10 text-success">
              {property.status || 'Available'}
            </span>
          </div>
          <NavLink to={`/Cards/${property.id}`} className="text-decoration-none">
            <Button 
              variant="outline-primary" 
              size="sm" 
              className="rounded-pill px-3 fw-semibold"
            >
              View Details
            </Button>
          </NavLink>
        </div>
      </Card.Body>
    </Card>
  );
};