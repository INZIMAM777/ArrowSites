import { useEffect, useState } from "react";
import { useFirebase } from "../context/FirebaseContext";
import { PCard } from "../component/UI/PCard";
import { useSearchParams } from "react-router-dom";
import { SearchAndFilter } from "./SearchAndFilter";

export const DisplayCards = () => {
  const [searchParams] = useSearchParams();

  // Pick value from URL params
  const initialSearch = searchParams.get("search") || "";

  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [loading, setLoading] = useState(true);
  const firebase = useFirebase();

  useEffect(() => {
    loadProperties();
  }, []);

  useEffect(() => {
    // whenever searchTerm changes, re-apply search
    applySearch(properties, searchTerm);
  }, [searchTerm, properties]);

  const loadProperties = async () => {
    try {
      setLoading(true);
      const propertiesData = await firebase.getLists();
      setProperties(propertiesData);
      applySearch(propertiesData, initialSearch);
    } catch (error) {
      console.error("Error loading properties:", error);
    } finally {
      setLoading(false);
    }
  };

  const normalizeString = (str) =>
    str ? str.toString().toLowerCase().trim() : "";

  const applySearch = (propertiesToFilter, search) => {
    if (!search) {
      setFilteredProperties(propertiesToFilter);
      return;
    }

    const normalizedSearch = normalizeString(search);

    const filtered = propertiesToFilter.filter((property) => {
      // turn the whole object into one searchable string
      const combinedFields = Object.values(property)
        .filter(Boolean) // remove null/undefined
        .join(" ")
        .toLowerCase();

      return combinedFields.includes(normalizedSearch);
    });

    setFilteredProperties(filtered);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const clearSearch = () => {
    setSearchTerm("");
    setFilteredProperties(properties);
  };

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
        }}
      >
        <div>Loading properties...</div>
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
        {searchTerm
          ? `Search Results for "${searchTerm}"`
          : "All Properties"}
      </h1>

      <SearchAndFilter
        onSearch={handleSearch}
        showFilters={false} // ✅ filters removed
        initialSearch={searchTerm}
      />

      <div className="container">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <PCard key={property.id} property={property} />
          ))
        ) : (
          <div className="no-results">
            <p>No properties match your search.</p>
            <button onClick={clearSearch}>Clear search</button>
          </div>
        )}
      </div>
    </>
  );
};
