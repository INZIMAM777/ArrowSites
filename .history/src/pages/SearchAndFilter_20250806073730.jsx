import { useState } from "react";
import PropTypes from 'prop-types';

export const SearchAndFilter = ({
  onSearch,
  onFilter,
  showFilters = true,
  initialSearch = ""
}) => {
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [filters, setFilters] = useState({
    propertyType: "",
    minPrice: "",
    maxPrice: "",
    bedrooms: "",
    bathrooms: "",
  });

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm.trim());
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleApplyFilters = (e) => {
    e.preventDefault();
    // Validate price range
    if (filters.minPrice && filters.maxPrice && Number(filters.minPrice) > Number(filters.maxPrice)) {
      alert("Minimum price cannot be greater than maximum price");
      return;
    }
    onFilter(filters);
  };

  const handleResetFilters = () => {
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
    <div className="search-and-filter bg-white rounded-lg shadow-md p-6">
      {/* Search Section */}
      <div className="search-container mb-6">
        <form onSubmit={handleSearchSubmit} className="flex items-center gap-2">
          <div className="relative flex-grow">
            <input
              type="text"
              className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              placeholder="Search by location, address, ZIP code..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search properties"
            />
            <button 
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              aria-label="Submit search"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>
          <button 
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center gap-2"
          >
            Search
          </button>
        </form>
      </div>

      {/* Filters Section - Conditionally Rendered */}
      {showFilters && (
        <div className="filters-container border-t pt-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Refine Your Search</h3>
          <form onSubmit={handleApplyFilters}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {/* Property Type Filter */}
              <div className="filter-group">
                <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
                <select
                  id="propertyType"
                  className="w-full py-2 px-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none"
                  name="propertyType"
                  value={filters.propertyType}
                  onChange={handleFilterChange}
                >
                  <option value="">All Types</option>
                  <option value="house">House</option>
                  <option value="apartment">Apartment</option>
                  <option value="condo">Condo</option>
                  <option value="townhouse">Townhouse</option>
                  <option value="land">Land</option>
                </select>
              </div>

              {/* Price Range Filter */}
              <div className="filter-group">
                <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    className="w-full py-2 px-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none"
                    name="minPrice"
                    placeholder="Min"
                    value={filters.minPrice}
                    onChange={handleFilterChange}
                    min="0"
                    step="10000"
                  />
                  <span className="text-gray-500">to</span>
                  <input
                    type="number"
                    className="w-full py-2 px-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none"
                    name="maxPrice"
                    placeholder="Max"
                    value={filters.maxPrice}
                    onChange={handleFilterChange}
                    min="0"
                    step="10000"
                  />
                </div>
              </div>

              {/* Bedrooms Filter */}
              <div className="filter-group">
                <label htmlFor="bedrooms" className="block text-sm font-medium text-gray-700 mb-1">Bedrooms</label>
                <select
                  id="bedrooms"
                  className="w-full py-2 px-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none"
                  name="bedrooms"
                  value={filters.bedrooms}
                  onChange={handleFilterChange}
                >
                  <option value="">Any</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                  <option value="5">5+</option>
                </select>
              </div>

              {/* Bathrooms Filter */}
              <div className="filter-group">
                <label htmlFor="bathrooms" className="block text-sm font-medium text-gray-700 mb-1">Bathrooms</label>
                <select
                  id="bathrooms"
                  className="w-full py-2 px-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none"
                  name="bathrooms"
                  value={filters.bathrooms}
                  onChange={handleFilterChange}
                >
                  <option value="">Any</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                </select>
              </div>
            </div>

            {/* Filter Buttons */}
            <div className="flex items-center gap-3">
              <button 
                type="submit" 
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md font-medium transition-colors"
              >
                Apply Filters
              </button>
              <button
                type="button"
                className="text-gray-600 hover:text-gray-800 py-2 px-4 rounded-md font-medium transition-colors"
                onClick={handleResetFilters}
              >
                Reset All
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

SearchAndFilter.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onFilter: PropTypes.func.isRequired,
  showFilters: PropTypes.bool,
  initialSearch: PropTypes.string
};

SearchAndFilter.defaultProps = {
  showFilters: true,
  initialSearch: ""
};