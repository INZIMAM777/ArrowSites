import { useNavigate } from "react-router-dom";
import { useCallback, useState, useMemo, useRef, useEffect } from "react";
import { useFirebase } from "../../context/FirebaseContext";
import { FiSearch, FiX, FiChevronDown, FiChevronUp, FiFilter, FiSliders } from 'react-icons/fi';

// Color palettes for light and dark modes
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
      primary: "#10151eff",
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

export const Hero = ({ isDarkMode }) => {
  const navigate = useNavigate();
  const { properties } = useFirebase();
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [activeTab, setActiveTab] = useState("");
  const [filters, setFilters] = useState({
    propertyType: "",
    minPrice: "",
    maxPrice: "",
    bedrooms: "",
    location: "",
    bathrooms: "",
    area_sqft: "",
    furnishing: "",
    transaction_type: "",
    year_built: ""
  });
  const [suggestions, setSuggestions] = useState([]);
  const [currentBackground, setCurrentBackground] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  const searchRef = useRef(null);

  // Get current theme based on isDarkMode prop from Header
  const theme = isDarkMode ? colorTheme.dark : colorTheme.light;

  // Background images for rotation
  const backgroundImages = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=2070&q=80"
  ];

  // Rotate background images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground(prev => (prev + 1) % backgroundImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Property type options
  const propertyTypes = [
    "Residential Flat", "Residential Floors", "Residential Plot",
    "Residential Villa", "Residential Penthouse","Residential Service Apartment", 
    "Commercial Shop", "Commercial Office Space","Commercial Guest House","Commercial Service Apartment",
    "Industrial Factory","Industrial Plot","Industrial Land for Warehouse/Industry","Warehouse – Commercial",
    "Warehouse – Agro","Warehouse – Transport & Logistic","Warehouse Land / Industrial Land","Farm House – Ready",
    "Farm House Land"
  ];

  // Location suggestions based on properties
  const locationSuggestions = useMemo(() => {
    if (!properties.length) return [];
    const locations = [...new Set(properties.map(p => p.address.split(',')[0]))];
    return locations.slice(0, 5);
  }, [properties]);

  // Handle search with filters
  const handleSearch = useCallback((e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    
    if (searchTerm) params.set("search", searchTerm.trim());
    if (filters.propertyType) params.set("propertyType", filters.propertyType);
    if (filters.location) params.set("location", filters.location);
    if (filters.minPrice) params.set("minPrice", filters.minPrice);
    if (filters.maxPrice) params.set("maxPrice", filters.maxPrice);
    if (filters.bedrooms) params.set("bedrooms", filters.bedrooms);
    if (filters.bathrooms) params.set("bathrooms", filters.bathrooms);
    if (filters.area_sqft) params.set("area_sqft", filters.area_sqft);
    if (filters.furnishing) params.set("furnishing", filters.furnishing);
    if (filters.transaction_type) params.set("transaction_type", filters.transaction_type);
    if (filters.year_built) params.set("year_built", filters.year_built);
    if (activeTab) params.set("propertyType", activeTab);
    
    navigate(`/Cards?${params.toString()}`);
  }, [searchTerm, filters, activeTab, navigate]);

  // Update suggestions based on input
  useEffect(() => {
    if (searchTerm.length > 2) {
      const filtered = properties.filter(property => 
        property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.type.toLowerCase().includes(searchTerm.toLowerCase())
      ).slice(0, 5);
      
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  }, [searchTerm, properties]);

  // Handle click outside to close suggestions
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSuggestions([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle filter change
  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  // Count active filters
  const activeFiltersCount = useMemo(() => {
    return Object.values(filters).filter(value => value !== "").length;
  }, [filters]);

  // Reset all filters
  const handleResetFilters = () => {
    setFilters({
      propertyType: "",
      minPrice: "",
      maxPrice: "",
      bedrooms: "",
      location: "",
      bathrooms: "",
      area_sqft: "",
      furnishing: "",
      transaction_type: "",
      year_built: ""
    });
    setSearchTerm("");
  };

  // Quick stats component
  const StatsComponent = () => {
    const stats = [
      { value: "10K+", label: "Properties" },
      { value: "5K+", label: "Customers" },
      { value: "50+", label: "Cities" }
    ];

    return (
      <div style={heroStyles.statsContainer}>
        {stats.map((stat, index) => (
          <div key={index} style={heroStyles.statItem}>
            <div style={heroStyles.statValue}>{stat.value}</div>
            <div style={heroStyles.statLabel}>{stat.label}</div>
          </div>
        ))}
      </div>
    );
  };

  // Get styles function (adapted from SearchAndFilter)
  const getStyles = () => {
    return {
      container: {
        backgroundColor: theme.background.secondary,
        borderRadius: '16px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
        padding: '24px',
        maxWidth: '900px',
        margin: '0 auto',
        transition: 'all 0.3s ease',
        border: `2px solid ${theme.border.primary}`,
        fontFamily: "'Montserrat', sans-serif",
      },
      searchForm: {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        position: 'relative',
      },
      searchInputContainer: {
        position: 'relative',
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
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '16px',
        marginBottom: '24px',
        maxHeight: showFilters ? '1000px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.4s ease, margin-bottom 0.4s ease',
      },
      filterGroup: {
        marginBottom: '12px'
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
        maxHeight: showFilters ? '100px' : '0',
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
      },
      suggestionsBox: {
        position: 'absolute',
        top: '100%',
        left: 0,
        right: 0,
        backgroundColor: theme.background.primary,
        borderRadius: '10px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
        zIndex: 10,
        maxHeight: '250px',
        overflowY: 'auto',
        border: `1px solid ${theme.border.primary}`,
        marginTop: '4px',
      },
      suggestionItem: {
        padding: '12px',
        borderBottom: `1px solid ${theme.border.primary}`,
        cursor: 'pointer',
        transition: 'background-color 0.2s ease',
        fontSize: '14px',
        color: theme.text.primary,
        backgroundColor: theme.background.primary,
        fontFamily: "'Montserrat', sans-serif",
      }
    };
  };

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

  const styles = getStyles();

  // Hero Styles (using the current theme)
  const heroStyles = {
    heroSection: {
      position: "relative",
      height: "92vh",
      minHeight: "560px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      color: theme.text.primary,
      fontFamily: "'Montserrat', sans-serif",
      transition: "background-image 1s ease-in-out",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundImage: `linear-gradient(${isDarkMode ? 'rgba(15, 23, 42, 0.85)' : 'hsla(0, 0%, 100%, 0.05)'}, ${isDarkMode ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.05)'}), url(${backgroundImages[currentBackground]})`
    },
    heroContent: {
      position: "relative",
      zIndex: 2,
      width: "90%",
      maxWidth: "1000px",
      padding: "1.5rem",
      textAlign: "center",
    },
    heroTitle: {
      fontSize: "clamp(2rem, 5vw, 3.2rem)",
      fontWeight: 700,
      lineHeight: 1.1,
      marginBottom: "1rem",
      textShadow: isDarkMode ? "0 2px 10px rgba(0,0,0,0.5)" : "",
      fontFamily: "'Gilroy', 'Montserrat', sans-serif",
    },
    heroSubtitle: {
      fontSize: "clamp(0.9rem, 2vw, 1.2rem)",
      maxWidth: "700px",
      margin: "0 auto 2rem",
      fontWeight: 300,
      opacity: 0.9,
      color: theme.text.secondary,
      fontFamily: "'Montserrat', sans-serif",
    },
    tabsContainer: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "1.5rem",
      gap: "0.8rem",
      flexWrap: "wrap",
    },
    tabButton: {
      padding: "0.6rem 1.2rem",
      borderRadius: "25px",
      border: "none",
      background: isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0,0,0,0.05)",
      color: theme.text.primary,
      fontSize: "0.9rem",
      fontWeight: 500,
      cursor: "pointer",
      transition: "all 0.3s ease",
      backdropFilter: "blur(10px)",
      fontFamily: "'Montserrat', sans-serif",
    },
    activeTab: {
      background: "rgba(59, 130, 246, 0.8)",
      transform: "scale(1.05)",
    },
    scrollIndicator: {
      position: "absolute",
      bottom: "1rem",
      left: "50%",
      transform: "translateX(-50%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      color: theme.text.primary,
      opacity: 0.8,
      zIndex: 2,
    },
    scrollText: {
      marginBottom: "0.4rem",
      fontSize: "0.8rem",
      fontFamily: "'Montserrat', sans-serif",
    },
    scrollArrow: {
      width: "16px",
      height: "16px",
      borderRight: `2px solid ${theme.text.primary}`,
      borderBottom: `2px solid ${theme.text.primary}`,
      transform: "rotate(45deg)",
      animation: "bounce 2s infinite",
    },
    statsContainer: {
      display: "flex",
      justifyContent: "space-around",
      marginTop: "2.5rem",
      flexWrap: "wrap",
      gap: "1.5rem",
    },
    statItem: {
      textAlign: "center",
    },
    statValue: {
      fontSize: "2rem",
      fontWeight: 700,
      marginBottom: "0.3rem",
      textShadow: "0 2px 4px rgba(0,0,0,0.3)",
      background: "linear-gradient(90deg, #60a5fa, #3b82f6)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      fontFamily: "'Gilroy', 'Montserrat', sans-serif",
    },
    statLabel: {
      fontSize: "0.85rem",
      opacity: 0.9,
      fontWeight: 300,
      color: theme.text.secondary,
      fontFamily: "'Montserrat', sans-serif",
    },
  };

  return (
    <section style={heroStyles.heroSection}>
      <div style={heroStyles.heroContent}>
        <h1 style={heroStyles.heroTitle}>Find Your Dream Property</h1>
        <p style={heroStyles.heroSubtitle}>
          Discover luxury homes, modern apartments, and premium investment properties
        </p>

        {/* Transaction Type Tabs */}
        <div style={heroStyles.tabsContainer}>
          {["Residential Flat", "Commercial shop", "Industrial plot", "Warehouse - Agro", "Farm House Land"].map((tab) => (
            <button 
              key={tab}
              style={{
                ...heroStyles.tabButton,
                ...(activeTab === tab ? heroStyles.activeTab : {})
              }}
              onClick={() => setActiveTab(tab === activeTab ? "" : tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Advanced Search Container */}
        <div style={styles.container}>
          <form
            style={styles.searchForm}
            onSubmit={handleSearch}
          >
            <div style={styles.searchInputContainer} ref={searchRef}>
              <input
                type="text"
                style={{
                  ...styles.input,
                  ...(isSearchFocused ? styles.inputFocus : {})
                }}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                placeholder="Search by location, address, property type, or features..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Search properties"
              />
              {searchTerm && (
                <button
                  type="button"
                  style={styles.clearButton}
                  onClick={() => setSearchTerm("")}
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
              {suggestions.length > 0 && (
                <div style={styles.suggestionsBox}>
                  {suggestions.map((suggestion, index) => (
                    <div 
                      key={index}
                      style={styles.suggestionItem}
                      onMouseOver={(e) => {
                        e.target.style.backgroundColor = theme.background.secondary;
                      }}
                      onMouseOut={(e) => {
                        e.target.style.backgroundColor = theme.background.primary;
                      }}
                      onClick={() => {
                        setSearchTerm(suggestion.title);
                        setSuggestions([]);
                      }}
                    >
                      {suggestion.title}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Filter Toggle Button */}
            <div style={styles.toggleFiltersButton}>
              <button
                type="button"
                style={styles.toggleButton}
                onClick={() => setShowFilters(!showFilters)}
                onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyles.tertiaryButtonHover.backgroundColor}
                onMouseOut={(e) => e.target.style.backgroundColor = styles.toggleButton.backgroundColor}
              >
                {showFilters ? (
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

            {/* Advanced Filters (collapsible) */}
            {showFilters && (
              <>
                <h3 style={styles.filtersTitle}>
                  <FiSliders size={20} />
                  Refine Your Search
                  {activeFiltersCount > 0 && (
                    <span style={styles.badge}>{activeFiltersCount}</span>
                  )}
                </h3>
                
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
                      onChange={(e) => handleFilterChange("propertyType", e.target.value)}
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
                  {/* <div style={styles.filterGroup}>
                    <label htmlFor="transaction_type" style={styles.label}>Transaction Type</label>
                    <select
                      id="transaction_type"
                      style={{
                        ...styles.input,
                        ...styles.select
                      }}
                      name="transaction_type"
                      value={filters.transaction_type}
                      onChange={(e) => handleFilterChange("transaction_type", e.target.value)}
                    >
                      <option value="">Any</option>
                      <option value="Sale">Sale</option>
                      <option value="Rent">Rent</option>
                      <option value="Lease">Lease</option>
                    </select>
                  </div> */}

                  {/* Price Range Filter */}
                  {/* <div style={styles.filterGroup}>
                    <label style={styles.label}>Price Range (in Lakhs)</label>
                    <div style={styles.priceRangeContainer}>
                      <input
                        type="number"
                        style={styles.input}
                        name="minPrice"
                        placeholder="Min"
                        value={filters.minPrice}
                        onChange={(e) => handleFilterChange("minPrice", e.target.value)}
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
                        onChange={(e) => handleFilterChange("maxPrice", e.target.value)}
                        min="0"
                        step="10"
                      />
                    </div>
                  </div> */}

                  {/* Bedrooms Filter */}
                  {/* <div style={styles.filterGroup}>
                    <label htmlFor="bedrooms" style={styles.label}>Bedrooms</label>
                    <select
                      id="bedrooms"
                      style={{
                        ...styles.input,
                        ...styles.select
                      }}
                      name="bedrooms"
                      value={filters.bedrooms}
                      onChange={(e) => handleFilterChange("bedrooms", e.target.value)}
                    >
                      <option value="">Any</option>
                      <option value="1">1+</option>
                      <option value="2">2+</option>
                      <option value="3">3+</option>
                      <option value="4">4+</option>
                      <option value="5">5+</option>
                    </select>
                  </div> */}

                  {/* Bathrooms Filter */}
                  {/* <div style={styles.filterGroup}>
                    <label htmlFor="bathrooms" style={styles.label}>Bathrooms</label>
                    <select
                      id="bathrooms"
                      style={{
                        ...styles.input,
                        ...styles.select
                      }}
                      name="bathrooms"
                      value={filters.bathrooms}
                      onChange={(e) => handleFilterChange("bathrooms", e.target.value)}
                    >
                      <option value="">Any</option>
                      <option value="1">1+</option>
                      <option value="2">2+</option>
                      <option value="3">3+</option>
                      <option value="4">4+</option>
                    </select>
                  </div> */}

                  {/* Area Filter */}
                  <div style={styles.filterGroup}>
                    <label htmlFor="area_sqft" style={styles.label}>Area (sq ft)</label>
                    <input
                      type="number"
                      style={styles.input}
                      name="area_sqft"
                      placeholder="Minimum area"
                      value={filters.area_sqft}
                      onChange={(e) => handleFilterChange("area_sqft", e.target.value)}
                      min="0"
                      step="100"
                    />
                  </div>

                  {/* Location Filter */}
                  <div style={styles.filterGroup}>
                    <label htmlFor="location" style={styles.label}>Location</label>
                    <select
                      id="location"
                      style={{
                        ...styles.input,
                        ...styles.select
                      }}
                      name="location"
                      value={filters.location}
                      onChange={(e) => handleFilterChange("location", e.target.value)}
                    >
                      <option value="">All Locations</option>
                      {locationSuggestions.map((location, index) => (
                        <option key={index} value={location}>{location}</option>
                      ))}
                    </select>
                  </div>

                  {/* Furnishing Filter */}
                  {/* <div style={styles.filterGroup}>
                    <label htmlFor="furnishing" style={styles.label}>Furnishing</label>
                    <select
                      id="furnishing"
                      style={{
                        ...styles.input,
                        ...styles.select
                      }}
                      name="furnishing"
                      value={filters.furnishing}
                      onChange={(e) => handleFilterChange("furnishing", e.target.value)}
                    >
                      <option value="">Any</option>
                      <option value="Fully-Furnished">Fully Furnished</option>
                      <option value="Semi-Furnished">Semi Furnished</option>
                      <option value="Unfurnished">Unfurnished</option>
                    </select>
                  </div> */}

                  {/* Year Built Filter */}
                  {/* <div style={styles.filterGroup}>
                    <label htmlFor="year_built" style={styles.label}>Year Built</label>
                    <input
                      type="number"
                      style={styles.input}
                      name="year_built"
                      placeholder="Year built after"
                      value={filters.year_built}
                      onChange={(e) => handleFilterChange("year_built", e.target.value)}
                      min="1900"
                      max={new Date().getFullYear()}
                      step="1"
                    />
                  </div> */}
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
              </>
            )}
          </form>
        </div>

        {/* Stats Component */}
        <StatsComponent />
      </div>

      {/* Scroll Indicator */}
      <div style={heroStyles.scrollIndicator}>
        <div style={heroStyles.scrollText}>Scroll to explore</div>
        <div style={heroStyles.scrollArrow}></div>
      </div>

      {/* Inline CSS for animations */}
      <style>
        {`
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translateY(0) rotate(45deg);
            }
            40% {
              transform: translateY(-8px) rotate(45deg);
            }
            60% {
              transform: translateY(-4px) rotate(45deg);
            }
          }
        `}
      </style>
    </section>
  );
};