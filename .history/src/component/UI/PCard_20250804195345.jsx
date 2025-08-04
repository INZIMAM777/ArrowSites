import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import { FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt } from 'react-icons/fa';

export const PCard = ({ property }) => {
  const imageURL = '/property.jpg';

  return (
    <Card style={{ width: '20rem', margin: '1rem' }} className="shadow-sm">
      <Card.Img
        variant="top"
        src={imageURL}
        alt="Property"
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <Card.Body>
        <Card.Title>{property.bname}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          <FaMapMarkerAlt className="me-2" />
          {property.address}
        </Card.Subtitle>

        <Card.Text>
          <div className="d-flex justify-content-between text-muted mb-2">
            <span><FaBed className="me-1" /> {property.bedrooms} Beds</span>
            <span><FaBath className="me-1" /> {property.bathrooms} Baths</span>
            <span><FaRulerCombined className="me-1" /> {property.area} sqft</span>
          </div>
          <div className="fw-bold text-primary">₹{property.bprice}</div>
        </Card.Text>

        <NavLink
          to={`/cards/${property.id}`}
          className="btn btn-outline-primary mt-2 text-decoration-none"
          style={{ textDecoration: 'none' }}
        >
          View Details
        </NavLink>
      </Card.Body>
    </Card>
  );
};
