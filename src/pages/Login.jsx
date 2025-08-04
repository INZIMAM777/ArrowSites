import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFirebase } from '../context/FirebaseContext';

export const Login = () => {
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
    await firebase.signInEp(email, password);
  };

  const googleSign = async () => {
    await firebase.signGoogle(email, password);
  };

  return (
    <>
      <style>{`
        .login-container {
          max-width: 400px;
          margin: 3rem auto;
          padding: 2rem;
          border-radius: 12px;
          background: #ffffff;
          box-shadow: 0 6px 18px rgba(0,0,0,0.1);
          font-family: Arial, sans-serif;
        }

        .login-container h2 {
          text-align: center;
          margin-bottom: 2rem;
          color: #333;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        label {
          display: block;
          margin-bottom: 0.5rem;
          color: #444;
          font-weight: 600;
        }

        input {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #ccc;
          border-radius: 6px;
          font-size: 1rem;
        }

        input:focus {
          outline: none;
          border-color: #007bff;
        }

        .form-buttons {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .btn-primary,
        .btn-google,
        .btn-register {
          padding: 0.75rem;
          border: none;
          border-radius: 6px;
          font-size: 1rem;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .btn-primary {
          background-color: #007bff;
          color: white;
        }

        .btn-primary:hover {
          background-color: #0056b3;
        }

        .btn-google {
          background-color: #db4437;
          color: white;
        }

        .btn-google:hover {
          background-color: #c23321;
        }

        .btn-register {
          background-color: #28a745;
          color: white;
        }

        .btn-register:hover {
          background-color: #1e7e34;
        }

        .or-divider {
          text-align: center;
          color: #999;
        }
      `}</style>

      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              required
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              required
              value={password}
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-buttons">
            <button type="submit" className="btn-primary">Login</button>
            <div className="or-divider">or</div>
            <button type="button" className="btn-google" onClick={googleSign}>Sign in with Google</button>
            <a href="/Register">
              <button type="button" className="btn-register">For Register</button>
            </a>
          </div>
        </form>
      </div>
    </>
  );
};
