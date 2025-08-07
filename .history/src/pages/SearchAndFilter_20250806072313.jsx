import { useState } from "react";
import PropTypes from 'prop-types';

export const SearchAndFilter = ({
  onSearch,
  onFilter,
  showFilters = true,
  initialSearch = ""
}) => {
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [filters, setFilters] = useState({
    propertyType: "",
    minPrice: "",
    maxPrice: "",
    bedrooms: "",
    bathrooms: "",
  });

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleApplyFilters = (e) => {
    e.preventDefault();
    onFilter(filters);
  };

  const handleResetFilters = () => {
    setFilters({
      propertyType: "",
      minPrice: "",
      maxPrice: "",
      bedrooms: "",
      bathrooms: "",
    });
    onFilter({});
  };

  return (
    <div className="search-and-filter">
      <style>{`
        /* Main Container */
        .search-and-filter {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1.5rem;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        /* Search Section */
        .search-container {
          margin-bottom: 2rem;
        }

        .search-form {
          display: flex;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          border-radius: 0.5rem;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .search-form:focus-within {
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          transform: translateY(-1px);
        }

        .search-input {
          flex: 1;
          padding: 0.875rem 1.25rem;
          border: none;
          font-size: 1rem;
          outline: none;
          background-color: #fff;
          color: #374151;
        }

        .search-input::placeholder {
          color: #9CA3AF;
        }

        .search-button {
          padding: 0 1.5rem;
          background-color: #4F46E5;
          color: white;
          border: none;
          cursor: pointer;
          font-weight: 600;
          font-size: 0.9375rem;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .search-button:hover {
          background-color: #4338CA;
        }

        .search-button:active {
          transform: scale(0.98);
        }

        /* Filters Section */
        .filters-container {
          background: #FFFFFF;
          border-radius: 0.75rem;
          padding: 1.5rem;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
          border: 1px solid #E5E7EB;
        }

        .filters-title {
          margin: 0 0 1.5rem 0;
          color: #111827;
          font-size: 1.125rem;
          font-weight: 600;
          letter-spacing: -0.025em;
        }

        /* Filter Grid Layout */
        .filter-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 1.25rem;
          margin-bottom: 1.5rem;
        }

        @media (max-width: 768px) {
          .filter-grid {
            grid-template-columns: 1fr;
          }
        }

        /* Filter Group Styles */
        .filter-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .filter-label {
          font-weight: 500;
          color: #4B5563;
          font-size: 0.875rem;
          line-height: 1.25rem;
        }

        .filter-select, 
        .filter-input {
          padding: 0.625rem 0.875rem;
          border: 1px solid #D1D5DB;
          border-radius: 0.375rem;
          font-size: 0.875rem;
          background-color: #fff;
          color: #111827;
          transition: all 0.15s ease;
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        }

        .filter-select:hover,
        .filter-input:hover {
          border-color: #9CA3AF;
        }

        .filter-select:focus,
        .filter-input:focus {
          border-color: #4F46E5;
          box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
          outline: none;
        }

        /* Price Range Specific Styles */
        .price-range-container {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .price-input {
          flex: 1;
          padding: 0.625rem 0.875rem;
          border: 1px solid #D1D5DB;
          border-radius: 0.375rem;
          font-size: 0.875rem;
        }

        .price-separator {
          color: #6B7280;
          font-weight: 600;
        }

        /* Filter Buttons */
        .filter-buttons {
          display: flex;
          gap: 0.75rem;
        }

        .apply-button {
          flex: 1;
          padding: 0.75rem;
          background-color: #10B981;
          color: white;
          border: none;
          border-radius: 0.375rem;
          cursor: pointer;
          font-weight: 600;
          font-size: 0.875rem;
          transition: all 0.2s ease;
        }

        .apply-button:hover {
          background-color: #059669;
        }

        .apply-button:active {
          transform: scale(0.98);
        }

        .reset-button {
          flex: 1;
          padding: 0.75rem;
          background-color: #F9FAFB;
          color: #6B7280;
          border: 1px solid #E5E7EB;
          border-radius: 0.375rem;
          cursor: pointer;
          font-weight: 600;
          font-size: 0.875rem;
          transition: all 0.2s ease;
        }

        .reset-button:hover {
          background-color: #F3F4F6;
          color: #4B5563;
        }

        .reset-button:active {
          transform: scale(0.98);
        }

        /* Focus styles for accessibility */
        button:focus-visible,
        input:focus-visible,
        select:focus-visible {
          outline: 2px solid #4F46E5;
          outline-offset: 2px;
        }

        /* Animation for filter section */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .filters-container {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>

      {/* Search Section */}
      <div className="search-container">
        <form onSubmit={handleSearchSubmit} className="search-form">
          <input
            type="text"
            className="search-input"
            placeholder="Search by location, address, ZIP code..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Search properties"
          />
          <button type="submit" className="search-button">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            Search
          </button>
        </form>
      </div>

      {/* Filters Section - Conditionally Rendered */}
      {showFilters && (
        <div className="filters-container">
          <h3 className="filters-title">Refine Your Search</h3>
          <form onSubmit={handleApplyFilters}>
            <div className="filter-grid">
              {/* Property Type Filter */}
              <div className="filter-group">
                <label htmlFor="propertyType" className="filter-label">Property Type</label>
                <select
                  id="propertyType"
                  className="filter-select"
                  name="propertyType"
                  value={filters.propertyType}
                  onChange={handleFilterChange}
                >
                  <option value="">All Types</option>
                  <option value="house">House</option>
                  <option value="apartment">Apartment</option>
                  <option value="condo">Condo</option>
                  <option value="townhouse">Townhouse</option>
                  <option value="land">Land</option>
                </select>
              </div>

              {/* Price Range Filter */}
              <div className="filter-group">
                <label className="filter-label">Price Range</label>
                <div className="price-range-container">
                  <input
                    type="number"
                    className="filter-input"
                    name="minPrice"
                    placeholder="Min"
                    value={filters.minPrice}
                    onChange={handleFilterChange}
                    min="0"
                    step="10000"
                  />
                  <span className="price-separator">to</span>
                  <input
                    type="number"
                    className="filter-input"
                    name="maxPrice"
                    placeholder="Max"
                    value={filters.maxPrice}
                    onChange={handleFilterChange}
                    min="0"
                    step="10000"
                  />
                </div>
              </div>

              {/* Bedrooms Filter */}
              <div className="filter-group">
                <label htmlFor="bedrooms" className="filter-label">Bedrooms</label>
                <select
                  id="bedrooms"
                  className="filter-select"
                  name="bedrooms"
                  value={filters.bedrooms}
                  onChange={handleFilterChange}
                >
                  <option value="">Any</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                  <option value="5">5+</option>
                </select>
              </div>

              {/* Bathrooms Filter */}
              <div className="filter-group">
                <label htmlFor="bathrooms" className="filter-label">Bathrooms</label>
                <select
                  id="bathrooms"
                  className="filter-select"
                  name="bathrooms"
                  value={filters.bathrooms}
                  onChange={handleFilterChange}
                >
                  <option value="">Any</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                </select>
              </div>
            </div>

            {/* Filter Buttons */}
            <div className="filter-buttons">
              <button type="submit" className="apply-button">
                Apply Filters
              </button>
              <button
                type="button"
                className="reset-button"
                onClick={handleResetFilters}
              >
                Reset All
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

SearchAndFilter.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onFilter: PropTypes.func.isRequired,
  showFilters: PropTypes.bool,
  initialSearch: PropTypes.string
};

SearchAndFilter.defaultProps = {
  showFilters: true,
  initialSearch: ""
};