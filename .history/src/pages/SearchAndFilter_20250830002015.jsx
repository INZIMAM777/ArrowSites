import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

export const SearchAndFilter = ({
  onSearch,
  onFilter,
  showFilters = true,
  initialSearch = "",
  initialFilters = {},
  debounceDelay = 300,
  defaultFiltersOpen = false // New prop to control initial state
}) => {
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [filters, setFilters] = useState({
    propertyType: initialFilters.propertyType || "",
    propertyCategory: initialFilters.propertyCategory || "",
    minPrice: initialFilters.minPrice || "",
    maxPrice: initialFilters.maxPrice || "",
    bedrooms: initialFilters.bedrooms || "",
    bathrooms: initialFilters.bathrooms || "",
    area_sqft: initialFilters.area_sqft || "",
    furnishing: initialFilters.furnishing || "",
    transaction_type: initialFilters.transaction_type || "",
    year_built: initialFilters.year_built || "",
  });
  const [isFocused, setIsFocused] = useState(false);
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [filtersVisible, setFiltersVisible] = useState(defaultFiltersOpen); // State for filter visibility

  // Update search term when initialSearch changes (e.g., from URL)
  useEffect(() => {
    setSearchTerm(initialSearch);
  }, [initialSearch]);

  // Update filters when initialFilters changes (e.g., from URL)
  useEffect(() => {
    setFilters({
      propertyType: initialFilters.propertyType || "",
      propertyCategory: initialFilters.propertyCategory || "",
      minPrice: initialFilters.minPrice || "",
      maxPrice: initialFilters.maxPrice || "",
      bedrooms: initialFilters.bedrooms || "",
      bathrooms: initialFilters.bathrooms || "",
      area_sqft: initialFilters.area_sqft || "",
      furnishing: initialFilters.furnishing || "",
      transaction_type: initialFilters.transaction_type || "",
      year_built: initialFilters.year_built || "",
    });
  }, [initialFilters]);

  // Debounce search implementation
  useEffect(() => {
    const handler = setTimeout(() => {
      if (searchTerm.trim() !== "" || initialSearch !== searchTerm) {
        onSearch(searchTerm.trim());
      }
    }, debounceDelay);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm, debounceDelay, onSearch, initialSearch]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleManualSearch = () => {
    // Immediately trigger search when button is clicked
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
    const resetFilters = {
      propertyType: "",
      propertyCategory: "",
      minPrice: "",
      maxPrice: "",
      bedrooms: "",
      bathrooms: "",
      area_sqft: "",
      furnishing: "",
      transaction_type: "",
      year_built: "",
    };
    setFilters(resetFilters);
    onFilter(resetFilters);
    setSearchTerm(""); // Also reset search term
    onSearch(""); // Trigger search with empty term
  };

  // Toggle filter visibility
  const toggleFilters = () => {
    setFiltersVisible(!filtersVisible);
  };

  // Enhanced styles with better organization
  const styles = {
    container: {
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      padding: '16px',
      maxWidth: '1200px',
      margin: '0 auto',
      transition: 'all 0.3s ease'
    },
    searchForm: {
      display: 'flex',
      gap: '8px',
      marginBottom: '16px',
      position: 'relative'
    },
    searchInputContainer: {
      flex: '1',
      position: 'relative'
    },
    input: {
      width: '100%',
      padding: '12px 16px',
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      fontSize: '14px',
      transition: 'all 0.2s ease',
      outline: 'none',
      backgroundColor: '#f9fafb',
    },
    inputFocus: {
      borderColor: '#3b82f6',
      boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.2)',
      backgroundColor: '#fff'
    },
    button: {
      padding: '12px 20px',
      borderRadius: '8px',
      fontWeight: '600',
      fontSize: '14px',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      border: 'none'
    },
    primaryButton: {
      backgroundColor: '#3b82f6',
      color: '#fff',
    },
    secondaryButton: {
      backgroundColor: 'transparent',
      color: '#4b5563',
      border: '1px solid #d1d5db',
    },
    tertiaryButton: {
      backgroundColor: 'transparent',
      color: '#3b82f6',
      border: '1px solid #3b82f6',
    },
    select: {
      appearance: 'none',
      backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZXZyb24tZG93biI+PHBhdGggZD0ibTYgOSA2IDYgNi02Ii8+PC9zdmc+")',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right 12px center',
      backgroundSize: '16px',
      paddingRight: '36px'
    },
    filtersTitle: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#1f2937',
      margin: '16px 0 12px',
      paddingTop: '16px',
      borderTop: '1px solid #f3f4f6'
    },
    filterGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '16px',
      marginBottom: '20px',
      maxHeight: filtersVisible ? '1000px' : '0',
      overflow: 'hidden',
      transition: 'max-height 0.3s ease, margin-bottom 0.3s ease',
    },
    filterGroup: {
      marginBottom: '12px'
    },
    label: {
      display: 'block',
      fontSize: '13px',
      fontWeight: '500',
      color: '#4b5563',
      marginBottom: '6px'
    },
    priceRangeContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    priceRangeSpan: {
      color: '#9ca3af',
      fontSize: '14px'
    },
    filterButtons: {
      display: 'flex',
      gap: '12px',
      marginTop: '8px',
      flexWrap: 'wrap',
      maxHeight: filtersVisible ? '100px' : '0',
      overflow: 'hidden',
      transition: 'max-height 0.3s ease, margin-top 0.3s ease',
    },
    searchIcon: {
      position: 'absolute',
      right: '16px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#9ca3af',
      pointerEvents: 'none'
    },
    clearButton: {
      position: 'absolute',
      right: '40px',
      top: '50%',
      transform: 'translateY(-50%)',
      backgroundColor: 'transparent',
      border: 'none',
      color: '#9ca3af',
      cursor: 'pointer',
      padding: '4px'
    },
    toggleFiltersButton: {
      marginTop: '8px',
      textAlign: 'center'
    },
    toggleButton: {padding: '12px 20px',
      borderRadius: '8px',
      fontWeight: '600',
      fontSize: '14px',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      border: 'none'
      
      backgroundColor: 'transparent',
      color: '#3b82f6',
      border: '1px solid #3b82f6',
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center'
    }
  };

  // Hover styles for buttons
  const buttonHoverStyles = {
    primaryButtonHover: {
      backgroundColor: '#2563eb'
    },
    secondaryButtonHover: {
      backgroundColor: '#f9fafb',
      color: '#1f2937',
      borderColor: '#9ca3af'
    },
    tertiaryButtonHover: {
      backgroundColor: '#eff6ff'
    },
    clearButtonHover: {
      color: '#6b7280'
    }
  };

  return (
    <div style={styles.container}>
      {/* Search Section */}
      <div style={styles.searchForm}>
        <div style={styles.searchInputContainer}>
          <input
            type="text"
            style={{
              ...styles.input,
              ...(isFocused ? styles.inputFocus : {})
            }}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Search by location, address, ZIP code, property name..."
            value={searchTerm}
            onChange={handleSearchChange}
            aria-label="Search properties"
          />
          {searchTerm && (
            <button
              type="button"
              style={styles.clearButton}
              onClick={() => {
                setSearchTerm("");
                onSearch("");
              }}
              aria-label="Clear search"
              onMouseOver={(e) => e.target.style.color = buttonHoverStyles.clearButtonHover.color}
              onMouseOut={(e) => e.target.style.color = styles.clearButton.color}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          )}
          <div style={styles.searchIcon}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
        </div>
        <button
          type="button"
          style={{
            ...styles.button,
            ...styles.primaryButton
          }}
          onClick={handleManualSearch}
          onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyles.primaryButtonHover.backgroundColor}
          onMouseOut={(e) => e.target.style.backgroundColor = styles.primaryButton.backgroundColor}
        >
          Search
        </button>
      </div>

      {/* Toggle Filters Button */}
      {showFilters && (
        <div style={styles.toggleFiltersButton}>
          <button
            type="button"
            style={styles.toggleButton}
            onClick={toggleFilters}
            onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyles.tertiaryButtonHover.backgroundColor}
            onMouseOut={(e) => e.target.style.backgroundColor = styles.tertiaryButton.backgroundColor}
          >
            {filtersVisible ? (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ marginRight: '8px' }}>
                  <polyline points="18 15 12 9 6 15"></polyline>
                </svg>
                Hide Filters
              </>
            ) : (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ marginRight: '8px' }}>
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
                Show Filters
              </>
            )}
          </button>
        </div>
      )}

      {/* Filters Section */}
      {showFilters && filtersVisible && (
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
                    ...styles.input,
                    ...styles.select
                  }}
                  name="propertyType"
                  value={filters.propertyType}
                  onChange={handleFilterChange}
                >
                  <option value="">All Types</option>

                  <optgroup label="Residential">
                    <option value="Residential Flat">Residential Flat</option>
                    <option value="Residential Floors">Residential Floors</option>
                    <option value="Residential Plot">Residential Plot</option>
                    <option value="Residential Land">Residential Land</option>
                    <option value="Residential Villa">Residential Villa</option>
                    <option value="Residential Penthouse">Residential Penthouse</option>
                    <option value="Residential Service Apartment">Residential Service Apartment</option>
                  </optgroup>

                  <optgroup label="Commercial">
                    <option value="Commercial Shop">Commercial Shop</option>
                    <option value="Commercial Office Space">Commercial Office Space</option>
                    <option value="Commercial Guest House">Commercial Guest House</option>
                    <option value="Commercial Service Apartment">Commercial Service Apartment</option>
                  </optgroup>

                  <optgroup label="Industrial">
                    <option value="Industrial Factory">Industrial Factory</option>
                    <option value="Industrial Plot">Industrial Plot</option>
                    <option value="Industrial Land for Warehouse/Industry">Industrial Land for Warehouse/Industry</option>
                  </optgroup>

                  <optgroup label="Warehouse">
                    <option value="Warehouse – Commercial">Warehouse – Commercial</option>
                    <option value="Warehouse – Agro">Warehouse – Agro</option>
                    <option value="Warehouse – Transport & Logistic">Warehouse – Transport & Logistic</option>
                    <option value="Warehouse Land / Industrial Land">Warehouse Land / Industrial Land</option>
                  </optgroup>

                  <optgroup label="Farm House">
                    <option value="Farm House – Ready">Farm House – Ready</option>
                    <option value="Farm House Land">Farm House Land</option>
                  </optgroup>
                </select>
              </div>


              {/* Transaction Type Filter */}
              <div style={styles.filterGroup}>
                <label htmlFor="transaction_type" style={styles.label}>Transaction Type</label>
                <select
                  id="transaction_type"
                  style={{
                    ...styles.input,
                    ...styles.select
                  }}
                  name="transaction_type"
                  value={filters.transaction_type}
                  onChange={handleFilterChange}
                >
                  <option value="">Any</option>
                  <option value="Sale">Sale</option>
                  <option value="Rent">Rent</option>
                  <option value="Lease">Lease</option>
                </select>
              </div>

              {/* Price Range Filter */}
              <div style={styles.filterGroup}>
                <label style={styles.label}>Price Range (in Lakhs)</label>
                <div style={styles.priceRangeContainer}>
                  <input
                    type="number"
                    style={styles.input}
                    name="minPrice"
                    placeholder="Min"
                    value={filters.minPrice}
                    onChange={handleFilterChange}
                    min="0"
                    step="10"
                  />
                  <span style={styles.priceRangeSpan}>to</span>
                  <input
                    type="number"
                    style={styles.input}
                    name="maxPrice"
                    placeholder="Max"
                    value={filters.maxPrice}
                    onChange={handleFilterChange}
                    min="0"
                    step="10"
                  />
                </div>
              </div>

              {/* Bedrooms Filter */}
              <div style={styles.filterGroup}>
                <label htmlFor="bedrooms" style={styles.label}>Bedrooms</label>
                <select
                  id="bedrooms"
                  style={{
                    ...styles.input,
                    ...styles.select
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
                    ...styles.input,
                    ...styles.select
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

              {/* Area Filter */}
              <div style={styles.filterGroup}>
                <label htmlFor="area_sqft" style={styles.label}>Area (sq ft)</label>
                <input
                  type="number"
                  style={styles.input}
                  name="area_sqft"
                  placeholder="Minimum area"
                  value={filters.area_sqft}
                  onChange={handleFilterChange}
                  min="0"
                  step="100"
                />
              </div>

              {/* Furnishing Filter */}
              <div style={styles.filterGroup}>
                <label htmlFor="furnishing" style={styles.label}>Furnishing</label>
                <select
                  id="furnishing"
                  style={{
                    ...styles.input,
                    ...styles.select
                  }}
                  name="furnishing"
                  value={filters.furnishing}
                  onChange={handleFilterChange}
                >
                  <option value="">Any</option>
                  <option value="Fully-Furnished">Fully Furnished</option>
                  <option value="Semi-Furnished">Semi Furnished</option>
                  <option value="Unfurnished">Unfurnished</option>
                </select>
              </div>

              {/* Year Built Filter */}
              <div style={styles.filterGroup}>
                <label htmlFor="year_built" style={styles.label}>Year Built</label>
                <input
                  type="number"
                  style={styles.input}
                  name="year_built"
                  placeholder="Year built after"
                  value={filters.year_built}
                  onChange={handleFilterChange}
                  min="1900"
                  max={new Date().getFullYear()}
                  step="1"
                />
              </div>
            </div>

            {/* Filter Buttons */}
            <div style={styles.filterButtons}>
              <button
                type="submit"
                style={{
                  ...styles.button,
                  ...styles.primaryButton
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyles.primaryButtonHover.backgroundColor}
                onMouseOut={(e) => e.target.style.backgroundColor = styles.primaryButton.backgroundColor}
              >
                Apply Filters
              </button>
              <button
                type="button"
                style={{
                  ...styles.button,
                  ...styles.secondaryButton
                }}
                onClick={handleResetFilters}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = buttonHoverStyles.secondaryButtonHover.backgroundColor;
                  e.target.style.color = buttonHoverStyles.secondaryButtonHover.color;
                  e.target.style.borderColor = buttonHoverStyles.secondaryButtonHover.borderColor;
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = styles.secondaryButton.backgroundColor;
                  e.target.style.color = styles.secondaryButton.color;
                  e.target.style.borderColor = styles.secondaryButton.borderColor;
                }}
              >
                Reset All
              </button>
              <button
                type="button"
                style={{
                  ...styles.button,
                  ...styles.tertiaryButton
                }}
                onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
                onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyles.tertiaryButtonHover.backgroundColor}
                onMouseOut={(e) => e.target.style.backgroundColor = styles.tertiaryButton.backgroundColor}
              >
                {showAdvancedFilters ? 'Hide Advanced' : 'Show Advanced'} Filters
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
  initialSearch: PropTypes.string,
  initialFilters: PropTypes.object,
  debounceDelay: PropTypes.number,
  defaultFiltersOpen: PropTypes.bool // New prop type
};

SearchAndFilter.defaultProps = {
  showFilters: true,
  initialSearch: "",
  initialFilters: {},
  debounceDelay: 300,
  defaultFiltersOpen: false // Default to filters closed
};