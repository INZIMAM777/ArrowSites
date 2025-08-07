import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useFirebase } from '../context/FirebaseContext';
import { 
  FaGoogle, 
  FaFacebookF, 
  FaUser, 
  FaEnvelope, 
  FaKey, 
  FaPhone, 
  FaEye, 
  FaEyeSlash,
  FaHome,
  FaChevronRight
} from 'react-icons/fa';
// import { motion } from 'framer-motion';

export const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const firebase = useFirebase();
  const navigate = useNavigate();

  // Hero slides data
  const heroSlides = [
    {
      title: "Start Your Property Journey",
      description: "Join thousands of happy homeowners who found their perfect property through our platform.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Personalized Recommendations",
      description: "Get property suggestions tailored to your preferences and budget.",
      image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Expert Guidance",
      description: "Connect with our professional agents for personalized assistance.",
      image: "https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
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
    
    // Validate passwords match
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
      setError(err.message || `Failed to register with ${provider}.`);
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
        
        .register-page {
          min-height: 100vh;
          display: flex;
          background: var(--light);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
          overflow-x: hidden;
        }
        
        /* Hero Section */
        .register-hero {
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
        
        /* Register Container */
        .register-container {
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
        
        .register-header {
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
        
        .register-header h2 {
          font-size: 1.8rem;
          color: var(--dark);
          margin-bottom: 0.75rem;
          font-weight: 700;
        }
        
        .register-header p {
          color: var(--gray);
          font-size: 0.95rem;
          line-height: 1.5;
        }
        
        /* Register Form */
        .register-form {
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
        
        .btn-login {
          background-color: transparent;
          color: var(--primary);
          border: 1px solid var(--primary);
        }
        
        .btn-login:hover {
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
          .register-container {
            padding: 3rem;
          }
        }
        
        @media (min-width: 992px) {
          .register-hero {
            display: block;
          }
          
          .mobile-nav {
            display: none;
          }
        }
        
        @media (max-width: 576px) {
          .register-container {
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
      <div className="register-hero">
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

      {/* Register Container */}
      <div className="register-container">
        {/* Mobile Navigation */}
        <div className="mobile-nav">
          <Link to="/about" className="mobile-nav-link">About</Link>
          <Link to="/contact" className="mobile-nav-link">Contact</Link>
        </div>

        <div className="register-header">
          <Link to="/" className="logo">
            <FaHome className="logo-icon" />
            <span className="logo-text">EstatePro</span>
          </Link>
          <h2>Create Your Account</h2>
          <p>Join our community to unlock personalized property recommendations</p>
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

        <form className="register-form" onSubmit={handleSubmit}>
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
            <label className="form-label">Phone Number</label>
            <div className="input-group">
              <FaPhone className="input-icon" />
              <input
                type="tel"
                name="phone"
                className="form-input"
                value={formData.phone}
                placeholder="+1 (123) 456-7890"
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
                'Create Account'
              )}
              <FaChevronRight size={14} />
            </motion.button>

            <div className="divider">Or sign up with</div>

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
            </div>

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
  );
};