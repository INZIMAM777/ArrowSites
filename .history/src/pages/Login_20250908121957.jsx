import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useFirebase } from '../context/FirebaseContext';
import { FaGoogle, FaKey, FaEnvelope, FaEye, FaEyeSlash, FaHome, FaUserPlus, FaArrowLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentBg, setCurrentBg] = useState(0);
  const firebase = useFirebase();
  const navigate = useNavigate();

  const backgroundImages = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=2070&q=80"
  ];

  useEffect(() => {
    if (firebase.isLoggedIn) navigate('/');
    
    // Rotate background images
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [navigate, firebase, backgroundImages.length]);

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
    <div className="login-container">
      <style>{`
        :root {
          --primary: #3b82f6;
          --primary-dark: #2563eb;
          --secondary: #f8fafc;
          --text-primary: #1e293b;
          --text-secondary: #64748b;
          --accent: #f97316;
          --light: #ffffff;
          --border: #e2e8f0;
          --error: #ef4444;
          --success: #10b981;
        }
        
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        
        .login-container {
          min-height: 100vh;
          display: flex;
          font-family: 'Inter', 'Segoe UI', sans-serif;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
          position: relative;
          overflow: hidden;
        }
        
        .background-slider {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }
        
        .background-slide {
          position: absolute;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 1s ease-in-out;
          background-size: cover;
          background-position: center;
        }
        
        .background-slide.active {
          opacity: 0.2;
        }
        
        .login-content {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 480px;
          margin: auto;
          padding: 2rem;
          background: var(--light);
          border-radius: 16px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
        }
        
        .login-header {
          text-align: center;
          margin-bottom: 2rem;
        }
        
        .back-home {
          display: inline-flex;
          align-items: center;
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.9rem;
          margin-bottom: 1rem;
          transition: color 0.3s;
        }
        
        .back-home:hover {
          color: var(--primary);
        }
        
        .back-home svg {
          margin-right: 0.5rem;
        }
        
        .logo {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
          color: var(--primary);
          text-decoration: none;
        }
        
        .logo-icon {
          font-size: 2rem;
          margin-right: 0.75rem;
        }
        
        .logo-text {
          font-size: 1.8rem;
          font-weight: 800;
          letter-spacing: -0.5px;
        }
        
        .login-header h1 {
          font-size: 1.8rem;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
          font-weight: 700;
        }
        
        .login-header p {
          color: var(--text-secondary);
          font-size: 1rem;
        }
        
        .login-form {
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
          color: var(--text-primary);
          font-size: 0.95rem;
        }
        
        .input-container {
          position: relative;
          display: flex;
          align-items: center;
        }
        
        .input-icon {
          position: absolute;
          left: 16px;
          color: var(--text-secondary);
          font-size: 1rem;
          z-index: 1;
        }
        
        .form-input {
          width: 100%;
          padding: 1rem 1rem 1rem 48px;
          border: 2px solid var(--border);
          border-radius: 12px;
          font-size: 1rem;
          transition: all 0.3s;
          background: var(--secondary);
          color: var(--text-primary);
        }
        
        .form-input:focus {
          outline: none;
          border-color: var(--primary);
          background: var(--light);
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
        }
        
        .password-toggle {
          position: absolute;
          right: 16px;
          cursor: pointer;
          color: var(--text-secondary);
          font-size: 1rem;
          z-index: 1;
        }
        
        .forgot-password {
          display: block;
          text-align: right;
          font-size: 0.9rem;
          color: var(--primary);
          margin-top: 0.5rem;
          text-decoration: none;
          transition: color 0.3s;
        }
        
        .forgot-password:hover {
          color: var(--primary-dark);
          text-decoration: underline;
        }
        
        .error-message {
          color: var(--error);
          font-size: 0.9rem;
          margin: -0.5rem 0 1rem;
          padding: 0.75rem;
          background: rgba(239, 68, 68, 0.1);
          border-radius: 8px;
          text-align: center;
          border-left: 4px solid var(--error);
        }
        
        .form-buttons {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 2rem;
        }
        
        .btn {
          padding: 1rem;
          border: none;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }
        
        .btn-primary {
          background-color: var(--primary);
          color: var(--light);
          box-shadow: 0 4px 6px rgba(59, 130, 246, 0.2);
        }
        
        .btn-primary:hover {
          background-color: var(--primary-dark);
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(59, 130, 246, 0.3);
        }
        
        .btn-google {
          background-color: var(--light);
          color: var(--text-primary);
          border: 2px solid var(--border);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }
        
        .btn-google:hover {
          background-color: var(--secondary);
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        
        .btn-secondary {
          background-color: transparent;
          color: var(--primary);
          border: 2px solid var(--primary);
        }
        
        .btn-secondary:hover {
          background-color: rgba(59, 130, 246, 0.1);
          transform: translateY(-2px);
        }
        
        .divider {
          display: flex;
          align-items: center;
          margin: 1.5rem 0;
          color: var(--text-secondary);
          font-size: 0.9rem;
        }
        
        .divider::before,
        .divider::after {
          content: '';
          flex: 1;
          border-bottom: 1px solid var(--border);
        }
        
        .divider::before {
          margin-right: 1rem;
        }
        
        .divider::after {
          margin-left: 1rem;
        }
        
        .loading {
          display: inline-block;
          width: 20px;
          height: 20px;
          border: 3px solid rgba(255,255,255,0.3);
          border-radius: 50%;
          border-top-color: white;
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        .feature-highlights {
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border);
        }
        
        .feature-highlights h3 {
          font-size: 1rem;
          color: var(--text-primary);
          margin-bottom: 1rem;
          text-align: center;
        }
        
        .features {
          display: flex;
          justify-content: space-around;
        }
        
        .feature {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 120px;
        }
        
        .feature-icon {
          width: 40px;
          height: 40px;
          background: rgba(59, 130, 246, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.5rem;
          color: var(--primary);
        }
        
        .feature-text {
          font-size: 0.8rem;
          color: var(--text-secondary);
        }
        
        @media (max-width: 640px) {
          .login-content {
            margin: 1rem;
            padding: 1.5rem;
          }
          
          .logo-text {
            font-size: 1.5rem;
          }
          
          .login-header h1 {
            font-size: 1.5rem;
          }
          
          .features {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
          }
          
          .feature {
            flex-direction: row;
            max-width: 100%;
            gap: 0.75rem;
          }
          
          .feature-icon {
            margin-bottom: 0;
          }
        }
      `}</style>

      {/* Background slider */}
      <div className="background-slider">
        {backgroundImages.map((img, index) => (
          <div 
            key={index}
            className={`background-slide ${index === currentBg ? 'active' : ''}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      <div className="login-content">
        <div className="login-header">
          <Link to="/" className="back-home">
            <FaArrowLeft /> Back to Home
          </Link>
          
          <Link to="/" className="logo">
            <FaHome className="logo-icon" />
            <span className="logo-text">EstatePro</span>
          </Link>
          
          <h1>Welcome Back</h1>
          <p>Sign in to access your account and properties</p>
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

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <div className="input-container">
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
            <div className="input-container">
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

            <div className="divider">Or continue with</div>

            <motion.button 
              type="button" 
              className="btn btn-google" 
              onClick={googleSign}
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaGoogle /> Google
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

        <div className="feature-highlights">
          <h3>Why join EstatePro?</h3>
          <div className="features">
            <div className="feature">
              <div className="feature-icon">
                <i className="fas fa-home"></i>
              </div>
              <p className="feature-text">Find your dream property</p>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <i className="fas fa-heart"></i>
              </div>
              <p className="feature-text">Save favorites</p>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <i className="fas fa-bell"></i>
              </div>
              <p className="feature-text">Get alerts</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};