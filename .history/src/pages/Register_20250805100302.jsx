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
          max-width: 480px;
          margin: 40px auto;
          padding: 30px;
          background-color: #ffffff;
          border-radius: 8px;
          box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
        }

        .register-container h2 {
          text-align: center;
          margin-bottom: 24px;
          font-size: 26px;
          color: #333;
        }

        .form-group {
          margin-bottom: 16px;
        }

        label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          font-size: 14px;
        }

        input[type="email"],
        input[type="password"] {
          width: 100%;
          padding: 10px 12px;
          font-size: 14px;
          border: 1px solid #ccc;
          border-radius: 5px;
          box-sizing: border-box;
        }

        .btn {
          display: inline-block;
          width: 100%;
          padding: 12px;
          font-size: 15px;
          font-weight: bold;
          text-align: center;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          margin-top: 10px;
        }

        .btn-success {
          background-color: #28a745;
          color: white;
        }

        .btn-danger {
          background-color: #dc3545;
          color: white;
        }

        .btn:hover {
          opacity: 0.9;
        }

        .nav-button {
          margin-top: 12px;
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

          <button type="submit" className="btn btn-success">
            Register Now
          </button>

          <Nav.Link href="/Login" className="nav-button">
            <button type="button" className="btn btn-danger">For Login</button>
          </Nav.Link>
        </Form>
      </div>
    </>
  );
};
