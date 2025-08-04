import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const PCard = ({ p }) => {
const imageURL = '/p.jpg';
    return (
        <Card style={{ width: '18rem', margin: '1rem' }} className="shadow-sm">
            <Card.Img
                variant="top"
                src={imageURL}
                alt={p.Name}
                style={{ height: '200px', objectFit: 'cover' }}
            />
            <Card.Body>
                <Card.Title>{p.Name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{p.displayName}</Card.Subtitle>
                <Card.Text>
                    <strong>Number:</strong> {p.Number}<br />
                    <strong>Price:</strong> ₹{p.Price}<br />
                    <strong>Email:</strong><br />{p.userEmail}
                </Card.Text>
                <Button variant="primary" size="sm">More Info</Button>
            </Card.Body>
        </Card>
    );
};
