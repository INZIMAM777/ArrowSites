import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFirebase } from '../context/FirebaseContext';
import { FaGoogle, FaKey, FaEnvelope, FaEye, FaEyeSlash, FaHome } from 'react-icons/fa';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
    <div className="login-page">
      <style>{`
        :root {
          --primary: #4a6fa5;
          --primary-dark: #3a5a8a;
          --light: #f8f9fa;
          --dark: #343a40;
          --danger: #dc3545;
          --gray: #6c757d;
          --light-gray: #ced4da;
          --shadow: 0 2px 10px rgba(0,0,0,0.08);
        }
        
        .login-page {
          height: 100vh;
          display: flex;
          font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
          overflow: hidden;
        }
        
        .login-hero {
          flex: 1;
          background: 
            linear-gradient(rgba(74, 111, 165, 0.7), rgba(74, 111, 165, 0.7)),
            url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80') no-repeat center center;
          background-size: cover;
          padding: 1.5rem;
          display: none;
          color: white;
        }
        
        .hero-content {
          max-width: 500px;
          margin: 0 auto;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        
        .hero-content h2 {
          font-size: 1.8rem;
          margin-bottom: 1rem;
          font-weight: 700;
        }
        
        .hero-content p {
          font-size: 0.95rem;
          line-height: 1.5;
        }
        
        .login-container {
          flex: 1;
          max-width: 420px;
          padding: 1.5rem;
          background: white;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        
        .login-header {
          text-align: center;
          margin-bottom: 1.5rem;
        }
        
        .logo {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.75rem;
          color: var(--primary);
        }
        
        .logo-icon {
          font-size: 1.5rem;
          margin-right: 0.5rem;
        }
        
        .logo-text {
          font-size: 1.5rem;
          font-weight: 700;
        }
        
        .login-header h2 {
          font-size: 1.5rem;
          color: var(--dark);
          margin-bottom: 0.5rem;
        }
        
        .login-header p {
          color: var(--gray);
          font-size: 0.85rem;
        }
        
        .login-form {
          width: 100%;
        }
        
        .form-group {
          margin-bottom: 1rem;
          position: relative;
        }
        
        .form-label {
          display: block;
          margin-bottom: 0.4rem;
          font-weight: 600;
          color: var(--dark);
          font-size: 0.85rem;
        }
        
        .input-group {
          position: relative;
          display: flex;
          align-items: center;
        }
        
        .input-icon {
          position: absolute;
          left: 12px;
          color: var(--gray);
          font-size: 0.9rem;
        }
        
        .form-input {
          width: 100%;
          padding: 0.65rem 1rem 0.65rem 38px;
          border: 1px solid var(--light-gray);
          border-radius: 6px;
          font-size: 0.9rem;
          transition: all 0.2s;
        }
        
        .form-input:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(74, 111, 165, 0.1);
        }
        
        .password-toggle {
          position: absolute;
          right: 12px;
          cursor: pointer;
          color: var(--gray);
          font-size: 0.9rem;
        }
        
        .forgot-password {
          display: block;
          text-align: right;
          font-size: 0.8rem;
          color: var(--primary);
          margin-top: 0.3rem;
          text-decoration: none;
        }
        
        .error-message {
          color: var(--danger);
          font-size: 0.8rem;
          margin: -0.5rem 0 0.8rem;
          text-align: center;
          padding: 0.5rem;
          background: rgba(220, 53, 69, 0.1);
          border-radius: 4px;
        }
        
        .form-buttons {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          margin-top: 1.5rem;
        }
        
        .btn {
          padding: 0.7rem;
          border: none;
          border-radius: 6px;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }
        
        .btn-primary {
          background-color: var(--primary);
          color: white;
        }
        
        .btn-primary:hover {
          background-color: var(--primary-dark);
        }
        
        .btn-google {
          background-color: white;
          color: var(--dark);
          border: 1px solid var(--light-gray);
        }
        
        .btn-google:hover {
          background-color: var(--light);
        }
        
        .btn-register {
          background-color: transparent;
          color: var(--primary);
          border: 1px solid var(--primary);
        }
        
        .btn-register:hover {
          background-color: rgba(74, 111, 165, 0.05);
        }
        
        .divider {
          display: flex;
          align-items: center;
          margin: 1rem 0;
          color: var(--gray);
          font-size: 0.8rem;
        }
        
        .divider::before,
        .divider::after {
          content: '';
          flex: 1;
          border-bottom: 1px solid var(--light-gray);
        }
        
        .divider::before {
          margin-right: 0.8rem;
        }
        
        .divider::after {
          margin-left: 0.8rem;
        }
        
        .loading {
          display: inline-block;
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255,255,255,0.3);
          border-radius: 50%;
          border-top-color: white;
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        @media (min-width: 768px) {
          .login-hero {
            display: flex;
          }
          
          .login-container {
            box-shadow: var(--shadow);
          }
        }
        
        @media (max-width: 576px) {
          .login-container {
            padding: 1.25rem;
          }
          
          .login-header h2 {
            font-size: 1.3rem;
          }
        }
      `}</style>

      <div className="login-hero">
        <div className="hero-content">
          <h2>Find Your Dream Home</h2>
          <p>Join thousands of happy homeowners who found their perfect property through our platform.</p>
        </div>
      </div>

      <div className="login-container">
        <div className="login-header">
          <div className="logo">
            <FaHome className="logo-icon" />
            <span className="logo-text">EstatePro</span>
          </div>
          <h2>Welcome Back</h2>
          <p>Sign in to access your account</p>
        </div>

        {error && <div className="error-message">{error}</div>}

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
            <a href="/forgot-password" className="forgot-password">
              Forgot password?
            </a>
          </div>

          <div className="form-buttons">
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? (
                <span className="loading"></span>
              ) : (
                'Sign In'
              )}
            </button>

            <div className="divider">OR</div>

            <button 
              type="button" 
              className="btn btn-google" 
              onClick={googleSign}
              disabled={loading}
            >
              <FaGoogle /> Sign in with Google
            </button>

            <button 
              type="button" 
              className="btn btn-register" 
              onClick={() => navigate('/register')}
            >
              Don't have an account? Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};