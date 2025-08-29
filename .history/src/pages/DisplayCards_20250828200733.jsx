import { useEffect, useState } from "react";
import { useFirebase } from "../context/FirebaseContext";
import { PCard } from "../component/UI/PCard";
import { useSearchParams } from "react-router-dom";

export const DisplayCards = () => {
  const { getLists } = useFirebase(); // ✅ use getLists instead of getAllProperties
  const [searchParams, setSearchParams] = useSearchParams();

  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);

  const [searchInput, setSearchInput] = useState(
    searchParams.get("search") || ""
  );

  const category = searchParams.get("category") || "";
  const subCategory = searchParams.get("subCategory") || "";

  // ✅ Fetch data from context
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getLists();
        console.log("Fetched properties:", data);
        setProperties(data);
      } catch (err) {
        console.error("Error fetching properties:", err);
      }
    };
    fetchData();
  }, [getLists]);

  // ✅ Apply filters whenever data or query params change
  useEffect(() => {
    let filtered = [...properties];

    if (searchInput) {
      filtered = filtered.filter(
        (p) =>
          p.title?.toLowerCase().includes(searchInput.toLowerCase()) ||
          p.address?.toLowerCase().includes(searchInput.toLowerCase())
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

    console.log("Filtered properties:", filtered);
    setFilteredProperties(filtered);
  }, [searchInput, category, subCategory, properties]);

  // ✅ Search button handler
  const handleSearch = () => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      if (searchInput) {
        newParams.set("search", searchInput);
      } else {
        newParams.delete("search");
      }
      return newParams;
    });
  };

  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by title or address"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="cards-container">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <PCard key={property.id} property={property} />
          ))
        ) : (
          <p className="no-results">No properties found.</p>
        )}
      </div>

      <style>{`
        .search-bar {
          display: flex;
          justify-content: center;
          margin: 20px;
          gap: 10px;
        }
        .search-bar input {
          width: 300px;
          padding: 8px 12px;
          border: 1px solid #ccc;
          border-radius: 6px;
          font-size: 14px;
        }
        .search-bar button {
          padding: 8px 16px;
          background: #007bff;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }
        .search-bar button:hover {
          background: #0056b3;
        }
        .cards-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px;
          padding: 20px;
        }
        .no-results {
          text-align: center;
          margin-top: 50px;
          font-size: 18px;
          color: #888;
        }
      `}</style>
    </>
  );
};
