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

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (

    {<style></style>}
      
    <section className="hero hero-modern">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Discover Your Perfect Property</h1>
          <p className="subtitle">Find your dream home in our curated collection of premium listings</p>
        </div>

        <div className="hero-search-container">
          <div className="hero-search">
            <input
              type="text"
              placeholder="Enter location, property type, or keyword"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button className="search-btn" onClick={handleSearch}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
              Search
            </button>
          </div>
          
          <div className="search-tags">
            <span>Popular:</span>
            <button className="tag" onClick={() => setSearchTerm('New York')}>New York</button>
            <button className="tag" onClick={() => setSearchTerm('Los Angeles')}>Los Angeles</button>
            <button className="tag" onClick={() => setSearchTerm('Miami')}>Miami</button>
          </div>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">15K+</span>
            <span className="stat-label">Premium Properties</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">98%</span>
            <span className="stat-label">Customer Satisfaction</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Support</span>
          </div>
        </div>
      </div>

      <div className="hero-image-overlay">
        <div className="image-grid">
          <div className="grid-item primary"></div>
          <div className="grid-item secondary"></div>
          <div className="grid-item tertiary"></div>
        </div>
      </div>
    </section>
  );
};