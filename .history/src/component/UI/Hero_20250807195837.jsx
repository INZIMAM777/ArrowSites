import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    propertyType: "",
    priceRange: "",
    bedrooms: "",
  });

  const handleSearch = () => {
    const queryParams = new URLSearchParams();
    if (searchTerm.trim()) queryParams.append("search", encodeURIComponent(searchTerm.trim()));
    
    Object.entries(filters).forEach(([key, value]) => {
      if (value) queryParams.append(key, value);
    });

    navigate(`/listings?${queryParams.toString()}`);
  };

  return (
    <>
      <style>
        {`
          .hero-section {
            position: relative;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(to right, #1e3a8a, #3730a3);
            overflow: hidden;
          }
          
          .hero-overlay {
            position: absolute;
            inset: 0;
            background-color: black;
            opacity: 0.4;
          }
          
          .hero-background {
            position: absolute;
            inset: 0;
            background-image: url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80');
            background-size: cover;
            background-position: center;
          }
          
          .hero-content {
            position: relative;
            z-index: 10;
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 1.5rem;
            color: white;
            text-align: center;
          }
          
          .hero-title {
            font-size: 3rem;
            font-weight: bold;
            margin-bottom: 1.5rem;
            line-height: 1.2;
          }
          
          @media (min-width: 768px) {
            .hero-title {
              font-size: 3.75rem;
            }
          }
          
          .hero-subtitle {
            font-size: 1.25rem;
            margin-bottom: 2rem;
            opacity: 0.9;
          }
          
          @media (min-width: 768px) {
            .hero-subtitle {
              font-size: 1.5rem;
            }
          }
          
          .search-container {
            background-color: white;
            border-radius: 0.75rem;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
            padding: 1.5rem;
            max-width: 72rem;
            margin: 0 auto;
          }
          
          .search-row {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            margin-bottom: 1rem;
          }
          
          @media (min-width: 768px) {
            .search-row {
              flex-direction: row;
            }
          }
          
          .search-input-container {
            flex: 1;
            position: relative;
          }
          
          .search-input {
            width: 100%;
            padding: 1rem;
            padding-left: 3rem;
            border-radius: 0.5rem;
            border: 1px solid #e5e7eb;
            color: #1f2937;
          }
          
          .search-input:focus {
            outline: none;
            ring: 2px;
            ring-color: #3b82f6;
          }
          
          .search-icon {
            position: absolute;
            left: 1rem;
            top: 50%;
            transform: translateY(-50%);
            height: 1.25rem;
            width: 1.25rem;
            color: #9ca3af;
          }
          
          .search-button {
            background-color: #2563eb;
            color: white;
            font-weight: 600;
            padding: 1rem 2rem;
            border-radius: 0.5rem;
            transition: all 0.3s ease;
          }
          
          .search-button:hover {
            background-color: #1d4ed8;
            transform: scale(1.05);
          }
          
          .filters-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          
          @media (min-width: 768px) {
            .filters-grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }
          
          .filter-group {
            margin-bottom: 0.5rem;
          }
          
          .filter-label {
            display: block;
            color: #374151;
            font-size: 0.875rem;
            font-weight: 500;
            margin-bottom: 0.5rem;
          }
          
          .filter-select {
            width: 100%;
            padding: 0.75rem;
            border: 1px solid #e5e7eb;
            border-radius: 0.5rem;
            color: #1f2937;
          }
          
          .filter-select:focus {
            outline: none;
            ring: 2px;
            ring-color: #3b82f6;
          }
          
          .stats-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 2rem;
            margin-top: 4rem;
          }
          
          .stat-card {
            text-align: center;
            background-color: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 0.75rem;
            padding: 1.5rem;
            min-width: 200px;
          }
          
          .stat-number {
            font-size: 2.25rem;
            font-weight: bold;
            margin-bottom: 0.5rem;
            display: block;
          }
          
          .stat-label {
            font-size: 1.125rem;
            opacity: 0.8;
          }
          
          .scroll-indicator {
            position: absolute;
            bottom: 2.5rem;
            left: 50%;
            transform: translateX(-50%);
            animation: bounce 2s infinite;
          }
          
          .scroll-icon {
            height: 2.5rem;
            width: 2.5rem;
            color: white;
          }
          
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translateY(0) translateX(-50%);
            }
            40% {
              transform: translateY(-30px) translateX(-50%);
            }
            60% {
              transform: translateY(-15px) translateX(-50%);
            }
          }
        `}
      </style>

      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-background"></div>
        
        <div className="hero-content">
          <div className="max-w-4xl mx-auto mb-12">
            <h1 className="hero-title">
              Discover Your Perfect Property Worldwide
            </h1>
            <p className="hero-subtitle">
              Luxury homes, premium locations, exceptional service - experience real estate at its finest
            </p>
          </div>

          <div className="search-container">
            <div className="search-row">
              <div className="search-input-container">
                <input
                  type="text"
                  placeholder="Search by city, country, or landmark"
                  className="search-input"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <svg className="search-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <button 
                onClick={handleSearch}
                className="search-button"
              >
                Search
              </button>
            </div>

            <div className="filters-grid">
              <div className="filter-group">
                <label className="filter-label">Property Type</label>
                <select
                  className="filter-select"
                  value={filters.propertyType}
                  onChange={(e) => setFilters({...filters, propertyType: e.target.value})}
                >
                  <option value="">Any Type</option>
                  <option value="house">House</option>
                  <option value="apartment">Apartment</option>
                  <option value="villa">Villa</option>
                  <option value="commercial">Commercial</option>
                  <option value="land">Land</option>
                </select>
              </div>
              <div className="filter-group">
                <label className="filter-label">Price Range</label>
                <select
                  className="filter-select"
                  value={filters.priceRange}
                  onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
                >
                  <option value="">Any Price</option>
                  <option value="0-500000">Up to $500K</option>
                  <option value="500000-1000000">$500K - $1M</option>
                  <option value="1000000-5000000">$1M - $5M</option>
                  <option value="5000000-">$5M+</option>
                </select>
              </div>
              <div className="filter-group">
                <label className="filter-label">Bedrooms</label>
                <select
                  className="filter-select"
                  value={filters.bedrooms}
                  onChange={(e) => setFilters({...filters, bedrooms: e.target.value})}
                >
                  <option value="">Any</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                  <option value="5">5+</option>
                </select>
              </div>
            </div>
          </div>

          <div className="stats-container">
            <div className="stat-card">
              <span className="stat-number">50K+</span>
              <span className="stat-label">Premium Properties</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">120+</span>
              <span className="stat-label">Countries Worldwide</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">25+</span>
              <span className="stat-label">Years of Excellence</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">2M+</span>
              <span className="stat-label">Satisfied Clients</span>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <svg className="scroll-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>
    </>
  );
};