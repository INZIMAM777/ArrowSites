import { useState } from "react";

export const SearchAndFilter = ({ onSearch, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    propertyType: "",
    minPrice: "",
    maxPrice: "",
    bedrooms: "",
    bathrooms: "",
  });

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const applyFilters = (e) => {
    e.preventDefault();
    onFilter(filters);
  };

  const resetFilters = () => {
    setFilters({
      propertyType: "",
      minPrice: "",
      maxPrice: "",
      bedrooms: "",
      bathrooms: "",
    });
    onFilter({});
  };

  return (
    <>
    <style>
      {`
      /* Search and Filter Styles */
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

.no-results {
  text-align: center;
  width: 100%;
  padding: 2rem;
}

.no-results button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
      
      `}
    </style>
    <div className="search-filter-container">
      {/* Search Form */}
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search by location, address, etc."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {/* Filter Form */}
      <div className="filter-section">
        <h3>Filters</h3>
        <form onSubmit={applyFilters}>
          <div className="filter-group">
            <label>Property Type</label>
            <select
              name="propertyType"
              value={filters.propertyType}
              onChange={handleFilterChange}
            >
              <option value="">All Types</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="condo">Condo</option>
              <option value="land">Land</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Price Range</label>
            <div className="price-range">
              <input
                type="number"
                name="minPrice"
                placeholder="Min"
                value={filters.minPrice}
                onChange={handleFilterChange}
              />
              <span>-</span>
              <input
                type="number"
                name="maxPrice"
                placeholder="Max"
                value={filters.maxPrice}
                onChange={handleFilterChange}
              />
            </div>
          </div>

          <div className="filter-group">
            <label>Bedrooms</label>
            <select
              name="bedrooms"
              value={filters.bedrooms}
              onChange={handleFilterChange}
            >
              <option value="">Any</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Bathrooms</label>
            <select
              name="bathrooms"
              value={filters.bathrooms}
              onChange={handleFilterChange}
            >
              <option value="">Any</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
            </select>
          </div>

          <div className="filter-buttons">
            <button type="submit">Apply Filters</button>
            <button type="button" onClick={resetFilters}>
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};