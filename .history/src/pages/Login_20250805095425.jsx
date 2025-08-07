import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useFirebase } from '../context/FirebaseContext';
import { 
  FaGoogle, 
  FaFacebookF, 
  FaApple, 
  FaEnvelope, 
  FaKey, 
  FaEye, 
  FaEyeSlash, 
  FaHome,
  FaChevronRight
} from 'react-icons/fa';
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

  // Hero slides data
  const heroSlides = [
    {
      title: "Find Your Dream Home",
      description: "Discover properties tailored to your lifestyle and budget with our AI-powered matching system.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Virtual Tours Available",
      description: "Explore properties from the comfort of your home with our immersive 3D virtual tours.",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Expert Agents Ready",
      description: "Connect with top-rated real estate professionals in your area for personalized assistance.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
    }
  ];

  useEffect(() => {
    if (firebase.isLoggedIn) {
      navigate('/');
    }
    
    // Auto-rotate hero slides
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [navigate, firebase]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    
    setLoading(true);
    setError('');
    try {
      await firebase.signInEp(email, password);
    } catch (err) {
      setError(err.message || 'Invalid credentials. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const socialSignIn = async (provider) => {
    setLoading(true);
    setError('');
    try {
      if (provider === 'google') {
        await firebase.signGoogle();
      } else if (provider === 'facebook') {
        await firebase.signFacebook();
      }
    } catch (err) {
      setError(err.message || `Failed to login with ${provider}.`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <style>{`
        :root {
          --primary: #4a6fa5;
          --primary-dark: #3a5a8a;
          --primary-light: #e8f0fe;
          --secondary: #e8b923;
          --accent: #d6802a;
          --light: #f8f9fa;
          --dark: #2d3436;
          --gray: #636e72;
          --light-gray: #dfe6e9;
          --success: #28a745;
          --danger: #dc3545;
          --shadow-sm: 0 1px 3px rgba(0,0,0,0.12);
          --shadow-md: 0 4px 20px rgba(0,0,0,0.08);
          --shadow-lg: 0 15px 30px rgba(0,0,0,0.1);
          --transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        }
        
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        
        .login-page {
          min-height: 100vh;
          display: flex;
          background: var(--light);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
          overflow-x: hidden;
        }
        
        /* Hero Section */
        .login-hero {
          flex: 1;
          position: relative;
          display: none;
          overflow: hidden;
        }
        
        .hero-slides {
          position: relative;
          height: 100%;
          width: 100%;
        }
        
        .hero-slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          opacity: 0;
          transition: opacity 1s ease-in-out;
        }
        
        .hero-slide.active {
          opacity: 1;
        }
        
        .hero-slide::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(74, 111, 165, 0.85) 0%, rgba(58, 90, 138, 0.9) 100%);
        }
        
        .hero-content {
          position: relative;
          z-index: 2;
          color: white;
          padding: 3rem;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          max-width: 700px;
          margin: 0 auto;
        }
        
        .hero-content h2 {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          font-weight: 700;
          line-height: 1.2;
        }
        
        .hero-content p {
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 2rem;
          opacity: 0.9;
        }
        
        .slide-indicators {
          display: flex;
          gap: 10px;
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 3;
        }
        
        .slide-indicator {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255,255,255,0.5);
          cursor: pointer;
          transition: var(--transition);
        }
        
        .slide-indicator.active {
          background: white;
          width: 30px;
          border-radius: 5px;
        }
        
        /* Login Container */
        .login-container {
          width: 100%;
          max-width: 480px;
          padding: 2.5rem 2rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: white;
          position: relative;
          overflow-y: auto;
        }
        
        .login-header {
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
        
        .login-header h2 {
          font-size: 1.8rem;
          color: var(--dark);
          margin-bottom: 0.75rem;
          font-weight: 700;
        }
        
        .login-header p {
          color: var(--gray);
          font-size: 0.95rem;
          line-height: 1.5;
        }
        
        /* Login Form */
        .login-form {
          width: 100%;
        }
        
        .form-group {
          margin-bottom: 1.75rem;
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
        
        .form-input::placeholder {
          color: #adb5bd;
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
        
        .forgot-password {
          display: inline-block;
          font-size: 0.85rem;
          color: var(--primary);
          margin-top: 0.5rem;
          text-decoration: none;
          font-weight: 500;
          transition: var(--transition);
          float: right;
        }
        
        .forgot-password:hover {
          text-decoration: underline;
          color: var(--primary-dark);
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
        
        /* Buttons */
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
        
        .btn-primary:active {
          transform: translateY(0);
        }
        
        .btn-social {
          background-color: white;
          color: var(--dark);
          border: 1px solid var(--light-gray);
          box-shadow: var(--shadow-sm);
        }
        
        .btn-social:hover {
          background-color: var(--light);
          box-shadow: var(--shadow-md);
          transform: translateY(-2px);
        }
        
        .btn-social:active {
          transform: translateY(0);
        }
        
        .btn-register {
          background-color: transparent;
          color: var(--primary);
          border: 1px solid var(--primary);
        }
        
        .btn-register:hover {
          background-color: var(--primary-light);
          transform: translateY(-2px);
        }
        
        /* Divider */
        .divider {
          display: flex;
          align-items: center;
          margin: 1.75rem 0;
          color: var(--gray);
          font-size: 0.85rem;
          font-weight: 500;
        }
        
        .divider::before,
        .divider::after {
          content: '';
          flex: 1;
          border-bottom: 1px solid var(--light-gray);
        }
        
        .divider::before {
          margin-right: 1rem;
        }
        
        .divider::after {
          margin-left: 1rem;
        }
        
        /* Loading State */
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
        
        /* Mobile Navigation */
        .mobile-nav {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          display: flex;
          gap: 1rem;
        }
        
        .mobile-nav-link {
          color: var(--gray);
          font-size: 0.9rem;
          font-weight: 500;
          text-decoration: none;
          transition: var(--transition);
        }
        
        .mobile-nav-link:hover {
          color: var(--primary);
        }
        
        /* Responsive Styles */
        @media (min-width: 768px) {
          .login-container {
            padding: 3rem;
          }
        }
        
        @media (min-width: 992px) {
          .login-hero {
            display: block;
          }
          
          .mobile-nav {
            display: none;
          }
        }
        
        @media (max-width: 576px) {
          .login-container {
            padding: 2rem 1.5rem;
          }
          
          .hero-content {
            padding: 2rem;
          }
          
          .hero-content h2 {
            font-size: 2rem;
          }
        }
      `}</style>

      {/* Hero Section */}
      <div className="login-hero">
        <div className="hero-slides">
          {heroSlides.map((slide, index) => (
            <div 
              key={index}
              className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="hero-content">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {slide.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {slide.description}
                </motion.p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="slide-indicators">
          {heroSlides.map((_, index) => (
            <div 
              key={index}
              className={`slide-indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Login Container */}
      <div className="login-container">
        {/* Mobile Navigation */}
        <div className="mobile-nav">
          <Link to="/about" className="mobile-nav-link">About</Link>
          <Link to="/contact" className="mobile-nav-link">Contact</Link>
        </div>

        <div className="login-header">
          <Link to="/" className="logo">
            <FaHome className="logo-icon" />
            <span className="logo-text">EstatePro</span>
          </Link>
          <h2>Welcome Back</h2>
          <p>Sign in to access your saved properties, searches, and personalized recommendations</p>
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
              <FaChevronRight size={14} />
            </motion.button>

            <div className="divider">Or continue with</div>

            <div className="social-buttons">
              <motion.button 
                type="button" 
                className="btn btn-social" 
                onClick={() => socialSignIn('google')}
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaGoogle color="#DB4437" /> Google
              </motion.button>

              <motion.button 
                type="button" 
                className="btn btn-social" 
                onClick={() => socialSignIn('facebook')}
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaFacebookF color="#4267B2" /> Facebook
              </motion.button>

              <motion.button 
                type="button" 
                className="btn btn-social" 
                disabled
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaApple /> Apple
              </motion.button>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <button 
                type="button" 
                className="btn btn-register" 
                onClick={() => navigate('/register')}
              >
                Don't have an account? <strong>Join now</strong>
              </button>
            </motion.div>
          </div>
        </form>
      </div>
    </div>
  );
};