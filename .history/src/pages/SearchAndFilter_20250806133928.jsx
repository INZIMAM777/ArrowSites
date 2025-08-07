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
    onSearch(searchTerm.trim());
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleApplyFilters = (e) => {
    e.preventDefault();
    if (filters.minPrice && filters.maxPrice && Number(filters.minPrice) > Number(filters.maxPrice)) {
      alert("Minimum price cannot be greater than maximum price");
      return;
    }
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

  // Styles
  const containerStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '0.5rem',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    padding: '1.5rem'
  };

  const searchFormStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '1.5rem'
  };

  const searchInputContainerStyle = {
    position: 'relative',
    flexGrow: 1
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem 1rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.5rem',
    outline: 'none',
    transition: 'all 0.2s ease',
    fontSize: '1rem'
  };

  const inputFocusStyle = {
    ...inputStyle,
    borderColor: '#3b82f6',
    boxShadow: '0 0 0 2px rgba(59, 130, 246, 0.5)'
  };

  const searchButtonStyle = {
    backgroundColor: '#3b82f6',
    color: '#ffffff',
    padding: '0.75rem 1.5rem',
    borderRadius: '0.5rem',
    border: 'none',
    fontWeight: '500',
    fontSize: '1rem',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    transition: 'background-color 0.2s ease'
  };

  const searchButtonHoverStyle = {
    backgroundColor: '#2563eb'
  };

  const filtersTitleStyle = {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '1rem',
    paddingTop: '1.5rem',
    borderTop: '1px solid #e5e7eb'
  };

  const filterGridStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '1rem',
    marginBottom: '1.5rem'
  };

  const filterGroupStyle = {
    marginBottom: '0.5rem'
  };

  const labelStyle = {
    display: 'block',
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#374151',
    marginBottom: '0.25rem'
  };

  const selectStyle = {
    ...inputStyle,
    appearance: 'none',
    backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%231E40AF%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 0.5rem center',
    backgroundSize: '0.65rem auto',
    paddingRight: '2.5rem'
  };

  const priceRangeContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  };

  const priceSeparatorStyle = {
    color: '#6b7280'
  };

  const filterButtonsStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem'
  };

  const applyButtonStyle = {
    ...searchButtonStyle,
    padding: '0.5rem 1.5rem'
  };

  const resetButtonStyle = {
    backgroundColor: 'transparent',
    color: '#4b5563',
    padding: '0.5rem 1rem',
    borderRadius: '0.375rem',
    border: 'none',
    fontWeight: '500',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'color 0.2s ease'
  };

  const resetButtonHoverStyle = {
    color: '#1f2937'
  };

  return (
    <div style={containerStyle}>
      {/* Search Section */}
      <div>
        <form onSubmit={handleSearchSubmit} style={searchFormStyle}>
          <div style={searchInputContainerStyle}>
            <input
              type="text"
              style={inputStyle}
              onBlur={(e) => e.target.style = inputStyle}
              placeholder="Search by location, address, ZIP code..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search properties"
            />
          </div>
          <button 
            type="submit"
            style={searchButtonStyle}
            onMouseEnter={(e) => e.target.style.backgroundColor = searchButtonHoverStyle.backgroundColor}
            onMouseLeave={(e) => e.target.style.backgroundColor = searchButtonStyle.backgroundColor}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            Search
          </button>
        </form>
      </div>

      {/* Filters Section - Conditionally Rendered */}
      {showFilters && (
        <div>
          <h3 style={filtersTitleStyle}>Refine Your Search</h3>
          <form onSubmit={handleApplyFilters}>
            <div style={filterGridStyle}>
              {/* Property Type Filter */}
              <div style={filterGroupStyle}>
                <label htmlFor="propertyType" style={labelStyle}>Property Type</label>
                <select
                  id="propertyType"
                  style={selectStyle}
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
              <div style={filterGroupStyle}>
                <label style={labelStyle}>Price Range</label>
                <div style={priceRangeContainerStyle}>
                  <input
                    type="number"
                    style={inputStyle}
                    onFocus={(e) => e.target.style = inputFocusStyle}
                    onBlur={(e) => e.target.style = inputStyle}
                    name="minPrice"
                    placeholder="Min"
                    value={filters.minPrice}
                    onChange={handleFilterChange}
                    min="0"
                    step="10000"
                  />
                  <span style={priceSeparatorStyle}>to</span>
                  <input
                    type="number"
                    style={inputStyle}
                    onFocus={(e) => e.target.style = inputFocusStyle}
                    onBlur={(e) => e.target.style = inputStyle}
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
              <div style={filterGroupStyle}>
                <label htmlFor="bedrooms" style={labelStyle}>Bedrooms</label>
                <select
                  id="bedrooms"
                  style={selectStyle}
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
              <div style={filterGroupStyle}>
                <label htmlFor="bathrooms" style={labelStyle}>Bathrooms</label>
                <select
                  id="bathrooms"
                  style={selectStyle}
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
            <div style={filterButtonsStyle}>
              <button 
                type="submit" 
                style={applyButtonStyle}
                onMouseEnter={(e) => e.target.style.backgroundColor = searchButtonHoverStyle.backgroundColor}
                onMouseLeave={(e) => e.target.style.backgroundColor = searchButtonStyle.backgroundColor}
              >
                Apply Filters
              </button>
              <button
                type="button"
                style={resetButtonStyle}
                onMouseEnter={(e) => e.target.style.color = resetButtonHoverStyle.color}
                onMouseLeave={(e) => e.target.style.color = resetButtonStyle.color}
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