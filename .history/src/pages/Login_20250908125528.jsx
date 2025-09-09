import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useFirebase } from '../context/FirebaseContext';
import { FaGoogle, FaKey, FaEnvelope, FaEye, FaEyeSlash, FaHome, FaUserPlus, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const firebase = useFirebase();
  const navigate = useNavigate();

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2070&q=80",
      title: "Find Your Dream Home",
      description: "Discover properties that match your lifestyle and preferences."
    },
    {
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2070&q=80",
      title: "Modern Living Spaces",
      description: "Explore contemporary homes designed for comfort and style."
    },
    {
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=2070&q=80",
      title: "Luxury Properties",
      description: "Experience the finest homes with premium amenities and locations."
    }
  ];

  useEffect(() => {
    if (firebase.isLoggedIn) navigate('/');
    
    // Auto-rotate slides
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [navigate, firebase, slides.length]);

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

  const 

  return (
    <div className="login-page">
      <style>{`
        .login-page {
          height: 100vh;
          display: flex;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          overflow: hidden;
        }
        
        /* Left side - Carousel */
        .login-carousel {
          flex: 1;
          display: none;
          position: relative;
          overflow: hidden;
        }
        
        .carousel-slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 0.8s ease-in-out;
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: flex-end;
          padding: 3rem;
        }
        
        .carousel-slide.active {
          opacity: 1;
        }
        
        .slide-content {
          color: white;
          max-width: 500px;
          text-shadow: 0 2px 4px rgba(0,0,0,0.5);
        }
        
        .slide-content h2 {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }
        
        .slide-content p {
          font-size: 1.1rem;
          opacity: 0.9;
          line-height: 1.6;
        }
        
        .carousel-indicators {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 0.75rem;
          z-index: 10;
        }
        
        .indicator {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .indicator.active {
          background: white;
          transform: scale(1.2);
        }
        
        /* Right side - Form */
        .login-form-container {
          flex: 1;
          max-width: 100%;
          padding: 2rem;
          background: #ffffff;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        
        .form-content {
          max-width: 400px;
          margin: 0 auto;
          width: 100%;
        }
        
        .login-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }
        
        .logo {
          display: inline-flex;
          align-items: center;
          margin-bottom: 1.5rem;
          color: #2563eb;
          text-decoration: none;
          font-weight: 700;
        }
        
        .logo-icon {
          font-size: 2rem;
          margin-right: 0.75rem;
        }
        
        .logo-text {
          font-size: 1.8rem;
          font-weight: 800;
        }
        
        .login-header h1 {
          font-size: 1.75rem;
          color: #1e293b;
          margin-bottom: 0.75rem;
          font-weight: 700;
        }
        
        .login-header p {
          color: #64748b;
          font-size: 1rem;
        }
        
        /* Form elements */
        .login-form {
          width: 100%;
        }
        
        .form-group {
          margin-bottom: 1.5rem;
        }
        
        .form-label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
          color: #374151;
          font-size: 0.95rem;
        }
        
        .input-container {
          position: relative;
        }
        
        .input-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: #6b7280;
          font-size: 1.1rem;
        }
        
        .form-input {
          width: 100%;
          padding: 1rem 1rem 1rem 3rem;
          border: 1px solid #d1d5db;
          border-radius: 10px;
          font-size: 1rem;
          transition: all 0.3s;
          background: #f9fafb;
        }
        
        .form-input:focus {
          outline: none;
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.2);
          background: #ffffff;
        }
        
        .password-toggle {
          position: absolute;
          right: 1rem;
          top: 50%;
          transform: translateY(-50%);
          cursor: pointer;
          color: #6b7280;
          font-size: 1.1rem;
        }
        
        .forgot-password {
          display: block;
          text-align: right;
          font-size: 0.9rem;
          color: #2563eb;
          margin-top: 0.5rem;
          text-decoration: none;
          font-weight: 500;
        }
        
        .forgot-password:hover {
          text-decoration: underline;
        }
        
        .error-message {
          color: #dc2626;
          font-size: 0.9rem;
          margin: -0.5rem 0 1rem;
          padding: 0.75rem;
          background: #fef2f2;
          border-radius: 8px;
          text-align: center;
          border-left: 4px solid #dc2626;
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
          border-radius: 10px;
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
          background: #2563eb;
          color: white;
          box-shadow: 0 4px 6px rgba(37, 99, 235, 0.2);
        }
        
        .btn-primary:hover {
          background: #1d4ed8;
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(37, 99, 235, 0.3);
        }
        
        .btn-google {
          background: white;
          color: #374151;
          border: 1px solid #d1d5db;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        
        .btn-google:hover {
          background: #f9fafb;
          transform: translateY(-2px);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .btn-secondary {
          background: transparent;
          color: #2563eb;
          border: 1px solid #2563eb;
        }
        
        .btn-secondary:hover {
          background: rgba(37, 99, 235, 0.1);
          transform: translateY(-2px);
        }
        
        .divider {
          display: flex;
          align-items: center;
          margin: 1.5rem 0;
          color: #6b7280;
          font-size: 0.9rem;
        }
        
        .divider::before,
        .divider::after {
          content: '';
          flex: 1;
          border-bottom: 1px solid #e5e7eb;
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
        
        /* Responsive styles */
        @media (min-width: 992px) {
          .login-carousel {
            display: block;
          }
          
          .login-form-container {
            max-width: 50%;
          }
        }
        
        @media (max-width: 991px) {
          .login-page {
            background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${slides[currentSlide].image});
            background-size: cover;
            background-position: center;
          }
          
          .login-form-container {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-radius: 0;
            max-width: 100%;
          }
        }
        
        @media (max-width: 480px) {
          .login-form-container {
            padding: 1.5rem;
          }
          
          .logo-text {
            font-size: 1.5rem;
          }
          
          .login-header h1 {
            font-size: 1.5rem;
          }
        }
      `}</style>

      {/* Left side - Carousel */}
      <div className="login-carousel">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${slide.image})` }}
          >
            <div className="slide-content">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
        
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Right side - Form */}
      <div className="login-form-container">
        <div className="form-content">
          <div className="login-header">
            <Link to="/" className="logo">
              <FaHome className="logo-icon" />
              <span className="logo-text">ArrowSites</span>
            </Link>
            <h1>Welcome Back</h1>
            <p>Sign in to your account to continue</p>
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
                  <>
                    Sign In <FaArrowRight />
                  </>
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
        </div>
      </div>
    </div>
  );
};