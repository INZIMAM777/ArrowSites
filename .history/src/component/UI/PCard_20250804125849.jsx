import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const Card = ({ book }) => {
const imageURL = '/book.jpg';
    return (
        <Card style={{ width: '18rem', margin: '1rem' }} className="shadow-sm">
            <Card.Img
                variant="top"
                src={imageURL}
                alt={book.Name}
                style={{ height: '200px', objectFit: 'cover' }}
            />
            <Card.Body>
                <Card.Title>{book.Name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{book.displayName}</Card.Subtitle>
                <Card.Text>
                    <strong>Number:</strong> {book.Number}<br />
                    <strong>Price:</strong> ₹{book.Price}<br />
                    <strong>Email:</strong><br />{book.userEmail}
                </Card.Text>
                <Button variant="primary" size="sm">More Info</Button>
            </Card.Body>
        </Card>
    );
};
