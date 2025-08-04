import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const PCard = ({ property }) => {
  const imageURL = property.image || '/property.jpg';

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
        <Button variant="primary" size="sm">More Info</Button>
      </Card.Body>
    </Card>
  );
};
