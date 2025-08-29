import { useState } from "react";

export const SearchAndFilter = ({ onSearch, onFilter, showFilters, initialSearch = "", filters }) => {
    const [searchTerm, setSearchTerm] = useState(initialSearch);
    const [isFiltersOpen, setIsFiltersOpen] = useState(false);
    const [localFilters, setLocalFilters] = useState(filters || {
        propertyType: "",
        minPrice: "",
        maxPrice: "",
        bedrooms: "",
        bathrooms: "",
        propertySubType: "",
        purpose: "",
    });

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        onSearch(value);
    };

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        const updatedFilters = {
            ...localFilters,
            [name]: value
        };
        setLocalFilters(updatedFilters);
        onFilter(updatedFilters);
    };

    const toggleFilters = () => {
        setIsFiltersOpen(!isFiltersOpen);
    };

    return (
        <div className="search-filter-container">
            <style>{`
                .search-filter-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 1rem;
                }
                
                .search-bar {
                    display: flex;
                    margin-bottom: 1rem;
                }
                
                .search-input {
                    flex: 1;
                    padding: 0.75rem;
                    border: 1px solid #ddd;
                    border-radius: 4px 0 0 4px;
                    font-size: 1rem;
                }
                
                .search-button {
                    padding: 0.75rem 1.5rem;
                    background-color: #3b82f6;
                    color: white;
                    border: none;
                    border-radius: 0 4px 4px 0;
                    cursor: pointer;
                }
                
                .filter-toggle {
                    display: block;
                    width: 100%;
                    padding: 0.5rem;
                    margin-bottom: 1rem;
                    background-color: #f8f9fa;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                    cursor: pointer;
                    text-align: center;
                }
                
                .filters-container {
                    display: ${isFiltersOpen ? 'grid' : 'none'};
                    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
                    gap: 1rem;
                    padding: 1rem;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                    margin-bottom: 1rem;
                    background-color: #f8f9fa;
                }
                
                .filter-group {
                    display: flex;
                    flex-direction: column;
                }
                
                .filter-label {
                    margin-bottom: 0.5rem;
                    font-weight: bold;
                }
                
                .filter-select, .filter-input {
                    padding: 0.5rem;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                }
            `}</style>
            
            <div className="search-bar">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search properties by location, address, etc."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <button className="search-button">Search</button>
            </div>
            
            {showFilters && (
                <>
                    <button className="filter-toggle" onClick={toggleFilters}>
                        {isFiltersOpen ? 'Hide Filters' : 'Show Filters'}
                    </button>
                    
                    <div className="filters-container">
                        {/* Property Type (Main Category) */}
                        <div className="filter-group">
                            <label className="filter-label">Property Type</label>
                            <select 
                                className="filter-select"
                                name="propertyType"
                                value={localFilters.propertyType}
                                onChange={handleFilterChange}
                            >
                                <option value="">All Types</option>
                                <option value="Residential">Residential</option>
                                <option value="Industrial">Industrial</option>
                                <option value="Commercial">Commercial</option>
                                <option value="Farm Houses">Farm Houses</option>
                            </select>
                        </div>
                        
                        {/* Property Sub-Type */}
                        <div className="filter-group">
                            <label className="filter-label">Property Sub-Type</label>
                            <select 
                                className="filter-select"
                                name="propertySubType"
                                value={localFilters.propertySubType}
                                onChange={handleFilterChange}
                            >
                                <option value="">All Sub-Types</option>
                                <option value="House">House</option>
                                <option value="Apartment">Apartment</option>
                                <option value="Factory">Factory</option>
                                <option value="Warehouse">Warehouse</option>
                                <option value="Shop">Shop</option>
                                <option value="Office">Office</option>
                                <option value="Guest House">Guest House</option>
                                <option value="Service Apartment">Service Apartment</option>
                                <option value="Farm Land">Farm Land</option>
                                <option value="Ready Farm House">Ready Farm House</option>
                            </select>
                        </div>
                        
                        {/* Purpose (Buy/Rent) */}
                        <div className="filter-group">
                            <label className="filter-label">Purpose</label>
                            <select 
                                className="filter-select"
                                name="purpose"
                                value={localFilters.purpose}
                                onChange={handleFilterChange}
                            >
                                <option value="">All Purposes</option>
                                <option value="Buy">Buy</option>
                                <option value="Rent">Rent</option>
                            </select>
                        </div>
                        
                        {/* Price Range */}
                        <div className="filter-group">
                            <label className="filter-label">Min Price</label>
                            <input
                                type="number"
                                className="filter-input"
                                name="minPrice"
                                placeholder="Min Price"
                                value={localFilters.minPrice}
                                onChange={handleFilterChange}
                            />
                        </div>
                        
                        <div className="filter-group">
                            <label className="filter-label">Max Price</label>
                            <input
                                type="number"
                                className="filter-input"
                                name="maxPrice"
                                placeholder="Max Price"
                                value={localFilters.maxPrice}
                                onChange={handleFilterChange}
                            />
                        </div>
                        
                        {/* Bedrooms */}
                        <div className="filter-group">
                            <label className="filter-label">Bedrooms</label>
                            <select 
                                className="filter-select"
                                name="bedrooms"
                                value={localFilters.bedrooms}
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
                        
                        {/* Bathrooms */}
                        <div className="filter-group">
                            <label className="filter-label">Bathrooms</label>
                            <select 
                                className="filter-select"
                                name="bathrooms"
                                value={localFilters.bathrooms}
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
                </>
            )}
        </div>
    );
};