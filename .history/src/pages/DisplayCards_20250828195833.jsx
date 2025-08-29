import { useEffect, useState } from "react";
import { useFirebase } from "../context/FirebaseContext";
import { PCard } from "../component/UI/PCard";
import { useSearchParams } from "react-router-dom";
import { filterOptions } from "../config/filterOptions";

export const DisplayCards = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { getAllProperties } = useFirebase();

  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);

  // Controlled input for search
  const [searchInput, setSearchInput] = useState(searchParams.get("search") || "");

  // Params from URL
  const search = searchParams.get("search") || "";
  const category = searchParams.get("category") || "";
  const subCategory = searchParams.get("subCategory") || "";

  // Fetch all properties once
  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllProperties();
      setProperties(data);
    };
    fetchData();
  }, []);

  // Filter whenever params or properties change
  useEffect(() => {
    let filtered = [...properties];

    if (search) {
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(search.toLowerCase()) ||
          p.address.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category) {
      filtered = filtered.filter(
        (p) => p.category?.toLowerCase() === category.toLowerCase()
      );
    }

    if (subCategory) {
      filtered = filtered.filter(
        (p) => p.subCategory?.toLowerCase() === subCategory.toLowerCase()
      );
    }

    setFilteredProperties(filtered);
  }, [search, category, subCategory, properties]);

  // Handle search button
  const handleSearch = () => {
    const params = {};
    if (searchInput) params.search = searchInput;
    if (category) params.category = category;
    if (subCategory) params.subCategory = subCategory;
    setSearchParams(params);
  };

  return (
    <div className="display-container">
      <h2 className="page-title">Explore Properties</h2>

      {/* 🔍 Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by title or address..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* 🏠 Category Filters */}
      <div className="filter-row">
        {Object.keys(filterOptions).map((cat) => (
          <button
            key={cat}
            onClick={() => setSearchParams({ category: cat })}
            className={category === cat ? "active" : ""}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 📂 Subcategory Filters */}
      {category && (
        <div className="filter-row">
          {filterOptions[category].map((sub) => (
            <button
              key={sub}
              onClick={() => setSearchParams({ category, subCategory: sub })}
              className={subCategory === sub ? "active" : ""}
            >
              {sub}
            </button>
          ))}
        </div>
      )}

      {/* 🎯 Applied Filters */}
      <div className="applied-filters">
        {category && <span>Category: {category}</span>}
        {subCategory && <span>Sub: {subCategory}</span>}
        {search && <span>Search: {search}</span>}
      </div>

      {/* 🏡 Property Cards */}
      <div className="cards-grid">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <PCard key={property.id} property={property} />
          ))
        ) : (
          <p className="no-result">No properties found.</p>
        )}
      </div>

      {/* Local Styles */}
      <style>{`
        .display-container {
          padding: 20px;
        }
        .page-title {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 20px;
        }
        .search-bar {
          display: flex;
          margin-bottom: 20px;
        }
        .search-bar input {
          flex: 1;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 4px 0 0 4px;
          outline: none;
        }
        .search-bar button {
          padding: 10px 16px;
          background: #2563eb;
          color: white;
          border: none;
          border-radius: 0 4px 4px 0;
          cursor: pointer;
        }
        .search-bar button:hover {
          background: #1e40af;
        }
        .filter-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 15px;
        }
        .filter-row button {
          padding: 6px 12px;
          border: 1px solid #ccc;
          background: #f5f5f5;
          border-radius: 6px;
          cursor: pointer;
        }
        .filter-row button.active {
          background: #2563eb;
          color: white;
          border-color: #2563eb;
        }
        .applied-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 20px;
        }
        .applied-filters span {
          background: #e5e7eb;
          padding: 4px 8px;
          border-radius: 4px;
        }
        .cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 16px;
        }
        .no-result {
          color: #6b7280;
          font-style: italic;
        }
      `}</style>
    </div>
  );
};


// src/config/filterOptions.js
const filterOptions = {
  residential: ["Flat", "Floors", "Plots", "Land", "Villas", "Pent House", "Service Apartment"],
  industrial: ["Factory", "Plot", "Land for Industry", "Land for Warehouse"],
  warehouse: ["Commercial", "Agro", "Transport", "Land for Warehouse/Industrial"],
  commercial: ["Shop", "Office Space", "Guest House", "Service Apartment"],
  farmhouse: ["Ready Farm House", "Land for Farm House"],
};
