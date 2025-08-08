import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { debounce } from "lodash";
import { FaSearch } from "react-icons/fa";

export const Hero = () => {
  const navigate = useNavigate();

  // State for filters
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("buy");
  const [propertyType, setPropertyType] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");

  // Debounced search handler (optional for performance)
  const debouncedSetSearchTerm = debounce((value) => {
    setSearchTerm(value);
  }, 500);

  // Handle Apply Filters
  const handleSearch = () => {
    const params = new URLSearchParams();

    if (searchTerm) params.append("search", searchTerm);
    if (filterType) params.append("type", filterType);
    if (propertyType) params.append("propertyType", propertyType);
    if (priceRange) params.append("priceRange", priceRange);
    if (bedrooms) params.append("bedrooms", bedrooms);
    if (bathrooms) params.append("bathrooms", bathrooms);

    navigate(`/Cards?${params.toString()}`);
  };

  // Handle Reset Filters
  const resetFilters = () => {
    setSearchTerm("");
    setFilterType("buy");
    setPropertyType("");
    setPriceRange("");
    setBedrooms("");
    setBathrooms("");
  };

  return (
    <section
      className="hero-section"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #f8f9fa, #e9ecef)",
        padding: "2rem",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h1>Find Your Dream Property</h1>
        <p>Search from thousands of listings for Buy, Rent, or Commercial</p>
      </div>

      {/* Filter Tabs */}
      <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
        {["buy", "rent", "commercial"].map((type) => (
          <button
            key={type}
            onClick={() => setFilterType(type)}
            style={{
              padding: "0.5rem 1rem",
              borderRadius: "5px",
              background: filterType === type ? "#007bff" : "#dee2e6",
              color: filterType === type ? "#fff" : "#000",
              border: "none",
              cursor: "pointer",
            }}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {/* Search Input */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "1.5rem",
          gap: "0.5rem",
        }}
      >
        <input
          type="text"
          placeholder="Search by location or keyword..."
          value={searchTerm}
          onChange={(e) => debouncedSetSearchTerm(e.target.value)}
          style={{
            padding: "0.5rem",
            width: "300px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            padding: "0.5rem 1rem",
            background: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          <FaSearch />
        </button>
      </div>

      {/* Advanced Filters */}
      <div
        style={{
          marginTop: "2rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "1rem",
          maxWidth: "800px",
          marginInline: "auto",
        }}
      >
        {/* Property Type */}
        <select
          value={propertyType}
          onChange={(e) => setPropertyType(e.target.value)}
        >
          <option value="">Property Type</option>
          <option value="house">House</option>
          <option value="apartment">Apartment</option>
          <option value="land">Land</option>
          <option value="villa">Villa</option>
        </select>

        {/* Price Range */}
        <select
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
        >
          <option value="">Price Range</option>
          <option value="0-500000">Below ₹5 Lakh</option>
          <option value="500000-1000000">₹5 Lakh - ₹10 Lakh</option>
          <option value="1000000-5000000">₹10 Lakh - ₹50 Lakh</option>
          <option value="5000000-10000000">₹50 Lakh - ₹1 Cr</option>
          <option value="10000000+">Above ₹1 Cr</option>
        </select>

        {/* Bedrooms */}
        <select
          value={bedrooms}
          onChange={(e) => setBedrooms(e.target.value)}
        >
          <option value="">Bedrooms</option>
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num}+
            </option>
          ))}
        </select>

        {/* Bathrooms */}
        <select
          value={bathrooms}
          onChange={(e) => setBathrooms(e.target.value)}
        >
          <option value="">Bathrooms</option>
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num}+
            </option>
          ))}
        </select>
      </div>

      {/* Apply / Reset Buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          marginTop: "1.5rem",
        }}
      >
        <button
          onClick={handleSearch}
          style={{
            padding: "0.5rem 1rem",
            background: "#28a745",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Apply Filters
        </button>
        <button
          onClick={resetFilters}
          style={{
            padding: "0.5rem 1rem",
            background: "#6c757d",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Reset
        </button>
      </div>
    </section>
  );
};
