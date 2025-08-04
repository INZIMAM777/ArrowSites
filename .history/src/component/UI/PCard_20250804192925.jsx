import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import { FaRupeeSign, FaMapMarkerAlt, FaBed, FaBath, FaRulerCombined } from 'react-icons/fa';

export const PCard = ({ property }) => {
  const imageURL = '/property.jpg';

  return (
    <Card style={{ width: '100%', maxWidth: '22rem', margin: '1rem' }} className="shadow-sm rounded-4 border-0">
      <Card.Img
        variant="top"
        src={imageURL}
        alt={property.title}
        style={{ height: '200px', objectFit: 'cover', borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem' }}
      />
      <Card.Body>
        <Card.Title className="fw-bold fs-5 text-primary mb-1">{property.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted fs-6">
          {property.type} • {property.transaction_type} • {property.furnishing}
        </Card.Subtitle>

        <Card.Text className="mb-2">
          <div className="d-flex align-items-center mb-1">
            <FaRupeeSign className="me-2 text-success" />
            <strong className="me-1">{Number(property.price).toLocaleString()}</strong>
            <span>{property.price_units}</span>
          </div>
          <div className="d-flex align-items-center mb-1">
            <FaRulerCombined className="me-2 text-secondary" />
            <span>{property.area_sqft} sqft</span>
          </div>
          <div className="d-flex align-items-center mb-1">
            <FaBed className="me-2 text-warning" />
            <span>{property.bedrooms} Beds</span>
          </div>
          <div className="d-flex align-items-center mb-1">
            <FaBath className="me-2 text-info" />
            <span>{property.bathrooms} Baths</span>
          </div>
          <div className="d-flex align-items-start mt-2">
            <FaMapMarkerAlt className="me-2 text-danger mt-1" />
            <span>{property.address}</span>
          </div>
        </Card.Text>

        <NavLink to={`/Cards/${property.id}`}>
          <Button variant="outline-primary" className="w-100 rounded-3 mt-2">View Details</Button>
        </NavLink>
      </Card.Body>
    </Card>
  );
};
