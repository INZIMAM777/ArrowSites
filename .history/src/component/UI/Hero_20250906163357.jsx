import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [filters, setFilters] = useState({
    propertyType: "",
    transactionType: "",
    minPrice: "",
    maxPrice: "",
    bedrooms: "",
    bathrooms: "",
    location: ""
  });

  const handleSearch = useCallback(() => {
    const params = new URLSearchParams();
    
    if (searchTerm.trim()) params.set("search", searchTerm.trim());
    
    Object.entries(filters).forEach(([key, value]) => {
      if (value) params.set(key, value);
    });
    
    navigate(`/Cards?${params.toString()}`);
  }, [searchTerm, filters, navigate]);

  const handleFilterChange = (filterName, value) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: value
    }));
  };

  const propertyTypes = [
    "Residential Flat", "Residential Floors", "Residential plot", 
    "Residential Land", "Residential Villa", "Residential Penthouse",
    "Residential Service Apartment", "Commercial Shop", "Commercial Office Space",
    "Commercial Guest House", "Commercial Service Apartment", "Industrial Factory",
    "Industrial Plot", "Industrial Land for Warehouse/Industry", "Warehouse - Commercial",
    "Warehouse - Agro", "Warehouse - Transport", "Warehouse Land / Industrial Land",
    "Farm House - Ready", "Farm House Land"
  ];

  const transactionTypes = ["buy", "rent"];

  return (
    <section className="hero-section">
      <div className="hero-background"></div>
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1 className="hero-title">Find Your Perfect Property</h1>
        <p className="hero-subtitle">
          Discover luxury homes, modern apartments, and investment properties across the world
        </p>

        <div className="search-container">
          <div className="search-main">
            <div className="search-input-container">
              <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <input
                type="text"
                placeholder="Search by location, property type, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <button 
                className="advanced-toggle"
                onClick={() => setShowAdvanced(!showAdvanced)}
                aria-expanded={showAdvanced}
              >
                Advanced
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <button 
              type="button" 
              className="search-button"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>

          {showAdvanced && (
            <div className="advanced-filters">
              <div className="filter-grid">
                <div className="filter-group">
                  <label>Property Type</label>
                  <select 
                    value={filters.propertyType} 
                    onChange={(e) => handleFilterChange('propertyType', e.target.value)}
                  >
                    <option value="">Any Type</option>
                    {propertyTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div className="filter-group">
                  <label>Transaction Type</label>
                  <select 
                    value={filters.transactionType} 
                    onChange={(e) => handleFilterChange('transactionType', e.target.value)}
                  >
                    <option value="">Buy or Rent</option>
                    {transactionTypes.map(type => (
                      <option key={type} value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</option>
                    ))}
                  </select>
                </div>

                <div className="filter-group">
                  <label>Bedrooms</label>
                  <select 
                    value={filters.bedrooms} 
                    onChange={(e) => handleFilterChange('bedrooms', e.target.value)}
                  >
                    <option value="">Any</option>
                    <option value="1">1+</option>
                    <option value="2">2+</option>
                    <option value="3">3+</option>
                    <option value="4">4+</option>
                    <option value="5">5+</option>
                  </select>
                </div>

                <div className="filter-group">
                  <label>Bathrooms</label>
                  <select 
                    value={filters.bathrooms} 
                    onChange={(e) => handleFilterChange('bathrooms', e.target.value)}
                  >
                    <option value="">Any</option>
                    <option value="1">1+</option>
                    <option value="2">2+</option>
                    <option value="3">3+</option>
                    <option value="4">4+</option>
                  </select>
                </div>

                <div className="filter-group">
                  <label>Min Price</label>
                  <input
                    type="number"
                    placeholder="Min"
                    value={filters.minPrice}
                    onChange={(e) => handleFilterChange('minPrice', e.target.value)}
                  />
                </div>

                <div className="filter-group">
                  <label>Max Price</label>
                  <input
                    type="number"
                    placeholder="Max"
                    value={filters.maxPrice}
                    onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
                  />
                </div>
              </div>

              <div className="filter-actions">
                <button 
                  type="button" 
                  className="clear-filters"
                  onClick={() => setFilters({
                    propertyType: "",
                    transactionType: "",
                    minPrice: "",
                    maxPrice: "",
                    bedrooms: "",
                    bathrooms: "",
                    location: ""
                  })}
                >
                  Clear Filters
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>
        {`
          .hero-section {
            position: relative;
            height: 100vh;
            min-height: 650px;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            color: #fff;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            padding: 0 1rem;
          }
          
          .hero-background {
            position: absolute;
            inset: 0;
            background-image: url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2070&q=80');
            background-size: cover;
            background-position: center;
            z-index: 0;
          }
          
          .hero-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%);
            z-index: 1;
          }
          
          .hero-content {
            position: relative;
            z-index: 2;
            width: 100%;
            max-width: 1000px;
            text-align: center;
          }
          
          .hero-title {
            font-size: clamp(2.5rem, 6vw, 4rem);
            font-weight: 700;
            line-height: 1.1;
            margin-bottom: 1.5rem;
            text-shadow: 0 2px 10px rgba(0,0,0,0.3);
          }
          
          .hero-subtitle {
            font-size: clamp(1.1rem, 2.5vw, 1.5rem);
            max-width: 800px;
            margin: 0 auto 3rem;
            font-weight: 300;
            opacity: 0.9;
          }
          
          .search-container {
            background: #fff;
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-lg);
            overflow: hidden;
            max-width: 800px;
            margin: 0 auto;
          }
          
          .search-main {
            display: flex;
            padding: 1rem;
            gap: 0.75rem;
          }
          
          .search-input-container {
            position: relative;
            flex: 1;
            display: flex;
            align-items: center;
          }
          
          .search-icon {
            position: absolute;
            left: 1rem;
            color: var(--gray-500);
            z-index: 1;
          }
          
          .search-input {
            width: 100%;
            padding: 1rem 1rem 1rem 3rem;
            border: 1px solid var(--gray-300);
            border-radius: var(--radius);
            font-size: 1rem;
            outline: none;
            transition: var(--transition);
          }
          
          .search-input:focus {
            border-color: var(--primary-color);
            box-shadow: 0 0 0 3px rgba(0, 97, 255, 0.2);
          }
          
          .advanced-toggle {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-left: 1rem;
            padding: 0.75rem 1rem;
            background: var(--gray-100);
            border: 1px solid var(--gray-300);
            border-radius: var(--radius);
            font-size: 0.9rem;
            font-weight: 500;
            color: var(--text-dark);
            cursor: pointer;
            transition: var(--transition);
            white-space: nowrap;
          }
          
          .advanced-toggle:hover {
            background: var(--gray-200);
          }
          
          .search-button {
            padding: 1rem 1.5rem;
            background: var(--primary-color);
            color: white;
            border: none;
            border-radius: var(--radius);
            font-weight: 600;
            font-size: 1rem;
            cursor: pointer;
            transition: var(--transition);
            white-space: nowrap;
          }
          
          .search-button:hover {
            background: var(--primary-dark);
            transform: translateY(-2px);
          }
          
          .advanced-filters {
            padding: 1.5rem;
            border-top: 1px solid var(--gray-200);
            background: var(--gray-50);
          }
          
          .filter-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1rem;
            margin-bottom: 1.5rem;
          }
          
          .filter-group {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
          }
          
          .filter-group label {
            font-size: 0.85rem;
            font-weight: 600;
            color: var(--text-dark);
          }
          
          .filter-group select,
          .filter-group input {
            padding: 0.75rem;
            border: 1px solid var(--gray-300);
            border-radius: var(--radius);
            font-size: 0.9rem;
            outline: none;
            transition: var(--transition);
          }
          
          .filter-group select:focus,
          .filter-group input:focus {
            border-color: var(--primary-color);
            box-shadow: 0 0 0 3px rgba(0, 97, 255, 0.2);
          }
          
          .filter-actions {
            display: flex;
            justify-content: flex-end;
          }
          
          .clear-filters {
            padding: 0.5rem 1rem;
            background: transparent;
            color: var(--primary-color);
            border: 1px solid var(--primary-color);
            border-radius: var(--radius);
            font-weight: 500;
            font-size: 0.9rem;
            cursor: pointer;
            transition: var(--transition);
          }
          
          .clear-filters:hover {
            background: var(--primary-color);
            color: white;
          }
          
          @media (max-width: 768px) {
            .search-main {
              flex-direction: column;
            }
            
            .search-input-container {
              width: 100%;
            }
            
            .advanced-toggle {
              margin-left: 0;
              margin-top: 0.75rem;
              justify-content: center;
              width: 100%;
            }
            
            .filter-grid {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </section>
  );
};