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
  const searchRef = useRef(null);

  // Background images for rotation
  const backgroundImages = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=2070&q=80"
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
    "Residential Villa", "Residential Penthouse", "Commercial Shop",
    "Commercial Office Space", "Industrial Factory", "Warehouse - Commercial"
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
      { value: "10,000+", label: "Properties" },
      { value: "5,000+", label: "Happy Customers" },
      { value: "50+", label: "Cities" },
      { value: "15+", label: "Years Experience" }
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

  // Featured properties component
  const FeaturedProperties = () => {
    const featured = properties.slice(0, 3);
    
    return (
      <div style={heroStyles.featuredContainer}>
        <h3 style={heroStyles.featuredTitle}>Featured Properties</h3>
        <div style={heroStyles.featuredGrid}>
          {featured.map(property => (
            <div 
              key={property.id} 
              style={heroStyles.featuredCard}
              onClick={() => navigate(`/property/${property.id}`)}
            >
              <img 
                src={property.image} 
                alt={property.title}
                style={heroStyles.featuredImage}
              />
              <div style={heroStyles.featuredContent}>
                <h4 style={heroStyles.featuredName}>{property.title}</h4>
                <p style={heroStyles.featuredPrice}>₹{property.price} {property.price_units}</p>
                <p style={heroStyles.featuredLocation}>{property.address}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Memoized styles
  const heroStyles = useMemo(() => ({
    heroSection: {
      position: "relative",
      height: "100vh",
      minHeight: "650px",
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
      maxWidth: "1200px",
      padding: "2rem",
      textAlign: "center",
    },
    heroTitle: {
      fontSize: "clamp(2.5rem, 6vw, 4rem)",
      fontWeight: 700,
      lineHeight: 1.1,
      marginBottom: "1.5rem",
      textShadow: "0 2px 10px rgba(0,0,0,0.5)",
    },
    heroSubtitle: {
      fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
      maxWidth: "800px",
      margin: "0 auto 3rem",
      fontWeight: 300,
      opacity: 0.9,
    },
    tabsContainer: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "2rem",
      gap: "1rem",
    },
    tabButton: {
      padding: "0.8rem 1.5rem",
      borderRadius: "30px",
      border: "none",
      background: "rgba(255,255,255,0.1)",
      color: "#fff",
      fontSize: "1rem",
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
      borderRadius: "16px",
      boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
      padding: "2rem",
      maxWidth: "900px",
      margin: "0 auto",
      transition: "all 0.3s ease",
      transform: isSearchFocused ? "translateY(-5px)" : "none",
    },
    searchForm: {
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      position: "relative",
    },
    searchInputContainer: {
      position: "relative",
    },
    searchInput: {
      width: "100%",
      padding: "1rem 1.5rem",
      border: "2px solid #e5e7eb",
      borderRadius: "12px",
      fontSize: "1rem",
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
      borderRadius: "12px",
      boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
      zIndex: 10,
      maxHeight: "300px",
      overflowY: "auto",
    },
    suggestionItem: {
      padding: "1rem",
      borderBottom: "1px solid #f3f4f6",
      cursor: "pointer",
      transition: "background-color 0.2s ease",
    },
    suggestionItemHover: {
      backgroundColor: "#f9fafb",
    },
    filtersGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "1rem",
      marginTop: "1rem",
    },
    filterSelect: {
      padding: "0.8rem",
      border: "1px solid #e5e7eb",
      borderRadius: "8px",
      fontSize: "0.9rem",
      backgroundColor: "#fff",
    },
    searchButton: {
      padding: "1rem 2rem",
      borderRadius: "12px",
      fontWeight: "600",
      fontSize: "1rem",
      cursor: "pointer",
      border: "none",
      background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
      color: "#fff",
      transition: "all 0.3s ease",
      marginTop: "1.5rem",
    },
    searchButtonHover: {
      transform: "translateY(-2px)",
      boxShadow: "0 5px 15px rgba(59, 130, 246, 0.4)",
    },
    statsContainer: {
      display: "flex",
      justifyContent: "space-around",
      marginTop: "4rem",
      flexWrap: "wrap",
      gap: "2rem",
    },
    statItem: {
      textAlign: "center",
    },
    statValue: {
      fontSize: "2.5rem",
      fontWeight: 700,
      marginBottom: "0.5rem",
      textShadow: "0 2px 4px rgba(0,0,0,0.3)",
    },
    statLabel: {
      fontSize: "1rem",
      opacity: 0.9,
      fontWeight: 300,
    },
    featuredContainer: {
      marginTop: "4rem",
      padding: "2rem",
      background: "rgba(255,255,255,0.1)",
      borderRadius: "16px",
      backdropFilter: "blur(10px)",
    },
    featuredTitle: {
      fontSize: "1.8rem",
      marginBottom: "1.5rem",
      textAlign: "center",
    },
    featuredGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "1.5rem",
    },
    featuredCard: {
      background: "#fff",
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
      cursor: "pointer",
      transition: "transform 0.3s ease",
    },
    featuredImage: {
      width: "100%",
      height: "200px",
      objectFit: "cover",
    },
    featuredContent: {
      padding: "1.2rem",
      color: "#1f2937",
    },
    featuredName: {
      fontSize: "1.1rem",
      fontWeight: 600,
      marginBottom: "0.5rem",
    },
    featuredPrice: {
      fontSize: "1.2rem",
      fontWeight: 700,
      color: "#3b82f6",
      marginBottom: "0.5rem",
    },
    featuredLocation: {
      fontSize: "0.9rem",
      color: "#6b7280",
    },
    scrollIndicator: {
      position: "absolute",
      bottom: "2rem",
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
      marginBottom: "0.5rem",
      fontSize: "0.9rem",
    },
    scrollArrow: {
      width: "20px",
      height: "20px",
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

            {/* Advanced Filters */}
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
                value={filters.bedrooms}
                onChange={(e) => handleFilterChange("bedrooms", e.target.value)}
              >
                <option value="">Any Bedrooms</option>
                <option value="1">1 Bedroom</option>
                <option value="2">2 Bedrooms</option>
                <option value="3">3 Bedrooms</option>
                <option value="4">4+ Bedrooms</option>
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

              <div style={{display: "flex", gap: "0.5rem"}}>
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
            </div>

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

        {/* Featured Properties (visible on larger screens) */}
        <div style={{display: window.innerWidth > 1024 ? "block" : "none"}}>
          <FeaturedProperties />
        </div>
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
              transform: translateY(-10px) rotate(45deg);
            }
            60% {
              transform: translateY(-5px) rotate(45deg);
            }
          }
        `}
      </style>
    </section>
  );
};