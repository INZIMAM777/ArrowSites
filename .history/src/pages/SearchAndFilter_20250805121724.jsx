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
      <style jsx>{`
        /* Main Container */
.search-and-filter {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

/* Search Section */
.search-container {
  margin-bottom: 30px;
}

.search-form {
  display: flex;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  overflow: hidden;
}

.search-input {
  flex: 1;
  padding: 12px 16px;
  border: none;
  font-size: 16px;
  outline: none;
  transition: box-shadow 0.3s ease;
}

.search-input:focus {
  box-shadow: inset 0 0 0 2px #3f51b5;
}

.search-button {
  padding: 12px 24px;
  background-color: #3f51b5;
  color: white;
  border: none;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.2s;
}

.search-button:hover {
  background-color: #303f9f;
}

/* Filters Section */
.filters-container {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.filters-title {
  margin-top: 0;
  margin-bottom: 20px;
  color: #333;
  font-size: 18px;
  font-weight: 600;
}

/* Filter Grid Layout */
.filter-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  margin-bottom: 20px;
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
}

.filter-label {
  margin-bottom: 8px;
  font-weight: 600;
  color: #555;
  font-size: 14px;
}

.filter-select, 
.filter-input {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  transition: border-color 0.3s ease;
}

.filter-select:focus,
.filter-input:focus {
  border-color: #3f51b5;
  outline: none;
}

/* Price Range Specific Styles */
.price-range-container {
  display: flex;
  align-items: center;
  gap: 10px;
}

.price-input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.price-separator {
  color: #666;
}

/* Filter Buttons */
.filter-buttons {
  display: flex;
  gap: 12px;
}

.apply-button {
  flex: 1;
  padding: 12px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.2s;
}

.apply-button:hover {
  background-color: #388e3c;
}

.reset-button {
  flex: 1;
  padding: 12px;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.2s;
}

.reset-button:hover {
  background-color: #d32f2f;
}
      `}</style>

      {/* Search Section */}
      <div className="search-container">
        <form onSubmit={handleSearchSubmit} className="search-form">
          <input
            type="text"
            className="search-input"
            placeholder="Search by location, address, etc."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </div>

      {/* Filters Section - Conditionally Rendered */}
      {showFilters && (
        <div className="filters-container">
          <h3 className="filters-title">Filters</h3>
          <form onSubmit={handleApplyFilters}>
            <div className="filter-grid">
              {/* Property Type Filter */}
              <div className="filter-group">
                <label className="filter-label">Property Type</label>
                <select
                  className="filter-select"
                  name="propertyType"
                  value={filters.propertyType}
                  onChange={handleFilterChange}
                >
                  <option value="">All Types</option>
                  <option value="house">House</option>
                  <option value="apartment">Apartment</option>
                  <option value="condo">Condo</option>
                  <option value="land">Land</option>
                </select>
              </div>

              {/* Price Range Filter */}
              <div className="filter-group">
                <label className="filter-label">Price Range</label>
                <div className="price-range-container">
                  <input
                    type="number"
                    className="price-input"
                    name="minPrice"
                    placeholder="Min"
                    value={filters.minPrice}
                    onChange={handleFilterChange}
                  />
                  <span>-</span>
                  <input
                    type="number"
                    className="price-input"
                    name="maxPrice"
                    placeholder="Max"
                    value={filters.maxPrice}
                    onChange={handleFilterChange}
                  />
                </div>
              </div>

              {/* Bedrooms Filter */}
              <div className="filter-group">
                <label className="filter-label">Bedrooms</label>
                <select
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
                </select>
              </div>

              {/* Bathrooms Filter */}
              <div className="filter-group">
                <label className="filter-label">Bathrooms</label>
                <select
                  className="filter-select"
                  name="bathrooms"
                  value={filters.bathrooms}
                  onChange={handleFilterChange}
                >
                  <option value="">Any</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
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
                Reset
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