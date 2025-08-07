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

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Find Your Dream Home Today</h1>
        <p>Explore premium properties in top-rated locations.</p>

        <div className="hero-search">
          <input
            type="text"
            placeholder="Search by city, ZIP, or address"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-btn" onClick={handleSearch}>Search</button>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">10,000+</span>
            <span className="stat-label">Listings</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">500+</span>
            <span className="stat-label">Cities</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">1M+</span>
            <span className="stat-label">Clients</span>
          </div>
        </div>
      </div>

      <div className="hero-image"></div>
    </section>
  );
};
