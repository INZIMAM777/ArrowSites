import { useNavigate } from "react-router-dom";
import { useCallback, useState, useMemo, useRef, useEffect } from "react";
import { useFirebase } from "../../context/FirebaseContext";

export const Hero = () => {
  const navigate = useNavigate();
  const { properties } = useFirebase();
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [activeTab, setActiveTab] = useState("buy");
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
    "Residential Villa", "Commercial Shop", "Commercial Office Space"
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
    if (filters.minPrice) params.set("minPrice", filters.minPrice);
    if (filters.maxPrice) params.set("maxPrice", filters.maxPrice);
    if (filters.bedrooms) params.set("bedrooms", filters.bedrooms);
    if (filters.location) params.set("location", filters.location);
    if (activeTab) params.set("transaction_type", activeTab);
    
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

  // Memoized styles
  const heroStyles = useMemo(() => ({
    heroSection: {
      position: "relative",
      height: "89vh",
      minHeight: "560px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      color: "#fff",
      fontFamily: "'Poppins', sans-serif",
      transition: "background-image 1s ease-in-out"
    },
    heroOverlay: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)",
      zIndex: 1,
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
    },
    tabsContainer: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "1.5rem",
      gap: "0.8rem",
    },
    tabButton: {
      padding: "0.6rem 1.2rem",
      borderRadius: "25px",
      border: "none",
      background: "rgba(255,255,255,0.1)",
      color: "#fff",
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
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      borderRadius: "14px",
      boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
      padding: "1.5rem",
      maxWidth: "800px",
      margin: "0 auto",
      transition: "all 0.3s ease",
      transform: isSearchFocused ? "translateY(-3px)" : "none",
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
    searchInput: {
      width: "100%",
      padding: "0.9rem 1.2rem",
      border: "2px solid #e5e7eb",
      borderRadius: "10px",
      fontSize: "0.95rem",
      outline: "none",
      backgroundColor: "#fff",
      transition: "border-color 0.3s ease",
    },
    searchInputFocused: {
      borderColor: "#3b82f6",
    },
    suggestionsBox: {
      position: "absolute",
      top: "100%",
      left: 0,
      right: 0,
      backgroundColor: "#fff",
      borderRadius: "10px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      zIndex: 10,
      maxHeight: "250px",
      overflowY: "auto",
    },
    suggestionItem: {
      padding: "0.8rem",
      borderBottom: "1px solid #f3f4f6",
      cursor: "pointer",
      transition: "background-color 0.2s ease",
      fontSize: "0.9rem",
    },
    filterToggle: {
      padding: "0.5rem 1rem",
      background: "transparent",
      border: "1px solid #e5e7eb",
      borderRadius: "6px",
      fontSize: "0.85rem",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      margin: "0.5rem 0",
      alignSelf: "flex-start",
    },
    filtersGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
      gap: "0.8rem",
      marginTop: "0.8rem",
    },
    filterSelect: {
      padding: "0.7rem",
      border: "1px solid #e5e7eb",
      borderRadius: "6px",
      fontSize: "0.85rem",
      backgroundColor: "#fff",
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
    },
    searchButtonHover: {
      transform: "translateY(-2px)",
      boxShadow: "0 5px 15px rgba(59, 130, 246, 0.4)",
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
    },
    statLabel: {
      fontSize: "0.85rem",
      opacity: 0.9,
      fontWeight: 300,
    },
    scrollIndicator: {
      position: "absolute",
      bottom: "1rem",
      left: "50%",
      transform: "translateX(-50%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      color: "#fff",
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
      borderRight: "2px solid #fff",
      borderBottom: "2px solid #fff",
      transform: "rotate(45deg)",
      animation: "bounce 2s infinite",
    },
  }), [isSearchFocused]);

  return (
    <section style={{
      ...heroStyles.heroSection,
      backgroundImage: `url(${backgroundImages[currentBackground]})`
    }}>
      <div style={heroStyles.heroOverlay}></div>

      <div style={heroStyles.heroContent}>
        <h1 style={heroStyles.heroTitle}>Find Your Dream Property</h1>
        <p style={heroStyles.heroSubtitle}>
          Discover luxury homes, modern apartments, and premium investment properties
        </p>

        {/* Transaction Type Tabs */}
        <div style={heroStyles.tabsContainer}>
          <button 
            style={{
              ...heroStyles.tabButton,
              ...(activeTab === "buy" ? heroStyles.activeTab : {})
            }}
            onClick={() => setActiveTab("buy")}
          >
            Buy
          </button>
          <button 
            style={{
              ...heroStyles.tabButton,
              ...(activeTab === "rent" ? heroStyles.activeTab : {})
            }}
            onClick={() => setActiveTab("rent")}
          >
            Rent
          </button>
          <button 
            style={{
              ...heroStyles.tabButton,
              ...(activeTab === "commercial" ? heroStyles.activeTab : {})
            }}
            onClick={() => setActiveTab("commercial")}
          >
            Commercial
          </button>
        </div>

        {/* Advanced Search Container */}
        <div style={heroStyles.searchContainer}>
          <form
            style={heroStyles.searchForm}
            onSubmit={handleSearch}
          >
            <div style={heroStyles.searchInputContainer} ref={searchRef}>
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
                        e.target.style.backgroundColor = "#f9fafb";
                      }}
                      onMouseOut={(e) => {
                        e.target.style.backgroundColor = "#fff";
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
              <span>{showFilters ? '▲' : '▼'}</span>
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

                <div style={{display: "flex", gap: "0.4rem"}}>
                  <input
                    type="number"
                    placeholder="Min Price"
                    style={{...heroStyles.filterSelect, flex: 1}}
                    value={filters.minPrice}
                    onChange={(e) => handleFilterChange("minPrice", e.target.value)}
                  />
                  <input
                    type="number"
                    placeholder="Max Price"
                    style={{...heroStyles.filterSelect, flex: 1}}
                    value={filters.maxPrice}
                    onChange={(e) => handleFilterChange("maxPrice", e.target.value)}
                  />
                </div>
              </div>
            )}

            <button 
              type="submit" 
              style={heroStyles.searchButton}
              onMouseOver={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 5px 15px rgba(59, 130, 246, 0.4)";
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "none";
                e.target.style.boxShadow = "none";
              }}
            >
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

      {/* CSS for animations */}
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