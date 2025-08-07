import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/Cards?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Find Your <span className="highlight">Dream Home</span></h1>
        <p>Discover premium properties in top-rated locations worldwide</p>

        <div className="hero-search">
          <div className="search-input-container">
            <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              type="text"
              placeholder="Search by city, ZIP, or address"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>
          <button className="search-btn" onClick={handleSearch}>Search</button>
        </div>

        <div className="quick-searches">
          <span>Popular: </span>
          <button onClick={() => setSearchTerm('New York')}>New York</button>
          <button onClick={() => setSearchTerm('Los Angeles')}>Los Angeles</button>
          <button onClick={() => setSearchTerm('Miami')}>Miami</button>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </div>
            <div className="stat-text">
              <span className="stat-number">10K+</span>
              <span className="stat-label">Properties</span>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <div className="stat-text">
              <span className="stat-number">500+</span>
              <span className="stat-label">Agents</span>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </div>
            <div className="stat-text">
              <span className="stat-number">1M+</span>
              <span className="stat-label">Clients</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-image">
        <div className="image-overlay"></div>
      </div>

      <style jsx>{`
        :root {
          --primary-color: #4f46e5;
          --primary-dark: #4338ca;
          --bg-light: #f9fafb;
          --bg-medium: #e5e7eb;
          --text-dark: #1f2937;
          --text-medium: #4b5563;
          --text-light: #6b7280;
          --white: #ffffff;
          --border-radius: 8px;
          --transition: all 0.3s ease;
          --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);
          --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
          --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
        }

        .hero {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          background: linear-gradient(to bottom, var(--bg-light) 50%, var(--bg-medium) 50%);
          position: relative;
        }

        .hero-content {
          padding: 3rem 1.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          z-index: 2;
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }

        .hero h1 {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          color: var(--text-dark);
          line-height: 1.2;
          font-weight: 800;
          letter-spacing: -0.5px;
        }

        .hero h1 .highlight {
          color: var(--primary-color);
          position: relative;
        }

        .hero h1 .highlight::after {
          content: '';
          position: absolute;
          bottom: 5px;
          left: 0;
          width: 100%;
          height: 8px;
          background-color: rgba(79, 70, 229, 0.3);
          z-index: -1;
        }

        .hero p {
          font-size: 1.15rem;
          color: var(--text-medium);
          margin-bottom: 2.5rem;
          line-height: 1.6;
          max-width: 600px;
        }

        .hero-search {
          display: flex;
          flex-direction: column;
          margin-bottom: 1.5rem;
          width: 100%;
          max-width: 600px;
          position: relative;
        }

        .search-input-container {
          position: relative;
          margin-bottom: 0.75rem;
        }

        .search-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          width: 20px;
          height: 20px;
          color: var(--text-light);
        }

        .hero-search input {
          width: 100%;
          padding: 1.15rem 1.15rem 1.15rem 3rem;
          border: 1px solid #ced4da;
          border-radius: var(--border-radius);
          font-size: 1rem;
          transition: var(--transition);
          box-shadow: var(--shadow-sm);
          background-color: var(--white);
        }

        .hero-search input:focus {
          outline: none;
          border-color: var(--primary-color);
          box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.2);
        }

        .search-btn {
          padding: 1.15rem;
          background-color: var(--primary-color);
          color: var(--white);
          border: none;
          border-radius: var(--border-radius);
          cursor: pointer;
          font-weight: 600;
          width: 100%;
          transition: var(--transition);
          box-shadow: var(--shadow-sm);
          font-size: 1rem;
        }

        .search-btn:hover {
          background-color: var(--primary-dark);
          transform: translateY(-1px);
          box-shadow: var(--shadow-md);
        }

        .quick-searches {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-bottom: 2rem;
          font-size: 0.9rem;
        }

        .quick-searches span {
          color: var(--text-light);
        }

        .quick-searches button {
          background: none;
          border: none;
          color: var(--primary-color);
          font-weight: 600;
          cursor: pointer;
          padding: 0.25rem 0;
          position: relative;
        }

        .quick-searches button::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: var(--primary-color);
          transition: var(--transition);
        }

        .quick-searches button:hover::after {
          width: 100%;
        }

        .hero-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background-color: var(--white);
          border-radius: var(--border-radius);
          box-shadow: var(--shadow-sm);
          transition: var(--transition);
        }

        .stat-item:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-md);
        }

        .stat-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(79, 70, 229, 0.1);
          border-radius: 50%;
          color: var(--primary-color);
        }

        .stat-icon svg {
          width: 20px;
          height: 20px;
        }

        .stat-text {
          display: flex;
          flex-direction: column;
        }

        .stat-number {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--primary-color);
          line-height: 1;
        }

        .stat-label {
          color: var(--text-light);
          font-size: 0.85rem;
          font-weight: 500;
        }

        .hero-image {
          min-height: 350px;
          background: url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80') center/cover;
          position: relative;
          flex-grow: 1;
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to top, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 100%);
        }

        @media (min-width: 768px) {
          .hero {
            flex-direction: row;
          }

          .hero-content {
            padding: 4rem;
            width: 50%;
          }

          .hero-image {
            width: 50%;
            min-height: auto;
          }

          .hero-search {
            flex-direction: row;
          }

          .search-input-container {
            margin-bottom: 0;
            margin-right: 0.75rem;
            flex-grow: 1;
          }

          .search-btn {
            width: auto;
            min-width: 120px;
          }

          .hero h1 {
            font-size: 3rem;
          }
        }

        @media (min-width: 1024px) {
          .hero h1 {
            font-size: 3.5rem;
          }

          .hero p {
            font-size: 1.25rem;
          }
        }

        @media (max-width: 480px) {
          .hero-stats {
            grid-template-columns: 1fr;
          }

          .hero h1 {
            font-size: 2rem;
          }

          .hero p {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};