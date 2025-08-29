import { NavLink } from "react-router-dom";
import { useFirebase } from "../context/ArrowContext";

export const Header = () => {
  const { isLoggedIn, removeSign } = useFirebase();

  return (
    <>
      <header className="header">
        <div className="logo">
          <NavLink to="/">🏠 Arrow Sites</NavLink>
        </div>

        <nav className="nav-links">
          <ul>
            <li><NavLink to="/buy">For Buyers</NavLink></li>
            <li><NavLink to="/rent">For Tenants</NavLink></li>
            <li><NavLink to="/owner">For Owners</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/Cards">Properties</NavLink></li>
            <li><NavLink to="/AddProp">Post Property</NavLink></li>
            {!isLoggedIn ? (
              <li><NavLink to="/Register" className="btn">Register / Login</NavLink></li>
            ) : (
              <li><button className="btn logout" onClick={removeSign}>Logout</button></li>
            )}
          </ul>
        </nav>
      </header>

      {/* 🔽 Inline CSS with style tag */}
      <style>
        {`
          .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: #003580;
            padding: 12px 40px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            position: sticky;
            top: 0;
            z-index: 1000;
          }
          .logo a {
            font-size: 22px;
            font-weight: bold;
            color: #fff;
            text-decoration: none;
          }
          .nav-links ul {
            list-style: none;
            display: flex;
            margin: 0;
            padding: 0;
            gap: 20px;
            align-items: center;
          }
          .nav-links li {
            position: relative;
          }
          .nav-links a {
            text-decoration: none;
            font-size: 15px;
            font-weight: 500;
            color: #f1f1f1;
            transition: color 0.3s ease;
          }
          .nav-links a:hover,
          .nav-links a.active {
            color: #ffcc00;
          }
          .btn {
            padding: 6px 14px;
            border-radius: 5px;
            border: none;
            cursor: pointer;
            background: #ffcc00;
            color: #003580;
            font-weight: 600;
            text-decoration: none;
          }
          .btn.logout {
            background: #ff4d4d;
            color: #fff;
          }
          .btn:hover {
            opacity: 0.9;
          }
          @media (max-width: 768px) {
            .header {
              flex-direction: column;
              align-items: flex-start;
              padding: 10px 20px;
            }
            .nav-links ul {
              flex-direction: column;
              gap: 10px;
              margin-top: 10px;
              align-items: flex-start;
            }
          }
        `}
      </style>
    </>
  );
};
