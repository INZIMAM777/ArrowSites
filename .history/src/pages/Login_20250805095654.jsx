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
          --secondary: #e8b923;
          --accent: #d6802a;
          --light: #f8f9fa;
          --dark: #343a40;
          --success: #28a745;
          --danger: #dc3545;
          --shadow: 0 4px 20px rgba(0,0,0,0.08);
        }
        
        .login-page {
          min-height: 100vh;
          display: flex;
          background: linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%);
          font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        }
        
        .login-hero {
          flex: 1;
          background: url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80') no-repeat center center;
          background-size: cover;
          position: relative;
          display: none;
        }
        
        .login-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(74, 111, 165, 0.7);
        }
        
        .hero-content {
          position: relative;
          z-index: 2;
          color: white;
          padding: 2rem;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        
        .hero-content h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          font-weight: 700;
        }
        
        .hero-content p {
          font-size: 1.1rem;
          line-height: 1.6;
          max-width: 500px;
        }
        
        .login-container {
          width: 100%;
          max-width: 480px;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: white;
          box-shadow: var(--shadow);
        }
        
        .login-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }
        
        .logo {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
          color: var(--primary);
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
          margin-bottom: 0.5rem;
        }
        
        .login-header p {
          color: #6c757d;
          font-size: 0.95rem;
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
          left: 12px;
          color: #6c757d;
          font-size: 1rem;
        }
        
        .form-input {
          width: 100%;
          padding: 0.75rem 1rem 0.75rem 40px;
          border: 1px solid #ced4da;
          border-radius: 6px;
          font-size: 0.95rem;
          transition: all 0.3s;
        }
        
        .form-input:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(74, 111, 165, 0.2);
        }
        
        .password-toggle {
          position: absolute;
          right: 12px;
          cursor: pointer;
          color: #6c757d;
          font-size: 1rem;
        }
        
        .forgot-password {
          display: block;
          text-align: right;
          font-size: 0.85rem;
          color: var(--primary);
          margin-top: 0.5rem;
          text-decoration: none;
        }
        
        .forgot-password:hover {
          text-decoration: underline;
        }
        
        .error-message {
          color: var(--danger);
          font-size: 0.85rem;
          margin-bottom: 1rem;
          text-align: center;
        }
        
        .form-buttons {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 2rem;
        }
        
        .btn {
          padding: 0.75rem;
          border: none;
          border-radius: 6px;
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
          color: white;
        }
        
        .btn-primary:hover {
          background-color: var(--primary-dark);
          transform: translateY(-1px);
        }
        
        .btn-google {
          background-color: white;
          color: var(--dark);
          border: 1px solid #ced4da;
        }
        
        .btn-google:hover {
          background-color: #f8f9fa;
          border-color: #adb5bd;
        }
        
        .btn-register {
          background-color: transparent;
          color: var(--primary);
          border: 1px solid var(--primary);
        }
        
        .btn-register:hover {
          background-color: rgba(74, 111, 165, 0.1);
        }
        
        .divider {
          display: flex;
          align-items: center;
          margin: 1.5rem 0;
          color: #6c757d;
          font-size: 0.85rem;
        }
        
        .divider::before,
        .divider::after {
          content: '';
          flex: 1;
          border-bottom: 1px solid #dee2e6;
        }
        
        .divider::before {
          margin-right: 1rem;
        }
        
        .divider::after {
          margin-left: 1rem;
        }
        
        .loading {
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @media (min-width: 992px) {
          .login-hero {
            display: block;
          }
          
          .login-container {
            width: 480px;
          }
        }
      `}</style>

      <div className="login-hero">
        <div className="hero-content">
          <h2>Find Your Dream Home</h2>
          <p>Join thousands of happy homeowners who found their perfect property through our platform. Get personalized recommendations and expert advice.</p>
        </div>
      </div>

      <div className="login-container">
        <div className="login-header">
          <div className="logo">
            <FaHome className="logo-icon" />
            <span className="logo-text">EstatePro</span>
          </div>
          <h2>Welcome Back</h2>
          <p>Sign in to access your account and continue your property search</p>
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
                <span className="loading">⏳</span>
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