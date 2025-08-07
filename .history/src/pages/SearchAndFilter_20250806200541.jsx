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
  const [isFocused, setIsFocused] = useState(false);

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

  // Base styles
  const baseStyles = {
    container: {
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      padding: '16px',
      maxWidth: '1000px',
      margin: '0 auto'
    },
    input: {
      width: '100%',
      padding: '10px 12px',
      border: '1px solid #ddd',
      borderRadius: '6px',
      fontSize: '14px',
      transition: 'all 0.2s ease',
      outline: 'none'
    },
    inputFocus: {
      borderColor: '#3b82f6',
      boxShadow: '0 0 0 2px rgba(59, 130, 246, 0.2)'
    },
    button: {
      padding: '10px 16px',
      borderRadius: '6px',
      fontWeight: '500',
      fontSize: '14px',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '6px'
    },
    primaryButton: {
      backgroundColor: '#3b82f6',
      color: '#fff',
      border: 'none'
    },
    primaryButtonHover: {
      backgroundColor: '#2563eb'
    },
    secondaryButton: {
      backgroundColor: 'transparent',
      color: '#4b5563',
      border: 'none'
    },
    secondaryButtonHover: {
      color: '#1f2937'
    },
    select: {
      backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZXZyb24tZG93biI+PHBhdGggZD0ibTYgOSA2IDYgNi02Ii8+PC9zdmc+")',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right 8px center',
      backgroundSize: '16px',
      paddingRight: '28px'
    }
  };

  // Composite styles
  const styles = {
    searchForm: {
      display: 'flex',
      gap: '8px',
      marginBottom: '16px'
    },
    searchInputContainer: {
      flex: '1',
      position: 'relative'
    },
    filtersTitle: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#1f2937',
      margin: '16px 0 12px',
      paddingTop: '16px',
      borderTop: '1px solid #eee'
    },
    filterGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '12px',
      marginBottom: '16px'
    },
    filterGroup: {
      marginBottom: '8px'
    },
    label: {
      display: 'block',
      fontSize: '13px',
      fontWeight: '500',
      color: '#4b5563',
      marginBottom: '4px'
    },
    priceRangeContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    filterButtons: {
      display: 'flex',
      gap: '8px'
    }
  };

  return (
    <div style={baseStyles.container}>
      {/* Search Section */}
      <form onSubmit={handleSearchSubmit} style={styles.searchForm}>
        <div style={styles.searchInputContainer}>
          <input
            type="text"
            style={{
              ...baseStyles.input,
              ...(isFocused ? baseStyles.inputFocus : {})
            }}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Search by location, address, ZIP code..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Search properties"
          />
        </div>
        <button 
          type="submit"
          style={{
            ...baseStyles.button,
            ...baseStyles.primaryButton
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = baseStyles.primaryButtonHover.backgroundColor}
          onMouseLeave={(e) => e.target.style.backgroundColor = baseStyles.primaryButton.backgroundColor}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          Search
        </button>
      </form>

      {/* Filters Section */}
      {showFilters && (
        <>
          <h3 style={styles.filtersTitle}>Refine Your Search</h3>
          <form onSubmit={handleApplyFilters}>
            <div style={styles.filterGrid}>
              {/* Property Type Filter */}
              <div style={styles.filterGroup}>
                <label htmlFor="propertyType" style={styles.label}>Property Type</label>
                <select
                  id="propertyType"
                  style={{
                    ...baseStyles.input,
                    ...baseStyles.select
                  }}
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
              <div style={styles.filterGroup}>
                <label style={styles.label}>Price Range</label>
                <div style={styles.priceRangeContainer}>
                  <input
                    type="number"
                    style={baseStyles.input}
                    name="minPrice"
                    placeholder="Min"
                    value={filters.minPrice}
                    onChange={handleFilterChange}
                    min="0"
                    step="10000"
                  />
                  <span style={{ color: '#9ca3af' }}>to</span>
                  <input
                    type="number"
                    style={baseStyles.input}
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
              <div style={styles.filterGroup}>
                <label htmlFor="bedrooms" style={styles.label}>Bedrooms</label>
                <select
                  id="bedrooms"
                  style={{
                    ...baseStyles.input,
                    ...baseStyles.select
                  }}
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
              <div style={styles.filterGroup}>
                <label htmlFor="bathrooms" style={styles.label}>Bathrooms</label>
                <select
                  id="bathrooms"
                  style={{
                    ...baseStyles.input,
                    ...baseStyles.select
                  }}
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
            <div style={styles.filterButtons}>
              <button 
                type="submit" 
                style={{
                  ...baseStyles.button,
                  ...baseStyles.primaryButton
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = baseStyles.primaryButtonHover.backgroundColor}
                onMouseLeave={(e) => e.target.style.backgroundColor = baseStyles.primaryButton.backgroundColor}
              >
                Apply Filters
              </button>
              <button
                type="button"
                style={{
                  ...baseStyles.button,
                  ...baseStyles.secondaryButton
                }}
                onMouseEnter={(e) => e.target.style.color = baseStyles.secondaryButtonHover.color}
                onMouseLeave={(e) => e.target.style.color = baseStyles.secondaryButton.color}
                onClick={handleResetFilters}
              >
                Reset All
              </button>
            </div>
          </form>
        </>
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