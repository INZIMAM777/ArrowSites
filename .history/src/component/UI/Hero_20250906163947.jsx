import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("BUY");
  const [location, setLocation] = useState("Chennai");

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    navigate(`/Cards?search=${searchTerm.trim()}&transaction_type=${activeTab.toLowerCase()}&location=${location}`);
  };

  const popularLocalities = ["Adyar", "Anna Nagar", "Medavakkam", "Porur", "Sholinganallur", "T. Nagar", "Velachery"];

  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">Properties to {activeTab.toLowerCase()} in {location}</h1>
        
        <div className="listing-stats">
          <span className="stats-text">8K+ listings added daily and 63K+ total verified</span>
        </div>

        <div className="transaction-tabs">
          {["BUY", "RENT", "COMMERCIAL", "PG/CO-LIVING", "PLOTS"].map((tab) => (
            <button
              key={tab}
              className={`tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="search-container">
          <div className="location-input">
            <span className="location-label">{location}</span>
          </div>
          <form onSubmit={handleSearch} className="search-form">
            <input
              type="text"
              placeholder="Search for locality, landmark, project, or builder"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <button type="submit" className="search-button">Search</button>
          </form>
        </div>

        <div className="popular-localities">
          <h3>Popular Localities</h3>
          <div className="locality-tags">
            {popularLocalities.map(locality => (
              <span key={locality} className="locality-tag">{locality}</span>
            ))}
          </div>
        </div>

        <div className="property-owner-cta">
          <span>Are you a Property Owner? </span>
          <button className="sell-rent-btn">Sell / Rent for FREE</button>
        </div>
      </div>

      <div className="housing-edge">
        <div className="housing-edge-content">
          <h3>Housing Edge</h3>
          <p>Explore property related services</p>
          <button className="explore-services-btn">Explore Services &gt;</button>
        </div>
      </div>

      <style>
        {`
          .hero-container {
            background: linear-gradient(to bottom, #f5f7fa, #e4e8f0);
            padding: 2rem 1.5rem;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          }
          
          .hero-content {
            max-width: 1200px;
            margin: 0 auto;
          }
          
          .hero-title {
            font-size: 2.2rem;
            font-weight: 700;
            color: #2d3748;
            margin-bottom: 0.5rem;
          }
          
          .listing-stats {
            margin-bottom: 1.5rem;
          }
          
          .stats-text {
            font-size: 1rem;
            color: #718096;
          }
          
          .transaction-tabs {
            display: flex;
            gap: 0;
            margin-bottom: 1.5rem;
            border-bottom: 1px solid #e2e8f0;
          }
          
          .tab {
            padding: 0.75rem 1.5rem;
            background: none;
            border: none;
            font-weight: 600;
            font-size: 1rem;
            color: #718096;
            cursor: pointer;
            border-bottom: 3px solid transparent;
            transition: all 0.2s;
          }
          
          .tab.active {
            color: #0061ff;
            border-bottom-color: #0061ff;
          }
          
          .tab:hover {
            color: #0061ff;
          }
          
          .search-container {
            display: flex;
            background: white;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            margin-bottom: 1.5rem;
            overflow: hidden;
            max-width: 700px;
          }
          
          .location-input {
            display: flex;
            align-items: center;
            padding: 0 1.25rem;
            background: #f7fafc;
            border-right: 1px solid #e2e8f0;
          }
          
          .location-label {
            font-weight: 600;
            color: #2d3748;
            white-space: nowrap;
          }
          
          .search-form {
            display: flex;
            flex: 1;
          }
          
          .search-input {
            flex: 1;
            padding: 1rem 1.25rem;
            border: none;
            outline: none;
            font-size: 1rem;
          }
          
          .search-input::placeholder {
            color: #a0aec0;
          }
          
          .search-button {
            padding: 1rem 1.5rem;
            background: #0061ff;
            color: white;
            border: none;
            font-weight: 600;
            cursor: pointer;
            transition: background 0.2s;
          }
          
          .search-button:hover {
            background: #004ac7;
          }
          
          .popular-localities {
            margin-bottom: 1.5rem;
          }
          
          .popular-localities h3 {
            font-size: 1rem;
            font-weight: 600;
            color: #2d3748;
            margin-bottom: 0.75rem;
          }
          
          .locality-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.75rem;
          }
          
          .locality-tag {
            padding: 0.5rem 1rem;
            background: white;
            border: 1px solid #e2e8f0;
            border-radius: 20px;
            font-size: 0.9rem;
            color: #4a5568;
            cursor: pointer;
            transition: all 0.2s;
          }
          
          .locality-tag:hover {
            border-color: #0061ff;
            color: #0061ff;
          }
          
          .property-owner-cta {
            margin-bottom: 2rem;
          }
          
          .property-owner-cta span {
            color: #4a5568;
            margin-right: 0.5rem;
          }
          
          .sell-rent-btn {
            padding: 0.5rem 1rem;
            background: transparent;
            color: #0061ff;
            border: 1px solid #0061ff;
            border-radius: 4px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s;
          }
          
          .sell-rent-btn:hover {
            background: #0061ff;
            color: white;
          }
          
          .housing-edge {
            background: white;
            border-radius: 8px;
            padding: 1.5rem;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            max-width: 400px;
          }
          
          .housing-edge-content h3 {
            font-size: 1.25rem;
            font-weight: 700;
            color: #2d3748;
            margin-bottom: 0.5rem;
          }
          
          .housing-edge-content p {
            color: #718096;
            margin-bottom: 1rem;
          }
          
          .explore-services-btn {
            padding: 0.75rem 1.5rem;
            background: transparent;
            color: #0061ff;
            border: 1px solid #0061ff;
            border-radius: 4px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s;
          }
          
          .explore-services-btn:hover {
            background: #0061ff;
            color: white;
          }
          
          @media (max-width: 768px) {
            .hero-title {
              font-size: 1.75rem;
            }
            
            .transaction-tabs {
              overflow-x: auto;
              padding-bottom: 0.5rem;
            }
            
            .tab {
              padding: 0.5rem 1rem;
              font-size: 0.9rem;
              white-space: nowrap;
            }
            
            .search-container {
              flex-direction: column;
            }
            
            .location-input {
              border-right: none;
              border-bottom: 1px solid #e2e8f0;
              padding: 0.75rem 1rem;
            }
            
            .search-form {
              flex-direction: column;
            }
            
            .search-input {
              padding: 0.75rem 1rem;
            }
            
            .search-button {
              border-radius: 0 0 8px 8px;
            }
            
            .locality-tags {
              overflow-x: auto;
              padding-bottom: 0.5rem;
            }
            
            .locality-tag {
              white-space: nowrap;
            }
          }
        `}
      </style>
    </div>
  );
};