import { useState, useEffect } from "react";
import PropTypes from "prop-types";

export const SearchAndFilter = ({
  onSearch,
  onFilter,
  showFilters = true,
  initialSearch = "",
  initialFilters = {},
  debounceDelay = 300,
}) => {
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [filters, setFilters] = useState({
    propertyType: initialFilters.propertyType || "",
    propertyCategory: initialFilters.propertyCategory || "",
    minPrice: initialFilters.minPrice || "",
    maxPrice: initialFilters.maxPrice || "",
    bedrooms: initialFilters.bedrooms || "",
    bathrooms: initialFilters.bathrooms || "",
    area_sqft: initialFilters.area_sqft || "",
    furnishing: initialFilters.furnishing || "",
    transaction_type: initialFilters.transaction_type || "",
    year_built: initialFilters.year_built || "",
  });

  const [isFocused, setIsFocused] = useState(false);
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [isFilterBarOpen, setIsFilterBarOpen] = useState(showFilters); // NEW

  // Update search and filters if props change
  useEffect(() => setSearchTerm(initialSearch), [initialSearch]);
  useEffect(() => {
    setFilters({
      propertyType: initialFilters.propertyType || "",
      propertyCategory: initialFilters.propertyCategory || "",
      minPrice: initialFilters.minPrice || "",
      maxPrice: initialFilters.maxPrice || "",
      bedrooms: initialFilters.bedrooms || "",
      bathrooms: initialFilters.bathrooms || "",
      area_sqft: initialFilters.area_sqft || "",
      furnishing: initialFilters.furnishing || "",
      transaction_type: initialFilters.transaction_type || "",
      year_built: initialFilters.year_built || "",
    });
  }, [initialFilters]);

  // Debounce search
  useEffect(() => {
    const handler = setTimeout(() => {
      if (searchTerm.trim() !== "" || initialSearch !== searchTerm) {
        onSearch(searchTerm.trim());
      }
    }, debounceDelay);

    return () => clearTimeout(handler);
  }, [searchTerm, debounceDelay, onSearch, initialSearch]);

  const handleSearchChange = (e) => setSearchTerm(e.target.value);
  const handleManualSearch = () => onSearch(searchTerm.trim());

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleApplyFilters = (e) => {
    e.preventDefault();
    if (
      filters.minPrice &&
      filters.maxPrice &&
      Number(filters.minPrice) > Number(filters.maxPrice)
    ) {
      alert("Minimum price cannot be greater than maximum price");
      return;
    }
    onFilter(filters);
  };

  const handleResetFilters = () => {
    const resetFilters = {
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
    };
    setFilters(resetFilters);
    onFilter(resetFilters);
    setSearchTerm("");
    onSearch("");
  };

  return (
    <div
      style={{
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        padding: "16px",
        maxWidth: "1200px",
        margin: "0 auto",
        transition: "all 0.3s ease",
      }}
    >
      {/* Search Section */}
      <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
        <div style={{ flex: 1, position: "relative" }}>
          <input
            type="text"
            style={{
              width: "100%",
              padding: "12px 16px",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              backgroundColor: "#f9fafb",
            }}
            placeholder="Search by location, address, ZIP code..."
            value={searchTerm}
            onChange={handleSearchChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </div>
        <button
          type="button"
          style={{
            padding: "12px 20px",
            borderRadius: "8px",
            backgroundColor: "#3b82f6",
            color: "#fff",
            border: "none",
            fontWeight: 600,
            cursor: "pointer",
          }}
          onClick={handleManualSearch}
        >
          Search
        </button>
      </div>

      {/* Toggle Filter Bar Button */}
      <button
        type="button"
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "8px",
          backgroundColor: "#f3f4f6",
          color: "#111827",
          fontWeight: "500",
          border: "1px solid #d1d5db",
          cursor: "pointer",
          marginBottom: "12px",
        }}
        onClick={() => setIsFilterBarOpen(!isFilterBarOpen)}
      >
        {isFilterBarOpen ? "Hide Filters ▲" : "Show Filters ▼"}
      </button>

      {/* Filters Section */}
      {isFilterBarOpen && (
        <>
          <h3 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "12px" }}>
            Refine Your Search
          </h3>
          <form onSubmit={handleApplyFilters}>
            {/* Example filter */}
            <div style={{ marginBottom: "12px" }}>
              <label>Transaction Type</label>
              <select
                name="transaction_type"
                value={filters.transaction_type}
                onChange={handleFilterChange}
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "1px solid #d1d5db",
                  borderRadius: "6px",
                }}
              >
                <option value="">Any</option>
                <option value="Sale">Sale</option>
                <option value="Rent">Rent</option>
                <option value="Lease">Lease</option>
              </select>
            </div>

            {/* Filter Buttons */}
            <div style={{ display: "flex", gap: "10px", marginTop: "16px" }}>
              <button
                type="submit"
                style={{
                  padding: "10px 16px",
                  borderRadius: "6px",
                  backgroundColor: "#3b82f6",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Apply Filters
              </button>
              <button
                type="button"
                onClick={handleResetFilters}
                style={{
                  padding: "10px 16px",
                  borderRadius: "6px",
                  backgroundColor: "#f3f4f6",
                  border: "1px solid #d1d5db",
                  cursor: "pointer",
                }}
              >
                Reset All
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

SearchAndFilter.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onFilter: PropTypes.func.isRequired,
  showFilters: PropTypes.bool,
  initialSearch: PropTypes.string,
  initialFilters: PropTypes.object,
  debounceDelay: PropTypes.number,
};
