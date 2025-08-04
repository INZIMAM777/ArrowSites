import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

export const PCard = ({ property }) => {
  const imageURL =  '/property.jpg';
    console.log(property);
  return (
    <Card style={{ width: '20rem', margin: '1rem' }} className="shadow-sm">
      <Card.Img
        variant="top"
        src={imageURL}
        alt={property.title}
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <Card.Body>
        <Card.Title>{property.title} - {property.type}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {property.transaction_type} | {property.furnishing}
        </Card.Subtitle>
        <Card.Text>
          <strong>Price:</strong> ₹{Number(property.price).toLocaleString()} {property.price_units}<br />
          <strong>Area:</strong> {property.area_sqft} sqft<br />
          <strong>Bedrooms:</strong> {property.bedrooms}<br />
          <strong>Bathrooms:</strong> {property.bathrooms}<br />
          <strong>Address:</strong><br />{property.address}
        </Card.Text>
        <NavLink to={`/Cards/${property.id}`} className="detail-link">
                  <button className="detail-btn">View Details</button>
              </NavLink>
      </Card.Body>
    </Card>
  );
};
