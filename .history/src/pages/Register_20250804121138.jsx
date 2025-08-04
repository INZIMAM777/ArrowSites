import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useFirebase } from "../context/FirebaseContext";
import { useNavigate } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

export const Register = () => {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const firebase = useFirebase();
  const navigate = useNavigate();

  useEffect(() => {
    if (firebase.isLoggedIn) {
      navigate('/');
    }
  }, [navigate, firebase]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      await firebase.signUpEp(email, password);
    }
    setValidated(true);
  };

  return (
    <>
      <style>{`
        .register-container {
          max-width: 500px;
          margin: 3rem auto;
          padding: 2rem;
          border-radius: 10px;
          background: #f8f9fa;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .register-container h2 {
          text-align: center;
          margin-bottom: 1.5rem;
          color: #343a40;
        }

        .form-group {
          margin-bottom: 1rem;
        }

        .register-button {
          display: block;
          width: 100%;
          margin-top: 1rem;
        }
      `}</style>

      <div className="register-container">
        <h2>Register</h2>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group as={Col} md="12" controlId="validationCustom01" className="form-group">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">Please enter a valid email.</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="12" controlId="validationCustom02" className="form-group">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">Please enter your password.</Form.Control.Feedback>
          </Form.Group>

          <Button type="submit" variant="success" className="register-button">
            Register Now
          </Button>
          <Nav.Link href="/Login"><Button  variant="danger" className="register-button">
            For Login
          </Button></Nav.Link>

          
        </Form>
      </div>
    </>
  );
};
