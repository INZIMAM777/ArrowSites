import { useNavigate } from "react-router-dom";
import { useCallback, useState, useMemo, useRef, useEffect } from "react";
import { useFirebase } from "../../context/FirebaseContext";
import { NavLink } from "react-router-dom";

// Dark theme color palette
const darkTheme = {
  background: {
    primary: "#0f172a", // Dark blue-gray
    secondary: "#1e293b", // Slightly lighter dark blue
    tertiary: "#334155", // Medium dark blue
    overlay: "rgba(0, 0, 0, 0.7)",
  },
  text: {
    primary: "#f8fafc", // Almost white
    secondary: "#cbd5e1", // Light gray
    accent: "#60a5fa", // Light blue
  },
  border: {
    primary: "#334155",
    accent: "#60a5fa",
  },
  button: {
    primary: "#3b82f6", // Blue
    primaryHover: "#2563eb", // Darker blue
    secondary: "#1e293b", // Dark background
    secondaryHover: "#334155", // Lighter dark
  }
};

export const Hero = () => {
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
    location: ""
  });
  const [suggestions, setSuggestions] = useState([]);
  const [currentBackground, setCurrentBackground] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  const searchRef = useRef(null);

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

  return (
    <section style={{
      ...heroStyles.heroSection,
      backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.95)), url(${backgroundImages[currentBackground]})`
    }}>
      <div style={heroStyles.heroContent}>
        <h1 style={heroStyles.heroTitle}>Find Your Dream Property</h1>
        <p style={heroStyles.heroSubtitle}>
          Discover luxury homes, modern apartments, and premium investment properties
        </p>

        {/* Transaction Type Tabs */}
        <div style={heroStyles.tabsContainer}>
          {["Residential", "Commercial", "Industrial", "Warehouse", "Farm House"].map((tab) => (
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
        <div style={heroStyles.searchContainer}>
          <form
            style={heroStyles.searchForm}
            onSubmit={handleSearch}
          >
            <div style={heroStyles.searchInputContainer} ref={searchRef}>
              <div style={heroStyles.searchIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke={darkTheme.text.secondary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search by location, property type, or features..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                style={{
                  ...heroStyles.searchInput,
                  ...(isSearchFocused ? heroStyles.searchInputFocused : {})
                }}
                aria-label="Search properties"
              />
              {suggestions.length > 0 && (
                <div style={heroStyles.suggestionsBox}>
                  {suggestions.map((suggestion, index) => (
                    <div 
                      key={index}
                      style={heroStyles.suggestionItem}
                      onMouseOver={(e) => {
                        e.target.style.backgroundColor = darkTheme.background.secondary;
                      }}
                      onMouseOut={(e) => {
                        e.target.style.backgroundColor = darkTheme.background.primary;
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

            {/* Filter Toggle */}
            <button 
              type="button"
              style={heroStyles.filterToggle}
              onClick={() => setShowFilters(!showFilters)}
            >
              <span>Advanced Filters</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{transform: showFilters ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease'}}>
                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Advanced Filters (collapsible) */}
            {showFilters && (
              <div style={heroStyles.filtersGrid}>
                <select 
                  style={heroStyles.filterSelect}
                  value={filters.propertyType}
                  onChange={(e) => handleFilterChange("propertyType", e.target.value)}
                >
                  <option value="">All Property Types</option>
                  {propertyTypes.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                  ))}
                </select>

                <select 
                  style={heroStyles.filterSelect}
                  value={filters.location}
                  onChange={(e) => handleFilterChange("location", e.target.value)}
                >
                  <option value="">All Locations</option>
                  {locationSuggestions.map((location, index) => (
                    <option key={index} value={location}>{location}</option>
                  ))}
                </select>

                <input
                  type="number"
                  placeholder="Min Price"
                  style={heroStyles.filterSelect}
                  value={filters.minPrice}
                  onChange={(e) => handleFilterChange("minPrice", e.target.value)}
                />
                
                <input
                  type="number"
                  placeholder="Max Price"
                  style={heroStyles.filterSelect}
                  value={filters.maxPrice}
                  onChange={(e) => handleFilterChange("maxPrice", e.target.value)}
                />
              </div>
            )}

            <button 
              type="submit" 
              style={heroStyles.searchButton}
              onMouseOver={(e) => {
                e.target.style.background = darkTheme.button.primaryHover;
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 10px 25px rgba(59, 130, 246, 0.3)";
              }}
              onMouseOut={(e) => {
                e.target.style.background = "linear-gradient(135deg, #3b82f6, #1d4ed8)";
                e.target.style.transform = "none";
                e.target.style.boxShadow = "0 4px 14px rgba(59, 130, 246, 0.4)";
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginRight: '8px'}}>
                <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Search Properties
            </button>
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
    </section>
  );
};

// Header Styles
const headerStyles = {
  header: {
    background: darkTheme.background.primary,
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  },
  headerContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1.5rem",
    height: "85px",
  },
  logoLink: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    fontWeight: 700,
    fontSize: "1.5rem",
  },
  logoIcon: {
    marginRight: "0.5rem",
    fontSize: "1.8rem",
  },
  logoText: {
    background: "linear-gradient(90deg, #60a5fa, #3b82f6)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  mobileMenuToggle: {
    display: "none",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "30px",
    height: "21px",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    padding: 0,
    zIndex: 10,
    outline: "none",
    position: "relative",
  },
  mobileMenuSpan: {
    width: "100%",
    height: "3px",
    background: darkTheme.text.primary,
    borderRadius: "3px",
    transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
    transformOrigin: "left",
  },
  mobileMenuSpanActive1: {
    transform: "rotate(45deg)",
  },
  mobileMenuSpanActive2: {
    opacity: 0,
  },
  mobileMenuSpanActive3: {
    transform: "rotate(-45deg)",
  },
  navLinks: {
    // Styles will be added via media queries in CSS
  },
  navOpen: {
    transform: "translateX(0)",
  },
  navList: {
    display: "flex",
    listStyle: "none",
    alignItems: "center",
    gap: "1.5rem",
    margin: 0,
    padding: 0,
  },
  navItem: {
    textDecoration: "none",
    color: darkTheme.text.primary,
    fontWeight: 500,
    fontSize: "0.95rem",
    transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "0.25rem",
    position: "relative",
    background: "none",
    border: "none",
    fontFamily: "inherit",
  },
  dropdownIcon: {
    transition: "transform 0.2s ease",
  },
  dropdown: {
    position: "relative",
  },
  dropdownMenu: {
    position: "absolute",
    top: "100%",
    left: 0,
    width: "480px",
    background: darkTheme.background.secondary,
    borderRadius: "12px",
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    opacity: 0,
    visibility: "hidden",
    transform: "translateY(10px)",
    transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
    zIndex: 100,
    padding: "1.5rem",
    border: `1px solid ${darkTheme.border.primary}`,
    marginTop: "20px",
  },
  dropdownMenuActive: {
    opacity: 1,
    visibility: "visible",
    transform: "translateY(8px)",
  },
  dropdownContent: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "1.5rem",
  },
  dropdownSection: {
    display: "flex",
    flexDirection: "column",
  },
  dropdownSectionTitle: {
    fontSize: "0.85rem",
    color: darkTheme.text.accent,
    marginBottom: "0.75rem",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    paddingBottom: "0.5rem",
    borderBottom: `1px solid ${darkTheme.border.primary}`,
  },
  dropdownList: {
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    margin: 0,
    padding: 0,
  },
  dropdownListItem: {
    // No specific styles needed
  },
  dropdownLink: {
    padding: "0.5rem 0",
    fontSize: "0.9rem",
    color: darkTheme.text.primary,
    transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
    borderRadius: "4px",
    textDecoration: "none",
    background: "none",
    border: "none",
    textAlign: "left",
    width: "100%",
    cursor: "pointer",
    fontFamily: "inherit",
  },
  authLink: {
    // No specific styles needed
  },
  authButton: {
    padding: "0.6rem 1.25rem",
    borderRadius: "8px",
    fontWeight: 600,
    fontSize: "0.9rem",
    transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
    cursor: "pointer",
    border: "none",
    outline: "none",
    background: darkTheme.button.primary,
    color: "white",
    textDecoration: "none",
    display: "inline-block",
  },
  authButtonSecondary: {
    padding: "0.6rem 1.25rem",
    borderRadius: "8px",
    fontWeight: 600,
    fontSize: "0.9rem",
    transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
    cursor: "pointer",
    border: "none",
    outline: "none",
    background: darkTheme.button.secondary,
    color: darkTheme.text.primary,
    textDecoration: "none",
    display: "inline-block",
  },
};

// Hero Styles
const heroStyles = {
  heroSection: {
    position: "relative",
    height: "90vh",
    minHeight: "560px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    color: darkTheme.text.primary,
    fontFamily: "'Poppins', sans-serif",
    transition: "background-image 1s ease-in-out",
    backgroundSize: "cover",
    backgroundPosition: "center",
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
    textShadow: "0 2px 10px rgba(0,0,0,0.5)",
  },
  heroSubtitle: {
    fontSize: "clamp(0.9rem, 2vw, 1.2rem)",
    maxWidth: "700px",
    margin: "0 auto 2rem",
    fontWeight: 300,
    opacity: 0.9,
    color: darkTheme.text.secondary,
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
    background: "rgba(255,255,255,0.1)",
    color: darkTheme.text.primary,
    fontSize: "0.9rem",
    fontWeight: 500,
    cursor: "pointer",
    transition: "all 0.3s ease",
    backdropFilter: "blur(10px)",
  },
  activeTab: {
    background: "rgba(59, 130, 246, 0.8)",
    transform: "scale(1.05)",
  },
  searchContainer: {
    backgroundColor: darkTheme.background.secondary,
    borderRadius: "16px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
    padding: "1.5rem",
    maxWidth: "800px",
    margin: "0 auto",
    transition: "all 0.3s ease",
    border: `1px solid ${darkTheme.border.primary}`,
  },
  searchForm: {
    display: "flex",
    flexDirection: "column",
    gap: "0.8rem",
    position: "relative",
  },
  searchInputContainer: {
    position: "relative",
  },
  searchIcon: {
    position: "absolute",
    left: "12px",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 2,
  },
  searchInput: {
    width: "100%",
    padding: "0.9rem 1.2rem 0.9rem 40px",
    border: `2px solid ${darkTheme.border.primary}`,
    borderRadius: "10px",
    fontSize: "0.95rem",
    outline: "none",
    backgroundColor: darkTheme.background.primary,
    transition: "border-color 0.3s ease",
    color: darkTheme.text.primary,
  },
  searchInputFocused: {
    borderColor: darkTheme.border.accent,
  },
  suggestionsBox: {
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    backgroundColor: darkTheme.background.primary,
    borderRadius: "10px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
    zIndex: 10,
    maxHeight: "250px",
    overflowY: "auto",
    border: `1px solid ${darkTheme.border.primary}`,
    marginTop: "4px",
  },
  suggestionItem: {
    padding: "0.8rem",
    borderBottom: `1px solid ${darkTheme.border.primary}`,
    cursor: "pointer",
    transition: "background-color 0.2s ease",
    fontSize: "0.9rem",
    color: darkTheme.text.primary,
  },
  filterToggle: {
    padding: "0.5rem 1rem",
    background: "transparent",
    border: `1px solid ${darkTheme.border.primary}`,
    borderRadius: "6px",
    fontSize: "0.85rem",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    margin: "0.5rem 0",
    alignSelf: "flex-start",
    color: darkTheme.text.primary,
    transition: "all 0.2s ease",
  },
  filtersGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "0.8rem",
    marginTop: "0.8rem",
  },
  filterSelect: {
    padding: "0.7rem",
    border: `1px solid ${darkTheme.border.primary}`,
    borderRadius: "6px",
    fontSize: "0.85rem",
    backgroundColor: darkTheme.background.primary,
    color: darkTheme.text.primary,
    outline: "none",
  },
  searchButton: {
    padding: "0.9rem 1.5rem",
    borderRadius: "10px",
    fontWeight: "600",
    fontSize: "0.95rem",
    cursor: "pointer",
    border: "none",
    background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
    color: "#fff",
    transition: "all 0.3s ease",
    marginTop: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 14px rgba(59, 130, 246, 0.4)",
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
  },
  statLabel: {
    fontSize: "0.85rem",
    opacity: 0.9,
    fontWeight: 300,
    color: darkTheme.text.secondary,
  },
  scrollIndicator: {
    position: "absolute",
    bottom: "1rem",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: darkTheme.text.primary,
    opacity: 0.8,
    zIndex: 2,
  },
  scrollText: {
    marginBottom: "0.4rem",
    fontSize: "0.8rem",
  },
  scrollArrow: {
    width: "16px",
    height: "16px",
    borderRight: `2px solid ${darkTheme.text.primary}`,
    borderBottom: `2px solid ${darkTheme.text.primary}`,
    transform: "rotate(45deg)",
    animation: "bounce 2s infinite",
  },
};

// Add CSS for animations
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
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
`, styleSheet.cssRules.length);

// Media queries for responsive design
styleSheet.insertRule(`
  @media (max-width: 768px) {
    .header-container {
      padding: 0 1rem;
    }
    
    .mobile-menu-toggle {
      display: flex;
    }
    
    .nav-links {
      position: fixed;
      top: 85px;
      left: 0;
      width: 100%;
      height: calc(100vh - 85px);
      background: ${darkTheme.background.primary};
      padding: 1.5rem;
      transform: translateX(-100%);
      transition: transform 0.3s ease-in-out;
      overflow-y: auto;
    }
    
    .nav-links.nav-open {
      transform: translateX(0);
    }
    
    .nav-links ul {
      flex-direction: column;
      align-items: flex-start;
      gap: 1.5rem;
    }
    
    .dropdown-menu {
      position: static;
      width: 100%;
      box-shadow: none;
      margin-top: 0.75rem;
      margin-left: 1rem;
      display: none;
      opacity: 1;
      visibility: visible;
      transform: none;
      padding: 1rem;
      border: none;
      border-left: 3px solid ${darkTheme.text.accent};
    }
    
    .dropdown.active .dropdown-menu {
      display: block;
      transform: none;
    }
    
    .dropdown-content {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
    
    .auth-link {
      margin-top: 1.5rem;
    }
  }
`, styleSheet.cssRules.length);

styleSheet.insertRule(`
  @media (max-width: 480px) {
    .logo-text {
      font-size: 1.3rem;
    }
    
    .nav-links {
      padding: 1rem;
    }
    
    .hero-section {
      min-height: 500px;
    }
    
    .search-container {
      padding: 1rem;
    }
    
    .filters-grid {
      grid-template-columns: 1fr;
    }
  }
`, styleSheet.cssRules.length);