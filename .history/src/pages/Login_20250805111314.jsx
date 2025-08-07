import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useFirebase } from '../context/FirebaseContext';
import { FaGoogle, FaKey, FaEnvelope, FaEye, FaEyeSlash, FaHome, FaUserPlus } from 'react-icons/fa';
import { motion } from 'framer-motion';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const firebase = useFirebase();
  const navigate = useNavigate();

  useEffect(() => {
    if (firebase.isLoggedIn) navigate('/');
  }, [navigate, firebase]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await firebase.signInEp(email, password);
    } catch (err) {
      setError(err.message || 'Failed to login. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const googleSign = async () => {
    setLoading(true);
    setError('');
    try {
      await firebase.signGoogle();
    } catch (err) {
      setError(err.message || 'Failed to login with Google.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <style>{`
        .auth-page {
          height: 100vh;
          display: flex;
          font-family: 'Inter', sans-serif;
          overflow: hidden;
        }
        
        .auth-hero {
          flex: 1;
          background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
                      url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
          background-size: cover;
          background-position: center;
          color: white;
          padding: 2rem;
          display: none;
        }
        
        .hero-content {
          max-width: 500px;
          margin: 0 auto;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        
        .hero-content h1 {
          font-size: 2rem;
          margin-bottom: 1rem;
          font-weight: 700;
        }
        
        .hero-content p {
          font-size: 1rem;
          line-height: 1.5;
          opacity: 0.9;
        }
        
        .auth-container {
          flex: 1;
          max-width: 450px;
          padding: 2rem;
          background: white;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        
        .auth-header {
          text-align: center;
          margin-bottom: 2rem;
        }
        
        .logo {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
          color: #4a6fa5;
          text-decoration: none;
        }
        
        .logo-icon {
          font-size: 1.8rem;
          margin-right: 0.5rem;
        }
        
        .logo-text {
          font-size: 1.6rem;
          font-weight: 700;
        }
        
        .auth-header h2 {
          font-size: 1.5rem;
          color: #2d3436;
          margin-bottom: 0.5rem;
        }
        
        .auth-header p {
          color: #636e72;
          font-size: 0.9rem;
        }
        
        .auth-form {
          width: 100%;
        }
        
        .form-group {
          margin-bottom: 1.2rem;
          position: relative;
        }
        
        .form-label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
          color: #2d3436;
          font-size: 0.9rem;
        }
        
        .input-group {
          position: relative;
          display: flex;
          align-items: center;
        }
        
        .input-icon {
          position: absolute;
          left: 12px;
          color: #636e72;
          font-size: 1rem;
        }
        
        .form-input {
          width: 100%;
          padding: 0.8rem 1rem 0.8rem 40px;
          border: 1px solid #dfe6e9;
          border-radius: 8px;
          font-size: 0.95rem;
          transition: all 0.3s;
        }
        
        .form-input:focus {
          outline: none;
          border-color: #4a6fa5;
          box-shadow: 0 0 0 3px rgba(74, 111, 165, 0.2);
        }
        
        .password-toggle {
          position: absolute;
          right: 12px;
          cursor: pointer;
          color: #636e72;
          font-size: 1rem;
        }
        
        .forgot-password {
          display: block;
          text-align: right;
          font-size: 0.85rem;
          color: #4a6fa5;
          margin-top: 0.5rem;
          text-decoration: none;
        }
        
        .error-message {
          color: #dc3545;
          font-size: 0.85rem;
          margin: -0.5rem 0 1rem;
          padding: 0.75rem;
          background: rgba(220, 53, 69, 0.1);
          border-radius: 6px;
          text-align: center;
        }
        
        .form-buttons {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 2rem;
        }
        
        .btn {
          padding: 0.8rem;
          border: none;
          border-radius: 8px;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }
        
        .btn-primary {
          background-color: #4a6fa5;
          color: white;
        }
        
        .btn-primary:hover {
          background-color: #3a5a8a;
        }
        
        .btn-google {
          background-color: white;
          color: #2d3436;
          border: 1px solid #dfe6e9;
        }
        
        .btn-google:hover {
          background-color: #f8f9fa;
        }
        
        .btn-secondary {
          background-color: transparent;
          color: #4a6fa5;
          border: 1px solid #4a6fa5;
        }
        
        .btn-secondary:hover {
          background-color: rgba(74, 111, 165, 0.1);
        }
        
        .divider {
          display: flex;
          align-items: center;
          margin: 1rem 0;
          color: #636e72;
          font-size: 0.85rem;
        }
        
        .divider::before,
        .divider::after {
          content: '';
          flex: 1;
          border-bottom: 1px solid #dfe6e9;
        }
        
        .divider::before {
          margin-right: 1rem;
        }
        
        .divider::after {
          margin-left: 1rem;
        }
        
        .loading {
          display: inline-block;
          width: 18px;
          height: 18px;
          border: 2px solid rgba(255,255,255,0.3);
          border-radius: 50%;
          border-top-color: white;
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        @media (min-width: 992px) {
          .auth-hero {
            display: flex;
          }
        }
      `}</style>

      <div className="auth-hero">
        <div className="hero-content">
          <h1>Welcome to EstatePro</h1>
          <p>Sign in to access your personalized property recommendations and save your favorite listings.</p>
        </div>
      </div>

      <div className="auth-container">
        <div className="auth-header">
          <Link to="/" className="logo">
            <FaHome className="logo-icon" />
            <span className="logo-text">EstatePro</span>
          </Link>
          <h2>Sign In to Your Account</h2>
          <p>Enter your credentials to access your dashboard</p>
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
            <label className="form-label">Email Address</label>
            <div className="input-group">
              <FaEnvelope className="input-icon" />
              <input
                type="email"
                className="form-input"
                required
                value={email}
                placeholder="your@email.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <div className="input-group">
              <FaKey className="input-icon" />
              <input
                type={showPassword ? "text" : "password"}
                className="form-input"
                required
                value={password}
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
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
            <Link to="/forgot-password" className="forgot-password">
              Forgot password?
            </Link>
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
                'Sign In'
              )}
            </motion.button>

            <div className="divider">OR</div>

            <motion.button 
              type="button" 
              className="btn btn-google" 
              onClick={googleSign}
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaGoogle /> Continue with Google
            </motion.button>

            <motion.button 
              type="button" 
              className="btn btn-secondary" 
              onClick={() => navigate('/register')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaUserPlus /> Create New Account
            </motion.button>
          </div>
        </form>
      </div>
    </div>
  );
};