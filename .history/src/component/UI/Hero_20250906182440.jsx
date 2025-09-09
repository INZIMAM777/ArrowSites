import { useNavigate } from "react-router-dom";
import { useCallback, useState, useMemo } from "react";

export const Hero = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const handleSearch = useCallback((e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    
    const params = new URLSearchParams();
    params.set("search", searchTerm.trim());
    navigate(`/Cards?${params.toString()}`);
  }, [searchTerm, navigate]);

  // Memoized styles to prevent recreation on every render
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
    },
    heroOverlay: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%)",
      zIndex: 1,
    },
    heroContent: {
      position: "relative",
      zIndex: 2,
      width: "90%",
      maxWidth: "1000px",
      padding: "2rem",
      textAlign: "center",
    },
    heroTitle: {
      fontSize: "clamp(2.5rem, 6vw, 5rem)",
      fontWeight: 700,
      lineHeight: 1.1,
      marginBottom: "1.5rem",
      textShadow: "0 2px 10px rgba(0,0,0,0.3)",
    },
    heroSubtitle: {
      fontSize: "clamp(1.1rem, 2.5vw, 1.8rem)",
      maxWidth: "800px",
      margin: "0 auto 3rem",
      fontWeight: 300,
      opacity: 0.9,
    },
    searchContainer: {
      backgroundColor: "#fff",
      borderRadius: "12px",
      boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
      padding: "20px",
      maxWidth: "800px",
      margin: "0 auto",
      transition: "all 0.3s ease",
      transform: isSearchFocused ? "translateY(-5px)" : "none",
    },
    searchForm: {
      display: "flex",
      gap: "12px",
      position: "relative",
    },
    searchInput: {
      flex: "1",
      padding: "16px 20px",
      border: "2px solid #e5e7eb",
      borderRadius: "8px",
      fontSize: "16px",
      outline: "none",
      backgroundColor: "#f9fafb",
      transition: "border-color 0.3s ease",
    },
    searchInputFocused: {
      borderColor: "#3b82f6",
      backgroundColor: "#fff",
    },
    searchButton: {
      padding: "16px 24px",
      borderRadius: "8px",
      fontWeight: "600",
      fontSize: "16px",
      cursor: "pointer",
      border: "none",
      backgroundColor: "#3b82f6",
      color: "#fff",
      transition: "all 0.3s ease",
    },
    searchButtonHover: {
      backgroundColor: "#2563eb",
      transform: "translateY(-2px)",
    },
    quickFilters: {
      display: "flex",
      justifyContent: "center",
      gap: "12px",
      marginTop: "24px",
      flexWrap: "wrap",
    },
    filterButton: {
      padding: "8px 16px",
      borderRadius: "20px",
      backgroundColor: "rgba(255, 255, 255, 0.15)",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      color: "#fff",
      fontSize: "14px",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
    filterButtonHover: {
      backgroundColor: "rgba(255, 255, 255, 0.25)",
      transform: "translateY(-2px)",
    },
  }), [isSearchFocused]);

  // Quick filter options
  const quickFilters = [
    { label: "Apartments", type: "Residential Flat" },
    { label: "Villas", type: "Residential Villa" },
    { label: "Plots", type: "Residential Plot" },
    { label: "Commercial", type: "Commercial Office Space" },
  ];

  const handleQuickFilter = (propertyType) => {
    navigate(`/Cards?propertyType=${propertyType}`);
  };

  return (
    <section style={heroStyles.heroSection}>
      {/* Background Image with lazy loading */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2070&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        }}
        aria-label="Luxury property background"
      ></div>

      <div style={heroStyles.heroOverlay}></div>

      <div style={heroStyles.heroContent}>
        <h1 style={heroStyles.heroTitle}>Find Your Perfect Property</h1>
        <p style={heroStyles.heroSubtitle}>
          Discover luxury homes, modern apartments, and investment properties
          across the world
        </p>

        {/* Enhanced Search Box */}
        <div style={heroStyles.searchContainer}>
          <form
            style={heroStyles.searchForm}
            onSubmit={handleSearch}
          >
            <input
              type="text"
              placeholder="Search by location, property type, or features..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              style={{
                ...heroStyles.searchInput,
                ...(isSearchFocused ? heroStyles.searchInputFocused : {})
              }}
              aria-label="Search properties"
            />
            <button 
              type="submit" 
              style={heroStyles.searchButton}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#2563eb";
                e.target.style.transform = "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "#3b82f6";
                e.target.style.transform = "none";
              }}
            >
              Search
            </button>
          </form>
          
          {/* Quick Filters */}
          <div style={heroStyles.quickFilters}>
            {quickFilters.map((filter, index) => (
              <button
                key={index}
                style={heroStyles.filterButton}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "rgba(255, 255, 255, 0.25)";
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
                  e.target.style.transform = "none";
                }}
                onClick={() => handleQuickFilter(filter.type)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};