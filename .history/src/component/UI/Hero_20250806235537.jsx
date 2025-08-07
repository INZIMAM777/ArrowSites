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

    <style>
      .hero-modern {
  display: flex;
  min-height: 90vh;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%);
}

.hero-modern .hero-content {
  width: 50%;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2;
}

.hero-modern .hero-text h1 {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #2d3748;
  line-height: 1.2;
}

.hero-modern .subtitle {
  font-size: 1.25rem;
  color: #4a5568;
  margin-bottom: 3rem;
  max-width: 80%;
}

.hero-modern .hero-search-container {
  margin-bottom: 3rem;
}

.hero-modern .hero-search {
  display: flex;
  background: white;
  border-radius: 50px;
  padding: 8px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.hero-modern .hero-search input {
  flex: 1;
  border: none;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  border-radius: 50px 0 0 50px;
  outline: none;
}

.hero-modern .search-btn {
  background: #4f46e5;
  color: white;
  border: none;
  padding: 0 2rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
}

.hero-modern .search-btn:hover {
  background: #4338ca;
}

.hero-modern .search-tags {
  display: flex;
  align-items: center;
  margin-top: 1rem;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.hero-modern .search-tags span {
  color: #4a5568;
  font-size: 0.9rem;
}

.hero-modern .tag {
  background: #edf2f7;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.hero-modern .tag:hover {
  background: #e2e8f0;
}

.hero-modern .hero-stats {
  display: flex;
  gap: 3rem;
  margin-top: 2rem;
}

.hero-modern .stat-item {
  display: flex;
  flex-direction: column;
}

.hero-modern .stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: #4f46e5;
}

.hero-modern .stat-label {
  font-size: 1rem;
  color: #4a5568;
}

.hero-modern .hero-image-overlay {
  position: absolute;
  right: 0;
  top: 0;
  width: 50%;
  height: 100%;
}

.hero-modern .image-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1rem;
  height: 100%;
  padding: 1rem;
}

.hero-modern .grid-item {
  border-radius: 1rem;
  background-size: cover;
  background-position: center;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.hero-modern .grid-item.primary {
  grid-column: 2;
  grid-row: 1 / span 2;
  background: linear-gradient(45deg, #6366f1, #8b5cf6);
}

.hero-modern .grid-item.secondary {
  background: linear-gradient(45deg, #ec4899, #f43f5e);
}

.hero-modern .grid-item.tertiary {
  background: linear-gradient(45deg, #14b8a6, #0d9488);
}

@media (max-width: 1024px) {
  .hero-modern {
    flex-direction: column;
  }
  
  .hero-modern .hero-content {
    width: 100%;
    padding: 2rem;
  }
  
  .hero-modern .hero-image-overlay {
    position: relative;
    width: 100%;
    height: 400px;
  }
}
    </style>
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