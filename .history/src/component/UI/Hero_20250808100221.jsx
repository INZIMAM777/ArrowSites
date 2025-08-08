import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("buy");
  const [selectedPropertyType, setSelectedPropertyType] = useState("");

  const handleSearch = () => {
    const params = new URLSearchParams();

    if (searchTerm.trim()) params.set("search", searchTerm);
    if (activeFilter) params.set("filter", activeFilter);
    if (selectedPropertyType) params.set("type", selectedPropertyType);

    navigate(`/Cards?${params.toString()}`);
  };

  return (
    <section className="hero">
      <div>
        <h1>Find Your Dream Property</h1>

        {/* Search */}
        <input
          type="text"
          placeholder="Search location..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Buy/Rent Toggle */}
        <div>
          <button
            className={activeFilter === "buy" ? "active" : ""}
            onClick={() => setActiveFilter("buy")}
          >
            Buy
          </button>
          <button
            className={activeFilter === "rent" ? "active" : ""}
            onClick={() => setActiveFilter("rent")}
          >
            Rent
          </button>
        </div>

        {/* Property Type Dropdown */}
        <select
          value={selectedPropertyType}
          onChange={(e) => setSelectedPropertyType(e.target.value)}
        >
          <option value="">Any Type</option>
          <option value="apartment">Apartment</option>
          <option value="villa">Villa</option>
          <option value="plot">Plot</option>
        </select>

        {/* Search Button */}
        <button onClick={handleSearch}>Search</button>
      </div>
    </section>
  );
};
