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
      accent: "#3b82f6", // blue accent
    },
    border: {
      primary: "#334155",
      accent: "#3b82f6",
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
    },
    text: {
      primary: "#000000",
      secondary: "#1f2937",
      accent: "#7c3aed", // luxury purple
    },
    border: {
      primary: "#d1d5db",
      accent: "#7c3aed",
    },
    button: {
      primary: "#7c3aed",
      primaryHover: "#6d28d9",
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
  const [filters, setFilters] = useState({
    propertyType: "",
    location: "",
    area_sqft: ""
  });
  const [suggestions, setSuggestions] = useState([]);
  const [currentBackground, setCurrentBackground] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  const searchRef = useRef(null);

  const theme = isDarkMode ? colorTheme.dark : colorTheme.light;

  // Background images
  const backgroundImages = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=2070&q=80"
  ];

  // Rotate backgrounds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground(prev => (prev + 1) % backgroundImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Location suggestions
  const locationSuggestions = useMemo(() => {
    if (!properties.length) return [];
    const locations = [...new Set(properties
      .filter(p => p.address)
      .map(p => p.address.split(',')[0])
      .filter(Boolean)
    )];
    return locations.slice(0, 5);
  }, [properties]);

  // Handle search
  const handleSearch = useCallback((e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchTerm) params.set("search", searchTerm.trim());
    if (filters.propertyType) params.set("propertyType", filters.propertyType);
    if (filters.location) params.set("location", filters.location);
    if (filters.area_sqft) params.set("area_sqft", filters.area_sqft);
    navigate(`/Cards?${params.toString()}`);
  }, [searchTerm, filters, navigate]);

  // Filter suggestions for search input
  useEffect(() => {
    if (searchTerm.length > 2) {
      const filtered = properties.filter(property =>
        property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.address.toLowerCase().includes(searchTerm.toLowerCase())
      ).slice(0, 5);
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  }, [searchTerm, properties]);

  // Click outside to close suggestions
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSuggestions([]);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle filter changes
  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const activeFiltersCount = useMemo(() => {
    return Object.values(filters).filter(value => value !== "").length;
  }, [filters]);

  const handleResetFilters = () => {
    setFilters({ propertyType: "", location: "", area_sqft: "" });
    setSearchTerm("");
  };

  const styles = {
    container: {
      backgroundColor: theme.background.secondary,
      borderRadius: '16px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
      padding: '24px',
      maxWidth: '900px',
      margin: '0 auto',
      border: `2px solid ${theme.border.primary}`,
      fontFamily: "'Montserrat', sans-serif",
    },
    input: {
      width: '100%',
      padding: '16px 52px 16px 20px',
      border: `2px solid ${theme.border.primary}`,
      borderRadius: '12px',
      fontSize: '16px',
      outline: 'none',
      backgroundColor: theme.background.primary,
      color: theme.text.primary,
    },
    inputFocus: {
      borderColor: theme.border.accent,
      boxShadow: `0 0 0 4px ${theme.border.accent}20`,
    },
    button: {
      padding: '16px 24px',
      borderRadius: '12px',
      fontWeight: '600',
      fontSize: '16px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      border: 'none',
    },
    primaryButton: {
      background: `linear-gradient(135deg, ${theme.button.primary}, ${theme.button.primaryHover})`,
      color: '#fff',
      boxShadow: `0 4px 12px ${theme.button.primary}35`,
    },
    secondaryButton: {
      backgroundColor: theme.button.secondary,
      color: theme.text.secondary,
      border: `2px solid ${theme.border.primary}`,
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
      fontSize: '14px',
      color: theme.text.primary,
      backgroundColor: theme.background.primary,
    }
  };

  const heroStyles = {
    heroSection: {
      position: "relative",
      height: "92vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundImage: isDarkMode
        ? `linear-gradient(rgba(15,23,42,0.85), rgba(15,23,42,0.95)), url(${backgroundImages[currentBackground]})`
        : `linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)), url(${backgroundImages[currentBackground]})`
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
      color: isDarkMode ? theme.text.primary : theme.text.primary,
    },
    heroSubtitle: {
      fontSize: "clamp(0.9rem, 2vw, 1.2rem)",
      maxWidth: "700px",
      margin: "0 auto 2rem",
      fontWeight: 300,
      opacity: 0.9,
      color: theme.text.secondary,
    },
    statsContainer: {
      display: "flex",
      justifyContent: "space-around",
      marginTop: "2.5rem",
      flexWrap: "wrap",
      gap: "1.5rem",
    },
    statItem: { textAlign: "center" },
    statValue: {
      fontSize: "2rem",
      fontWeight: 700,
      marginBottom: "0.3rem",
      color: theme.text.primary,
    },
    statLabel: { fontSize: "0.85rem", opacity: 0.9, color: theme.text.secondary },
  };

  return (
    <section style={heroStyles.heroSection}>
      <div style={heroStyles.heroContent}>
        <h1 style={heroStyles.heroTitle}>Discover Your Dream Property</h1>
        <p style={heroStyles.heroSubtitle}>
          Explore top properties with ease and find the one that fits your lifestyle.
        </p>

        <div style={styles.container}>
          <form onSubmit={handleSearch} style={{ position: "relative" }} ref={searchRef}>
            <input
              type="text"
              placeholder="Search for properties..."
              value={searchTerm}
              style={{ ...styles.input, ...(isSearchFocused ? styles.inputFocus : {}) }}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm("")}
                style={{ position: "absolute", right: "50px", top: "50%", transform: "translateY(-50%)", border: "none", background: "transparent", cursor: "pointer", color: theme.text.secondary }}
              >
                <FiX size={20} />
              </button>
            )}
            <button type="submit" style={{ ...styles.button, ...styles.primaryButton, position: "absolute", right: "0", top: "0", height: "100%" }}>
              <FiSearch /> Search
            </button>
            {suggestions.length > 0 && (
              <div style={styles.suggestionsBox}>
                {suggestions.map((s, i) => (
                  <div
                    key={i}
                    style={styles.suggestionItem}
                    onClick={() => {
                      setSearchTerm(s.title || s.address);
                      setSuggestions([]);
                    }}
                  >
                    {s.title || s.address}
                  </div>
                ))}
              </div>
            )}
          </form>

          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "1rem", gap: "1rem" }}>
            <button
              style={{ ...styles.button, ...styles.secondaryButton }}
              onClick={() => setShowFilters(prev => !prev)}
            >
              <FiFilter /> Filters {activeFiltersCount > 0 && <span style={styles.badge}>{activeFiltersCount}</span>}
            </button>
            <button
              style={{ ...styles.button, ...styles.secondaryButton }}
              onClick={handleResetFilters}
            >
              <FiSliders /> Reset
            </button>
          </div>

          {showFilters && (
            <div style={{ marginTop: "1rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <input
                placeholder="Property Type"
                value={filters.propertyType}
                onChange={(e) => handleFilterChange("propertyType", e.target.value)}
                style={styles.input}
              />
              <input
                placeholder="Location"
                value={filters.location}
                onChange={(e) => handleFilterChange("location", e.target.value)}
                style={styles.input}
              />
              <input
                placeholder="Area (sqft)"
                value={filters.area_sqft}
                onChange={(e) => handleFilterChange("area_sqft", e.target.value)}
                style={styles.input}
              />
            </div>
          )}
        </div>

        {/* Stats */}
        <div style={heroStyles.statsContainer}>
          <div style={heroStyles.statItem}>
            <div style={heroStyles.statValue}>120+</div>
            <div style={heroStyles.statLabel}>Properties Listed</div>
          </div>
          <div style={heroStyles.statItem}>
            <div style={heroStyles.statValue}>50+</div>
            <div style={heroStyles.statLabel}>Cities Covered</div>
          </div>
          <div style={heroStyles.statItem}>
            <div style={heroStyles.statValue}>10+</div>
            <div style={heroStyles.statLabel}>Years of Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};
