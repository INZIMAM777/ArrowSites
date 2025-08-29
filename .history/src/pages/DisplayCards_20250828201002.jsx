import { useEffect, useState } from "react";
import { useFirebase } from "../context/FirebaseContext";
import { PCard } from "../component/UI/PCard";
import { useSearchParams } from "react-router-dom";

export const DisplayCards = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [loading, setLoading] = useState(true);

  const firebase = useFirebase();

  // Load properties once
  useEffect(() => {
    loadProperties();
  }, []);

  // Sync URL param
  useEffect(() => {
    const urlSearch = searchParams.get("search") || "";
    setSearchTerm(urlSearch);
    filterProperties(urlSearch, bedrooms, bathrooms);
  }, [searchParams, properties, bedrooms, bathrooms]);

  const loadProperties = async () => {
    try {
      setLoading(true);
      const propertiesData = await firebase.getLists();
      setProperties(propertiesData);
      setFilteredProperties(propertiesData);
    } catch (error) {
      console.error("Error loading properties:", error);
    } finally {
      setLoading(false);
    }
  };

  const normalizeString = (str) =>
    str ? str.toString().toLowerCase().trim() : "";

  // ✅ Multi-condition filter
  const filterProperties = (search, bed, bath) => {
    let results = properties;

    if (search) {
      const normalizedSearch = normalizeString(search);
      results = results.filter((property) => {
        const address = normalizeString(property.address);
        const type = normalizeString(property.type);
        return address.includes(normalizedSearch) || type.includes(normalizedSearch);
      });
    }

    if (bed) {
      results = results.filter((p) => parseInt(p.bedrooms) === parseInt(bed));
    }

    if (bath) {
      results = results.filter((p) => parseInt(p.bathrooms) === parseInt(bath));
    }

    setFilteredProperties(results);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setSearchParams({ search: value });
  };

  const clearFilters = () => {
    setSearchTerm("");
    setBedrooms("");
    setBathrooms("");
    setSearchParams({});
    setFilteredProperties(properties);
  };

  if (loading) {
    return (
      <div className="loading-screen">
        Loading properties...
      </div>
    );
  }

  return (
    <>
      <style>{`
        .search-bar {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin: 1.5rem auto;
          max-width: 1000px;
        }

        .search-bar input,
        .search-bar select {
          padding: 0.6rem 1rem;
          border: 1px solid #ccc;
          border-radius: 6px;
          font-size: 1rem;
          flex: 1;
        }

        .search-bar button {
          padding: 0.6rem 1rem;
          background-color: #3b82f6;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .search-bar button:hover {
          background-color: #2563eb;
        }

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
          font-size: 2rem;
          color: #343a40;
        }

        .no-results {
          text-align: center;
          width: 100%;
          padding: 2rem;
          font-size: 1.2rem;
        }
      `}</style>

      <h1>{searchTerm ? `Results for "${searchTerm}"` : "All Properties"}</h1>

      {/* 🔍 Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by address or type..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <select value={bedrooms} onChange={(e) => setBedrooms(e.target.value)}>
          <option value="">Bedrooms</option>
          <option value="1">1 BHK</option>
          <option value="2">2 BHK</option>
          <option value="3">3 BHK</option>
          <option value="4">4 BHK</option>
          <option value="5">5+</option>
        </select>
        <select value={bathrooms} onChange={(e) => setBathrooms(e.target.value)}>
          <option value="">Bathrooms</option>
          <option value="1">1 Bath</option>
          <option value="2">2 Bath</option>
          <option value="3">3 Bath</option>
          <option value="4">4 Bath</option>
          <option value="5">5+</option>
        </select>
        <button onClick={clearFilters}>Clear</button>
      </div>

      <div className="container">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <PCard key={property.id} property={property} />
          ))
        ) : (
          <div className="no-results">
            <p>No properties found matching your criteria.</p>
          </div>
        )}
      </div>
    </>
  );
};
