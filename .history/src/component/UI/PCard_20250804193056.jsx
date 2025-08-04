import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import {
  FaRupeeSign,
  FaMapMarkerAlt,
  FaBed,
  FaBath,
  FaRulerCombined,
} from 'react-icons/fa';

export const PCard = ({ property }) => {
  const imageURL = '/property.jpg';

  return (
    <Card
      style={{ width: '100%', maxWidth: '24rem', margin: '1rem' }}
      className="shadow rounded-4 border-0 overflow-hidden"
    >
      <Card.Img
        variant="top"
        src={imageURL}
        alt={property.title}
        style={{
          height: '200px',
          objectFit: 'cover',
        }}
      />
      <Card.Body className="p-3">
        <Card.Title className="fw-semibold fs-5 text-primary mb-1">
          {property.title}
        </Card.Title>
        <Card.Subtitle className="mb-3 text-muted fs-6">
          {property.type} • {property.transaction_type} • {property.furnishing}
        </Card.Subtitle>

        <Card.Text className="mb-2">
          <div className="d-flex align-items-center mb-2">
            <FaRupeeSign className="me-2 text-success" />
            <strong>{Number(property.price).toLocaleString()} {property.price_units}</strong>
          </div>
          <div className="d-flex align-items-center mb-2">
            <FaRulerCombined className="me-2 text-secondary" />
            {property.area_sqft} sqft
          </div>
          <div className="d-flex align-items-center mb-2">
            <FaBed className="me-2 text-warning" />
            {property.bedrooms} Beds
          </div>
          <div className="d-flex align-items-center mb-2">
            <FaBath className="me-2 text-info" />
            {property.bathrooms} Baths
          </div>
          <div className="d-flex align-items-start">
            <FaMapMarkerAlt className="me-2 text-danger mt-1" />
            <span>{property.address}</span>
          </div>
        </Card.Text>

        <NavLink
          to={`/Cards/${property.id}`}
          style={{ textDecoration: 'none' }}
        >
          <Button
            variant="primary"
            className="w-100 mt-2 rounded-3"
            style={{ fontWeight: 500 }}
          >
            View Details
          </Button>
        </NavLink>
      </Card.Body>
    </Card>
  );
};
