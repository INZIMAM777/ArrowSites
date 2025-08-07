import { useEffect, useState } from 'react';
import { useFirebase } from "../context/FirebaseContext";
import { useNavigate, Link } from 'react-router-dom';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { FaUser, FaLock, FaEnvelope, FaHome, FaCity } from 'react-icons/fa';

export const Register = () => {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    phone: '',
    userType: 'buyer'
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const firebase = useFirebase();
  const navigate = useNavigate();

  useEffect(() => {
    if (firebase.isLoggedIn) {
      navigate('/');
    }
  }, [navigate, firebase]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      await firebase.signUpEp(formData.email, formData.password, formData.name, formData.phone, formData.userType);
      navigate('/profile');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container fluid className="real-estate-register">
      <style>{`
        .real-estate-register {
          min-height: 100vh;
          background: linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%);
        }
        
        .register-container {
          max-width: 580px;
          margin: 40px auto;
          padding: 40px;
          background-color: #ffffff;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .register-header {
          text-align: center;
          margin-bottom: 32px;
          position: relative;
        }
        
        .register-header h2 {
          font-size: 28px;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 8px;
        }
        
        .register-header p {
          color: #7f8c8d;
          font-size: 15px;
        }
        
        .form-icon {
          position: absolute;
          top: -20px;
          left: 50%;
          transform: translateX(-50%);
          background: #3498db;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 5px 15px rgba(52, 152, 219, 0.3);
        }
        
        .form-icon svg {
          color: white;
          font-size: 24px;
        }
        
        .form-group {
          margin-bottom: 20px;
          position: relative;
        }
        
        .form-label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          font-size: 14px;
          color: #34495e;
        }
        
        .form-control {
          width: 100%;
          padding: 12px 16px 12px 40px;
          font-size: 15px;
          border: 1px solid #dfe6e9;
          border-radius: 8px;
          transition: all 0.3s;
          background-color: #f8f9fa;
        }
        
        .form-control:focus {
          border-color: #3498db;
          box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
          background-color: white;
        }
        
        .input-icon {
          position: absolute;
          left: 12px;
          top: 38px;
          color: #7f8c8d;
          font-size: 16px;
        }
        
        .btn-register {
          width: 100%;
          padding: 14px;
          font-size: 16px;
          font-weight: 600;
          border-radius: 8px;
          background: linear-gradient(to right, #3498db, #2ecc71);
          border: none;
          color: white;
          margin-top: 10px;
          transition: all 0.3s;
        }
        
        .btn-register:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(46, 204, 113, 0.3);
        }
        
        .btn-register:disabled {
          background: #bdc3c7;
          transform: none;
          box-shadow: none;
        }
        
        .login-link {
          text-align: center;
          margin-top: 20px;
          color: #7f8c8d;
          font-size: 14px;
        }
        
        .login-link a {
          color: #3498db;
          font-weight: 600;
          text-decoration: none;
        }
        
        .user-type-selector {
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
        }
        
        .user-type-btn {
          flex: 1;
          padding: 12px;
          border: 2px solid #dfe6e9;
          border-radius: 8px;
          background: white;
          cursor: pointer;
          transition: all 0.3s;
          text-align: center;
        }
        
        .user-type-btn.active {
          border-color: #3498db;
          background-color: #f0f8ff;
        }
        
        .user-type-btn svg {
          margin-bottom: 5px;
          color: #3498db;
        }
        
        .error-alert {
          border-radius: 8px;
          margin-bottom: 20px;
        }
      `}</style>

      <Row className="justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <Col xs={12} md={8} lg={6}>
          <div className="register-container">
            <div className="register-header">
              <div className="form-icon">
                <FaHome size={24} />
              </div>
              <h2>Join Our Real Estate Community</h2>
              <p>Create your account to list properties or find your dream home</p>
            </div>

            {error && (
              <Alert variant="danger" className="error-alert">
                {error}
              </Alert>
            )}

            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <div className="user-type-selector">
                <label 
                  className={`user-type-btn ${formData.userType === 'buyer' ? 'active' : ''}`}
                  onClick={() => setFormData({...formData, userType: 'buyer'})}
                >
                  <FaUser size={18} />
                  <div>I'm a Buyer</div>
                </label>
                <label 
                  className={`user-type-btn ${formData.userType === 'seller' ? 'active' : ''}`}
                  onClick={() => setFormData({...formData, userType: 'seller'})}
                >
                  <FaCity size={18} />
                  <div>I'm a Seller</div>
                </label>
              </div>

              <div className="form-group">
                <label className="form-label">Full Name</label>
                <div className="position-relative">
                  <FaUser className="input-icon" />
                  <Form.Control
                    required
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Email Address</label>
                <div className="position-relative">
                  <FaEnvelope className="input-icon" />
                  <Form.Control
                    required
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <div className="position-relative">
                  <i className="input-icon">📱</i>
                  <Form.Control
                    required
                    type="tel"
                    name="phone"
                    placeholder="+1 (123) 456-7890"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Password</label>
                <div className="position-relative">
                  <FaLock className="input-icon" />
                  <Form.Control
                    required
                    type="password"
                    name="password"
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={handleChange}
                    minLength="6"
                    className="form-control"
                  />
                  <Form.Text className="text-muted">
                    At least 6 characters
                  </Form.Text>
                </div>
              </div>

              <Button 
                type="submit" 
                className="btn-register"
                disabled={loading}
              >
                {loading ? 'Creating Account...' : 'Create Account'}
              </Button>

              <div className="login-link">
                Already have an account? <Link to="/login">Sign in</Link>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};