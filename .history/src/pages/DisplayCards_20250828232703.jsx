import { useEffect, useState } from "react";
import { useFirebase } from "../context/FirebaseContext";
import { PCard } from "../component/UI/PCard";
import { useSearchParams } from "react-router-dom";
import { SearchAndFilter } from "./SearchAndFilter";

export const DisplayCards = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSearch = searchParams.get('search') || '';
  
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    propertyType: "",
    minPrice: "",
    maxPrice: "",
    bedrooms: "",
    bathrooms: "",
  });
  
  const firebase = useFirebase();

  // Load properties once on component mount
  useEffect(() => {
    loadProperties();
  }, []);

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
          property.landmark
        ].filter(Boolean);

        return searchFields.some((field) => 
          normalizeString(field).includes(normalizedSearch)
        );
      });
    }

    // Apply property type filter
    if (filterParams.propertyType) {
      filtered = filtered.filter(
        (property) => property.type === filterParams.propertyType
      );
    }

    // Apply price filters
    if (filterParams.minPrice) {
      filtered = filtered.filter(
        (property) => property.price >= Number(filterParams.minPrice)
      );
    }
    if (filterParams.maxPrice) {
      filtered = filtered.filter(
        (property) => property.price <= Number(filterParams.maxPrice)
      );
    }

    // Apply bedroom filter
    if (filterParams.bedrooms) {
      filtered = filtered.filter(
        (property) => property.bedrooms >= Number(filterParams.bedrooms)
      );
    }

    // Apply bathroom filter
    if (filterParams.bathrooms) {
      filtered = filtered.filter(
        (property) => property.bathrooms >= Number(filterParams.bathrooms)
      );
    }

    setFilteredProperties(filtered);
  };

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    // Update URL parameter
    if (searchTerm) {
      setSearchParams({ search: searchTerm });
    } else {
      setSearchParams({});
    }
    applyFiltersAndSearch(properties, searchTerm, filters);
  };

  const handleFilter = (filterParams) => {
    setFilters(filterParams);
    applyFiltersAndSearch(properties, searchTerm, filterParams);
  };

  const clearAllFilters = () => {
    setSearchTerm('');
    setFilters({
      propertyType: "",
      minPrice: "",
      maxPrice: "",
      bedrooms: "",
      bathrooms: "",
    });
    setSearchParams({});
    setFilteredProperties(properties);
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
        {searchTerm ? `Search Results for "${searchTerm}"` : "All Properties"}
      </h1>

      <SearchAndFilter 
        onSearch={handleSearch} 
        onFilter={handleFilter}
        showFilters={true}
        initialSearch={searchTerm}
      />

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