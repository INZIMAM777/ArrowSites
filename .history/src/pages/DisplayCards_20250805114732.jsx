import { useEffect, useState } from "react";
import { useFirebase } from "../context/FirebaseContext";
import { PCard } from "../component/UI/PCard";
import { SearchAndFilter } from "./SearchAndFilter";

export const DisplayCards = () => {
  const [allProperties, setAllProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const firebase = useFirebase();

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const propertiesSnapshot = await firebase.getLists();
        const propertyData = propertiesSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        
        setAllProperties(propertyData);
        setFilteredProperties(propertyData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching properties:", error);
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  const handleSearch = (searchTerm) => {
    if (!searchTerm.trim()) {
      setFilteredProperties(allProperties);
      return;
    }

    const filtered = allProperties.filter((property) => {
      const searchLower = searchTerm.toLowerCase();
      return (
        property.address.toLowerCase().includes(searchLower) ||
        property.city.toLowerCase().includes(searchLower) ||
        property.state.toLowerCase().includes(searchLower) ||
        property.zipCode.includes(searchTerm) ||
        property.description.toLowerCase().includes(searchLower)
      );
    });

    setFilteredProperties(filtered);
  };

  const handleFilter = (filters) => {
    let filtered = [...allProperties];

    if (filters.propertyType) {
      filtered = filtered.filter(
        (property) => property.type === filters.propertyType
      );
    }

    if (filters.minPrice) {
      filtered = filtered.filter(
        (property) => property.price >= Number(filters.minPrice)
      );
    }

    if (filters.maxPrice) {
      filtered = filtered.filter(
        (property) => property.price <= Number(filters.maxPrice)
      );
    }

    if (filters.bedrooms) {
      filtered = filtered.filter(
        (property) => property.bedrooms >= Number(filters.bedrooms)
      );
    }

    if (filters.bathrooms) {
      filtered = filtered.filter(
        (property) => property.bathrooms >= Number(filters.bathrooms)
      );
    }

    setFilteredProperties(filtered);
  };

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

        .search-filter-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem;
        }

        .search-form {
          display: flex;
          margin-bottom: 2rem;
        }

        .search-form input {
          flex: 1;
          padding: 0.5rem;
          font-size: 1rem;
          border: 1px solid #ddd;
          border-radius: 4px 0 0 4px;
        }

        .search-form button {
          padding: 0.5rem 1rem;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 0 4px 4px 0;
          cursor: pointer;
        }

        .filter-section {
          background: #f8f9fa;
          padding: 1rem;
          border-radius: 4px;
          margin-bottom: 2rem;
        }

        .filter-group {
          margin-bottom: 1rem;
        }

        .filter-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: bold;
        }

        .filter-group select, 
        .filter-group input {
          width: 100%;
          padding: 0.5rem;
          border: 1px solid #ddd;
          border-radius: 4px;
        }

        .price-range {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .price-range input {
          flex: 1;
        }

        .filter-buttons {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }

        .filter-buttons button {
          flex: 1;
          padding: 0.5rem;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .filter-buttons button:first-child {
          background-color: #28a745;
          color: white;
        }

        .filter-buttons button:last-child {
          background-color: #dc3545;
          color: white;
        }

        .loading {
          text-align: center;
          padding: 2rem;
          font-size: 1.2rem;
        }
      `}</style>

      <h1>Property Listings</h1>

      <SearchAndFilter onSearch={handleSearch} onFilter={handleFilter} />

      {loading ? (
        <div className="loading">Loading properties...</div>
      ) : (
        <div className="container">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property) => (
              <PCard key={property.id} property={property} />
            ))
          ) : (
            <div className="no-results">
              <p>No properties match your search criteria.</p>
              <button onClick={() => {
                setFilteredProperties(allProperties);
              }}>
                Clear filters
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};