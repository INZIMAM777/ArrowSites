import { useState, useEffect, useCallback } from "react";
import PropTypes from 'prop-types';

export const SearchAndFilter = ({
  onSearch,
  onFilter,
  showFilters = true,
  initialSearch = "",
  debounceDelay = 300
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
  const [isMobile, setIsMobile] = useState(false);

  // Responsive detection
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Debounce search implementation
  useEffect(() => {
    const handler = setTimeout(() => {
      if (searchTerm.trim() !== "" || initialSearch !== searchTerm) {
        onSearch(searchTerm.trim());
      }
    }, debounceDelay);

    return () => clearTimeout(handler);
  }, [searchTerm, debounceDelay, onSearch, initialSearch]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleApplyFilters = useCallback((e) => {
    e.preventDefault();
    if (filters.minPrice && filters.maxPrice && Number(filters.minPrice) > Number(filters.maxPrice)) {
      alert("Minimum price cannot be greater than maximum price");
      return;
    }
    onFilter(filters);
  }, [filters, onFilter]);

  const handleResetFilters = useCallback(() => {
    setFilters({
      propertyType: "",
      minPrice: "",
      maxPrice: "",
      bedrooms: "",
      bathrooms: "",
    });
    onFilter({});
    setSearchTerm("");
  }, [onFilter]);

  // Enhanced responsive styles
  const styles = {
    container: {
      backgroundColor: '#fff',
      borderRadius: '12px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
      padding: '24px',
      maxWidth: '1200px',
      margin: '0 auto',
      transition: 'all 0.3s ease'
    },
    searchForm: {
      display: 'flex',
      gap: '12px',
      marginBottom: '24px',
      position: 'relative',
      flexDirection: isMobile ? 'column' : 'row'
    },
    searchInputContainer: {
      flex: '1',
      position: 'relative'
    },
    input: {
      width: '100%',
      padding: '14px 20px',
      border: '1px solid #e2e8f0',
      borderRadius: '10px',
      fontSize: '16px',
      transition: 'all 0.2s ease',
      outline: 'none',
      backgroundColor: '#f8fafc',
      '&:focus': {
        borderColor: '#3b82f6',
        boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.2)',
        backgroundColor: '#fff'
      }
    },
    inputFocus: {
      borderColor: '#3b82f6',
      boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.2)',
      backgroundColor: '#fff'
    },
    button: {
      padding: '14px 24px',
      borderRadius: '10px',
      fontWeight: '600',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      border: 'none',
      width: isMobile ? '100%' : 'auto'
    },
    primaryButton: {
      backgroundColor: '#3b82f6',
      color: '#fff',
      '&:hover': {
        backgroundColor: '#2563eb',
        transform: 'translateY(-1px)'
      },
      '&:active': {
        backgroundColor: '#1d4ed8',
        transform: 'none'
      }
    },
    secondaryButton: {
      backgroundColor: 'transparent',
      color: '#4b5563',
      border: '1px solid #d1d5db',
      '&:hover': {
        backgroundColor: '#f9fafb',
        color: '#1f2937',
        borderColor: '#9ca3af',
        transform: 'translateY(-1px)'
      }
    },
    select: {
      appearance: 'none',
      backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%239ca3af\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6 9 12 15 18 9\'%3e%3c/polyline%3e%3c/svg%3e")',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right 16px center',
      backgroundSize: '18px',
      paddingRight: '48px'
    },
    filtersTitle: {
      fontSize: '18px',
      fontWeight: '600',
      color: '#1e293b',
      margin: '16px 0 20px',
      paddingTop: '24px',
      borderTop: '1px solid #f1f5f9'
    },
    filterGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: '24px',
      marginBottom: '24px'
    },
    filterGroup: {
      marginBottom: '16px'
    },
    label: {
      display: 'block',
      fontSize: '14px',
      fontWeight: '500',
      color: '#475569',
      marginBottom: '8px'
    },
    priceRangeContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      flexDirection: isMobile ? 'column' : 'row',
      '& span': {
        color: '#94a3b8',
        fontSize: '16px',
        minWidth: '24px',
        textAlign: 'center'
      }
    },
    filterButtons: {
      display: 'flex',
      gap: '16px',
      marginTop: '16px',
      flexDirection: isMobile ? 'column' : 'row'
    },
    searchIcon: {
      position: 'absolute',
      right: '20px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#94a3b8',
      pointerEvents: 'none'
    },
    clearButton: {
      position: 'absolute',
      right: '52px',
      top: '50%',
      transform: 'translateY(-50%)',
      backgroundColor: 'transparent',
      border: 'none',
      color: '#94a3b8',
      cursor: 'pointer',
      padding: '6px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '&:hover': {
        backgroundColor: '#f1f5f9',
        color: '#64748b'
      }
    },
    priceInput: {
      flex: '1',
      minWidth: isMobile ? '100%' : '120px'
    }
  };

  const mergeStyles = (...styleObjects) => {
    return styleObjects.reduce((merged, current) => {
      return { ...merged, ...current };
    }, {});
  };

  return (
    <div style={styles.container}>
      {/* Search Section */}
      <div style={styles.searchForm}>
        <div style={styles.searchInputContainer}>
          <input
            type="text"
            style={mergeStyles(
              styles.input,
              isFocused ? styles.inputFocus : {}
            )}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Search by location, address, ZIP code..."
            value={searchTerm}
            onChange={handleSearchChange}
            aria-label="Search properties"
          />
          {searchTerm && (
            <button
              type="button"
              style={styles.clearButton}
              onClick={() => setSearchTerm("")}
              aria-label="Clear search"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          )}
          <div style={styles.searchIcon}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
        </div>
        <button 
          type="button"
          style={mergeStyles(
            styles.button,
            styles.primaryButton
          )}
          onClick={() => onSearch(searchTerm.trim())}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{marginRight: '6px'}}>
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          Search
        </button>
      </div>

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
                  style={mergeStyles(
                    styles.input,
                    styles.select
                  )}
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
                    style={mergeStyles(styles.input, styles.priceInput)}
                    name="minPrice"
                    placeholder="Min Price"
                    value={filters.minPrice}
                    onChange={handleFilterChange}
                    min="0"
                    step="1000"
                  />
                  <span>–</span>
                  <input
                    type="number"
                    style={mergeStyles(styles.input, styles.priceInput)}
                    name="maxPrice"
                    placeholder="Max Price"
                    value={filters.maxPrice}
                    onChange={handleFilterChange}
                    min="0"
                    step="1000"
                  />
                </div>
              </div>

              {/* Bedrooms Filter */}
              <div style={styles.filterGroup}>
                <label htmlFor="bedrooms" style={styles.label}>Bedrooms</label>
                <select
                  id="bedrooms"
                  style={mergeStyles(
                    styles.input,
                    styles.select
                  )}
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
                  style={mergeStyles(
                    styles.input,
                    styles.select
                  )}
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
                style={mergeStyles(
                  styles.button,
                  styles.primaryButton
                )}
              >
                Apply Filters
              </button>
              <button
                type="button"
                style={mergeStyles(
                  styles.button,
                  styles.secondaryButton
                )}
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
  initialSearch: PropTypes.string,
  debounceDelay: PropTypes.number
};

SearchAndFilter.defaultProps = {
  showFilters: true,
  initialSearch: "",
  debounceDelay: 300
};