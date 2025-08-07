import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useFirebase } from '../context/FirebaseContext';
import { FaUser, FaEnvelope, FaKey, FaEye, FaEyeSlash, FaHome, FaChevronRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

export const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
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
    if (loading) return;
    
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    setLoading(true);
    setError('');
    try {
      await firebase.signUpEp(formData.email, formData.password, formData.name);
    } catch (err) {
      setError(err.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page">
      <style>{`
        :root {
          --primary: #4a6fa5;
          --primary-dark: #3a5a8a;
          --primary-light: #e8f0fe;
          --accent: #d6802a;
          --light: #f8f9fa;
          --dark: #2d3436;
          --gray: #636e72;
          --light-gray: #dfe6e9;
          --danger: #dc3545;
          --shadow-sm: 0 1px 3px rgba(0,0,0,0.12);
          --shadow-md: 0 4px 20px rgba(0,0,0,0.08);
          --transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        }
        
        .register-page {
          min-height: 100vh;
          display: flex;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        
        .image-section {
          flex: 1;
          background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
                      url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
          background-size: cover;
          background-position: center;
          color: white;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
        }
        
        .image-content {
          max-width: 600px;
          margin: 0 auto;
          z-index: 1;
        }
        
        .image-section h1 {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          font-weight: 700;
          line-height: 1.2;
        }
        
        .image-section p {
          font-size: 1.1rem;
          margin-bottom: 2rem;
          line-height: 1.6;
          opacity: 0.9;
        }
        
        .features-list {
          margin-top: 3rem;
        }
        
        .feature-item {
          display: flex;
          align-items: center;
          margin-bottom: 1.5rem;
        }
        
        .feature-icon {
          background: rgba(255, 255, 255, 0.2);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 1rem;
          flex-shrink: 0;
        }
        
        .feature-text h3 {
          font-size: 1.1rem;
          margin-bottom: 0.3rem;
          font-weight: 600;
        }
        
        .feature-text p {
          font-size: 0.9rem;
          margin-bottom: 0;
          opacity: 0.8;
        }
        
        .form-section {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 2rem;
          background: #f8f9fa;
        }
        
        .auth-container {
          width: 100%;
          max-width: 480px;
          padding: 2.5rem;
          background: white;
          border-radius: 12px;
          box-shadow: var(--shadow-md);
          position: relative;
        }
        
        .auth-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }
        
        .logo {
          display: inline-flex;
          align-items: center;
          margin-bottom: 1.5rem;
          color: var(--primary);
          text-decoration: none;
        }
        
        .logo-icon {
          font-size: 2rem;
          margin-right: 0.5rem;
        }
        
        .logo-text {
          font-size: 1.8rem;
          font-weight: 700;
        }
        
        .auth-header h2 {
          font-size: 1.8rem;
          color: var(--dark);
          margin-bottom: 0.75rem;
          font-weight: 700;
        }
        
        .auth-header p {
          color: var(--gray);
          font-size: 0.95rem;
          line-height: 1.5;
        }
        
        .auth-form {
          width: 100%;
        }
        
        .form-group {
          margin-bottom: 1.5rem;
          position: relative;
        }
        
        .form-label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
          color: var(--dark);
          font-size: 0.9rem;
        }
        
        .input-group {
          position: relative;
          display: flex;
          align-items: center;
        }
        
        .input-icon {
          position: absolute;
          left: 15px;
          color: var(--gray);
          font-size: 1rem;
        }
        
        .form-input {
          width: 100%;
          padding: 0.85rem 1rem 0.85rem 45px;
          border: 1px solid var(--light-gray);
          border-radius: 8px;
          font-size: 0.95rem;
          transition: var(--transition);
          color: var(--dark);
        }
        
        .form-input:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(74, 111, 165, 0.2);
        }
        
        .password-toggle {
          position: absolute;
          right: 15px;
          cursor: pointer;
          color: var(--gray);
          font-size: 1rem;
          transition: var(--transition);
        }
        
        .password-toggle:hover {
          color: var(--primary);
        }
        
        .error-message {
          color: var(--danger);
          font-size: 0.9rem;
          margin: -0.5rem 0 1rem;
          text-align: center;
          padding: 0.75rem;
          background: rgba(220, 53, 69, 0.1);
          border-radius: 6px;
          border-left: 3px solid var(--danger);
        }
        
        .form-buttons {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 2.5rem;
        }
        
        .btn {
          padding: 0.9rem;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
        }
        
        .btn-primary {
          background-color: var(--primary);
          color: white;
          box-shadow: var(--shadow-sm);
        }
        
        .btn-primary:hover {
          background-color: var(--primary-dark);
          box-shadow: var(--shadow-md);
          transform: translateY(-2px);
        }
        
        .btn-login {
          background-color: transparent;
          color: var(--primary);
          border: 1px solid var(--primary);
        }
        
        .btn-login:hover {
          background-color: var(--primary-light);
          transform: translateY(-2px);
        }
        
        .loading {
          display: inline-block;
          width: 20px;
          height: 20px;
          border: 3px solid rgba(255,255,255,0.3);
          border-radius: 50%;
          border-top-color: white;
          animation: spin 1s ease-in-out infinite;
        }
        
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        @media (max-width: 992px) {
          .register-page {
            flex-direction: column;
          }
          
          .image-section {
            padding: 2rem 1.5rem;
            text-align: center;
          }
          
          .image-content {
            max-width: 100%;
          }
          
          .features-list {
            display: none;
          }
        }
        
        @media (max-width: 576px) {
          .auth-container {
            padding: 2rem 1.5rem;
          }
        }
      `}</style>

      <div className="image-section">
        <div className="image-content">
          <h1>Find Your Dream Home Today</h1>
          <p>Join thousands of satisfied customers who found their perfect property through our platform.</p>
          
          <div className="features-list">
            <div className="feature-item">
              <div className="feature-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
              <div className="feature-text">
                <h3>Premium Properties</h3>
                <p>Access to exclusive listings not available elsewhere</p>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 8v4l3 3"></path>
                </svg>
              </div>
              <div className="feature-text">
                <h3>24/7 Support</h3>
                <p>Our team is always ready to assist you</p>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="feature-text">
                <h3>Smart Search</h3>
                <p>Find exactly what you're looking for with our AI-powered search</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="form-section">
        <div className="auth-container">
          <div className="auth-header">
            <Link to="/" className="logo">
              <FaHome className="logo-icon" />
              <span className="logo-text">EstatePro</span>
            </Link>
            <h2>Create Your Account</h2>
            <p>Join our community to find your dream property</p>
          </div>

          {error && (
            <motion.div 
              className="error-message"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {error}
            </motion.div>
          )}

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <div className="input-group">
                <FaUser className="input-icon" />
                <input
                  type="text"
                  name="name"
                  className="form-input"
                  required
                  value={formData.name}
                  placeholder="John Doe"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Email Address</label>
              <div className="input-group">
                <FaEnvelope className="input-icon" />
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  required
                  value={formData.email}
                  placeholder="your@email.com"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Password</label>
              <div className="input-group">
                <FaKey className="input-icon" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="form-input"
                  required
                  value={formData.password}
                  placeholder="Create a password"
                  onChange={handleChange}
                  minLength="6"
                />
                {showPassword ? (
                  <FaEyeSlash 
                    className="password-toggle" 
                    onClick={() => setShowPassword(false)} 
                  />
                ) : (
                  <FaEye 
                    className="password-toggle" 
                    onClick={() => setShowPassword(true)} 
                  />
                )}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Confirm Password</label>
              <div className="input-group">
                <FaKey className="input-icon" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  className="form-input"
                  required
                  value={formData.confirmPassword}
                  placeholder="Confirm your password"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-buttons">
              <motion.button 
                type="submit" 
                className="btn btn-primary"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {loading ? (
                  <span className="loading"></span>
                ) : (
                  'Register Now'
                )}
                <FaChevronRight size={14} />
              </motion.button>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <button 
                  type="button" 
                  className="btn btn-login" 
                  onClick={() => navigate('/login')}
                >
                  Already have an account? <strong>Sign in</strong>
                </button>
              </motion.div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};