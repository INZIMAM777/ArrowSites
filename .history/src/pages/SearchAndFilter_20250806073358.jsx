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