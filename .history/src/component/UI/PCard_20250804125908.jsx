import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const PCard = ({ property }) => {
const imageURL = '/property.jpg';
    return (
        <Card style={{ width: '18rem', margin: '1rem' }} className="shadow-sm">
            <Card.Img
                variant="top"
                src={imageURL}
                alt={property.Name}
                style={{ height: '200px', objectFit: 'cover' }}
            />
            <Card.Body>
                <Card.Title>{property.Name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{property.displayName}</Card.Subtitle>
                <Card.Text>
                    <strong>Number:</strong> {property.Number}<br />
                    <strong>Price:</strong> ₹{property.Price}<br />
                    <strong>Email:</strong><br />{property.userEmail}
                </Card.Text>
                <Button variant="primary" size="sm">More Info</Button>
            </Card.Body>
        </Card>
    );
};
