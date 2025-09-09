import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { FiSearch, FiX, FiChevronDown, FiChevronUp, FiFilter, FiSliders } from 'react-icons/fi';

// Color palettes for light and dark modes (same as Hero component)
const colorTheme = {
  dark: {
    background: {
      primary: "#0f172a",
      secondary: "#1e293b",
      tertiary: "#334155",
      overlay: "rgba(0, 0, 0, 0.7)",
    },
    text: {
      primary: "#f8fafc",
      secondary: "#cbd5e1",
      accent: "#60a5fa",
    },
    border: {
      primary: "#334155",
      accent: "#60a5fa",
    },
    button: {
      primary: "#3b82f6",
      primaryHover: "#2563eb",
      secondary: "#1e293b",
      secondaryHover: "#334155",
    }
  },
  light: {
    background: {
      primary: "#ffffff",
      secondary: "#f8fafc",
      tertiary: "#e2e8f0",
      overlay: "rgba(255, 255, 255, 0.7)",
    },
    text: {
      primary: "#1e293b",
      secondary: "#475569",
      accent: "#3b82f6",
    },
    border: {
      primary: "#e2e8f0",
      accent: "#3b82f6",
    },
    button: {
      primary: "#3b82f6",
      primaryHover: "#2563eb",
      secondary: "#f1f5f9",
      secondaryHover: "#e2e8f0",
    }
  }
};

export const SearchAndFilter = ({
  onSearch,
  onFilter,
  showFilters = true,
  initialSearch = "",
  initialFilters = {},
  debounceDelay = 300,
  defaultFiltersOpen = false,
  isDarkMode = false
}) => {
  const theme = isDarkMode ? colorTheme.dark : colorTheme.light;
  
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [filters, setFilters] = useState({
    propertyType: initialFilters.propertyType || "",
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
  const [filtersVisible, setFiltersVisible] = useState(defaultFiltersOpen);
  const [activeFiltersCount, setActiveFiltersCount] = useState(0);

  // Update search term when initialSearch changes
  useEffect(() => {
    setSearchTerm(initialSearch);
  }, [initialSearch]);

  // Update filters when initialFilters changes
  useEffect(() => {
    setFilters({
      propertyType: initialFilters.propertyType || "",
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

  // Count active filters
  useEffect(() => {
    const count = Object.values(filters).filter(value => value !== "").length;
    setActiveFiltersCount(count);
  }, [filters]);

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
    setSearchTerm("");
    onSearch("");
  };

  const toggleFilters = () => {
    setFiltersVisible(!filtersVisible);
  };

  // Component styles using the theme
  const getStyles = () => ({
    container: {
      backgroundColor: theme.background.secondary,
      borderRadius: '16px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
      padding: '24px',
      maxWidth: '1200px',
      margin: '0 auto 2rem',
      transition: 'all 0.3s ease',
      border: `1px solid ${theme.border.primary}`,
      fontFamily: "'Montserrat', sans-serif",
    },
    searchForm: {
      display: 'flex',
      gap: '12px',
      marginBottom: '16px',
      position: 'relative',
      flexWrap: 'wrap',
    },
    searchInputContainer: {
      flex: '1',
      position: 'relative',
      minWidth: '250px',
    },
    input: {
      width: '100%',
      padding: '16px 52px 16px 20px',
      border: `2px solid ${theme.border.primary}`,
      borderRadius: '12px',
      fontSize: '16px',
      transition: 'all 0.2s ease',
      outline: 'none',
      backgroundColor: theme.background.primary,
      color: theme.text.primary,
      fontFamily: "'Montserrat', sans-serif",
    },
    inputFocus: {
      borderColor: theme.border.accent,
      boxShadow: `0 0 0 4px ${theme.border.accent}20`,
      backgroundColor: theme.background.primary,
    },
    button: {
      padding: '16px 24px',
      borderRadius: '12px',
      fontWeight: '600',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      border: 'none',
      fontFamily: "'Montserrat', sans-serif",
    },
    primaryButton: {
      background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
      color: '#fff',
      boxShadow: '0 4px 12px rgba(59, 130, 246, 0.25)',
    },
    secondaryButton: {
      backgroundColor: 'transparent',
      color: theme.text.secondary,
      border: `2px solid ${theme.border.primary}`,
    },
    tertiaryButton: {
      backgroundColor: 'transparent',
      color: theme.text.accent,
      border: `2px solid ${theme.border.accent}`,
    },
    select: {
      appearance: 'none',
      backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZXZyb24tZG93biI+PHBhdGggZD0ibTYgOSA2IDYgNi02Ii8+PC9zdmc+")',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right 16px center',
      backgroundSize: '18px',
      paddingRight: '48px'
    },
    filtersTitle: {
      fontSize: '18px',
      fontWeight: '700',
      color: theme.text.primary,
      margin: '20px 0 16px',
      paddingTop: '20px',
      borderTop: `1px solid ${theme.border.primary}`,
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontFamily: "'Gilroy', 'Montserrat', sans-serif",
    },
    filterGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: '20px',
      marginBottom: '24px',
      maxHeight: filtersVisible ? '1000px' : '0',
      overflow: 'hidden',
      transition: 'max-height 0.4s ease, margin-bottom 0.4s ease',
    },
    filterGroup: {
      marginBottom: '16px'
    },
    label: {
      display: 'block',
      fontSize: '14px',
      fontWeight: '600',
      color: theme.text.secondary,
      marginBottom: '8px',
      fontFamily: "'Montserrat', sans-serif",
    },
    priceRangeContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    },
    priceRangeSpan: {
      color: theme.text.secondary,
      fontSize: '16px',
      fontWeight: '500',
      fontFamily: "'Montserrat', sans-serif",
    },
    filterButtons: {
      display: 'flex',
      gap: '16px',
      marginTop: '16px',
      flexWrap: 'wrap',
      maxHeight: filtersVisible ? '100px' : '0',
      overflow: 'hidden',
      transition: 'max-height 0.4s ease, margin-top 0.4s ease',
    },
    searchIcon: {
      position: 'absolute',
      right: '20px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: theme.text.secondary,
      pointerEvents: 'none',
      fontSize: '20px'
    },
    clearButton: {
      position: 'absolute',
      right: '52px',
      top: '50%',
      transform: 'translateY(-50%)',
      backgroundColor: 'transparent',
      border: 'none',
      color: theme.text.secondary,
      cursor: 'pointer',
      padding: '6px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '18px'
    },
    toggleFiltersButton: {
      marginTop: '16px',
      textAlign: 'center'
    },
    toggleButton: {
      padding: '12px 24px',
      borderRadius: '12px',
      fontWeight: '600',
      fontSize: '15px',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      border: 'none',
      backgroundColor: theme.background.primary,
      color: theme.text.accent,
      margin: '0 auto',
      border: `1px solid ${theme.border.accent}`,
      fontFamily: "'Montserrat', sans-serif",
    },
    badge: {
      backgroundColor: theme.text.accent,
      color: 'white',
      borderRadius: '50%',
      width: '22px',
      height: '22px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '12px',
      fontWeight: '600',
      marginLeft: '8px'
    }
  });

  const styles = getStyles();

  // Hover styles for buttons
  const buttonHoverStyles = {
    primaryButtonHover: {
      background: 'linear-gradient(135deg, #2563eb, #1e40af)',
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 16px rgba(37, 99, 235, 0.35)'
    },
    secondaryButtonHover: {
      backgroundColor: theme.background.tertiary,
      color: theme.text.primary,
      borderColor: theme.border.accent
    },
    tertiaryButtonHover: {
      backgroundColor: `${theme.text.accent}15`
    },
    clearButtonHover: {
      color: theme.text.primary,
      backgroundColor: theme.background.tertiary
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
            placeholder="Search by location, address, property type, or features..."
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
              onMouseOver={(e) => {
                e.target.style.color = buttonHoverStyles.clearButtonHover.color;
                e.target.style.backgroundColor = buttonHoverStyles.clearButtonHover.backgroundColor;
              }}
              onMouseOut={(e) => {
                e.target.style.color = styles.clearButton.color;
                e.target.style.backgroundColor = styles.clearButton.backgroundColor;
              }}
            >
              <FiX />
            </button>
          )}
          <div style={styles.searchIcon}>
            <FiSearch />
          </div>
        </div>
        <button
          type="button"
          style={{
            ...styles.button,
            ...styles.primaryButton
          }}
          onClick={handleManualSearch}
          onMouseOver={(e) => {
            e.target.style.background = buttonHoverStyles.primaryButtonHover.background;
            e.target.style.transform = buttonHoverStyles.primaryButtonHover.transform;
            e.target.style.boxShadow = buttonHoverStyles.primaryButtonHover.boxShadow;
          }}
          onMouseOut={(e) => {
            e.target.style.background = styles.primaryButton.background;
            e.target.style.transform = 'none';
            e.target.style.boxShadow = styles.primaryButton.boxShadow;
          }}
        >
          <FiSearch size={18} />
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
            onMouseOut={(e) => e.target.style.backgroundColor = styles.toggleButton.backgroundColor}
          >
            {filtersVisible ? (
              <>
                <FiChevronUp size={18} />
                Hide Filters
              </>
            ) : (
              <>
                <FiChevronDown size={18} />
                Show Filters
              </>
            )}
            {activeFiltersCount > 0 && (
              <span style={styles.badge}>{activeFiltersCount}</span>
            )}
          </button>
        </div>
      )}

      {/* Filters Section */}
      {showFilters && filtersVisible && (
        <>
          <h3 style={styles.filtersTitle}>
            <FiSliders size={20} />
            Refine Your Search
            {activeFiltersCount > 0 && (
              <span style={styles.badge}>{activeFiltersCount}</span>
            )}
          </h3>
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
                onMouseOver={(e) => {
                  e.target.style.background = buttonHoverStyles.primaryButtonHover.background;
                  e.target.style.transform = buttonHoverStyles.primaryButtonHover.transform;
                  e.target.style.boxShadow = buttonHoverStyles.primaryButtonHover.boxShadow;
                }}
                onMouseOut={(e) => {
                  e.target.style.background = styles.primaryButton.background;
                  e.target.style.transform = 'none';
                  e.target.style.boxShadow = styles.primaryButton.boxShadow;
                }}
              >
                <FiFilter size={18} />
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
                <FiX size={18} />
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
  initialFilters: PropTypes.object,
  debounceDelay: PropTypes.number,
  defaultFiltersOpen: PropTypes.bool,
  isDarkMode: PropTypes.bool
};

SearchAndFilter.defaultProps = {
  showFilters: true,
  initialSearch: "",
  initialFilters: {},
  debounceDelay: 300,
  defaultFiltersOpen: false,
  isDarkMode: false
};