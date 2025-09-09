import { useEffect, useState } from "react";
import { useFirebase } from "../context/FirebaseContext";
import { PCard } from "../component/UI/PCard";
import { useSearchParams } from "react-router-dom";
import { SearchAndFilter } from "./SearchAndFilter";
// import { addDoc, collection } from "firebase/firestore";

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

      // const firestore = firebase.firestore;
      // console.log("Loaded properties:", propertyData);

      // propertyData.forEach(async (element) => {
      //   try {
      //     console.log("Adding ID:", element.id);

      //     await addDoc(collection(firestore, "IdAll"), {
      //       id: element.id, // store inside a field
      //     });

      //     console.log(`ID ${element.id} added successfully`);
      //   } catch (error) {
      //     console.error("Error adding ID:", error);
      //   }
      // });


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
      <div style={{ padding: "2rem", textAlign: "center" }}>
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
    display: grid;
    grid-template-columns: repeat(6, 1fr); /* default: desktop 3 cards */
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
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* desktop: 3 cards */
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

.property-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.property-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.property-image {
  position: relative;
  height: 200px; /* default desktop */
  background-color: #f3f4f6;
}

.property-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.property-details {
  padding: 16px;
}

.property-details h3 {
  font-size: 1rem;
  margin-bottom: 6px;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.property-address {
  display: flex;
  align-items: center;
  font-size: 0.85rem;
  color: #666;
  margin-bottom: 10px;
}

.property-features {
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  padding: 10px 0;
  border-top: 1px solid #eee;
  margin-bottom: 10px;
}

.view-details-btn {
  display: block;
  text-align: center;
  background: #3b82f6;
  color: white;
  padding: 8px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
}

/* Tablet: 2 cards per row, slightly smaller content */
@media (max-width: 768px) {
  .container {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .property-image {
    height: 160px;
  }

  .property-details {
    padding: 12px;
  }

  .property-details h3 {
    font-size: 0.9rem;
  }

  .property-address {
    font-size: 0.75rem;
  }

  .property-features {
    font-size: 0.75rem;
  }

  .view-details-btn {
    padding: 6px;
    font-size: 0.8rem;
  }
}

/* Small phones: 1 card per row, even smaller content */
@media (max-width: 420px) {
  .container {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }

  .property-image {
    height: 140px;
  }

  .property-details {
    padding: 10px;
  }

  .property-details h3 {
    font-size: 0.85rem;
  }

  .property-address {
    font-size: 0.7rem;
  }

  .property-features {
    font-size: 0.7rem;
  }

  .view-details-btn {
    padding: 5px;
    font-size: 0.75rem;
  }
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

  /* Mobile: 2 cards per row */
  @media (max-width: 768px) {
    .container {
      grid-template-columns: repeat(2, 1fr);
    }
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