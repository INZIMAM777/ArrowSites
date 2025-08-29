import { useState } from "react";

export const SearchAndFilter = ({ filters, setFilters, handleSearch }) => {
  const [searchInput, setSearchInput] = useState(filters.search || "");

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilters((prev) => ({
      ...prev,
      search: searchInput,
    }));
    handleSearch(searchInput);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      {/* Search Input */}
      <div style={styles.filterGroup}>
        <input
          type="text"
          placeholder="Search by location, keyword..."
          value={searchInput}
          onChange={handleChange}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Search</button>
      </div>

      {/* Transaction Type */}
      <div style={styles.filterGroup}>
        <label htmlFor="transactionType" style={styles.label}>Transaction</label>
        <select
          id="transactionType"
          style={{ ...styles.input, ...styles.select }}
          name="transactionType"
          value={filters.transactionType}
          onChange={handleFilterChange}
        >
          <option value="">All</option>
          <option value="buy">Buy</option>
          <option value="rent">Rent</option>
        </select>
      </div>

      {/* Property Category */}
      <div style={styles.filterGroup}>
        <label htmlFor="propertyCategory" style={styles.label}>Category</label>
        <select
          id="propertyCategory"
          style={{ ...styles.input, ...styles.select }}
          name="propertyCategory"
          value={filters.propertyCategory}
          onChange={handleFilterChange}
        >
          <option value="">All Categories</option>
          <option value="Residential">Residential</option>
          <option value="Commercial">Commercial</option>
          <option value="Industrial">Industrial</option>
          <option value="Warehouse">Warehouse</option>
          <option value="Farm House">Farm House</option>
        </select>
      </div>

      {/* Property Type */}
      <div style={styles.filterGroup}>
        <label htmlFor="propertyType" style={styles.label}>Property Type</label>
        <select
          id="propertyType"
          style={{ ...styles.input, ...styles.select }}
          name="propertyType"
          value={filters.propertyType}
          onChange={handleFilterChange}
        >
          <option value="">All Types</option>

          <optgroup label="Residential">
            <option value="Residential Flat">Residential Flat</option>
            <option value="Residential Floors">Residential Floors</option>
            <option value="Residential Plot">Residential Plot</option>
            <option value="Residential Land">Residential Land</option>
            <option value="Residential Villa">Residential Villa</option>
            <option value="Residential Penthouse">Residential Penthouse</option>
            <option value="Residential Service Apartment">Residential Service Apartment</option>
          </optgroup>

          <optgroup label="Commercial">
            <option value="Commercial Shop">Commercial Shop</option>
            <option value="Commercial Office Space">Commercial Office Space</option>
            <option value="Commercial Guest House">Commercial Guest House</option>
            <option value="Commercial Service Apartment">Commercial Service Apartment</option>
          </optgroup>

          <optgroup label="Industrial">
            <option value="Industrial Factory">Industrial Factory</option>
            <option value="Industrial Plot">Industrial Plot</option>
            <option value="Industrial Land for Warehouse/Industry">Industrial Land for Warehouse/Industry</option>
          </optgroup>

          <optgroup label="Warehouse">
            <option value="Warehouse – Commercial">Warehouse – Commercial</option>
            <option value="Warehouse – Agro">Warehouse – Agro</option>
            <option value="Warehouse – Transport & Logistic">Warehouse – Transport & Logistic</option>
            <option value="Warehouse Land / Industrial Land">Warehouse Land / Industrial Land</option>
          </optgroup>

          <optgroup label="Farm House">
            <option value="Farm House – Ready">Farm House – Ready</option>
            <option value="Farm House Land">Farm House Land</option>
          </optgroup>
        </select>
      </div>
    </form>
  );
};

const styles = {
  form: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
    marginBottom: "1.5rem",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  filterGroup: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: "0.25rem",
    fontWeight: "500",
    fontSize: "0.9rem",
    color: "#333",
  },
  input: {
    padding: "0.5rem",
    border: "1px solid #ccc",
    borderRadius: "6px",
    fontSize: "0.9rem",
  },
  select: {
    cursor: "pointer",
  },
  button: {
    marginTop: "0.5rem",
    padding: "0.5rem 1rem",
    border: "none",
    borderRadius: "6px",
    backgroundColor: "#007bff",
    color: "#fff",
    cursor: "pointer",
    fontSize: "0.9rem",
  },
};
