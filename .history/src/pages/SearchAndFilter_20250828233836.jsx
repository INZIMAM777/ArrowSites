import { useState, useEffect } from "react";
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

  // Update search term when initialSearch changes (e.g., from URL)
  useEffect(() => {
    setSearchTerm(initialSearch);
  }, [initialSearch]);

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

  const handleSearchClick = () => {
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
    setFilters({
      propertyType: "",
      minPrice: "",
      maxPrice: "",
      bedrooms: "",
      bathrooms: "",
    });
    onFilter({});
    setSearchTerm(""); // Also reset search term
  };

  // Enhanced styles with better organization
  const styles = {
    container: {
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      padding: '16px',
      maxWidth: '1000px',
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
      '&:hover': {
        backgroundColor: '#2563eb'
      },
      '&:active': {
        backgroundColor: '#1d4ed8'
      }
    },
    secondaryButton: {
      backgroundColor: 'transparent',
      color: '#4b5563',
      border: '1px solid #d1d5db',
      '&:hover': {
        backgroundColor: '#f9fafb',
        color: '#1f2937',
        borderColor: '#9ca3af'
      }
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
      marginBottom: '20px'
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
      gap: '8px',
      '& span': {
        color: '#9ca3af',
        fontSize: '14px'
      }
    },
    filterButtons: {
      display: 'flex',
      gap: '12px',
      marginTop: '8px'
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
      padding: '4px',
      '&:hover': {
        color: '#6b7280'
      }
    }
  };

  // Helper function to merge styles
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
          style={mergeStyles(
            styles.button,
            styles.primaryButton
          )}
          onClick={handleSearchClick} // Use the new click handler
        >
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
                  <option value="Apartment">Apartment</option>
                  <option value="Factory">Factory</option>
                  <option value="Shop">Shop</option>
                  <option value="Villa">Villa</option>
                  <option value="Warehouse">Warehouse</option>
                  <option value="Office Space">Office Space</option>
                  <option value="Farm House">Farm House</option>
                  <option value="Industrial Plot">Industrial Plot</option>
                  <option value="Guest House">Guest House</option>
                  <option value="Residential Plot">Residential Plot</option>
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
                  <span>to</span>
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