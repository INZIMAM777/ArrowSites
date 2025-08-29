import { useEffect, useState } from "react";
import { useFirebase } from "../context/FirebaseContext";
import { PCard } from "../component/UI/PCard";
import { useSearchParams } from "react-router-dom";
import { SearchAndFilter } from "./SearchAndFilter";

export const DisplayCards = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const firebase = useFirebase();

  // 🔹 Load properties from Firebase
  useEffect(() => {
    loadProperties();
  }, []);

  // 🔹 Sync URL param → searchTerm
  useEffect(() => {
    const urlSearch = searchParams.get("search") || "";
    setSearchTerm(urlSearch);
  }, [searchParams]);

  // 🔹 Apply search whenever properties/searchTerm changes
  useEffect(() => {
    applySearch(properties, searchTerm);
  }, [searchTerm, properties]);

  const loadProperties = async () => {
    try {
      setLoading(true);
      const propertiesData = await firebase.getLists();
      setProperties(propertiesData);
    } catch (error) {
      console.error("Error loading properties:", error);
    } finally {
      setLoading(false);
    }
  };

  const normalizeString = (str) =>
    str ? str.toString().toLowerCase().trim() : "";

  // ✅ Search only on `address` and `type`
  const applySearch = (propertiesToFilter, search) => {
    if (!search) {
      setFilteredProperties(propertiesToFilter);
      return;
    }

    const normalizedSearch = normalizeString(search);

    const filtered = propertiesToFilter.filter((property) => {
      const address = normalizeString(property.address);
      const type = normalizeString(property.type);

      return (
        address.includes(normalizedSearch) ||
        type.includes(normalizedSearch)
      );
    });

    setFilteredProperties(filtered);
  };

  // 🔹 Update search + sync URL
  const handleSearch = (term) => {
    setSearchTerm(term);
    if (term) {
      setSearchParams({ search: term });
    } else {
      setSearchParams({});
    }
  };

  const clearSearch = () => {
    setSearchTerm("");
    setFilteredProperties(properties);
    setSearchParams({});
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
        showFilters={false}
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
