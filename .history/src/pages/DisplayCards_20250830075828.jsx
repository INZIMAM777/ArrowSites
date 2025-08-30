import { useEffect, useState } from "react";
import { useFirebase } from "../context/FirebaseContext";
import { PCard } from "../component/UI/PCard";
import { useSearchParams } from "react-router-dom";
import { SearchAndFilter } from "./SearchAndFilter";
import { addDoc } from "firebase/firestore";

export const DisplayCards = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSearch = searchParams.get('search') || '';
  const initialPropertyType = searchParams.get('propertyType') || '';
  const initialTransactionType = searchParams.get('transaction_type') || '';
  
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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
      
      console.log("Loaded properties:", propertyData);
      propertyData.forEach(element => { console.log(element.id)
        addDoc(collection(firestore, 'properties'), property);
      });

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
    
    console.log("Applying filters:", filterParams);
    console.log("Search term:", search);
    
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
          property.category // Added category to searchable fields
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

    // Apply price filters - convert all prices to lakhs for comparison
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

    console.log("Filtered properties count:", filtered.length);
    setFilteredProperties(filtered);
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
    console.log("Filter params received:", filterParams);
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

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          flexDirection: "column"
        }}
      >
        <div>Loading properties...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{padding: "2rem", textAlign: "center"}}>
        <h2>Error Loading Properties</h2>
        <p>{error}</p>
        <button onClick={retryLoad} style={{
          padding: "0.5rem 1rem",
          backgroundColor: "#3b82f6",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          marginTop: "1rem"
        }}>
          Try Again
        </button>
      </div>
    );
  }

// const handleNewdata = async () => {
//   await firebase.handleListing();
//   console.log("Data added successfully!");
// };


  return (
    <>
      <style>{`
        .container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1.5rem;
          padding: 2rem 1rem;
          max-width: 1200px;
          margin: auto;
        }

        h1 {
          text-align: center;
          margin-top: 1rem;
          font-size: 2.5rem;
          color: #343a40;
        }

        .no-results {
          text-align: center;
          width: 100%;
          padding: 2rem;
          font-size: 1.2rem;
        }

        .no-results button {
          margin-top: 1rem;
          padding: 0.5rem 1rem;
          background-color: #3b82f6;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .no-results button:hover {
          background-color: #2563eb;
        }
      `}</style>

      <h1>
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
      />
     {/* <button onClick={handleNewdata}>Add data</button> */}

      <div className="container">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <PCard key={property.id} property={property} />
          ))
        ) : properties.length > 0 ? (
          <div className="no-results">
            <p>No properties match your search criteria.</p>
            <button onClick={clearAllFilters}>
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="no-results">
            <p>No properties found in the database.</p>
            <button onClick={retryLoad}>
              Retry Loading
            </button>
          </div>
        )}
      </div>
    </>
  );
};