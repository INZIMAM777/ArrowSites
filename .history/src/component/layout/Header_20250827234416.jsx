import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useFirebase } from '../context/ArrowContext';
import './Header.css';

export const Header = () => {
  const { isLoggedIn, user, removeSign } = useFirebase();
  const [showDropdown, setShowDropdown] = useState(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleLogout = () => {
    removeSign();
    setShowDropdown(null);
  };

  const toggleDropdown = (menu) => {
    setShowDropdown(showDropdown === menu ? null : menu);
  };

  return (
    <>
      <style>
        {`
          :root {
            --primary-color: #ff6b00;
            --secondary-color: #00467f;
            --light-bg: #f5f7fa;
            --dark-text: #2c3e50;
            --light-text: #7f8c8d;
            --white: #ffffff;
            --shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          }
          
          .header {
            background-color: var(--white);
            box-shadow: var(--shadow);
            position: sticky;
            top: 0;
            z-index: 1000;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          }
          
          .top-bar {
            background-color: var(--secondary-color);
            color: var(--white);
            padding: 6px 0;
            font-size: 12px;
          }
          
          .top-bar-content {
            display: flex;
            justify-content: space-between;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
          }
          
          .contact-info {
            display: flex;
            gap: 20px;
          }
          
          .main-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 1200px;
            margin: 0 auto;
            padding: 15px 20px;
          }
          
          .logo {
            font-size: 24px;
            font-weight: bold;
            color: var(--primary-color);
            text-decoration: none;
          }
          
          .nav-menu {
            display: flex;
            list-style: none;
            gap: 25px;
            margin: 0;
            padding: 0;
          }
          
          .nav-item {
            position: relative;
          }
          
          .nav-link {
            text-decoration: none;
            color: var(--dark-text);
            font-weight: 500;
            font-size: 15px;
            padding: 8px 0;
            transition: color 0.3s;
            position: relative;
          }
          
          .nav-link:hover {
            color: var(--primary-color);
          }
          
          .nav-link.active {
            color: var(--primary-color);
          }
          
          .nav-link.active::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: var(--primary-color);
          }
          
          .dropdown {
            position: absolute;
            top: 100%;
            left: 0;
            background-color: var(--white);
            box-shadow: var(--shadow);
            border-radius: 4px;
            min-width: 200px;
            padding: 15px;
            z-index: 100;
            display: ${showDropdown ? 'block' : 'none'};
          }
          
          .dropdown-item {
            display: block;
            padding: 8px 0;
            color: var(--dark-text);
            text-decoration: none;
            font-size: 14px;
          }
          
          .dropdown-item:hover {
            color: var(--primary-color);
          }
          
          .user-menu {
            display: flex;
            align-items: center;
            gap: 15px;
          }
          
          .user-greeting {
            font-size: 14px;
            color: var(--dark-text);
          }
          
          .auth-button {
            background-color: var(--primary-color);
            color: white;
            border: none;
            padding: 8px 15px;
            border-radius: 4px;
            font-weight: 500;
            cursor: pointer;
            font-size: 14px;
            transition: background-color 0.3s;
          }
          
          .auth-button:hover {
            background-color: #e55e00;
          }
          
          .user-avatar {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background-color: var(--secondary-color);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            cursor: pointer;
            position: relative;
          }
          
          .user-dropdown {
            position: absolute;
            top: 100%;
            right: 0;
            background-color: var(--white);
            box-shadow: var(--shadow);
            border-radius: 4px;
            min-width: 150px;
            padding: 10px 0;
            z-index: 100;
          }
          
          .user-dropdown-item {
            display: block;
            padding: 8px 15px;
            color: var(--dark-text);
            text-decoration: none;
            font-size: 14px;
          }
          
          .user-dropdown-item:hover {
            background-color: var(--light-bg);
            color: var(--primary-color);
          }
          
          .mobile-menu-button {
            display: none;
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
            color: var(--dark-text);
          }
          
          @media (max-width: 992px) {
            .nav-menu {
              display: none;
            }
            
            .user-menu {
              display: none;
            }
            
            .mobile-menu-button {
              display: block;
            }
            
            .mobile-menu {
              position: fixed;
              top: 0;
              right: 0;
              height: 100vh;
              width: 280px;
              background-color: var(--white);
              box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
              z-index: 1001;
              padding: 20px;
              transform: translateX(${showMobileMenu ? '0' : '100%'});
              transition: transform 0.3s ease;
              overflow-y: auto;
            }
            
            .mobile-menu-header {
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-bottom: 20px;
            }
            
            .close-menu {
              background: none;
              border: none;
              font-size: 24px;
              cursor: pointer;
            }
            
            .mobile-nav-menu {
              list-style: none;
              padding: 0;
              margin: 0;
            }
            
            .mobile-nav-item {
              margin-bottom: 15px;
            }
            
            .mobile-nav-link {
              text-decoration: none;
              color: var(--dark-text);
              font-weight: 500;
              font-size: 16px;
              display: block;
              padding: 8px 0;
            }
            
            .mobile-user-menu {
              margin-top: 20px;
              padding-top: 20px;
              border-top: 1px solid #eee;
            }
          }
        `}
      </style>
      
      <header className="header">
        <div className="top-bar">
          <div className="top-bar-content">
            <div className="contact-info">
              <span>📞 +91 9876543210</span>
              <span>✉️ info@arrowsites.com</span>
            </div>
            <div className="social-links">
              <span>Follow us: </span>
              <a href="#" style={{color: 'white', marginLeft: '10px'}}>FB</a>
              <a href="#" style={{color: 'white', marginLeft: '10px'}}>IG</a>
              <a href="#" style={{color: 'white', marginLeft: '10px'}}>TW</a>
            </div>
          </div>
        </div>
        
        <div className="main-header">
          <NavLink to="/" className="logo">
            Arrow Sites
          </NavLink>
          
          <nav className="desktop-nav">
            <ul className="nav-menu">
              <li className="nav-item" 
                  onMouseEnter={() => toggleDropdown('buyers')}
                  onMouseLeave={() => toggleDropdown(null)}>
                <span className="nav-link">For Buyers</span>
                <div className="dropdown" style={{display: showDropdown === 'buyers' ? 'block' : 'none'}}>
                  <NavLink to="/buyers-guide" className="dropdown-item">Buyer's Guide</NavLink>
                  <NavLink to="/home-loans" className="dropdown-item">Home Loans</NavLink>
                  <NavLink to="/property-advice" className="dropdown-item">Property Advice</NavLink>
                </div>
              </li>
              
              <li className="nav-item"
                  onMouseEnter={() => toggleDropdown('tenants')}
                  onMouseLeave={() => toggleDropdown(null)}>
                <span className="nav-link">For Tenants</span>
                <div className="dropdown" style={{display: showDropdown === 'tenants' ? 'block' : 'none'}}>
                  <NavLink to="/rental-guide" className="dropdown-item">Rental Guide</NavLink>
                  <NavLink to="/tenant-rights" className="dropdown-item">Tenant Rights</NavLink>
                  <NavLink to="/find-rentals" className="dropdown-item">Find Rentals</NavLink>
                </div>
              </li>
              
              <li className="nav-item"
                  onMouseEnter={() => toggleDropdown('owners')}
                  onMouseLeave={() => toggleDropdown(null)}>
                <span className="nav-link">For Owners</span>
                <div className="dropdown" style={{display: showDropdown === 'owners' ? 'block' : 'none'}}>
                  <NavLink to="/post-property" className="dropdown-item">Post Property</NavLink>
                  <NavLink to="/property-valuation" className="dropdown-item">Property Valuation</NavLink>
                  <NavLink to="/owner-resources" className="dropdown-item">Owner Resources</NavLink>
                </div>
              </li>
              
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">About</NavLink>
              </li>
              
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">Contact</NavLink>
              </li>
              
              <li className="nav-item">
                <NavLink to="/Cards" className="nav-link">Property</NavLink>
              </li>
            </ul>
          </nav>
          
          <div className="user-menu">
            {isLoggedIn ? (
              <>
                <span className="user-greeting">Hi, {user.displayName || user.email}</span>
                <div className="user-avatar"
                     onClick={() => toggleDropdown('user')}>
                  {user.displayName ? user.displayName.charAt(0).toUpperCase() : user.email.charAt(0).toUpperCase()}
                  <div className="user-dropdown" style={{display: showDropdown === 'user' ? 'block' : 'none'}}>
                    <NavLink to="/dashboard" className="user-dropdown-item">Dashboard</NavLink>
                    <NavLink to="/profile" className="user-dropdown-item">Profile</NavLink>
                    <NavLink to="/my-properties" className="user-dropdown-item">My Properties</NavLink>
                    <button onClick={handleLogout} className="user-dropdown-item" style={{background: 'none', border: 'none', width: '100%', textAlign: 'left'}}>
                      Logout
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <NavLink to="/Register">
                  <button className="auth-button">Register</button>
                </NavLink>
                <NavLink to="/Login">
                  <button className="auth-button" style={{backgroundColor: 'transparent', color: 'var(--primary-color)', border: '1px solid var(--primary-color)'}}>
                    Login
                  </button>
                </NavLink>
              </>
            )}
          </div>
          
          <button className="mobile-menu-button" onClick={() => setShowMobileMenu(true)}>
            ☰
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div className="mobile-menu" style={{display: showMobileMenu ? 'block' : 'none'}}>
          <div className="mobile-menu-header">
            <h3>Menu</h3>
            <button className="close-menu" onClick={() => setShowMobileMenu(false)}>×</button>
          </div>
          
          <ul className="mobile-nav-menu">
            <li className="mobile-nav-item">
              <NavLink to="/" className="mobile-nav-link" onClick={() => setShowMobileMenu(false)}>Home</NavLink>
            </li>
            <li className="mobile-nav-item">
              <NavLink to="/buyers-guide" className="mobile-nav-link" onClick={() => setShowMobileMenu(false)}>For Buyers</NavLink>
            </li>
            <li className="mobile-nav-item">
              <NavLink to="/rental-guide" className="mobile-nav-link" onClick={() => setShowMobileMenu(false)}>For Tenants</NavLink>
            </li>
            <li className="mobile-nav-item">
              <NavLink to="/post-property" className="mobile-nav-link" onClick={() => setShowMobileMenu(false)}>For Owners</NavLink>
            </li>
            <li className="mobile-nav-item">
              <NavLink to="/about" className="mobile-nav-link" onClick={() => setShowMobileMenu(false)}>About</NavLink>
            </li>
            <li className="mobile-nav-item">
              <NavLink to="/contact" className="mobile-nav-link" onClick={() => setShowMobileMenu(false)}>Contact</NavLink>
            </li>
            <li className="mobile-nav-item">
              <NavLink to="/Cards" className="mobile-nav-link" onClick={() => setShowMobileMenu(false)}>Property</NavLink>
            </li>
            <li className="mobile-nav-item">
              <NavLink to="/AddProp" className="mobile-nav-link" onClick={() => setShowMobileMenu(false)}>Post Property</NavLink>
            </li>
          </ul>
          
          <div className="mobile-user-menu">
            {isLoggedIn ? (
              <>
                <div className="user-greeting" style={{marginBottom: '15px'}}>
                  Hi, {user.displayName || user.email}
                </div>
                <NavLink to="/dashboard" className="mobile-nav-link" onClick={() => setShowMobileMenu(false)}>Dashboard</NavLink>
                <NavLink to="/profile" className="mobile-nav-link" onClick={() => setShowMobileMenu(false)}>Profile</NavLink>
                <button onClick={handleLogout} className="auth-button" style={{width: '100%', marginTop: '15px'}}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink to="/Register" onClick={() => setShowMobileMenu(false)}>
                  <button className="auth-button" style={{width: '100%', marginBottom: '10px'}}>Register</button>
                </NavLink>
                <NavLink to="/Login" onClick={() => setShowMobileMenu(false)}>
                  <button className="auth-button" style={{width: '100%', backgroundColor: 'transparent', color: 'var(--primary-color)', border: '1px solid var(--primary-color)'}}>
                    Login
                  </button>
                </NavLink>
              </>
            )}
          </div>
        </div>
      </header>
    </>
  );
};