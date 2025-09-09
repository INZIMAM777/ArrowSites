import { useEffect, useState } from "react";
import { useFirebase } from "../context/FirebaseContext";
import { PCard } from "../component/UI/PCard";
import { useSearchParams } from "react-router-dom";
import { SearchAndFilter } from "./SearchAndFilter";
import { useOutletContext } from "react-router-dom";

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

export const DisplayCards = () => {
  const { isDarkMode } = useOutletContext();
  const theme = isDarkMode ? colorTheme.dark : colorTheme.light;
  
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSearch = searchParams.get('search') || '';
  const initialPropertyType = searchParams.get('propertyType') || '';
  const initialTransactionType = searchParams.get('transaction_type') || '';

  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [displayedProperties, setDisplayedProperties] = useState([]);
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [filters, setFilters] = useState({
    propertyType: initialPropertyType,
    propertyCategory: "",
    minPrice: "",
    maxPrice: "",
    bedrooms: "",
    bathrooms: "",
    area_sqft: "",
    furnishing: "",
    transaction_type: initialTransactionType,
    year_built: "",
  });

  const firebase = useFirebase();

  // Load properties once on component mount
  useEffect(() => {
    loadProperties();
  }, []);

  // Apply filters whenever searchTerm or filters change
  useEffect(() => {
    if (properties.length > 0) {
      applyFiltersAndSearch(properties, searchTerm, filters);
    }
  }, [searchTerm, filters, properties]);

  // Update displayed properties when filtered properties change
  useEffect(() => {
    const endIndex = currentPage * itemsPerPage;
    setDisplayedProperties(filteredProperties.slice(0, endIndex));
  }, [filteredProperties, currentPage, itemsPerPage]);

  // Update filters when URL parameters change
  useEffect(() => {
    const propertyType = searchParams.get('propertyType') || '';
    const transactionType = searchParams.get('transaction_type') || '';

    if (propertyType || transactionType) {
      setFilters(prev => ({
        ...prev,
        propertyType,
        transaction_type: transactionType
      }));
    }
  }, [searchParams]);

  const loadProperties = async () => {
    try {
      setLoading(true);
      setError(null);

      // Get properties from Firebase
      const propertiesSnapshot = await firebase.getLists();

      // Check if we have a valid response
      if (!propertiesSnapshot) {
        throw new Error("No response from Firebase");
      }

      // Handle different response formats
      let propertyData = [];

      if (propertiesSnapshot.docs) {
        // Firebase query snapshot
        propertyData = propertiesSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
      } else if (Array.isArray(propertiesSnapshot)) {
        // Already an array
        propertyData = propertiesSnapshot;
      } else {
        // Other format - try to extract data
        propertyData = Object.entries(propertiesSnapshot).map(([id, data]) => ({
          id,
          ...data
        }));
      }

      setProperties(propertyData);
      applyFiltersAndSearch(propertyData, searchTerm, filters);

    } catch (error) {
      console.error("Error loading properties:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const normalizeString = (str) => {
    return str ? str.toString().toLowerCase().trim() : '';
  };

  // Convert price to a numeric value for comparison
  const getPriceValue = (price, units) => {
    if (!price) return 0;

    const numericPrice = parseFloat(price);
    if (isNaN(numericPrice)) return 0;

    // Convert to lakhs for consistent comparison
    if (units === "crore") {
      return numericPrice * 100; // 1 crore = 100 lakhs
    }
    return numericPrice; // already in lakhs
  };

  const applyFiltersAndSearch = (propertiesToFilter, search, filterParams) => {
    let filtered = [...propertiesToFilter];

    // Apply search filter
    if (search) {
      const normalizedSearch = normalizeString(search);
      filtered = filtered.filter((property) => {
        const searchFields = [
          property.address,
          property.city,
          property.description,
          property.location,
          property.neighborhood,
          property.landmark,
          property.title,
          property.type,
          property.category
        ].filter(Boolean);

        return searchFields.some((field) =>
          normalizeString(field).includes(normalizedSearch)
        );
      });
    }

    // Apply property category filter
    if (filterParams.propertyCategory) {
      filtered = filtered.filter(
        (property) => normalizeString(property.category) === normalizeString(filterParams.propertyCategory)
      );
    }

    // Apply property type filter
    if (filterParams.propertyType) {
      filtered = filtered.filter(
        (property) => normalizeString(property.type) === normalizeString(filterParams.propertyType)
      );
    }

    // Apply transaction type filter
    if (filterParams.transaction_type) {
      filtered = filtered.filter(
        (property) => normalizeString(property.transaction_type) === normalizeString(filterParams.transaction_type)
      );
    }

    // Apply price filters
    if (filterParams.minPrice) {
      const minPriceLakhs = parseFloat(filterParams.minPrice);
      filtered = filtered.filter(
        (property) => getPriceValue(property.price, property.price_units) >= minPriceLakhs
      );
    }
    if (filterParams.maxPrice) {
      const maxPriceLakhs = parseFloat(filterParams.maxPrice);
      filtered = filtered.filter(
        (property) => getPriceValue(property.price, property.price_units) <= maxPriceLakhs
      );
    }

    // Apply bedroom filter
    if (filterParams.bedrooms) {
      filtered = filtered.filter(
        (property) => parseInt(property.bedrooms || 0) >= parseInt(filterParams.bedrooms)
      );
    }

    // Apply bathroom filter
    if (filterParams.bathrooms) {
      filtered = filtered.filter(
        (property) => parseInt(property.bathrooms || 0) >= parseInt(filterParams.bathrooms)
      );
    }

    // Apply area filter
    if (filterParams.area_sqft) {
      const minArea = parseFloat(filterParams.area_sqft);
      filtered = filtered.filter(
        (property) => parseFloat(property.area_sqft || 0) >= minArea
      );
    }

    // Apply furnishing filter
    if (filterParams.furnishing) {
      filtered = filtered.filter(
        (property) => normalizeString(property.furnishing) === normalizeString(filterParams.furnishing)
      );
    }

    // Apply year built filter
    if (filterParams.year_built) {
      const minYear = parseInt(filterParams.year_built);
      filtered = filtered.filter(
        (property) => parseInt(property.year_built || 0) >= minYear
      );
    }

    setFilteredProperties(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  };

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    // Update URL parameter
    const params = new URLSearchParams();
    if (searchTerm) params.set('search', searchTerm);
    if (filters.propertyType) params.set('propertyType', filters.propertyType);
    if (filters.transaction_type) params.set('transaction_type', filters.transaction_type);
    setSearchParams(params);
  };

  const handleFilter = (filterParams) => {
    setFilters(filterParams);
    // Update URL parameters
    const params = new URLSearchParams();
    if (searchTerm) params.set('search', searchTerm);
    if (filterParams.propertyType) params.set('propertyType', filterParams.propertyType);
    if (filterParams.transaction_type) params.set('transaction_type', filterParams.transaction_type);
    setSearchParams(params);
  };

  const clearAllFilters = () => {
    setSearchTerm('');
    setFilters({
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
    });
    setSearchParams({});
  };

  const retryLoad = () => {
    loadProperties();
  };

  const loadMore = () => {
    setCurrentPage(prev => prev + 1);
  };

  const hasMore = displayedProperties.length < filteredProperties.length;

  // Component styles using the theme
  const styles = {
    container: {
      padding: "2rem 1rem",
      maxWidth: "1430px",
      margin: "auto",
      backgroundColor: theme.background.primary,
      minHeight: "100vh",
    },
    title: {
      textAlign: "center",
      marginTop: "1rem",
      fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
      color: theme.text.primary,
      fontFamily: "'Gilroy', 'Montserrat', sans-serif",
      marginBottom: "2rem",
    },
    gridContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
      gap: "1.5rem",
      marginBottom: "2rem",
    },
    noResults: {
      textAlign: "center",
      padding: "2rem",
      color: theme.text.secondary,
      fontFamily: "'Montserrat', sans-serif",
    },
    clearButton: {
      padding: "0.5rem 1rem",
      backgroundColor: theme.button.primary,
      color: "white",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      marginTop: "1rem",
      fontFamily: "'Montserrat', sans-serif",
      transition: "all 0.3s ease",
    },
    loadMoreButton: {
      display: "block",
      margin: "2rem auto",
      padding: "0.8rem 2rem",
      backgroundColor: theme.button.primary,
      color: "white",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "1rem",
      fontWeight: 600,
      fontFamily: "'Montserrat', sans-serif",
      transition: "all 0.3s ease",
    },
    loadingContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "50vh",
      flexDirection: "column",
      color: theme.text.primary,
      fontFamily: "'Montserrat', sans-serif",
    },
    errorContainer: {
      padding: "2rem",
      textAlign: "center",
      color: theme.text.primary,
      fontFamily: "'Montserrat', sans-serif",
    },
    retryButton: {
      padding: "0.5rem 1rem",
      backgroundColor: theme.button.primary,
      color: "white",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      marginTop: "1rem",
      fontFamily: "'Montserrat', sans-serif",
      transition: "all 0.3s ease",
    },
  };
  const homePageStyles = {
        backgroundColor: isDarkMode ? '#0f172a' : '#ffffff',
        color: isDarkMode ? '#f8fafc' : '#1e293b',
        minHeight: '100vh',
        transition: 'background-color 0.3s ease, color 0.3s ease'
    };

  if (loading) {
    return (
      <div style={styles.loadingContainer}>
        <div>Loading properties...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={styles.errorContainer}>
        <h2>Error Loading Properties</h2>
        <p>{error}</p>
        <button 
          onClick={retryLoad} 
          style={styles.retryButton}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = theme.button.primaryHover;
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = theme.button.primary;
          }}
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="home-page" style={homePageStyles}>
    <div style={styles.container}>
      <h1 style={styles.title}>
        {filters.propertyType
          ? `${filters.propertyType.charAt(0).toUpperCase() + filters.propertyType.slice(1)} Properties ${filters.transaction_type ? `for ${filters.transaction_type}` : ''}`
          : searchTerm
            ? `Search Results for "${searchTerm}"`
            : "All Properties"}
      </h1>

      <SearchAndFilter
        onSearch={handleSearch}
        onFilter={handleFilter}
        showFilters={true}
        initialSearch={searchTerm}
        initialFilters={filters}
        isDarkMode={isDarkMode}
      />

      <div style={styles.gridContainer}>
        {displayedProperties.length > 0 ? (
          displayedProperties.map((property) => (
            <PCard key={property.id} property={property} isDarkMode={isDarkMode} />
          ))
        ) : properties.length > 0 ? (
          <div style={styles.noResults}>
            <p>No properties match your search criteria.</p>
            <button 
              onClick={clearAllFilters} 
              style={styles.clearButton}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = theme.button.primaryHover;
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = theme.button.primary;
              }}
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div style={styles.noResults}>
            <p>No properties found in the database.</p>
            <button 
              onClick={retryLoad} 
              style={styles.clearButton}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = theme.button.primaryHover;
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = theme.button.primary;
              }}
            >
              Retry Loading
            </button>
          </div>
        )}
      </div>

      {hasMore && (
        <button 
          onClick={loadMore} 
          style={styles.loadMoreButton}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = theme.button.primaryHover;
            e.target.style.transform = "translateY(-2px)";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = theme.button.primary;
            e.target.style.transform = "none";
          }}
        >
          Load More Properties
        </button>
      )}
    </div>
    </div>
  );
};